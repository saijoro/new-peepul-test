import { jsxs } from 'react/jsx-runtime';
import * as r from 'node:fs';
import { useRouter, createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start-client-core';
import { o } from './index-ujMS-7Qz.mjs';
import 'tiny-invariant';

const _ = () => Promise.resolve().then(() => F), f = "count.txt";
async function h() {
  return parseInt(await r.promises.readFile(f, "utf-8").catch(() => "0"));
}
const v = o("app_routes_index_tsx--getCount_createServerFn_handler", "/_server", (e, t) => a.__executeServer(e, t)), a = createServerFn({ method: "GET" }).handler(v, () => h()), c = createFileRoute("/")({ component: lazyRouteComponent(_, "component", () => c.ssr), loader: async () => await a() }), s = "count.txt";
async function C() {
  return parseInt(await r.promises.readFile(s, "utf-8").catch(() => "0"));
}
const S = o("app_routes_index_tsx--updateCount_createServerFn_handler", "/_server", (e, t) => u.__executeServer(e, t)), u = createServerFn({ method: "POST" }).validator((e) => e).handler(S, async ({ data: e }) => {
  const t = await C();
  await r.promises.writeFile(s, `${t + e}`);
}), x = function() {
  const t = useRouter(), i = c.useLoaderData();
  return jsxs("button", { type: "button", onClick: () => {
    u({ data: 1 }).then(() => {
      t.invalidate();
    });
  }, children: ["Add 1 to ", i, "?"] });
}, F = Object.freeze(Object.defineProperty({ __proto__: null, component: x }, Symbol.toStringTag, { value: "Module" }));

export { x as component };
//# sourceMappingURL=index-D1CnVft1.mjs.map
