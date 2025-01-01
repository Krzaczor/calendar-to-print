import { defineConfig } from "vite";

export default defineConfig({
    build: {
        target: "es2015",
    },
    base: "calendar-to-print",
    server: {
        open: true,
    },
});
