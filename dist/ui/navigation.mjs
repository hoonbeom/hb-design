import { j as a, c as o } from "../jsx-runtime-11ecb8bd.mjs";
import m, { useState as p, useRef as f, useEffect as x } from "react";
function y({
  className: n,
  children: r,
  defaultIndex: e = 0,
  ref: t,
  ...s
}) {
  const [d, c] = p(e);
  return /* @__PURE__ */ a.jsx("div", { ref: t, className: o("w-full", n), ...s, children: m.Children.map(r, (i, l) => m.isValidElement(i) ? m.cloneElement(i, {
    isActive: l === d,
    onSelect: () => c(l)
  }) : i) });
}
y.displayName = "Tabs";
function v({
  className: n,
  children: r,
  ref: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: e,
      className: o("flex border-b border-gray-200", n),
      role: "tablist",
      ...t,
      children: r
    }
  );
}
v.displayName = "TabList";
function N({
  className: n,
  children: r,
  isActive: e = !1,
  onSelect: t,
  ref: s,
  ...d
}) {
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      ref: s,
      className: o(
        "border-b-2 px-4 py-2 text-sm font-medium transition-colors",
        e ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
        n
      ),
      onClick: t,
      role: "tab",
      "aria-selected": e,
      ...d,
      children: r
    }
  );
}
N.displayName = "Tab";
function g({
  className: n,
  children: r,
  ref: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx("div", { ref: e, className: o("mt-4", n), ...t, children: r });
}
g.displayName = "TabPanels";
function j({
  className: n,
  children: r,
  isActive: e = !1,
  ref: t,
  ...s
}) {
  return e ? /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: t,
      className: o("outline-none", n),
      role: "tabpanel",
      ...s,
      children: r
    }
  ) : null;
}
j.displayName = "TabPanel";
function h({
  className: n,
  trigger: r,
  children: e,
  align: t = "left",
  ref: s,
  ...d
}) {
  const [c, i] = p(!1), l = f(null);
  return x(() => {
    const u = (b) => {
      l.current && !l.current.contains(b.target) && i(!1);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, []), /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: l,
      className: "relative inline-block text-left",
      ...d,
      children: [
        /* @__PURE__ */ a.jsx("div", { onClick: () => i(!c), children: r }),
        c && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: o(
              "absolute z-50 mt-2 w-56 rounded-md bg-white shadow-large ring-1 ring-black ring-opacity-5",
              t === "right" ? "right-0" : "left-0"
            ),
            children: /* @__PURE__ */ a.jsx("div", { className: "py-1", role: "menu", children: e })
          }
        )
      ]
    }
  );
}
h.displayName = "Dropdown";
function w({
  className: n,
  children: r,
  onClick: e,
  ref: t,
  ...s
}) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: t,
      className: o(
        "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
        n
      ),
      onClick: e,
      role: "menuitem",
      ...s,
      children: r
    }
  );
}
w.displayName = "DropdownItem";
export {
  h as Dropdown,
  w as DropdownItem,
  N as Tab,
  v as TabList,
  j as TabPanel,
  g as TabPanels,
  y as Tabs
};
