// vite.config.ts
import { TanStackRouterVite } from "file:///D:/ReactJS/vite-react-boilerplate/node_modules/.pnpm/@tanstack+router-plugin@1.47.0_vite@5.4.0_@types+node@22.2.0_less@4.2.0_terser@5.31.5__webpack@5.93.0_esbuild@0.21.5_/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
import react from "file:///D:/ReactJS/vite-react-boilerplate/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_@swc+helpers@0.5.12_vite@5.4.0_@types+node@22.2.0_less@4.2.0_terser@5.31.5_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "node:path";
import { normalizePath } from "file:///D:/ReactJS/vite-react-boilerplate/node_modules/.pnpm/vite@5.4.0_@types+node@22.2.0_less@4.2.0_terser@5.31.5/node_modules/vite/dist/node/index.js";
import { viteStaticCopy } from "file:///D:/ReactJS/vite-react-boilerplate/node_modules/.pnpm/vite-plugin-static-copy@1.0.6_vite@5.4.0_@types+node@22.2.0_less@4.2.0_terser@5.31.5_/node_modules/vite-plugin-static-copy/dist/index.js";
import { defineConfig } from "file:///D:/ReactJS/vite-react-boilerplate/node_modules/.pnpm/vitest@2.0.5_@types+node@22.2.0_jsdom@24.1.1_less@4.2.0_terser@5.31.5/node_modules/vitest/dist/config.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve("./src/assets/locales")),
          dest: normalizePath(path.resolve("./dist"))
        }
      ]
    })
  ],
  server: {
    host: true,
    strictPort: true
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    css: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxSZWFjdEpTXFxcXHZpdGUtcmVhY3QtYm9pbGVycGxhdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFJlYWN0SlNcXFxcdml0ZS1yZWFjdC1ib2lsZXJwbGF0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUmVhY3RKUy92aXRlLXJlYWN0LWJvaWxlcnBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVGFuU3RhY2tSb3V0ZXJWaXRlIH0gZnJvbSBcIkB0YW5zdGFjay9yb3V0ZXItcGx1Z2luL3ZpdGVcIlxyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZVBhdGggfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdGF0aWMtY29weVwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXN0L2NvbmZpZ1wiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuXHRwbHVnaW5zOiBbcmVhY3QoKSwgVGFuU3RhY2tSb3V0ZXJWaXRlKCksIFxyXG5cdFx0dml0ZVN0YXRpY0NvcHkoe1xyXG5cdFx0dGFyZ2V0czogW1xyXG5cdFx0ICB7XHJcblx0XHRcdHNyYzogbm9ybWFsaXplUGF0aChwYXRoLnJlc29sdmUoJy4vc3JjL2Fzc2V0cy9sb2NhbGVzJykpLFxyXG5cdFx0XHRkZXN0OiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZSgnLi9kaXN0JykpXHJcblx0XHQgIH1cclxuXHRcdF1cclxuXHQgIH0pXSxcclxuXHRzZXJ2ZXI6IHtcclxuXHRcdGhvc3Q6IHRydWUsXHJcblx0XHRzdHJpY3RQb3J0OiB0cnVlLFxyXG5cdH0sXHJcblx0dGVzdDoge1xyXG5cdFx0ZW52aXJvbm1lbnQ6IFwianNkb21cIixcclxuXHRcdHNldHVwRmlsZXM6IFtcIi4vdml0ZXN0LnNldHVwLnRzXCJdLFxyXG5cdFx0Y3NzOiB0cnVlLFxyXG5cdH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJSLFNBQVMsMEJBQTBCO0FBQzlULE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxzQkFBc0I7QUFDL0IsU0FBUyxvQkFBb0I7QUFHN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQUMsTUFBTTtBQUFBLElBQUcsbUJBQW1CO0FBQUEsSUFDckMsZUFBZTtBQUFBLE1BQ2YsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNELEtBQUssY0FBYyxLQUFLLFFBQVEsc0JBQXNCLENBQUM7QUFBQSxVQUN2RCxNQUFNLGNBQWMsS0FBSyxRQUFRLFFBQVEsQ0FBQztBQUFBLFFBQ3pDO0FBQUEsTUFDRjtBQUFBLElBQ0MsQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUNKLFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxFQUNiO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDTCxhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMsbUJBQW1CO0FBQUEsSUFDaEMsS0FBSztBQUFBLEVBQ047QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
