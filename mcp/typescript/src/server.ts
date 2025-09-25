import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  registerBrowserTools,
  registerFileTools,
  registerTerminalTools,
  registerDocumentTools,
  registerResearchTools,
  registerContextTools,
} from './tools/index.js';
import { registerBrowserResources } from './resources/index.js';
import { registerPaperPrompts } from './prompts/index.js';

async function createServer(): Promise<McpServer> {
  const server = new McpServer({
    name: '{{name}}',
    version: process.env.VERSION || '0.0.1',
  });

  // Register tool categories
  registerBrowserTools(server);
  registerFileTools(server);
  registerTerminalTools(server);
  registerDocumentTools(server);
  registerResearchTools(server);
  registerContextTools(server);

  // Register resources
  registerBrowserResources(server);

  // Resigter prompts
  registerPaperPrompts(server);

  return server;
}

export { createServer };
