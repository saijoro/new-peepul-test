import { jsx } from 'react/jsx-runtime';
import * as f$1 from 'react';
import * as a from '@radix-ui/react-avatar';
import { P } from '../nitro/nitro.mjs';

const t = f$1.forwardRef(({ className: e, ...l }, r) => jsx(a.Root, { ref: r, className: P("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e), ...l }));
t.displayName = a.Root.displayName;
const f = f$1.forwardRef(({ className: e, ...l }, r) => jsx(a.Image, { ref: r, className: P("aspect-square h-full w-full", e), ...l }));
f.displayName = a.Image.displayName;
const i = f$1.forwardRef(({ className: e, ...l }, r) => jsx(a.Fallback, { ref: r, className: P("flex h-full w-full items-center justify-center rounded-full bg-muted", e), ...l }));
i.displayName = a.Fallback.displayName;

export { f, i, t };
//# sourceMappingURL=avatar-Dhl8jLEy.mjs.map
