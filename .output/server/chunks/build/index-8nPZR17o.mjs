import { jsxs } from 'react/jsx-runtime';
import { useRouter } from '@tanstack/react-router';
import { w, e as ee } from '../nitro/nitro.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

const m = ee("app_routes_index_tsx--updateCount_createServerFn_handler", "/_server"), s = createServerFn({ method: "POST" }).validator((t) => t).handler(m), x = function() {
  const e = useRouter(), o = w.useLoaderData();
  return jsxs("button", { type: "button", onClick: () => {
    s({ data: 1 }).then(() => {
      e.invalidate();
    });
  }, children: ["Add 1 to ", o, "?"] });
};

export { x as component };
//# sourceMappingURL=index-8nPZR17o.mjs.map
