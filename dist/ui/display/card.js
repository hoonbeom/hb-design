import { j as e } from "../../node_modules/react/jsx-runtime.js";
import { cn as s } from "../../lib/utils.js";
function t({
  className: r,
  children: o,
  ref: a,
  ...d
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: a,
      className: s(
        "rounded-lg border border-gray-200 bg-white shadow-soft",
        r
      ),
      ...d,
      children: o
    }
  );
}
t.displayName = "Card";
export {
  t as Card
};
