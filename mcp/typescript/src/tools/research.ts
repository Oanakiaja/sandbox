import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerResearchTools(server: McpServer) {
  // ArXiv research tools
  server.registerTool(
    'arxiv_search',
    {
      description: 'Search for academic papers on ArXiv',
      inputSchema: {
        query: z.string().describe('Search query for academic papers'),
        max_results: z
          .number()
          .int()
          .min(1)
          .max(100)
          .default(10)
          .describe('Maximum number of results to return'),
        sort_by: z
          .enum(['relevance', 'lastUpdatedDate', 'submittedDate'])
          .default('relevance')
          .describe('Sort order for results'),
        sort_order: z
          .enum(['ascending', 'descending'])
          .default('descending')
          .describe('Sort direction'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'arxiv_get_paper',
    {
      description: 'Get detailed information about an ArXiv paper',
      inputSchema: {
        arxiv_id: z.string().describe('ArXiv paper ID (e.g., "2301.07041")'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'arxiv_download_paper',
    {
      description: 'Download an ArXiv paper PDF',
      inputSchema: {
        arxiv_id: z.string().describe('ArXiv paper ID to download'),
        save_path: z
          .string()
          .optional()
          .describe('Optional path to save the PDF file'),
      },
    },
    async (args) => {
      // TODO
    },
  );
}
