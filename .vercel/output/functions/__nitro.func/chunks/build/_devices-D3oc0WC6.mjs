import { jsx, jsxs } from 'react/jsx-runtime';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { i, C } from './deviceses-DLdDnwk-.mjs';
import { useLocation, useNavigate, useParams, Outlet } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { t } from './OpenEye-COx0uHVp.mjs';
import { f } from './button-Dm6e9eHg.mjs';
import './fetch-BiUOK24f.mjs';
import 'js-cookie';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import '../nitro/nitro.mjs';
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
import 'react-hook-form';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

function V() {
  const n = useLocation(), d = useNavigate(), { device_id: o, motor_id: m } = useParams({ strict: false }), p = new URLSearchParams(n.search), g = p.get("search_string") || "", v = Number(p.get("current_page")) || 1, b = Number(p.get("page_size")) || 15, [x, S] = useState([]), [r, N] = useState({ pageIndex: v, pageSize: b }), [h, y] = useState(g), [l, _] = useState(g), { isFetching: f$1 } = useQuery({ queryKey: ["devices", n.pathname, l, r], queryFn: async () => {
    var _a, _b, _c;
    const e = { pageIndex: r.pageIndex, pageSize: r.pageSize, search_string: l };
    d({ to: n.pathname, search: { search_string: l || void 0, current_page: r.pageIndex, page_size: r.pageSize }, replace: true });
    const a = await i(e);
    return S(((_b = (_a = a == null ? void 0 : a.data) == null ? void 0 : _a.data) == null ? void 0 : _b.records) || []), N(((_c = a == null ? void 0 : a.data) == null ? void 0 : _c.pagination) || { pageIndex: r.pageIndex, pageSize: r.pageSize }), a;
  } });
  useEffect(() => {
    const e = setTimeout(() => {
      _(h);
    }, 500);
    return () => {
      clearTimeout(e);
    };
  }, [h]);
  const u = useReactTable({ data: x, columns: [{ accessorFn: (e) => e.serial_no, id: "id", cell: (e) => {
    const a = e.getValue();
    return jsx("div", { className: "w-full truncate text-left overflow-hidden text-ellipsis whitespace-nowrap", children: jsx("span", { className: `${a === o ? "text-[#45A845] font-semibold" : ""}`, title: a, children: a || "-" }) });
  }, header: () => jsx("span", { children: "Device ID" }), footer: (e) => e.column.id }, { accessorFn: (e) => e.title, id: "title", cell: (e) => {
    const a = e.getValue();
    return jsx("div", { className: "w-full truncate text-left overflow-hidden text-ellipsis whitespace-nowrap", children: jsx("span", { title: a, children: a || "-" }) });
  }, header: () => jsx("span", { children: "Device Name" }), footer: (e) => e.column.id }, { accessorFn: (e) => {
    var _a;
    return ((_a = e.motors) == null ? void 0 : _a.map((a) => a.title).join(", ")) || "-";
  }, id: "motors", cell: (e) => {
    const a = e.getValue();
    return jsx("div", { className: "w-full truncate text-left overflow-hidden text-ellipsis whitespace-nowrap", children: jsx("span", { title: a, children: a }) });
  }, header: () => jsx("span", { children: "Connected Motors" }), footer: (e) => e.column.id }, { accessorFn: (e) => e.actions, id: "actions", header: () => jsx("span", { className: "text-white", children: "Actions" }), cell: () => jsx("div", { className: "w-full pl-2", children: jsx(t, {}) }) }], getCoreRowModel: getCoreRowModel() }), D = (e) => {
    var _a, _b;
    d({ to: `/devices/${e == null ? void 0 : e.id}/motors/${(_a = e == null ? void 0 : e.motors[0]) == null ? void 0 : _a.id}`, params: { device_id: e == null ? void 0 : e.id, motor_id: (_b = e == null ? void 0 : e.motors[0]) == null ? void 0 : _b.id } });
  };
  return jsxs("div", { className: "w-full text-sm flex justify-between", children: [jsxs("div", { className: "w-[35%] p-4 space-y-4 bg-white", children: [jsx("div", { className: "w-full", children: jsxs("form", { onSubmit: (e) => {
    e.preventDefault(), o && m && d({ to: `/devices/${o}/motors/${m}`, params: { device_id: o, motor_id: m }, search: { search_string: l || void 0, current_page: r.pageIndex, page_size: r.pageSize }, replace: true });
  }, className: "flex items-center justify-between w-full", children: [jsxs("div", { className: "flex items-center gap-1.5 border border-slate-200 rounded-md w-2/3 px-2", children: [jsx(C, {}), jsx("input", { placeholder: "Search devices...", className: "outline-none h-9 bg-transparent w-full", type: "search", value: h, onChange: (e) => y(e.target.value) })] }), jsx(f, { type: "submit", className: "p-2 h-fit w-fit bg-[#45A845] text-white rounded-md cursor-pointer disabled:opacity-50", disabled: f$1, children: "Search" })] }) }), jsx("div", { className: "w-full overflow-y-auto scrollbar-hidden", style: { height: "calc(100vh - 90px)" }, children: jsxs("table", { className: "w-full table-fixed", children: [jsx("thead", { className: "bg-[#45A845] font-normal sticky top-0 z-10", children: u.getHeaderGroups().map((e) => jsx("tr", { children: e.headers.map((a, i) => jsx("th", { className: `text-left text-xs font-normal text-white p-3 truncate ${i === 0 ? "w-[20%] rounded-tl-lg" : i === 1 || i === 2 ? "w-[30%]" : "w-[20%] rounded-tr-lg"}`, children: a.isPlaceholder ? null : flexRender(a.column.columnDef.header, a.getContext()) }, a.id)) }, e.id)) }), jsx("tbody", { children: u.getRowModel().rows.length === 0 ? !f$1 && jsx("tr", { children: jsx("td", { colSpan: 4, className: "p-3 text-center text-gray-500", children: "No devices found" }) }) : u.getRowModel().rows.map((e) => jsx("tr", { className: `transition-colors duration-200 border-b border-slate-200 cursor-pointer ${o == e.original.id ? "bg-[#E4F5E3]" : "hover:bg-gray-50 "}`, onClick: () => D(e.original), children: e.getVisibleCells().map((a, i) => jsx("td", { className: `p-3 overflow-hidden ${i === 0 ? "w-[20%]" : i === 1 || i === 2 ? "w-[30%]" : "w-[20%]"}`, children: flexRender(a.column.columnDef.cell, a.getContext()) }, a.id)) }, e.id)) })] }) })] }), jsx("div", { className: "w-[65%] overflow-hidden", children: jsx(Outlet, {}) })] });
}
const me = function() {
  return jsx("div", { className: "h-[90.5vh] overflow-hidden", children: jsx(V, {}) });
};

export { me as component };
//# sourceMappingURL=_devices-D3oc0WC6.mjs.map
