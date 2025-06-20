import { j as r } from "../../node_modules/react/jsx-runtime.js";
import { cn as a } from "../../lib/utils.js";
const l = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, o = {
  primary: "text-primary-600",
  white: "text-white",
  gray: "text-gray-600"
};
function c({
  className: s,
  size: e = "md",
  color: t = "primary",
  ref: i,
  ...n
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: i,
      className: a(
        "animate-spin",
        l[e],
        o[t],
        s
      ),
      ...n,
      children: /* @__PURE__ */ r.jsxs(
        "svg",
        {
          className: "h-full w-full",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            /* @__PURE__ */ r.jsx(
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
            /* @__PURE__ */ r.jsx(
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
c.displayName = "Spinner";
export {
  c as Spinner
};
