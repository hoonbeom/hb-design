import { j as n, c as o } from "./utils-4c21fbcf.js";
import m, { useState as b, useRef as T, useEffect as h } from "react";
function p({
  className: a,
  trigger: t,
  children: e,
  align: r = "left",
  ref: s,
  ...d
}) {
  const [c, i] = b(!1), l = T(null);
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
      ...d,
      children: [
        /* @__PURE__ */ n.jsx("div", { onClick: () => i(!c), children: t }),
        c && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: o(
              "absolute z-50 mt-2 w-56 rounded-md bg-white shadow-large ring-1 ring-black ring-opacity-5",
              r === "right" ? "right-0" : "left-0"
            ),
            children: /* @__PURE__ */ n.jsx("div", { className: "py-1", role: "menu", children: e })
          }
        )
      ]
    }
  );
}
p.displayName = "Dropdown";
function f({
  className: a,
  children: t,
  onClick: e,
  ref: r,
  ...s
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: r,
      className: o(
        "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
        a
      ),
      onClick: e,
      role: "menuitem",
      ...s,
      children: t
    }
  );
}
f.displayName = "DropdownItem";
function x({
  className: a,
  children: t,
  defaultIndex: e = 0,
  ref: r,
  ...s
}) {
  const [d, c] = b(e);
  return /* @__PURE__ */ n.jsx("div", { ref: r, className: o("w-full", a), ...s, children: m.Children.map(t, (i, l) => m.isValidElement(i) ? m.cloneElement(i, {
    isActive: l === d,
    onSelect: () => c(l)
  }) : i) });
}
x.displayName = "Tabs";
function y({
  className: a,
  children: t,
  ref: e,
  ...r
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: e,
      className: o("flex border-b border-gray-200", a),
      role: "tablist",
      ...r,
      children: t
    }
  );
}
y.displayName = "TabList";
function v({
  className: a,
  children: t,
  isActive: e = !1,
  onSelect: r,
  ref: s,
  ...d
}) {
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: s,
      className: o(
        "border-b-2 px-4 py-2 text-sm font-medium transition-colors",
        e ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
        a
      ),
      onClick: r,
      role: "tab",
      "aria-selected": e,
      ...d,
      children: t
    }
  );
}
v.displayName = "Tab";
function g({
  className: a,
  children: t,
  ref: e,
  ...r
}) {
  return /* @__PURE__ */ n.jsx("div", { ref: e, className: o("mt-4", a), ...r, children: t });
}
g.displayName = "TabPanels";
function N({
  className: a,
  children: t,
  isActive: e = !1,
  ref: r,
  ...s
}) {
  return e ? /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: r,
      className: o("outline-none", a),
      role: "tabpanel",
      ...s,
      children: t
    }
  ) : null;
}
N.displayName = "TabPanel";
const E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dropdown: p,
  DropdownItem: f,
  Tab: v,
  TabList: y,
  TabPanel: N,
  TabPanels: g,
  Tabs: x
}, Symbol.toStringTag, { value: "Module" }));
export {
  p as D,
  x as T,
  f as a,
  y as b,
  v as c,
  g as d,
  N as e,
  E as i
};
