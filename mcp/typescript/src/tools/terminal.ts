import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerTerminalTools(server: McpServer) {
  // Command execution tools
  server.registerTool(
    'sandbox_exec_command',
    {
      description:
        "Exec Command\n\nExecute command in the specified shell session\nSupports SSE streaming if Accept header contains 'text/event-stream'",
      inputSchema: {
        id: z
          .string()
          .optional()
          .describe(
            'Unique identifier of the target shell session, if not provided, one will be automatically created',
          ),
        exec_dir: z
          .string()
          .optional()
          .describe(
            'Working directory for command execution (must use absolute path)',
          ),
        command: z.string().describe('Shell command to execute'),
        async_mode: z
          .boolean()
          .default(false)
          .describe(
            'Whether to execute command asynchronously (default: False for async, False for synchronous execution)',
          ),
      },
    },
    async (args) => {
      // TODO
    },
  );

  // Shell session management tools
  server.registerTool(
    'sandbox_view_shell',
    {
      description:
        "View Shell\n\nView output of the specified shell session\nSupports SSE streaming if Accept header contains 'text/event-stream'",
      inputSchema: {
        id: z
          .string()
          .describe('Unique identifier of the target shell session'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_wait_for_process',
    {
      description:
        'Wait For Process\n\nWait for the process in the specified shell session to return',
      inputSchema: {
        id: z
          .string()
          .describe('Unique identifier of the target shell session'),
        seconds: z.number().int().optional().describe('Wait time (seconds)'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_write_to_process',
    {
      description:
        'Write To Process\n\nWrite input to the process in the specified shell session',
      inputSchema: {
        id: z
          .string()
          .describe('Unique identifier of the target shell session'),
        input: z.string().describe('Input content to write to the process'),
        press_enter: z
          .boolean()
          .describe('Whether to press enter key after input'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_kill_process',
    {
      description:
        'Kill Process\n\nTerminate the process in the specified shell session',
      inputSchema: {
        id: z
          .string()
          .describe('Unique identifier of the target shell session'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  // Code execution tools
  server.registerTool(
    'sandbox_execute_jupyter_code',
    {
      description:
        'Execute Jupyter Code\n\nExecute Python code using Jupyter kernel with session persistence',
      inputSchema: {
        code: z.string().describe('Python code to execute'),
        timeout: z
          .number()
          .int()
          .min(1)
          .max(300)
          .default(30)
          .describe('Execution timeout in seconds'),
        kernel_name: z
          .string()
          .default('python3')
          .describe('Kernel name to use'),
        session_id: z
          .string()
          .optional()
          .describe('Session ID to maintain kernel state across requests'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_list_sessions',
    {
      description: 'List Sessions\n\nList all active Jupyter sessions',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_cleanup_all_sessions',
    {
      description: 'Cleanup All Sessions\n\nCleanup all active sessions',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_cleanup_session',
    {
      description: 'Cleanup Session\n\nManually cleanup a specific session',
      inputSchema: {
        session_id: z.string().describe('Session ID to cleanup'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_execute_nodejs_code',
    {
      description:
        'Execute Nodejs Code\n\nExecute JavaScript code using Node.js',
      inputSchema: {
        code: z.string().describe('JavaScript code to execute'),
        timeout: z
          .number()
          .int()
          .min(1)
          .max(300)
          .default(30)
          .describe('Execution timeout in seconds'),
        stdin: z.string().optional().describe('Standard input for the process'),
        files: z
          .record(z.string())
          .optional()
          .describe('Additional files to create in execution directory'),
      },
    },
    async (args) => {
      // TODO
    },
  );
}
