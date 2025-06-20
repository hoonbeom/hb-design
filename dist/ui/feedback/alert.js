import { j as n } from "../../node_modules/react/jsx-runtime.js";
import { cn as d } from "../../lib/utils.js";
const b = {
  info: "bg-blue-50 text-blue-800 border-blue-200",
  success: "bg-green-50 text-green-800 border-green-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
  error: "bg-red-50 text-red-800 border-red-200"
};
function s({
  className: e,
  variant: r = "info",
  children: o,
  ref: t,
  ...l
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: t,
      className: d("rounded-md border p-4", b[r], e),
      role: "alert",
      ...l,
      children: o
    }
  );
}
s.displayName = "Alert";
export {
  s as Alert
};
