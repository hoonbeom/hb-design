import { j as l } from "../../node_modules/react/jsx-runtime.js";
import { useState as n } from "react";
import { cn as m } from "../../lib/utils.js";
const h = {
  top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
  left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
};
function g({
  className: i,
  content: f,
  children: u,
  position: t = "top",
  delay: p = 200,
  ref: c,
  ...b
}) {
  const [d, o] = n(!1), [e, s] = n(null), r = () => {
    const x = setTimeout(() => o(!0), p);
    s(x);
  }, a = () => {
    e && (clearTimeout(e), s(null)), o(!1);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: c,
      className: "relative inline-block",
      onMouseEnter: r,
      onMouseLeave: a,
      onFocus: r,
      onBlur: a,
      ...b,
      children: [
        u,
        d && /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: m(
              "absolute z-50 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-sm text-white shadow-lg",
              h[t],
              i
            ),
            role: "tooltip",
            children: [
              f,
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: m(
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
g.displayName = "Tooltip";
export {
  g as Tooltip
};
