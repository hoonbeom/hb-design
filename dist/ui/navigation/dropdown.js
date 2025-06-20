import { j as e } from "../../node_modules/react/jsx-runtime.js";
import { useState as p, useRef as f, useEffect as x } from "react";
import { cn as c } from "../../lib/utils.js";
function g({
  className: s,
  trigger: t,
  children: r,
  align: n = "left",
  ref: i,
  ...m
}) {
  const [a, l] = p(!1), o = f(null);
  return x(() => {
    const d = (u) => {
      o.current && !o.current.contains(u.target) && l(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, []), /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: o,
      className: "relative inline-block text-left",
      ...m,
      children: [
        /* @__PURE__ */ e.jsx("div", { onClick: () => l(!a), children: t }),
        a && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: c(
              "absolute z-50 mt-2 w-56 rounded-md bg-white shadow-large ring-1 ring-black ring-opacity-5",
              n === "right" ? "right-0" : "left-0"
            ),
            children: /* @__PURE__ */ e.jsx("div", { className: "py-1", role: "menu", children: r })
          }
        )
      ]
    }
  );
}
g.displayName = "Dropdown";
function v({
  className: s,
  children: t,
  onClick: r,
  ref: n,
  ...i
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: n,
      className: c(
        "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
        s
      ),
      onClick: r,
      role: "menuitem",
      ...i,
      children: t
    }
  );
}
v.displayName = "DropdownItem";
export {
  g as Dropdown,
  v as DropdownItem
};
