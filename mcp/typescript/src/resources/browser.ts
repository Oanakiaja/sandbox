import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export function registerBrowserResources(server: McpServer) {
  // Browser console logs resource
  server.registerResource(
    'console-logs',
    'console://logs',
    {
      title: 'Browser console logs',
      description: 'Real-time browser console logs and errors',
      mimeType: 'text/plain',
    },
    async (uri) => {
      // TODO:
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'text/plain',
            text: '',
          },
        ],
      };
    },
  );

  server.registerResource(
    'Browser Downloads',
    'download://{name}',
    {
      title: 'Browser downloads',
      description: 'Browser downloads',
      mimeType: 'text/plain',
    },
    async (uri) => {
      // TODO:
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'text/plain',
            text: '',
          },
        ],
      };
    },
  );
}
