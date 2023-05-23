import { ApiHandler } from "sst/node/api";
import { Time } from "@sst-prima-test-pnpm/core/time";
import { prisma } from '@sst-prima-test-pnpm/core/prisma';

export const handler = ApiHandler(async (_evt) => {
  await prisma.user.count()
  return {
    body: `Hello world. The time is ${Time.now()}`,
  };
});
