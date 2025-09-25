import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerDocumentTools(server: McpServer) {
  // Markitdown conversion tool
  server.registerTool(
    'markitdown_convert_to_markdown',
    {
      description:
        'Convert a resource described by an http:, https:, file: or data: URI to markdown',
      inputSchema: {
        uri: z.string().describe('URI to convert to markdown'),
      },
    },
    async (args) => {
      // TODO
    },
  );
}
