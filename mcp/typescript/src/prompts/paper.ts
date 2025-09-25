import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerPaperPrompts(server: McpServer) {
  // Basic system info tools
  server.registerPrompt(
    'deep-paper-analysis',
    {
      description: 'Analyze a specific paper in detail',
      argsSchema: {
        paper_id: z.string().describe('arXiv paper ID'),
      },
    },
    async (args) => {
      // TODO
    },
  );
}
