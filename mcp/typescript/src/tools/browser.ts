import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerBrowserTools(server: McpServer) {
  // Browser navigation tools
  server.registerTool(
    'browser_navigate',
    {
      description: 'Navigate to a URL',
      inputSchema: {
        url: z.string().describe('URL to navigate to'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_go_back',
    {
      description: 'Go back to the previous page',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_go_forward',
    {
      description: 'Go forward to the next page',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  // Browser interaction tools
  server.registerTool(
    'browser_form_input_fill',
    {
      description:
        "Fill out an input field, before using the tool, Either 'index' or 'selector' must be provided",
      inputSchema: {
        selector: z
          .string()
          .optional()
          .describe('CSS selector for input field'),
        index: z.number().optional().describe('Index of the element to fill'),
        value: z.string().describe('Value to fill'),
        clear: z
          .boolean()
          .default(false)
          .describe('Whether to clear existing text before filling'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_click',
    {
      description: 'Click an element on the page',
      inputSchema: {
        index: z.number().describe('Index of the element to click'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_select',
    {
      description: 'Select an element on the page with index',
      inputSchema: {
        index: z.number().optional().describe('Index of the element to select'),
        selector: z
          .string()
          .optional()
          .describe('CSS selector for element to select'),
        value: z.string().describe('Value to select'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_hover',
    {
      description: 'Hover an element on the page',
      inputSchema: {
        index: z.number().optional().describe('Index of the element to hover'),
        selector: z
          .string()
          .optional()
          .describe('CSS selector for element to hover'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_scroll',
    {
      description: 'Scroll the page',
      inputSchema: {
        amount: z
          .number()
          .optional()
          .describe('Pixels to scroll (positive for down, negative for up)'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_press_key',
    {
      description: 'Press a key on the keyboard',
      inputSchema: {
        key: z
          .enum([
            'Enter',
            'Tab',
            'Escape',
            'Backspace',
            'Delete',
            'Insert',
            'F1',
            'F2',
            'F3',
            'F4',
            'F5',
            'F6',
            'F7',
            'F8',
            'F9',
            'F10',
            'F11',
            'F12',
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown',
            'PageUp',
            'PageDown',
            'Home',
            'End',
            'ShiftLeft',
            'ShiftRight',
            'ControlLeft',
            'ControlRight',
            'AltLeft',
            'AltRight',
            'MetaLeft',
            'MetaRight',
            'CapsLock',
            'PrintScreen',
            'ScrollLock',
            'Pause',
            'ContextMenu',
          ])
          .describe('Name of the key to press'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  // Browser content extraction tools
  server.registerTool(
    'browser_get_markdown',
    {
      description: 'Get the markdown content of the current page',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_get_text',
    {
      description: 'Get the text content of the current page',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_read_links',
    {
      description: 'Get all links on the current page',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_get_clickable_elements',
    {
      description:
        'Get the clickable or hoverable or selectable elements on the current page',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  // Browser tab management tools
  server.registerTool(
    'browser_new_tab',
    {
      description: 'Open a new tab',
      inputSchema: {
        url: z.string().describe('URL to open in the new tab'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_tab_list',
    {
      description: 'Get the list of tabs',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_switch_tab',
    {
      description: 'Switch to a specific tab',
      inputSchema: {
        index: z.number().describe('Tab index to switch to'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_close_tab',
    {
      description: 'Close the current tab',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_close',
    {
      description: 'Close the browser when the task is done',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  // Browser screenshot and visual tools
  server.registerTool(
    'browser_screenshot',
    {
      description:
        'Take a screenshot of the current page or a specific element',
      inputSchema: {
        name: z.string().optional().describe('Name for the screenshot'),
        selector: z
          .string()
          .optional()
          .describe('CSS selector for element to screenshot'),
        index: z
          .number()
          .optional()
          .describe('Index of the element to screenshot'),
        width: z.number().optional().describe('Width in pixels'),
        height: z.number().optional().describe('Height in pixels'),
        fullPage: z.boolean().optional().describe('Full page screenshot'),
        highlight: z.boolean().default(false).describe('Highlight the element'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_vision_screen_capture',
    {
      description: 'Take a screenshot of the current page for vision mode',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_vision_screen_click',
    {
      description:
        'Click left mouse button on the page with vision and snapshot',
      inputSchema: {
        factors: z
          .array(z.number())
          .optional()
          .describe('Vision model coordinate system scaling factors'),
        x: z.number().describe('X pixel coordinate'),
        y: z.number().describe('Y pixel coordinate'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  // Browser evaluate and download tools
  server.registerTool(
    'browser_evaluate',
    {
      description: 'Execute JavaScript in the browser console',
      inputSchema: {
        script: z.string().describe('JavaScript code to execute'),
      },
    },
    async (args) => {
      // TODO
    },
  );

  server.registerTool(
    'browser_get_download_list',
    {
      description: 'Get the list of downloaded files',
      inputSchema: {},
    },
    async (args) => {
      // TODO
    },
  );
}
