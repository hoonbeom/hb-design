import { j as t, c as a } from "./jsx-runtime-11ecb8bd.mjs";
import { useState as f } from "react";
const j = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, _ = {
  primary: "text-primary-600",
  white: "text-white",
  gray: "text-gray-600"
};
function p({
  className: l,
  size: r = "md",
  color: o = "primary",
  ref: e,
  ...s
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: e,
      className: a(
        "animate-spin",
        j[r],
        _[o],
        l
      ),
      ...s,
      children: /* @__PURE__ */ t.jsxs(
        "svg",
        {
          className: "h-full w-full",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            /* @__PURE__ */ t.jsx(
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
            /* @__PURE__ */ t.jsx(
              "path",
              {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }
            )
          ]
        }
      )
    }
  );
}
p.displayName = "Spinner";
const v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Spinner: p
}, Symbol.toStringTag, { value: "Module" })), N = {
  info: "bg-blue-50 text-blue-800 border-blue-200",
  success: "bg-green-50 text-green-800 border-green-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
  error: "bg-red-50 text-red-800 border-red-200"
};
function b({
  className: l,
  variant: r = "info",
  children: o,
  ref: e,
  ...s
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: e,
      className: a("rounded-md border p-4", N[r], l),
      role: "alert",
      ...s,
      children: o
    }
  );
}
b.displayName = "Alert";
const S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alert: b
}, Symbol.toStringTag, { value: "Module" }));
function g({
  className: l,
  isOpen: r,
  onClose: o,
  children: e,
  ref: s,
  ...n
}) {
  return r ? /* @__PURE__ */ t.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
    /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50", onClick: o }),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: s,
        className: a(
          "relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-large",
          l
        ),
        ...n,
        children: e
      }
    )
  ] }) : null;
}
g.displayName = "Modal";
const T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Modal: g
}, Symbol.toStringTag, { value: "Module" })), z = {
  top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
  left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
};
function x({
  className: l,
  content: r,
  children: o,
  position: e = "top",
  delay: s = 200,
  ref: n,
  ...y
}) {
  const [h, i] = f(!1), [c, d] = f(null), u = () => {
    const w = setTimeout(() => i(!0), s);
    d(w);
  }, m = () => {
    c && (clearTimeout(c), d(null)), i(!1);
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      ref: n,
      className: "relative inline-block",
      onMouseEnter: u,
      onMouseLeave: m,
      onFocus: u,
      onBlur: m,
      ...y,
      children: [
        o,
        h && /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: a(
              "absolute z-50 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-sm text-white shadow-lg",
              z[e],
              l
            ),
            role: "tooltip",
            children: [
              r,
              /* @__PURE__ */ t.jsx(
                "div",
                {
                  className: a(
                    "absolute h-2 w-2 rotate-45 transform bg-gray-900",
                    e === "top" && "left-1/2 top-full -mt-1 -translate-x-1/2",
                    e === "bottom" && "bottom-full left-1/2 -mb-1 -translate-x-1/2",
                    e === "left" && "left-full top-1/2 -ml-1 -translate-y-1/2",
                    e === "right" && "right-full top-1/2 -mr-1 -translate-y-1/2"
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}
x.displayName = "Tooltip";
const M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tooltip: x
}, Symbol.toStringTag, { value: "Module" })), k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dialog: T,
  Error: S,
  Loading: v,
  Tooltip: M
}, Symbol.toStringTag, { value: "Module" }));
export {
  v as a,
  S as b,
  T as c,
  M as d,
  k as i
};
