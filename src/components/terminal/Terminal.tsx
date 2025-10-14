import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

interface Command {
	input: string;
	output: string | JSX.Element;
}

const Terminal: React.FC = () => {
	const [commands, setCommands] = useState<Command[]>([
		{
			input: "",
			output: "Welcome to t1zz's Terminal! Type 'help' for available commands.",
		},
	]);
	const [currentCommand, setCurrentCommand] = useState("");
	const terminalRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const availableCommands = {
		help: () => `Available commands:
  • t1zz fb - Get my Facebook link
  • clear           - Clear terminal`,
		"t1zz fb": () => (
			<span>
				Facebook:{" "}
				<a
					href="https://www.facebook.com/tizz3182"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#90e0ef] hover:underline"
				>
					https://www.facebook.com/tizz3182
				</a>
			</span>
		),
		clear: () => {
			setCommands([]);
			return null;
		},
	};

	const executeCommand = (input: string) => {
		const trimmedInput = input.trim().toLowerCase();

		let output: string | JSX.Element = "";

		if (trimmedInput in availableCommands) {
			const result =
				availableCommands[trimmedInput as keyof typeof availableCommands]();
			if (result !== null) {
				output = result;
			}
		} else if (trimmedInput === "") {
			output = "";
		} else {
			output = `Command not found: ${trimmedInput}. Type 'help' for available commands.`;
		}

		if (trimmedInput !== "clear") {
			setCommands((prev) => [...prev, { input, output }]);
		}
		setCurrentCommand("");
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			executeCommand(currentCommand);
		}
	};

	useEffect(() => {
		if (terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, [commands]);

	useEffect(() => {
		inputRef.current?.focus({ preventScroll: true });
	}, []);

	const handleTerminalClick = () => {
		inputRef.current?.focus();
	};

	return (
		<div className="bg-[#1a1a1c] border border-border-secondary rounded-lg overflow-hidden">
			<div className="bg-[#2a2a2d] px-3 py-2 flex items-center gap-2 border-b border-border-secondary">
				<TerminalIcon className="size-4 text-text-secondary" />
				<span className="text-xs text-text-secondary font-mono">
					check it out
				</span>
				<div className="flex gap-1.5 ml-auto">
					<div className="size-3 rounded-full bg-red-500 opacity-70"></div>
					<div className="size-3 rounded-full bg-yellow-500 opacity-70"></div>
					<div className="size-3 rounded-full bg-green-500 opacity-70"></div>
				</div>
			</div>

			<div
				ref={terminalRef}
				className="h-48 overflow-y-auto p-3 font-mono text-xs cursor-text bg-[#1a1a1c]"
				onClick={handleTerminalClick}
			>
				{commands.map((cmd, index) => (
					<div key={index} className="mb-2">
						{cmd.input && (
							<div className="flex items-center gap-2">
								<span className="text-[#7ec727]">➜</span>
								<span className="text-[#90e0ef]">~</span>
								<span className="text-text-primary">{cmd.input}</span>
							</div>
						)}
						{cmd.output && (
							<div className="text-text-secondary whitespace-pre-wrap ml-4 mt-1">
								{cmd.output}
							</div>
						)}
					</div>
				))}

				<div className="flex items-center gap-2">
					<span className="text-[#7ec727]">➜</span>
					<span className="text-[#90e0ef]">~</span>
					<input
						ref={inputRef}
						type="text"
						value={currentCommand}
						onChange={(e) => setCurrentCommand(e.target.value)}
						onKeyPress={handleKeyPress}
						className="flex-1 bg-transparent outline-none text-text-primary font-mono"
						placeholder="Type a command..."
						autoComplete="off"
						spellCheck={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Terminal;
