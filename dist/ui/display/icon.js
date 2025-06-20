import { j as m } from "../../node_modules/react/jsx-runtime.js";
import { cn as s } from "../../lib/utils.js";
const t = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};
function c({
  className: o,
  name: l,
  size: n = "md",
  children: i,
  ref: r,
  ...e
}) {
  return /* @__PURE__ */ m.jsx(
    "svg",
    {
      ref: r,
      className: s("inline-block", t[n], o),
      fill: "currentColor",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      ...e,
      children: i
    }
  );
}
c.displayName = "Icon";
export {
  c as Icon
};
