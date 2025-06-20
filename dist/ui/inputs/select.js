import { j as e } from "../../node_modules/react/jsx-runtime.js";
import { cn as u } from "../../lib/utils.js";
function x({
  className: m,
  label: l,
  error: s,
  helperText: r,
  options: c,
  placeholder: d,
  id: i,
  ref: n,
  ...o
}) {
  const a = i || `select-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    l && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: a,
        className: "mb-1 block text-sm font-medium text-gray-700",
        children: l
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "select",
      {
        id: a,
        className: u(
          "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
          s && "border-red-300 focus:border-red-500 focus:ring-red-500",
          m
        ),
        ref: n,
        ...o,
        children: [
          d && /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: d }),
          c.map((t) => /* @__PURE__ */ e.jsx(
            "option",
            {
              value: t.value,
              disabled: t.disabled,
              children: t.label
            },
            t.value
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-red-600", children: s }),
    r && !s && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray-500", children: r })
  ] });
}
x.displayName = "Select";
export {
  x as Select
};
