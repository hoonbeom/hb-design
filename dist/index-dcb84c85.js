import { j as e, c as d } from "./jsx-runtime-11ecb8bd.js";
const y = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-primary-500",
  ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
}, p = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base"
};
function u({
  className: n,
  variant: r = "primary",
  size: t = "md",
  loading: s = !1,
  disabled: o,
  children: a,
  ref: l,
  ...i
}) {
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: d(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        y[r],
        p[t],
        n
      ),
      ref: l,
      disabled: o || s,
      ...i,
      children: [
        s && /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: "-ml-1 mr-2 h-4 w-4 animate-spin",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }
              )
            ]
          }
        ),
        a
      ]
    }
  );
}
u.displayName = "Button";
function x({
  className: n,
  label: r,
  error: t,
  helperText: s,
  id: o,
  ref: a,
  ...l
}) {
  const i = o || `input-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    r && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: i,
        className: "mb-1 block text-sm font-medium text-gray-700",
        children: r
      }
    ),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        id: i,
        className: d(
          "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
          t && "border-red-300 focus:border-red-500 focus:ring-red-500",
          n
        ),
        ref: a,
        ...l
      }
    ),
    t && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-red-600", children: t }),
    s && !t && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray-500", children: s })
  ] });
}
x.displayName = "Input";
function g({
  className: n,
  label: r,
  error: t,
  helperText: s,
  options: o,
  placeholder: a,
  id: l,
  ref: i,
  ...b
}) {
  const m = l || `select-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    r && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: m,
        className: "mb-1 block text-sm font-medium text-gray-700",
        children: r
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "select",
      {
        id: m,
        className: d(
          "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
          t && "border-red-300 focus:border-red-500 focus:ring-red-500",
          n
        ),
        ref: i,
        ...b,
        children: [
          a && /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: a }),
          o.map((c) => /* @__PURE__ */ e.jsx(
            "option",
            {
              value: c.value,
              disabled: c.disabled,
              children: c.label
            },
            c.value
          ))
        ]
      }
    ),
    t && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-red-600", children: t }),
    s && !t && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray-500", children: s })
  ] });
}
g.displayName = "Select";
const h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: u,
  Input: x,
  Select: g
}, Symbol.toStringTag, { value: "Module" }));
export {
  u as B,
  x as I,
  g as S,
  h as i
};
