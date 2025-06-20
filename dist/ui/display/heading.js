import { j as e } from "../../node_modules/react/jsx-runtime.js";
import { cn as r } from "../../lib/utils.js";
const i = {
  1: "text-4xl font-bold tracking-tight",
  2: "text-3xl font-bold tracking-tight",
  3: "text-2xl font-semibold tracking-tight",
  4: "text-xl font-semibold",
  5: "text-lg font-medium",
  6: "text-base font-medium"
};
function m({
  className: o,
  level: a = 1,
  children: t,
  ref: x,
  ...n
}) {
  const s = {
    ref: x,
    className: r(i[a], o),
    ...n
  };
  switch (a) {
    case 1:
      return /* @__PURE__ */ e.jsx("h1", { ...s, children: t });
    case 2:
      return /* @__PURE__ */ e.jsx("h2", { ...s, children: t });
    case 3:
      return /* @__PURE__ */ e.jsx("h3", { ...s, children: t });
    case 4:
      return /* @__PURE__ */ e.jsx("h4", { ...s, children: t });
    case 5:
      return /* @__PURE__ */ e.jsx("h5", { ...s, children: t });
    case 6:
      return /* @__PURE__ */ e.jsx("h6", { ...s, children: t });
    default:
      return /* @__PURE__ */ e.jsx("h1", { ...s, children: t });
  }
}
m.displayName = "Heading";
export {
  m as Heading
};
