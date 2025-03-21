import { jsxs, jsx } from 'react/jsx-runtime';
import * as f from 'react';
import { useState, useEffect } from 'react';
import { useParams, useRouter, useLocation, useNavigate, Outlet } from '@tanstack/react-router';
import { useReactTable, getSortedRowModel, getFilteredRowModel, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { P as P$1 } from '../nitro/nitro.mjs';
import { t, f as f$1 } from './avatar-Dhl8jLEy.mjs';
import { useQuery } from '@tanstack/react-query';
import { w, N } from './SearchFilter-D6DjtXOM.mjs';
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
import '@tanstack/start-client-core';
import 'lucide-react';
import 'input-otp';
import 'clsx';
import 'tailwind-merge';
import 'sonner';
import 'js-cookie';
import 'react-hook-form';
import 'node:stream';
import 'isbot';
import 'react-dom/server';
import '@radix-ui/react-avatar';
import './fetch-BiUOK24f.mjs';

function H({ className: a, ...r }) {
  return jsx("div", { className: P$1("animate-pulse rounded-md bg-primary/10", a), ...r });
}
const D = f.forwardRef(({ className: a, ...r }, l) => jsx("div", { className: "relative w-full overflow-auto  ", children: jsx("table", { ref: l, className: P$1("w-full caption-bottom text-sm", a), ...r }) }));
D.displayName = "Table";
const P = f.forwardRef(({ className: a, ...r }, l) => jsx("thead", { ref: l, className: P$1("[&_tr]:border-b", a), ...r }));
P.displayName = "TableHeader";
const z = f.forwardRef(({ className: a, ...r }, l) => jsx("tbody", { ref: l, className: P$1("[&_tr:last-child]:border-0", a), ...r }));
z.displayName = "TableBody";
const J = f.forwardRef(({ className: a, ...r }, l) => jsx("tfoot", { ref: l, className: P$1("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", a), ...r }));
J.displayName = "TableFooter";
const y = f.forwardRef(({ className: a, ...r }, l) => jsx("tr", { ref: l, className: P$1("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", a), ...r }));
y.displayName = "TableRow";
const U = f.forwardRef(({ className: a, ...r }, l) => jsx("th", { ref: l, className: P$1("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", a), ...r }));
U.displayName = "TableHead";
const $ = f.forwardRef(({ className: a, ...r }, l) => jsx("td", { ref: l, className: P$1("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", a), ...r }));
$.displayName = "TableCell";
const X = f.forwardRef(({ className: a, ...r }, l) => jsx("caption", { ref: l, className: P$1("mt-4 text-sm text-muted-foreground", a), ...r }));
X.displayName = "TableCaption";
const Y = ({ columns: a, data: r, loading: l = false, getData: d, paginationDetails: t, removeSortingForColumnIds: n, heightClass: c, noDataLabel: i }) => {
  useRouter();
  const [u, x] = useState([]), w = useLocation(), b = new URLSearchParams(w == null ? void 0 : w.search), _ = useReactTable({ columns: a, data: (r == null ? void 0 : r.length) ? r : [], state: { sorting: u }, onSortingChange: x, getCoreRowModel: getCoreRowModel(), getFilteredRowModel: getFilteredRowModel(), getSortedRowModel: getSortedRowModel() }), C = (o) => {
    const s = a.find((m) => m.id === o);
    return s && ((s == null ? void 0 : s.width) || (s == null ? void 0 : s.size)) || "100px";
  }, T = (o) => {
    var _a;
    if (n && n.length && n.includes(o.id)) return;
    let s = o.id, m = "asc";
    ((_a = b.get("order_by")) == null ? void 0 : _a.startsWith(o.id)) && b.get("order_by") == `${o.id}` && (b.get("order_type") == "asc" ? (m = "desc", s = `${o.id}`) : (s = "", m = "")), d({ ...b, page: 1, page_size: b.get("page_size") || 25, order_by: s, order_type: m });
  };
  return jsx("div", { className: "scrollbar overflow-x-auto  w-full ", children: jsx("div", { className: ` overflow-auto scrollbar w-full relative  ease-in-out duration-300 transition-all ${c || "h-auto"} [&>*:first-child]:h-full`, children: !r.length && !l ? jsx("div", { className: "flex flex-col mt-[5%] justify-center items-center overflow-hidden", children: jsx("p", { className: "text-[20px] text-[#333] font-[400]", children: i || "No data available" }) }) : jsx("div", { className: "max-h-[calc(100vh-180px)]", children: jsxs(D, { className: "relative", children: [jsx(P, { className: "sticky top-[0px] z-[1]  border-r-0", children: _ == null ? void 0 : _.getHeaderGroups().map((o) => jsx(y, { children: o.headers.map((s, m) => jsx(U, { colSpan: s.colSpan, className: "bg-black", style: { minWidth: C(s.id), width: C(s.id), color: "#fff", fontWeight: "500" }, children: s.isPlaceholder ? null : jsx("div", { className: `flex items-center gap-1 ${s.column.getCanSort() ? "cursor-pointer select-none" : ""}`, onClick: () => T(s), style: { minWidth: C(s.id), width: C(s.id) }, children: flexRender(s.column.columnDef.header, s.getContext()) }) }, m + `-${(/* @__PURE__ */ new Date()).getTime()}`)) }, o.id + `-${(/* @__PURE__ */ new Date()).getTime()}`)) }), jsx(z, { className: "", children: (r == null ? void 0 : r.length) ? _ == null ? void 0 : _.getRowModel().rows.map((o) => jsx(y, { className: "border-b-4 border-b-[#F8F8F8] hover:bg-gray-200 transition-colors duration-200 cursor-pointer", children: o.getVisibleCells().map((s) => jsx($, { className: "p-2 !bg-transparent", children: flexRender(s.column.columnDef.cell, s.getContext()) }, s.id + `-${(/* @__PURE__ */ new Date()).getTime()}`)) }, o.id + `-${(/* @__PURE__ */ new Date()).getTime()}`)) : l ? [...Array(25)].map((o, s) => jsx(y, { className: "border-b-4   border-b-[#F8F8F8]", children: [...Array(a.length)].map((m, S) => jsx($, { className: "", children: S == 1 ? jsxs("div", { className: "p-2 flex gap-2 items-center", children: [jsx(H, { className: "h-7 w-7 rounded-full bg-gray-200" }), jsx(H, { className: "h-3 w-3/5 bg-gray-200 rounded-none" })] }) : jsx("div", { className: "p-2", children: jsx(H, { className: "h-3 w-3/5 bg-gray-200 rounded-none" }) }) }, `loading-cell-${s}-${S}`)) }, `loading-row-${s}`)) : jsx("div", {}) })] }) }) }) });
}, ee = ({ className: a }) => jsxs("svg", { className: a, xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: [jsx("path", { d: "M14.6875 2.5H5.3125C3.89437 2.5 2.55969 3.05187 1.55375 4.05437C0.551875 5.05969 0 6.39437 0 7.8125V12.8125C0 14.2306 0.551875 15.5653 1.55437 16.5712C2.55969 17.5731 3.89437 18.125 5.3125 18.125H14.6875C17.6169 18.125 20 15.7419 20 12.8125V7.8125C20 4.88313 17.6169 2.5 14.6875 2.5ZM9.375 6.5625V3.125H10.625V6.5625C10.625 6.73531 10.765 6.875 10.9375 6.875H11.5625V8.125H8.4375V6.875H9.0625C9.235 6.875 9.375 6.73531 9.375 6.5625ZM14.6875 14.375H5.3125C2.97688 14.375 1.04031 12.6559 0.687813 10.4178C1.60063 12.0316 3.33 13.125 5.3125 13.125H14.6875C16.1056 13.125 17.4403 12.5731 18.4463 11.5706C18.7903 11.2253 19.0772 10.8387 19.3109 10.4259C18.955 12.6603 17.0203 14.375 14.6875 14.375ZM18.0044 11.1287C17.1172 12.0128 15.9391 12.5 14.6875 12.5H5.3125C2.74469 12.5 0.654687 10.4241 0.6275 7.8625C1.25906 6.02 3.21938 4.6875 5.3125 4.6875H8.75V6.25H8.125C7.9525 6.25 7.8125 6.38969 7.8125 6.5625V8.4375C7.8125 8.61031 7.9525 8.75 8.125 8.75H11.875C12.0475 8.75 12.1875 8.61031 12.1875 8.4375V6.5625C12.1875 6.38969 12.0475 6.25 11.875 6.25H11.25V4.6875H14.6875C16.7809 4.6875 18.7409 6.02031 19.3725 7.86281C19.3594 9.09531 18.8759 10.2541 18.0044 11.1287Z", fill: "#14A0DB" }), jsx("path", { d: "M6.5625 10.9375C6.5625 11.1103 6.7025 11.25 6.875 11.25C7.62125 11.25 8.15469 10.9434 8.4375 10.7278C8.72031 10.9431 9.25375 11.25 10 11.25C10.7463 11.25 11.2797 10.9434 11.5625 10.7278C11.8453 10.9431 12.3787 11.25 13.125 11.25C13.2975 11.25 13.4375 11.1103 13.4375 10.9375C13.4375 10.7647 13.2975 10.625 13.125 10.625C12.2863 10.625 11.8131 10.1234 11.7947 10.1034C11.7359 10.0381 11.6516 10.0012 11.5638 10.0009H11.5619C11.4747 10.0009 11.3906 10.0378 11.3316 10.1019C11.3119 10.1231 10.8387 10.625 10 10.625C9.16125 10.625 8.68812 10.1234 8.66969 10.1034C8.61094 10.0381 8.52656 10.0012 8.43875 10.0009H8.43687C8.34969 10.0009 8.26562 10.0378 8.20656 10.1019C8.18687 10.1231 7.71375 10.625 6.875 10.625C6.7025 10.625 6.5625 10.7647 6.5625 10.9375Z", fill: "#14A0DB" }), jsx("path", { d: "M14.0625 8.43748C14.8088 8.43748 15.3422 8.13092 15.625 7.91529C15.9078 8.1306 16.4413 8.43748 17.1875 8.43748C17.36 8.43748 17.5 8.29779 17.5 8.12498C17.5 7.95217 17.36 7.81248 17.1875 7.81248C16.3488 7.81248 15.8756 7.31092 15.8572 7.29092C15.7984 7.2256 15.7141 7.18873 15.6263 7.18842H15.6244C15.5372 7.18842 15.4531 7.22529 15.3941 7.28935C15.3744 7.3106 14.9013 7.81248 14.0625 7.81248C13.89 7.81248 13.75 7.95217 13.75 8.12498C13.75 8.29779 13.89 8.43748 14.0625 8.43748Z", fill: "#14A0DB" }), jsx("path", { d: "M5.9375 7.81248C5.09875 7.81248 4.62562 7.31092 4.60719 7.29092C4.54844 7.2256 4.46406 7.18873 4.37625 7.18842H4.37438C4.28719 7.18842 4.20312 7.22529 4.14406 7.28935C4.12437 7.3106 3.65125 7.81248 2.8125 7.81248C2.64 7.81248 2.5 7.95217 2.5 8.12498C2.5 8.29779 2.64 8.43748 2.8125 8.43748C3.55875 8.43748 4.09219 8.13092 4.375 7.91529C4.65781 8.1306 5.19125 8.43748 5.9375 8.43748C6.11 8.43748 6.25 8.29779 6.25 8.12498C6.25 7.95217 6.11 7.81248 5.9375 7.81248Z", fill: "#14A0DB" }), jsx("path", { d: "M5.625 11.25C5.79759 11.25 5.9375 11.1101 5.9375 10.9375C5.9375 10.7649 5.79759 10.625 5.625 10.625C5.45241 10.625 5.3125 10.7649 5.3125 10.9375C5.3125 11.1101 5.45241 11.25 5.625 11.25Z", fill: "#14A0DB" })] });
function te() {
  useRouter();
  const a = useNavigate(), [r, l] = useState(null), d = (t) => {
    var _a;
    if (!((_a = t == null ? void 0 : t.ponds) == null ? void 0 : _a.length)) return;
    const n = t.id, c = t.ponds[0].id;
    console.log(n, c, "user"), a({ to: `/users/${n}/ponds/${c}` }).then(() => {
      window.location.reload();
    });
  };
  return [{ accessorFn: (t) => t.serial, id: "serial", header: () => jsx("span", { className: " text-sm", children: "S No" }), cell: (t) => jsx("span", { className: "text-sm cursor-pointer hover:text-blue-500", onClick: () => d(t.row.original), children: t.getValue() || "--" }), width: "40px" }, { accessorFn: (t) => {
    const n = (u) => u.replace(/\b\w/g, (x) => x.toUpperCase()), c = t.full_name ? n(t.full_name) : "-", i = t.lastname ? n(t.lastname) : "";
    return { id: t.id, fullname: `${c} ${i}`, avatar: t.profile_pic || null };
  }, id: "full_name", header: () => jsx("span", { className: " text-sm", children: "Full Name" }), cell: (t$1) => {
    const { id: n, fullname: c, avatar: i } = t$1.getValue() || { id: null, fullname: "--", avatar: null };
    return jsxs("span", { className: "flex gap-2 items-center cursor-pointer hover:text-blue-500", onClick: () => d(t$1.row.original), children: [i ? jsx(t, { className: "w-7 h-7 border-0", children: jsx(f$1, { src: i, className: "object-center" }) }) : jsx(t, { className: "w-7 h-7 flex items-center justify-center rounded-full bg-slate-50", children: jsx("span", { className: "text-sm", children: c[0] }) }), jsx("span", { className: "self-center text-sm", children: c })] });
  }, width: "180px" }, { accessorFn: (t) => {
    var _a;
    return ((_a = t.gateways) == null ? void 0 : _a.title) || "--";
  }, id: "gateways", header: () => jsx("span", { className: " text-sm", children: "Gateways" }), cell: (t) => {
    t.row.original.id;
    const c = (t.getValue() || "--").replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (i) => i.toUpperCase());
    return jsx("span", { className: "text-sm cursor-pointer hover:text-blue-500", onClick: () => d(t.row.original), children: c });
  }, width: "150px" }, { accessorFn: (t) => t.pond_count, id: "pond_count", header: () => jsx("span", { className: " text-sm", children: "Ponds" }), cell: (t) => {
    t.row.original.id;
    const n = t.getValue() || "--";
    return jsxs("span", { className: "text-sm flex items-center gap-2 cursor-pointer hover:text-blue-500", onClick: () => d(t.row.original), children: [jsx(ee, { className: "size-5" }), n !== "--" ? jsx("span", { className: "bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded", children: n }) : jsx("span", { className: "bg-transparent text-black text-xs px-2 py-0.5 rounded-full", children: n })] });
  }, width: "100px" }];
}
const ae = (a, r, l) => (a == null ? void 0 : a.length) ? a.map((t, n) => ({ ...t, serial: (r - 1) * l + (n + 1) })) : [], re = ({ loading: a, message: r, className: l }) => a ? jsx("div", { role: "alert", "aria-live": "assertive", className: "absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 z-50", children: jsx("p", { children: r || "Loading..." }) }) : null, se = ({ heightClass: a = "h-[calc(100vh-100px)]" }) => {
  const { users_id: r, ponds_id: l } = useParams({ strict: false }), d = useRouter(), t = useLocation(), n = useNavigate(), { pathname: c } = useLocation(), i = new URLSearchParams(t.search), [u, x] = useState(i.get("search_string") || ""), [w$1, b] = useState(i.get("search_string") || ""), [_, C] = useState({ current_page: Number(i.get("page")) || 1, page_size: Number(i.get("page_size")) || 25 }), T = te(), { isFetching: o, data: s, refetch: m } = useQuery({ queryKey: ["Users", w$1], queryFn: async () => {
    var _a;
    let v = { ...w$1 && { search_string: w$1 } };
    d.navigate({ to: `/users/${r}/ponds/${l}`, search: v });
    const h = await w(v);
    if (h.status === 200 || h.status === 201) {
      const { data: B, pagination: R } = (_a = h == null ? void 0 : h.data) == null ? void 0 : _a.data;
      return { data: ae(B, R.current_page, R.page_size) || [], pagination: R };
    }
  } });
  return useEffect(() => {
    const v = setTimeout(() => {
      C((h) => ({ ...h, current_page: u ? h.current_page : 1 })), b(u), m(), d.navigate({ to: `/users/${r}/ponds/${l}`, search: (h) => ({ ...h, search_string: u || void 0 }) });
    }, 1e3);
    return () => clearTimeout(v);
  }, [u]), jsxs("div", { className: "text-xs h-[92.7dvh] bg-gray-100 text-black", children: [jsxs("div", { className: "flex justify-start w-full h-full", children: [jsxs("div", { className: "w-[28%] overflow-y-auto scrollbar-hidden bg-white", children: [jsxs("div", { className: "flex items-center justify-between gap-4 px-5 py-4", children: [jsx("div", { className: "w-full", children: jsx(N, { searchString: u, setSearchString: x, title: "Name" }) }), jsxs("div", { className: "h-[38px] px-5 py-3 bg-[#d94841] rounded flex items-center gap-1 text-white text-sm cursor-pointer", onClick: () => {
    n({ to: "/" });
  }, children: [jsx("span", { children: "+" }), jsx("span", { children: "Add" })] })] }), jsx("div", { className: "px-5", children: jsx(Y, { data: (s == null ? void 0 : s.data) || [], columns: T, loading: o, removeSortingForColumnIds: ["serial", "actions"], heightClass: a }) })] }), jsx("div", { className: "w-[72%]", children: jsx(Outlet, {}) })] }), jsx(re, { loading: o, message: "Loading..." })] });
}, He = se;

export { He as component };
//# sourceMappingURL=_users-6foa5jD7.mjs.map
