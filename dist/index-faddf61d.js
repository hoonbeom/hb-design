import { j as t, c as i } from "./utils-4c21fbcf.js";
const f = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-16 w-16"
};
function o({
  className: s,
  src: a,
  alt: e,
  size: r = "md",
  children: l,
  ref: n,
  ...g
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: n,
      className: i(
        "relative flex shrink-0 overflow-hidden rounded-full",
        f[r],
        s
      ),
      ...g,
      children: a ? /* @__PURE__ */ t.jsx("img", { className: "aspect-square h-full w-full", src: a, alt: e }) : /* @__PURE__ */ t.jsx("div", { className: "flex h-full w-full items-center justify-center rounded-full bg-gray-100", children: l || /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium text-gray-600", children: (e == null ? void 0 : e.charAt(0).toUpperCase()) || "U" }) })
    }
  );
}
o.displayName = "Avatar";
const y = {
  default: "bg-gray-100 text-gray-800",
  primary: "bg-primary-100 text-primary-800",
  secondary: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800"
};
function d({
  className: s,
  variant: a = "default",
  children: e,
  ref: r,
  ...l
}) {
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      ref: r,
      className: i(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        y[a],
        s
      ),
      ...l,
      children: e
    }
  );
}
d.displayName = "Badge";
function x({
  className: s,
  children: a,
  ref: e,
  ...r
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: e,
      className: i(
        "rounded-lg border border-gray-200 bg-white shadow-soft",
        s
      ),
      ...r,
      children: a
    }
  );
}
x.displayName = "Card";
const h = {
  1: "text-4xl font-bold tracking-tight",
  2: "text-3xl font-bold tracking-tight",
  3: "text-2xl font-semibold tracking-tight",
  4: "text-xl font-semibold",
  5: "text-lg font-medium",
  6: "text-base font-medium"
};
function c({
  className: s,
  level: a = 1,
  children: e,
  ref: r,
  ...l
}) {
  const n = {
    ref: r,
    className: i(h[a], s),
    ...l
  };
  switch (a) {
    case 1:
      return /* @__PURE__ */ t.jsx("h1", { ...n, children: e });
    case 2:
      return /* @__PURE__ */ t.jsx("h2", { ...n, children: e });
    case 3:
      return /* @__PURE__ */ t.jsx("h3", { ...n, children: e });
    case 4:
      return /* @__PURE__ */ t.jsx("h4", { ...n, children: e });
    case 5:
      return /* @__PURE__ */ t.jsx("h5", { ...n, children: e });
    case 6:
      return /* @__PURE__ */ t.jsx("h6", { ...n, children: e });
    default:
      return /* @__PURE__ */ t.jsx("h1", { ...n, children: e });
  }
}
c.displayName = "Heading";
const b = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};
function m({
  className: s,
  name: a,
  size: e = "md",
  children: r,
  ref: l,
  ...n
}) {
  return /* @__PURE__ */ t.jsx(
    "svg",
    {
      ref: l,
      className: i("inline-block", b[e], s),
      fill: "currentColor",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      ...n,
      children: r
    }
  );
}
m.displayName = "Icon";
const p = {
  body: "text-base leading-relaxed",
  caption: "text-sm text-gray-600",
  small: "text-sm",
  large: "text-lg leading-relaxed"
};
function u({
  className: s,
  variant: a = "body",
  children: e,
  ref: r,
  ...l
}) {
  return /* @__PURE__ */ t.jsx("p", { ref: r, className: i(p[a], s), ...l, children: e });
}
u.displayName = "Text";
const w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: o,
  Badge: d,
  Card: x,
  Heading: c,
  Icon: m,
  Text: u
}, Symbol.toStringTag, { value: "Module" }));
export {
  o as A,
  d as B,
  x as C,
  c as H,
  m as I,
  u as T,
  w as i
};
