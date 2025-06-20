import { j as s } from "../../node_modules/react/jsx-runtime.js";
import { cn as o } from "../../lib/utils.js";
const l = {
  body: "text-base leading-relaxed",
  caption: "text-sm text-gray-600",
  small: "text-sm",
  large: "text-lg leading-relaxed"
};
function m({
  className: t,
  variant: e = "body",
  children: a,
  ref: x,
  ...r
}) {
  return /* @__PURE__ */ s.jsx("p", { ref: x, className: o(l[e], t), ...r, children: a });
}
m.displayName = "Text";
export {
  m as Text
};
