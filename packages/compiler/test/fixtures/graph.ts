export default {
  graphInfo: {
    connections: [
      {
        Input: {
          name: "自定义函数",
          type: "T",
          nodeId: "spider-43039140-7b33-4252-a0f0-29e35defff4b",
          portConf: { id: "Input", type: "Input" },
        },
        Output: {
          name: "http 请求",
          type: "R",
          nodeId: "spider-68a448a7-b6f7-46c7-8639-e37ed2c27f47",
          portConf: { id: "Output", type: "Output" },
        },
      },
      {
        Input: {
          name: "http",
          type: "T",
          nodeId: "spider-1bc19ee8-a5bd-4175-bc91-721d61324eed",
          portConf: { id: "Input", type: "Input" },
        },
        Output: {
          name: "自定义函数",
          type: "T",
          nodeId: "spider-43039140-7b33-4252-a0f0-29e35defff4b",
          portConf: { id: "Output", type: "Output" },
        },
      },
      {
        Input: {
          name: "自定义函数",
          type: "T",
          nodeId: "spider-e62d22a2-478d-4f32-8117-6f782a7ccec0",
          portConf: { id: "Input", type: "Input" },
        },
        Output: {
          name: "http",
          type: "T",
          nodeId: "spider-1bc19ee8-a5bd-4175-bc91-721d61324eed",
          portConf: { id: "Output", type: "Output" },
        },
      },
    ],
    nodeList: [
      {
        id: 2,
        code: "advanced-function",
        icon: "",
        name: "自定义函数",
        type: "T",
        nodeId: "spider-e62d22a2-478d-4f32-8117-6f782a7ccec0",
        bizData: {
          flowId: "1",
          nodeId: "spider-e62d22a2-478d-4f32-8117-6f782a7ccec0",
          params: {
            hackSend: false,
            scriptCode:
              "// Type some code...\ninput.ctx.body = {\n  success: true,\n  data: input.data\n}\n\nlogger(input.ctx.body, input.ctx)\n\n",
          },
        },
        version: 1,
        portInfo: {
          Input: [
            {
              id: "Input",
              dto: {
                name: "DTO_Input",
                children: [
                  {
                    name: "_traceId",
                    type: { name: "string", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 2, fileName: "src/type/IO.ts", character: 10 },
                    ],
                  },
                  {
                    name: "payload",
                    type: { name: "any", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 3, fileName: "src/type/IO.ts", character: 9 },
                    ],
                  },
                ],
                kindString: "Interface",
              },
              desc: "输入",
              name: "输入",
            },
          ],
          Output: [
            {
              id: "Output",
              dto: {
                name: "DTO_Output",
                children: [
                  {
                    name: "_traceId",
                    type: { name: "string", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 7, fileName: "src/type/IO.ts", character: 10 },
                    ],
                  },
                  {
                    name: "payload",
                    type: { name: "any", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 8, fileName: "src/type/IO.ts", character: 9 },
                    ],
                  },
                ],
                kindString: "Interface",
              },
              desc: "输出",
              name: "输出",
            },
          ],
        },
        position: { x: 1202, y: 269.578125 },
        gmtCreate: "2024-05-27T10:32:16.839Z",
        groupCode: "advanced",
        description: "",
        gmtModified: "2024-05-27T10:32:16.839Z",
        editorResource: {
          styleHref:
            "YOUR_NODES_ASSETS_BASE/hlang-advanced-function/6/editor.css",
          scriptHref:
            "YOUR_NODES_ASSETS_BASE/hlang-advanced-function/6/editor.js",
        },
        runtimeResource: "@hset/xlang-advanced-function@latest",
      },
      {
        id: 1,
        code: "trigger-http-request",
        icon: "",
        name: "http 请求",
        type: "R",
        nodeId: "spider-68a448a7-b6f7-46c7-8639-e37ed2c27f47",
        bizData: {
          flowId: "1",
          nodeId: "spider-68a448a7-b6f7-46c7-8639-e37ed2c27f47",
          params: { url: "test", method: "GET" },
        },
        version: 1,
        portInfo: { Output: [{ id: "Output", desc: "输出", name: "输出" }] },
        position: { x: 338, y: 200.578125 },
        gmtCreate: "2024-05-27T10:26:37.379Z",
        groupCode: "trigger",
        description: "",
        gmtModified: "2024-05-27T10:26:37.379Z",
        editorResource: {
          styleHref:
            "YOUR_NODES_ASSETS_BASE/hlang-trigger-http-request/4/editor.css",
          scriptHref:
            "YOUR_NODES_ASSETS_BASE/hlang-trigger-http-request/4/editor.js",
        },
        runtimeResource: "@hset/xlang-trigger-http-request@latest",
      },
      {
        id: 3,
        code: "rpc-http",
        icon: "",
        name: "http",
        type: "T",
        nodeId: "spider-1bc19ee8-a5bd-4175-bc91-721d61324eed",
        bizData: {
          flowId: "1",
          nodeId: "spider-1bc19ee8-a5bd-4175-bc91-721d61324eed",
          params: { url: "http://127.0.0.1:7002/flow", method: "GET" },
        },
        version: 1,
        portInfo: {
          Input: [
            {
              id: "Input",
              dto: {
                name: "DTO_Input",
                children: [
                  {
                    name: "_traceId",
                    type: { name: "string", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 2, fileName: "src/type/IO.ts", character: 10 },
                    ],
                  },
                  {
                    name: "payload",
                    type: { name: "any", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 3, fileName: "src/type/IO.ts", character: 9 },
                    ],
                  },
                ],
                kindString: "Interface",
              },
              desc: "Input",
              name: "Input",
              operation: 0,
            },
          ],
          Output: [
            {
              id: "Output",
              dto: {
                name: "DTO_Output",
                children: [
                  {
                    name: "_traceId",
                    type: { name: "string", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 7, fileName: "src/type/IO.ts", character: 10 },
                    ],
                  },
                  {
                    name: "payload",
                    type: { name: "any", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 8, fileName: "src/type/IO.ts", character: 9 },
                    ],
                  },
                ],
                kindString: "Interface",
              },
              desc: "Output",
              name: "Output",
              operation: 0,
            },
          ],
        },
        position: { x: 880, y: 210.578125 },
        gmtCreate: "2024-05-28T06:32:32.086Z",
        groupCode: "rpc",
        description: "",
        gmtModified: "2024-05-28T06:32:32.086Z",
        editorResource: {
          styleHref:
            "YOUR_NODES_ASSETS_BASE/hlang-rpc-http/2/editor.css",
          scriptHref:
            "YOUR_NODES_ASSETS_BASE/hlang-rpc-http/2/editor.js",
        },
        runtimeResource: "@hset/xlang-rpc-http@latest",
      },
      {
        id: 2,
        code: "advanced-function",
        icon: "",
        name: "自定义函数",
        type: "T",
        nodeId: "spider-43039140-7b33-4252-a0f0-29e35defff4b",
        bizData: {
          flowId: "1",
          nodeId: "spider-43039140-7b33-4252-a0f0-29e35defff4b",
          params: {
            hackSend: false,
            scriptCode:
              "// Type some code...\n\nconst ctx = input;\n\nlogger(input, 'input');\n\noutput = { ctx }",
          },
        },
        version: 2,
        portInfo: {
          Input: [
            {
              id: "Input",
              dto: {
                name: "DTO_Input",
                children: [
                  {
                    name: "_traceId",
                    type: { name: "string", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 2, fileName: "src/type/IO.ts", character: 10 },
                    ],
                  },
                  {
                    name: "payload",
                    type: { name: "any", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 3, fileName: "src/type/IO.ts", character: 9 },
                    ],
                  },
                ],
                kindString: "Interface",
              },
              desc: "输入",
              name: "输入",
            },
          ],
          Output: [
            {
              id: "Output",
              dto: {
                name: "DTO_Output",
                children: [
                  {
                    name: "_traceId",
                    type: { name: "string", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 7, fileName: "src/type/IO.ts", character: 10 },
                    ],
                  },
                  {
                    name: "payload",
                    type: { name: "any", type: "intrinsic" },
                    flags: { isExported: true },
                    sources: [
                      { line: 8, fileName: "src/type/IO.ts", character: 9 },
                    ],
                  },
                ],
                kindString: "Interface",
              },
              desc: "输出",
              name: "输出",
            },
          ],
        },
        position: { x: 598, y: 128.578125 },
        gmtCreate: "2024-05-27T10:32:16.839Z",
        groupCode: "advanced",
        description: "",
        gmtModified: "2024-05-27T14:44:55.000Z",
        editorResource: {
          styleHref:
            "YOUR_NODES_ASSETS_BASE/hlang-advanced-function/6/editor.css",
          scriptHref:
            "YOUR_NODES_ASSETS_BASE/hlang-advanced-function/6/editor.js",
        },
        runtimeResource: "@hset/xlang-advanced-function@latest",
      },
    ],
  },
  id: 1,
};
