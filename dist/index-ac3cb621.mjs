import { j as a, c as s } from "./jsx-runtime-11ecb8bd.mjs";
import u, { useState as b, useRef as T, useEffect as w } from "react";
function p({
  className: n,
  children: t,
  defaultIndex: e = 0,
  ref: r,
  ...o
}) {
  const [d, c] = b(e);
  return /* @__PURE__ */ a.jsx("div", { ref: r, className: s("w-full", n), ...o, children: u.Children.map(t, (l, i) => u.isValidElement(l) ? u.cloneElement(l, {
    isActive: i === d,
    onSelect: () => c(i)
  }) : l) });
}
p.displayName = "Tabs";
function f({
  className: n,
  children: t,
  ref: e,
  ...r
}) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: e,
      className: s("flex border-b border-gray-200", n),
      role: "tablist",
      ...r,
      children: t
    }
  );
}
f.displayName = "TabList";
function x({
  className: n,
  children: t,
  isActive: e = !1,
  onSelect: r,
  ref: o,
  ...d
}) {
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      ref: o,
      className: s(
        "border-b-2 px-4 py-2 text-sm font-medium transition-colors",
        e ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
        n
      ),
      onClick: r,
      role: "tab",
      "aria-selected": e,
      ...d,
      children: t
    }
  );
}
x.displayName = "Tab";
function y({
  className: n,
  children: t,
  ref: e,
  ...r
}) {
  return /* @__PURE__ */ a.jsx("div", { ref: e, className: s("mt-4", n), ...r, children: t });
}
y.displayName = "TabPanels";
function g({
  className: n,
  children: t,
  isActive: e = !1,
  ref: r,
  ...o
}) {
  return e ? /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: r,
      className: s("outline-none", n),
      role: "tabpanel",
      ...o,
      children: t
    }
  ) : null;
}
g.displayName = "TabPanel";
const _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tab: x,
  TabList: f,
  TabPanel: g,
  TabPanels: y,
  Tabs: p
}, Symbol.toStringTag, { value: "Module" }));
function v({
  className: n,
  trigger: t,
  children: e,
  align: r = "left",
  ref: o,
  ...d
}) {
  const [c, l] = b(!1), i = T(null);
  return w(() => {
    const m = (N) => {
      i.current && !i.current.contains(N.target) && l(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []), /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: i,
      className: "relative inline-block text-left",
      ...d,
      children: [
        /* @__PURE__ */ a.jsx("div", { onClick: () => l(!c), children: t }),
        c && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: s(
              "absolute z-50 mt-2 w-56 rounded-md bg-white shadow-large ring-1 ring-black ring-opacity-5",
              r === "right" ? "right-0" : "left-0"
            ),
            children: /* @__PURE__ */ a.jsx("div", { className: "py-1", role: "menu", children: e })
          }
        )
      ]
    }
  );
}
v.displayName = "Dropdown";
function j({
  className: n,
  children: t,
  onClick: e,
  ref: r,
  ...o
}) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: r,
      className: s(
        "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
        n
      ),
      onClick: e,
      role: "menuitem",
      ...o,
      children: t
    }
  );
}
j.displayName = "DropdownItem";
const h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dropdown: v,
  DropdownItem: j
}, Symbol.toStringTag, { value: "Module" })), P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dropdown: h,
  Tabs: _
}, Symbol.toStringTag, { value: "Module" }));
export {
  _ as a,
  h as b,
  P as i
};
