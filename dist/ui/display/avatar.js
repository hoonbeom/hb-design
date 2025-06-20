import { j as s } from "../../node_modules/react/jsx-runtime.js";
import { cn as n } from "../../lib/utils.js";
const d = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-16 w-16"
};
function f({
  className: a,
  src: r,
  alt: e,
  size: l = "md",
  children: t,
  ref: i,
  ...m
}) {
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: i,
      className: n(
        "relative flex shrink-0 overflow-hidden rounded-full",
        d[l],
        a
      ),
      ...m,
      children: r ? /* @__PURE__ */ s.jsx("img", { className: "aspect-square h-full w-full", src: r, alt: e }) : /* @__PURE__ */ s.jsx("div", { className: "flex h-full w-full items-center justify-center rounded-full bg-gray-100", children: t || /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-gray-600", children: (e == null ? void 0 : e.charAt(0).toUpperCase()) || "U" }) })
    }
  );
}
f.displayName = "Avatar";
export {
  f as Avatar
};
