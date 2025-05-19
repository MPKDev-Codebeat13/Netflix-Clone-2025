import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 Replace with your repository name
const repo = 'Netflix-Clone-2025';

export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,   // <‑‑ crucial for GH Pages paths
});
