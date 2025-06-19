import { j as e, c as a } from "../jsx-runtime-11ecb8bd.mjs";
import { useState as f } from "react";
const g = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, h = {
  primary: "text-primary-600",
  white: "text-white",
  gray: "text-gray-600"
};
function w({
  className: l,
  size: r = "md",
  color: s = "primary",
  ref: t,
  ...o
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: t,
      className: a(
        "animate-spin",
        g[r],
        h[s],
        l
      ),
      ...o,
      children: /* @__PURE__ */ e.jsxs(
        "svg",
        {
          className: "h-full w-full",
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
      )
    }
  );
}
w.displayName = "Spinner";
const y = {
  info: "bg-blue-50 text-blue-800 border-blue-200",
  success: "bg-green-50 text-green-800 border-green-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
  error: "bg-red-50 text-red-800 border-red-200"
};
function N({
  className: l,
  variant: r = "info",
  children: s,
  ref: t,
  ...o
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: t,
      className: a("rounded-md border p-4", y[r], l),
      role: "alert",
      ...o,
      children: s
    }
  );
}
N.displayName = "Alert";
function j({
  className: l,
  isOpen: r,
  onClose: s,
  children: t,
  ref: o,
  ...n
}) {
  return r ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50", onClick: s }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: o,
        className: a(
          "relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-large",
          l
        ),
        ...n,
        children: t
      }
    )
  ] }) : null;
}
j.displayName = "Modal";
const v = {
  top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
  left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
};
function T({
  className: l,
  content: r,
  children: s,
  position: t = "top",
  delay: o = 200,
  ref: n,
  ...p
}) {
  const [x, i] = f(!1), [m, c] = f(null), d = () => {
    const b = setTimeout(() => i(!0), o);
    c(b);
  }, u = () => {
    m && (clearTimeout(m), c(null)), i(!1);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: n,
      className: "relative inline-block",
      onMouseEnter: d,
      onMouseLeave: u,
      onFocus: d,
      onBlur: u,
      ...p,
      children: [
        s,
        x && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: a(
              "absolute z-50 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-sm text-white shadow-lg",
              v[t],
              l
            ),
            role: "tooltip",
            children: [
              r,
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: a(
                    "absolute h-2 w-2 rotate-45 transform bg-gray-900",
                    t === "top" && "left-1/2 top-full -mt-1 -translate-x-1/2",
                    t === "bottom" && "bottom-full left-1/2 -mb-1 -translate-x-1/2",
                    t === "left" && "left-full top-1/2 -ml-1 -translate-y-1/2",
                    t === "right" && "right-full top-1/2 -mr-1 -translate-y-1/2"
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
T.displayName = "Tooltip";
export {
  N as Alert,
  j as Modal,
  w as Spinner,
  T as Tooltip
};
