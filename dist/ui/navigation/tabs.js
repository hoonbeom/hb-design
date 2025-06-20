import { j as s } from "../../node_modules/react/jsx-runtime.js";
import m, { useState as c } from "react";
import { cn as l } from "../../lib/utils.js";
function d({
  className: a,
  children: r,
  defaultIndex: e = 0,
  ref: t,
  ...n
}) {
  const [o, u] = c(e);
  return /* @__PURE__ */ s.jsx("div", { ref: t, className: l("w-full", a), ...n, children: m.Children.map(r, (i, b) => m.isValidElement(i) ? m.cloneElement(i, {
    isActive: b === o,
    onSelect: () => u(b)
  }) : i) });
}
d.displayName = "Tabs";
function p({
  className: a,
  children: r,
  ref: e,
  ...t
}) {
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: e,
      className: l("flex border-b border-gray-200", a),
      role: "tablist",
      ...t,
      children: r
    }
  );
}
p.displayName = "TabList";
function f({
  className: a,
  children: r,
  isActive: e = !1,
  onSelect: t,
  ref: n,
  ...o
}) {
  return /* @__PURE__ */ s.jsx(
    "button",
    {
      ref: n,
      className: l(
        "border-b-2 px-4 py-2 text-sm font-medium transition-colors",
        e ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
        a
      ),
      onClick: t,
      role: "tab",
      "aria-selected": e,
      ...o,
      children: r
    }
  );
}
f.displayName = "Tab";
function x({
  className: a,
  children: r,
  ref: e,
  ...t
}) {
  return /* @__PURE__ */ s.jsx("div", { ref: e, className: l("mt-4", a), ...t, children: r });
}
x.displayName = "TabPanels";
function y({
  className: a,
  children: r,
  isActive: e = !1,
  ref: t,
  ...n
}) {
  return e ? /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: t,
      className: l("outline-none", a),
      role: "tabpanel",
      ...n,
      children: r
    }
  ) : null;
}
y.displayName = "TabPanel";
export {
  f as Tab,
  p as TabList,
  y as TabPanel,
  x as TabPanels,
  d as Tabs
};
