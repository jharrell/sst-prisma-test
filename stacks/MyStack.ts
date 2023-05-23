import { StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    defaults: {
      function: {
        copyFiles: [
          { from: 'packages/core/prisma/schema.prisma', to: 'packages/functions/src/schema.prisma' },
          { from: 'node_modules/.pnpm/@prisma+client@4.14.1_prisma@4.14.1/node_modules/.prisma/client/libquery_engine-linux-arm64-openssl-1.0.x.so.node', to: 'packages/functions/src/libquery_engine-linux-arm64-openssl-1.0.x.so.node' },
          { from: 'node_modules/.pnpm/@prisma+client@4.14.1_prisma@4.14.1/node_modules/.prisma/client/libquery_engine-darwin-arm64.dylib.node', to: 'packages/functions/src/libquery_engine-darwin-arm64.dylib.node' },

        ],
        nodejs: { banner: `await(async()=>{let{dirname:e}=await import("path"),{fileURLToPath:i}=await import("url");if(typeof globalThis.__filename>"u"&&(globalThis.__filename=i(import.meta.url)),typeof globalThis.__dirname>"u"&&(globalThis.__dirname='/var/task'),typeof globalThis.require>"u"){let{default:a}=await import("module");globalThis.require=a.createRequire(import.meta.url)}})();` },
      },
    },
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
