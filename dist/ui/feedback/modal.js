import { j as e } from "../../node_modules/react/jsx-runtime.js";
import { cn as n } from "../../lib/utils.js";
function d({
  className: i,
  isOpen: s,
  onClose: a,
  children: l,
  ref: t,
  ...r
}) {
  return s ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50", onClick: a }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: t,
        className: n(
          "relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-large",
          i
        ),
        ...r,
        children: l
      }
    )
  ] }) : null;
}
d.displayName = "Modal";
export {
  d as Modal
};
