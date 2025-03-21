import { d } from './fetch-BiUOK24f.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Search } from 'lucide-react';
import * as f from 'react';
import { P } from '../nitro/nitro.mjs';
import { useNavigate } from '@tanstack/react-router';

const w = async (t) => {
  try {
    return await d.get("/users", t);
  } catch (e) {
    throw e;
  }
}, y = async (t, e) => {
  try {
    return await d.get(`/users/${e}/ponds`, t);
  } catch (r) {
    throw r;
  }
}, I = async (t, e) => {
  try {
    return await d.get(`/starter/${e}/motors/${t}`);
  } catch (r) {
    throw r;
  }
}, a = f.forwardRef(({ className: t, type: e, ...r }, n) => jsx("input", { type: e, className: P("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t), ref: n, ...r }));
a.displayName = "Input";
const N = ({ searchString: t, setSearchString: e, title: r }) => (useNavigate(), jsxs("div", { className: "relative w-52", children: [jsx(Search, { className: "absolute left-2 top-1/2 -translate-y-1/2 bg-transparent text-black rounded-none w-[25px] h-[25px] p-1" }), jsx(a, { placeholder: r, value: t, onChange: (l) => {
  const i = l.target.value.replace(/\s+/g, " ");
  e(i);
}, className: "px-8 bg-gray-100 hover:bg-opacity-50 transition-all ease-in-out border w-full h-fit placeholder:text-black text-black focus:outline-none focus-visible:outline-none rounded-none !focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent focus:ring-none text-xs 3xl:text-sm font-normal" }), t && jsx("button", { onClick: () => e(""), className: "absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-transparent text-base text-black", children: "X" })] }));

export { I, N, w, y };
//# sourceMappingURL=SearchFilter-D6DjtXOM.mjs.map
