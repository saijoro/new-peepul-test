import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import * as r from 'node:fs';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'tiny-invariant';

const p = () => import('./index-D1CnVft1.mjs'), m = "count.txt";
async function i() {
  return parseInt(await r.promises.readFile(m, "utf-8").catch(() => "0"));
}
const u = o("app_routes_index_tsx--getCount_createServerFn_handler", "/_server", (t, r) => e.__executeServer(t, r)), e = createServerFn({ method: "GET" }).handler(u, () => i()), _ = createFileRoute("/")({ component: lazyRouteComponent(p, "component", () => _.ssr), loader: async () => await e() });

export { u as getCount_createServerFn_handler };
//# sourceMappingURL=index-DBN3bReT.mjs.map
