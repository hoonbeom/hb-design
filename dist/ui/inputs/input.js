import { j as s } from "../../node_modules/react/jsx-runtime.js";
import { cn as i } from "../../lib/utils.js";
function c({
  className: d,
  label: r,
  error: t,
  helperText: m,
  id: a,
  ref: n,
  ...o
}) {
  const e = a || `input-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ s.jsxs("div", { className: "w-full", children: [
    r && /* @__PURE__ */ s.jsx(
      "label",
      {
        htmlFor: e,
        className: "mb-1 block text-sm font-medium text-gray-700",
        children: r
      }
    ),
    /* @__PURE__ */ s.jsx(
      "input",
      {
        id: e,
        className: i(
          "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
          t && "border-red-300 focus:border-red-500 focus:ring-red-500",
          d
        ),
        ref: n,
        ...o
      }
    ),
    t && /* @__PURE__ */ s.jsx("p", { className: "mt-1 text-sm text-red-600", children: t }),
    m && !t && /* @__PURE__ */ s.jsx("p", { className: "mt-1 text-sm text-gray-500", children: m })
  ] });
}
c.displayName = "Input";
export {
  c as Input
};
