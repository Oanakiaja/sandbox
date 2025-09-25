import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerContextTools(server: McpServer) {
  // Basic system info tools
  server.registerTool(
    'sandbox_get_sandbox_context',
    {
      description: 'Get Sandbox Context\n\nGet sandbox environment information',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_python_packages',
    {
      description: 'Python Packages\n\nGet installed packages by language',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_nodejs_packages',
    {
      description: 'Nodejs Packages\n\nGet installed packages by language',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_nodejs_info',
    {
      description:
        'Nodejs Info\n\nGet information about Node.js runtime and available languages',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_jupyter_info',
    {
      description:
        'Jupyter Info\n\nGet information about available Jupyter kernels',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );
}
