#!/usr/bin/env node

/**
 * Development server runner
 * Runs the built API with auto-reload
 */

const { spawn } = require('child_process');
const path = require('path');

const distPath = path.join(__dirname, 'dist', 'main.js');

console.log('🔥 Starting development server...');
console.log(`📂 Running: ${distPath}\n`);

const server = spawn('node', [distPath], {
  stdio: 'inherit',
  shell: true,
});

server.on('close', (code) => {
  console.log(`\n❌ Server exited with code ${code}`);
  process.exit(code);
});

process.on('SIGINT', () => {
  console.log('\n🛑 Stopping server...');
  server.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  server.kill();
  process.exit(0);
});
