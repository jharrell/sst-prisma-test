import { StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    defaults: {
      function: {
        copyFiles: [{ from: 'packages/core/prisma/schema.prisma', to: 'packages/functions/src/schema.prisma' }],
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
