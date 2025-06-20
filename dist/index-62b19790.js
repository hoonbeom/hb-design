import { j as r, c as i } from "./jsx-runtime-11ecb8bd.js";
const j = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-16 w-16"
};
function d({
  className: a,
  src: t,
  alt: e,
  size: s = "md",
  children: l,
  ref: n,
  ...b
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: n,
      className: i(
        "relative flex shrink-0 overflow-hidden rounded-full",
        j[s],
        a
      ),
      ...b,
      children: t ? /* @__PURE__ */ r.jsx("img", { className: "aspect-square h-full w-full", src: t, alt: e }) : /* @__PURE__ */ r.jsx("div", { className: "flex h-full w-full items-center justify-center rounded-full bg-gray-100", children: l || /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium text-gray-600", children: (e == null ? void 0 : e.charAt(0).toUpperCase()) || "U" }) })
    }
  );
}
d.displayName = "Avatar";
const N = {
  default: "bg-gray-100 text-gray-800",
  primary: "bg-primary-100 text-primary-800",
  secondary: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800"
};
function o({
  className: a,
  variant: t = "default",
  children: e,
  ref: s,
  ...l
}) {
  return /* @__PURE__ */ r.jsx(
    "span",
    {
      ref: s,
      className: i(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        N[t],
        a
      ),
      ...l,
      children: e
    }
  );
}
o.displayName = "Badge";
function x({
  className: a,
  children: t,
  ref: e,
  ...s
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: e,
      className: i(
        "rounded-lg border border-gray-200 bg-white shadow-soft",
        a
      ),
      ...s,
      children: t
    }
  );
}
x.displayName = "Card";
function c({
  className: a,
  children: t,
  ref: e,
  ...s
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: e,
      className: i("flex flex-col space-y-1.5 p-6", a),
      ...s,
      children: t
    }
  );
}
c.displayName = "CardHeader";
function m({
  className: a,
  children: t,
  ref: e,
  ...s
}) {
  return /* @__PURE__ */ r.jsx(
    "h3",
    {
      ref: e,
      className: i(
        "text-lg font-semibold leading-none tracking-tight",
        a
      ),
      ...s,
      children: t
    }
  );
}
m.displayName = "CardTitle";
function u({
  className: a,
  children: t,
  ref: e,
  ...s
}) {
  return /* @__PURE__ */ r.jsx("p", { ref: e, className: i("text-sm text-gray-500", a), ...s, children: t });
}
u.displayName = "CardDescription";
function g({
  className: a,
  children: t,
  ref: e,
  ...s
}) {
  return /* @__PURE__ */ r.jsx("div", { ref: e, className: i("p-6 pt-0", a), ...s, children: t });
}
g.displayName = "CardContent";
function f({
  className: a,
  children: t,
  ref: e,
  ...s
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: e,
      className: i("flex items-center p-6 pt-0", a),
      ...s,
      children: t
    }
  );
}
f.displayName = "CardFooter";
const w = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};
function p({
  className: a,
  name: t,
  size: e = "md",
  children: s,
  ref: l,
  ...n
}) {
  return /* @__PURE__ */ r.jsx(
    "svg",
    {
      ref: l,
      className: i("inline-block", w[e], a),
      fill: "currentColor",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      ...n,
      children: s
    }
  );
}
p.displayName = "Icon";
const C = {
  1: "text-4xl font-bold tracking-tight",
  2: "text-3xl font-bold tracking-tight",
  3: "text-2xl font-semibold tracking-tight",
  4: "text-xl font-semibold",
  5: "text-lg font-medium",
  6: "text-base font-medium"
};
function y({
  className: a,
  level: t = 1,
  children: e,
  ref: s,
  ...l
}) {
  const n = {
    ref: s,
    className: i(C[t], a),
    ...l
  };
  switch (t) {
    case 1:
      return /* @__PURE__ */ r.jsx("h1", { ...n, children: e });
    case 2:
      return /* @__PURE__ */ r.jsx("h2", { ...n, children: e });
    case 3:
      return /* @__PURE__ */ r.jsx("h3", { ...n, children: e });
    case 4:
      return /* @__PURE__ */ r.jsx("h4", { ...n, children: e });
    case 5:
      return /* @__PURE__ */ r.jsx("h5", { ...n, children: e });
    case 6:
      return /* @__PURE__ */ r.jsx("h6", { ...n, children: e });
    default:
      return /* @__PURE__ */ r.jsx("h1", { ...n, children: e });
  }
}
y.displayName = "Heading";
const v = {
  body: "text-base leading-relaxed",
  caption: "text-sm text-gray-600",
  small: "text-sm",
  large: "text-lg leading-relaxed"
};
function h({
  className: a,
  variant: t = "body",
  children: e,
  ref: s,
  ...l
}) {
  return /* @__PURE__ */ r.jsx("p", { ref: s, className: i(v[t], a), ...l, children: e });
}
h.displayName = "Text";
const T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: d,
  Badge: o,
  Card: x,
  CardContent: g,
  CardDescription: u,
  CardFooter: f,
  CardHeader: c,
  CardTitle: m,
  Heading: y,
  Icon: p,
  Text: h
}, Symbol.toStringTag, { value: "Module" }));
export {
  d as A,
  o as B,
  x as C,
  y as H,
  p as I,
  h as T,
  c as a,
  m as b,
  u as c,
  T as d,
  g as e,
  f
};
