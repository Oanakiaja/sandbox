import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerFileTools(server: McpServer) {
  // File reading tools
  server.registerTool(
    'sandbox_read_file',
    {
      description: 'Read File\n\nRead file content',
      inputSchema: {
        file: z.string().describe('Absolute file path'),
        start_line: z
          .number()
          .int()
          .optional()
          .describe('Start line (0-based)'),
        end_line: z
          .number()
          .int()
          .optional()
          .describe('End line (not inclusive)'),
        sudo: z
          .boolean()
          .default(false)
          .describe('Whether to use sudo privileges'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  // File writing tools
  server.registerTool(
    'sandbox_write_file',
    {
      description: 'Write File\n\nWrite file content',
      inputSchema: {
        file: z.string().describe('Absolute file path'),
        content: z.string().describe('Content to write'),
        append: z
          .boolean()
          .default(false)
          .describe('Whether to use append mode'),
        leading_newline: z
          .boolean()
          .default(false)
          .describe('Whether to add leading newline'),
        trailing_newline: z
          .boolean()
          .default(false)
          .describe('Whether to add trailing newline'),
        sudo: z
          .boolean()
          .default(false)
          .describe('Whether to use sudo privileges'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_replace_in_file',
    {
      description: 'Replace In File\n\nReplace string in file',
      inputSchema: {
        file: z.string().describe('Absolute file path'),
        old_str: z.string().describe('Original string to replace'),
        new_str: z.string().describe('New string to replace with'),
        sudo: z
          .boolean()
          .default(false)
          .describe('Whether to use sudo privileges'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  // File search tools
  server.registerTool(
    'sandbox_search_in_file',
    {
      description: 'Search In File\n\nSearch in file content',
      inputSchema: {
        file: z.string().describe('Absolute file path'),
        regex: z.string().describe('Regular expression pattern'),
        sudo: z
          .boolean()
          .default(false)
          .describe('Whether to use sudo privileges'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_find_files',
    {
      description: 'Find Files\n\nFind files by name pattern',
      inputSchema: {
        path: z.string().describe('Directory path to search'),
        glob: z.string().describe('Filename pattern (glob syntax)'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  // Directory listing tools
  server.registerTool(
    'sandbox_list_path',
    {
      description: 'List Path\n\nList path contents with flexible options',
      inputSchema: {
        path: z.string().describe('Directory path to list'),
        recursive: z
          .boolean()
          .default(false)
          .describe('Whether to list recursively'),
        show_hidden: z
          .boolean()
          .default(true)
          .describe('Whether to show hidden files'),
        file_types: z
          .array(z.string())
          .optional()
          .describe("Filter by file extensions (e.g., ['.py', '.txt'])"),
        max_depth: z
          .number()
          .int()
          .optional()
          .describe('Maximum depth for recursive listing'),
        include_size: z
          .boolean()
          .default(true)
          .describe('Whether to include file size information'),
        include_permissions: z
          .boolean()
          .default(false)
          .describe('Whether to include file permissions'),
        sort_by: z
          .string()
          .default('name')
          .describe('Sort by: name, size, modified, type'),
        sort_desc: z
          .boolean()
          .default(false)
          .describe('Sort in descending order'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  // File transfer tools
  server.registerTool(
    'sandbox_upload_file',
    {
      description: 'Upload File\n\nUpload file using streaming',
      inputSchema: {
        file: z.string().describe('File data (binary format)'),
        path: z.string().optional().describe('Upload path'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'sandbox_download_file',
    {
      description: 'Download File\n\nDownload file using FileResponse',
      inputSchema: {
        path: z.string().describe('File path to download'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  // Advanced file editor
  server.registerTool(
    'sandbox_str_replace_editor',
    {
      description:
        'Str Replace Editor\n\nAn filesystem editor tool that allows the agent to\n- view\n- create\n- navigate\n- edit files',
      inputSchema: {
        command: z
          .enum(['view', 'create', 'str_replace', 'insert', 'undo_edit'])
          .describe('The commands to run'),
        path: z.string().describe('Absolute path to file or directory'),
        file_text: z
          .string()
          .optional()
          .describe(
            'Required parameter of `create` command, with the content of the file to be created',
          ),
        old_str: z
          .string()
          .optional()
          .describe(
            'Required parameter of `str_replace` command containing the string in `path` to replace',
          ),
        new_str: z
          .string()
          .optional()
          .describe(
            'Optional parameter of `str_replace` command containing the new string',
          ),
        insert_line: z
          .number()
          .int()
          .optional()
          .describe('Required parameter of `insert` command'),
        view_range: z
          .array(z.number().int())
          .default([])
          .describe(
            'Optional parameter of `view` command when `path` points to a file',
          ),
      },
    },
    async (args) => {
      // TODO
    },
  );
}
