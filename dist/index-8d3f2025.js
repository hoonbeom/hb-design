import { j as n, c as o } from "./jsx-runtime-11ecb8bd.js";
import m, { useState as b, useRef as T, useEffect as h } from "react";
function p({
  className: r,
  children: t,
  defaultIndex: e = 0,
  ref: a,
  ...s
}) {
  const [c, d] = b(e);
  return /* @__PURE__ */ n.jsx("div", { ref: a, className: o("w-full", r), ...s, children: m.Children.map(t, (i, l) => m.isValidElement(i) ? m.cloneElement(i, {
    isActive: l === c,
    onSelect: () => d(l)
  }) : i) });
}
p.displayName = "Tabs";
function f({
  className: r,
  children: t,
  ref: e,
  ...a
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: e,
      className: o("flex border-b border-gray-200", r),
      role: "tablist",
      ...a,
      children: t
    }
  );
}
f.displayName = "TabList";
function x({
  className: r,
  children: t,
  isActive: e = !1,
  onSelect: a,
  ref: s,
  ...c
}) {
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: s,
      className: o(
        "border-b-2 px-4 py-2 text-sm font-medium transition-colors",
        e ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
        r
      ),
      onClick: a,
      role: "tab",
      "aria-selected": e,
      ...c,
      children: t
    }
  );
}
x.displayName = "Tab";
function y({
  className: r,
  children: t,
  ref: e,
  ...a
}) {
  return /* @__PURE__ */ n.jsx("div", { ref: e, className: o("mt-4", r), ...a, children: t });
}
y.displayName = "TabPanels";
function v({
  className: r,
  children: t,
  isActive: e = !1,
  ref: a,
  ...s
}) {
  return e ? /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: a,
      className: o("outline-none", r),
      role: "tabpanel",
      ...s,
      children: t
    }
  ) : null;
}
v.displayName = "TabPanel";
function g({
  className: r,
  trigger: t,
  children: e,
  align: a = "left",
  ref: s,
  ...c
}) {
  const [d, i] = b(!1), l = T(null);
  return h(() => {
    const u = (j) => {
      l.current && !l.current.contains(j.target) && i(!1);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, []), /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: l,
      className: "relative inline-block text-left",
      ...c,
      children: [
        /* @__PURE__ */ n.jsx("div", { onClick: () => i(!d), children: t }),
        d && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: o(
              "absolute z-50 mt-2 w-56 rounded-md bg-white shadow-large ring-1 ring-black ring-opacity-5",
              a === "right" ? "right-0" : "left-0"
            ),
            children: /* @__PURE__ */ n.jsx("div", { className: "py-1", role: "menu", children: e })
          }
        )
      ]
    }
  );
}
g.displayName = "Dropdown";
function N({
  className: r,
  children: t,
  onClick: e,
  ref: a,
  ...s
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: a,
      className: o(
        "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
        r
      ),
      onClick: e,
      role: "menuitem",
      ...s,
      children: t
    }
  );
}
N.displayName = "DropdownItem";
const E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dropdown: g,
  DropdownItem: N,
  Tab: x,
  TabList: f,
  TabPanel: v,
  TabPanels: y,
  Tabs: p
}, Symbol.toStringTag, { value: "Module" }));
export {
  g as D,
  p as T,
  f as a,
  x as b,
  y as c,
  v as d,
  N as e,
  E as n
};
