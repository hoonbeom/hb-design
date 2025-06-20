import { j as g } from "../../node_modules/react/jsx-runtime.js";
import { cn as s } from "../../lib/utils.js";
const i = {
  default: "bg-gray-100 text-gray-800",
  primary: "bg-primary-100 text-primary-800",
  secondary: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800"
};
function x({
  className: e,
  variant: r = "default",
  children: t,
  ref: a,
  ...n
}) {
  return /* @__PURE__ */ g.jsx(
    "span",
    {
      ref: a,
      className: s(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        i[r],
        e
      ),
      ...n,
      children: t
    }
  );
}
x.displayName = "Badge";
export {
  x as Badge
};
