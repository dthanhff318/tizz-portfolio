'use client';

import * as React from 'react';
import { Accordion as AccordionPrimitive } from '@base-ui-components/react/accordion';
import {
  AnimatePresence,
  motion,
  type HTMLMotionProps,
  type Transition,
} from 'motion/react';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

type AccordionItemContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const AccordionItemContext = React.createContext<
  AccordionItemContextType | undefined
>(undefined);

const useAccordionItem = (): AccordionItemContextType => {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error('useAccordionItem must be used within an AccordionItem');
  }
  return context;
};

type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root>;

function Accordion(props: AccordionProps) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

type AccordionItemProps = React.ComponentProps<
  typeof AccordionPrimitive.Item
> & {
  children: React.ReactNode;
};

function AccordionItem({ className, children, ...props }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AccordionItemContext.Provider value={{ isOpen, setIsOpen }}>
      <AccordionPrimitive.Item
        data-slot="accordion-item"
        className={cn('border-b', className)}
        {...props}
      >
        {children}
      </AccordionPrimitive.Item>
    </AccordionItemContext.Provider>
  );
}

type AccordionTriggerProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
> & {
  transition?: Transition;
  chevron?: boolean;
};

function AccordionTrigger({
  ref,
  className,
  children,
  transition = { type: 'spring', stiffness: 150, damping: 22 },
  chevron = true,
  ...props
}: AccordionTriggerProps) {
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  React.useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement);
  const { isOpen, setIsOpen } = useAccordionItem();

  React.useEffect(() => {
    const node = triggerRef.current;
    if (!node) return;
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.attributeName === 'data-panel-open') {
          const currentState = node.getAttribute('data-panel-open');
          setIsOpen(currentState === '');
        }
      });
    });
    observer.observe(node, {
      attributes: true,
      attributeFilter: ['data-panel-open'],
    });
    const initialState = node.getAttribute('data-panel-open');
    setIsOpen(initialState === '');
    return () => observer.disconnect();
  }, [setIsOpen]);

  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className="flex">
      <AccordionPrimitive.Trigger
        ref={triggerRef}
        data-slot="accordion-trigger"
        className={cn(
          'flex flex-1 text-start items-center justify-between py-4 font-medium hover:underline',
          className,
        )}
        {...props}
      >
        {children}

        {chevron && (
          <motion.div
            data-slot="accordion-trigger-chevron"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={transition}
          >
            <ChevronDown className="size-5 shrink-0" />
          </motion.div>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

type AccordionPanelProps = React.ComponentProps<
  typeof AccordionPrimitive.Panel
> & {
  motionProps?: HTMLMotionProps<'div'>;
  transition?: Transition;
};

function AccordionPanel({
  className,
  children,
  transition = { type: 'spring', stiffness: 150, damping: 22 },
  motionProps,
  ...props
}: AccordionPanelProps) {
  const { isOpen } = useAccordionItem();

  return (
    <AnimatePresence>
      {isOpen && (
        <AccordionPrimitive.Panel
          hidden={false}
          keepMounted
          render={
            <motion.div
              key="accordion-panel"
              data-slot="accordion-panel"
              initial={{ height: 0, opacity: 0, '--mask-stop': '0%' }}
              animate={{ height: 'auto', opacity: 1, '--mask-stop': '100%' }}
              exit={{ height: 0, opacity: 0, '--mask-stop': '0%' }}
              transition={transition}
              style={{
                maskImage:
                  'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
                WebkitMaskImage:
                  'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
              }}
              className="overflow-hidden"
              {...motionProps}
            >
              <div className={cn('pb-4 pt-0 text-sm', className)}>
                {children}
              </div>
            </motion.div>
          }
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
  useAccordionItem,
  type AccordionItemContextType,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionPanelProps,
};
