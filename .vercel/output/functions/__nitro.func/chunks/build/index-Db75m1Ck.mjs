import { jsx, jsxs } from 'react/jsx-runtime';
import { v, S, L, h as h$1, g, u, y } from './sheet-CmrNcgjG.mjs';
import b from 'highcharts';
import O from 'highcharts-react-official';
import * as f from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { h, l, C as C$1, w } from './deviceses-DLdDnwk-.mjs';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate, useSearch } from '@tanstack/react-router';
import S$1 from 'dayjs';
import { Loader } from 'lucide-react';
import '@radix-ui/react-dialog';
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
import 'input-otp';
import 'clsx';
import 'tailwind-merge';
import 'sonner';
import 'js-cookie';
import 'react-hook-form';
import 'node:stream';
import 'isbot';
import 'react-dom/server';
import './fetch-BiUOK24f.mjs';

const C = ({ motorData: t, paramater: i }) => {
  const { device_id: o, motor_id: f } = useParams({ strict: false }), a = useMemo(() => ({ pond_id: t == null ? void 0 : t.pond_id, ipv6: t == null ? void 0 : t.ipv6, motor_ref_id: t == null ? void 0 : t.motor_ref_id }), [t == null ? void 0 : t.pond_id, t == null ? void 0 : t.ipv6, t == null ? void 0 : t.motor_ref_id]), l = useCallback(async () => {
    var _a, _b;
    if (!a.pond_id || !a.ipv6 || !a.motor_ref_id) return [];
    const c = { parmater: i, from_date: "2025-03-11", to_date: "2025-03-13" };
    return ((_b = (_a = await w({ pondId: a.pond_id, device_ipv6: a.ipv6, motor_ref_id: a.motor_ref_id, queryParams: c })) == null ? void 0 : _a.data) == null ? void 0 : _b.data) || [];
  }, [a, i]), { data: m = [], isLoading: p } = useQuery({ queryKey: [`${i}data`, o, f, a], queryFn: l, enabled: !!o && !!f && !!a.pond_id && !!a.ipv6 && !!a.motor_ref_id }), u = useMemo(() => ({ chart: { type: "areaspline", height: 175, backgroundColor: "transparent" }, title: { text: "" }, legend: { enabled: false }, xAxis: { lineWidth: 1, lineColor: "#BFC1C6", tickWidth: 0, max: 11, categories: m.map((c) => S$1(c == null ? void 0 : c.time_stamp).format("h:mm")), title: { text: `Time stamp ${m.slice(0, 1).map((c) => S$1(c == null ? void 0 : c.time_stamp).format("A"))}` }, labels: { style: { fontSize: "10px" } } }, yAxis: { gridLineDashStyle: "Dash", lineWidth: 1, lineColor: "#BFC1C6", tickWidth: 0, title: { text: "" }, labels: { style: { fontSize: "10px" } } }, credits: { enabled: false }, plotOptions: { areaspline: { fillOpacity: 0.5 } }, series: [{ color: "#F48403", marker: { enabled: false }, name: i, data: m.map((c) => i === "current" ? (c == null ? void 0 : c.current_avg) || 0 : (c == null ? void 0 : c.voltage_avg) || 0), fillColor: { linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, stops: [[0, "rgba(244, 160, 3, 0.20)"], [1, "rgba(244, 160, 3, 0.00)"]] } }] }), [m, i]);
  return jsxs("div", { className: "relative", children: [jsxs("figure", { className: "highcharts-figure rounded-xl w-full overflow-hidden bg-white border border-gray-200", children: [jsx("div", { className: "flex items-center justify-between px-4 py-2", children: jsxs("div", { className: "flex items-center gap-2", children: [jsx("img", { src: "/assets/thunder.svg", alt: "" }), jsx("div", { className: "capitalize", children: i })] }) }), m.length === 0 && !p ? jsx("div", { className: "h-[175px] flex items-center justify-center", children: "No data found" }) : jsx(O, { highcharts: b, options: u })] }), p && jsx("div", { className: "absolute top-1/2 left-1/2", children: jsx(Loader, {}) })] });
}, U = ({ singlemotordata: t }) => {
  var _a;
  const { device_id: i, motor_id: o } = useParams({ strict: false }), [f$1, a] = f.useState(), [l$1, m] = f.useState({}), { data: p, error: u$1, isLoading: c } = useQuery({ queryKey: ["singleMotor", i, o], queryFn: async () => {
    var _a2;
    try {
      const n = await l(i, o);
      if (n.success) {
        const g = (_a2 = n == null ? void 0 : n.data) == null ? void 0 : _a2.data;
        return m(g), g;
      } else throw n;
    } catch (n) {
      throw console.error(n), n;
    }
  } });
  return jsxs("div", { className: " py-2", children: [jsxs("div", { className: "flex w-full gap-3 2xl:text-xs lg:text-xs", children: [jsxs("div", { className: "border border-gray-300 rounded-xl bg-white overflow-hidden w-[50%]", children: [jsx("div", { className: "p-2 bg-gray-50 border-l font-semibold text-gray-500", children: t == null ? void 0 : t.motor_name }), jsx("div", { className: "w-full", children: jsx("div", { className: "h-full py-[10%]", children: jsx("table", { className: "w-full h-full", children: jsxs("tbody", { className: "space-y-3 h-full", children: [jsxs("tr", { className: "flex items-center justify-between pl-2", children: [jsx("th", { className: "flex items-center", children: jsxs("div", { className: "flex items-center gap-2 font-normal responsive-font", children: [jsx("img", { src: "/assets/thunder.svg", alt: "Voltage" }), jsx("div", { children: "Voltage(V):" })] }) }), jsx("td", { className: "flex items-center justify-center responsive-font", children: jsx("div", { children: (t == null ? void 0 : t.line_voltage_vry) || "-" }) }), jsx("td", { className: "flex items-center justify-center responsive-font", children: (t == null ? void 0 : t.line_voltage_vyb) || "-" }), jsx("td", { className: "flex items-center justify-center pr-4 responsive-font", children: (t == null ? void 0 : t.line_voltage_vbr) || "-" })] }), jsxs("tr", { className: "flex items-center justify-between pl-2", children: [jsx("th", { className: "flex items-center", children: jsxs("div", { className: "flex items-center gap-2 font-normal responsive-font", children: [jsx("img", { src: "/assets/meter.svg", alt: "Current" }), jsx("div", { children: "Current(A):" })] }) }), jsx("td", { className: "flex items-center justify-center responsive-font", children: (t == null ? void 0 : t.current_i1) || "-" }), jsx("td", { className: "flex items-center justify-center responsive-font", children: (t == null ? void 0 : t.current_i2) || "-" }), jsx("td", { className: "flex items-center justify-center pr-4 responsive-font", children: (t == null ? void 0 : t.current_i3) || "-" })] })] }) }) }) })] }), jsxs("div", { className: "border-gray-300 rounded-xl bg-white overflow-hidden w-[50%] border space-y-5", children: [jsxs("div", { className: "flex justify-between p-2 bg-gray-50 border-l font-semibold text-gray-500", children: [jsx("div", { children: t == null ? void 0 : t.device_name }), jsxs(v, { children: [jsx(S, { children: jsxs("button", { className: "flex items-center gap-1.5 text-black", children: [jsx(L, {}), jsx("div", { children: "Settings" })] }) }), jsx(h$1, { children: jsxs(g, { children: [jsx(u, { children: "Are you absolutely sure?" }), jsx(y, { children: "This action cannot be undone." })] }) })] })] }), jsx("div", { className: "px-2", children: jsxs("div", { className: "w-full space-y-5", children: [jsxs("div", { className: "flex items-center justify-between gap-8", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx("img", { src: "/assets/id.svg", alt: "Device ID" }), jsx("div", { children: "Device ID:" })] }), jsx("div", { children: t == null ? void 0 : t.serial_no })] }), jsxs("div", { className: "", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx("img", { src: "/assets/plug.svg", alt: "Connected Motors" }), jsx("div", { children: "Connected Motors" })] }), jsx("div", { className: "w-full flex gap-2 items-center py-2 flex-nowrap overflow-x-auto scrollbar-hidden", children: jsx("div", { className: "w-full flex gap-2 flex-nowrap", children: ((_a = t == null ? void 0 : t.connected_motors) == null ? void 0 : _a.length) > 0 ? t.connected_motors.map((n) => jsxs("div", { className: "flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 border border-green-200 shrink-0", children: [jsx("img", { src: "/assets/whitemotor.svg", alt: "Motor" }), jsx("div", { className: "text-xs", children: n.title })] }, n.id)) : jsx("div", { className: "text-gray-400 text-sm", children: "No connected motors" }) }) })] })] }) })] })] }), jsx("div", { className: "pt-2", children: jsx(C, { motorData: l$1, paramater: "voltage" }) }), jsx("div", { className: "py-2", children: jsx(C, { motorData: l$1, paramater: "current" }) })] });
}, J = () => {
  var _a, _b, _c;
  const { device_id: t, motor_id: i } = useParams({ strict: false }), o = useNavigate(), a = (_a = useSearch({ from: "/_layout/_devices/devices/$device_id/motors/$motor_id/" }).search) != null ? _a : "", [l$1, m] = useState(a), [p, u] = useState(null);
  useEffect(() => {
    const s = setTimeout(() => {
      t && i && o({ to: `/devices/${t}/motors/${i}`, search: { search: l$1 || void 0 }, replace: true });
    }, 300);
    return () => clearTimeout(s);
  }, [l$1, t, i, o]);
  const c = (s) => {
    u(p === Number(t) ? null : Number(t)), o({ to: `/devices/${t}/motors/${s}`, search: { search: l$1 || void 0 } });
  }, { data: n, isLoading: g, isError: D, error: E } = useQuery({ queryKey: ["single-device", t, l$1], queryFn: async () => {
    var _a2;
    const s = await h(t);
    if (!s.success) throw new Error(s.message || "Failed to fetch device data");
    const d = ((_a2 = s == null ? void 0 : s.data) == null ? void 0 : _a2.data) || [];
    if (!l$1) return d;
    const $ = l$1.toLowerCase();
    return d.map((y) => ({ ...y, motors: y.motors.filter((h) => {
      var _a3;
      const k = h.state !== 0 ? "on" : "off";
      return [String(h.id), (_a3 = h.title) == null ? void 0 : _a3.toLowerCase(), h.hp !== null ? String(h.hp) : "", String(h.state), k].some((b) => b && b.includes($));
    }) }));
  }, enabled: !!t, staleTime: 5 * 60 * 1e3 }), { data: F } = useQuery({ queryKey: ["singleMotor", t, i], queryFn: async () => {
    var _a2;
    const s = await l(t, i);
    if (!s.success) throw new Error(s.message || "Failed to fetch motor data");
    return (_a2 = s == null ? void 0 : s.data) == null ? void 0 : _a2.data;
  }, enabled: !!t && !!i, staleTime: 5 * 60 * 1e3 });
  return jsxs("div", { className: "w-full text-sm flex ", children: [jsxs("div", { className: "w-[45%] p-4 space-y-4", children: [jsxs("form", { onSubmit: (s) => {
    s.preventDefault();
  }, className: "flex items-center justify-between w-full", children: [jsxs("div", { className: "flex items-center gap-1.5 border border-slate-200 rounded-md w-2/3 px-2", children: [jsx(C$1, {}), jsx("input", { placeholder: "Search motors", className: "outline-none h-9 bg-transparent w-full", type: "text", value: l$1, onChange: (s) => m(s.target.value), "aria-label": "Search motors" })] }), jsx("button", { type: "submit", className: "p-2 h-fit w-fit bg-[#45A845] text-white rounded-md cursor-pointer", children: "Search" })] }), jsx("div", { className: "h-[81dvh] overflow-y-auto", children: g ? jsx("div", { className: "text-center text-gray-500 py-4", children: "Loading device data..." }) : D ? jsxs("div", { className: "text-center text-red-500 py-4", children: ["Error loading device data: ", (E == null ? void 0 : E.message) || "Unknown error"] }) : (n == null ? void 0 : n.length) === 0 || !((_c = (_b = n == null ? void 0 : n[0]) == null ? void 0 : _b.motors) == null ? void 0 : _c.length) ? jsx("div", { className: "text-center text-gray-500 py-4", children: "No motors found" }) : n == null ? void 0 : n.map((s) => {
    var _a2;
    return jsxs("div", { children: [jsx("div", { className: "text-[#05A155] mb-2", children: s == null ? void 0 : s.title }), jsx("ul", { className: "list-none space-y-2", children: (_a2 = s == null ? void 0 : s.motors) == null ? void 0 : _a2.map((d) => jsxs("li", { className: `flex cursor-pointer items-center gap-2 border p-2 px-4 border-slate-200 justify-between hover:bg-[#E4F5E3] rounded-md ${Number(i) === (d == null ? void 0 : d.id) ? "bg-[#E4F5E3]" : "hover:bg-gray-50 bg-white"}`, onClick: () => c(d == null ? void 0 : d.id), children: [jsx("span", { className: "text-sm text-gray-600 w-1/3 truncate", children: d.title || "No motors" }), jsx("span", { className: "w-1/3 flex items-center justify-center", children: jsxs("span", { className: `px-2 py-0.5 rounded-full flex w-fit items-center text-center gap-1 ${d.state !== 0 ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`, children: [jsx("span", { className: `h-[6px] w-[6px] rounded-full ${d.state !== 0 ? "bg-green-600" : "bg-red-600"}` }), jsx("span", { children: d.state !== 0 ? "On" : "Off" })] }) }), jsx("span", { className: "w-1/3 flex items-center justify-end", children: jsx("img", { src: "/assets/Eye.svg", alt: "View" }) })] }, d.id)) })] }, s == null ? void 0 : s.id);
  }) })] }), jsx("div", { className: "w-[55%] h-[92dvh] overflow-scroll scrollbar-hidden px-4 bg-white", children: jsx(U, { singlemotordata: F }) })] });
}, Se = function() {
  return jsx("div", { children: jsx(J, {}) });
};

export { Se as component };
//# sourceMappingURL=index-Db75m1Ck.mjs.map
