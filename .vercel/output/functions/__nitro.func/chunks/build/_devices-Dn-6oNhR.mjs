import { jsxs, jsx } from 'react/jsx-runtime';
import { Outlet, useNavigate, useParams, useLocation } from '@tanstack/react-router';

const p = () => {
  const t = useNavigate(), { users_id: r } = useParams({ strict: false }), { pathname: n } = useLocation(), s = n.includes("Apfc"), c = n.includes("StarterBox");
  return jsx("div", { className: "p-2", children: jsxs("div", { className: "flex items-center bg-[#E4F5E3] w-fit rounded-md cursor-pointer", children: [jsx("div", { className: `h-full p-1 m-1 px-2 rounded-[4px] ${s ? "bg-green-600 text-white" : ""}`, onClick: () => t({ to: `/users/${r}/Apfc` }), children: "APFC" }), jsx("div", { className: `h-full p-1 m-1 px-2 rounded-[4px] ${c ? "bg-green-600 text-white" : ""}`, onClick: () => t({ to: `/users/${r}/StarterBox` }), children: "Starter Box" })] }) });
}, x = function() {
  return jsxs("div", { children: [jsx(p, {}), jsx(Outlet, {})] });
};

export { x as component };
//# sourceMappingURL=_devices-Dn-6oNhR.mjs.map
