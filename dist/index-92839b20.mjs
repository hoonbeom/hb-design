import { c as o, j as n } from "./jsx-runtime-11ecb8bd.mjs";
const h = {
  1: "text-4xl font-bold tracking-tight",
  2: "text-3xl font-bold tracking-tight",
  3: "text-2xl font-semibold tracking-tight",
  4: "text-xl font-semibold",
  5: "text-lg font-medium",
  6: "text-base font-medium"
};
function i({
  className: a,
  level: t = 1,
  children: e,
  ref: r,
  ...l
}) {
  const s = {
    ref: r,
    className: o(h[t], a),
    ...l
  };
  switch (t) {
    case 1:
      return /* @__PURE__ */ n.jsx("h1", { ...s, children: e });
    case 2:
      return /* @__PURE__ */ n.jsx("h2", { ...s, children: e });
    case 3:
      return /* @__PURE__ */ n.jsx("h3", { ...s, children: e });
    case 4:
      return /* @__PURE__ */ n.jsx("h4", { ...s, children: e });
    case 5:
      return /* @__PURE__ */ n.jsx("h5", { ...s, children: e });
    case 6:
      return /* @__PURE__ */ n.jsx("h6", { ...s, children: e });
    default:
      return /* @__PURE__ */ n.jsx("h1", { ...s, children: e });
  }
}
i.displayName = "Heading";
const N = {
  body: "text-base leading-relaxed",
  caption: "text-sm text-gray-600",
  small: "text-sm",
  large: "text-lg leading-relaxed"
};
function d({
  className: a,
  variant: t = "body",
  children: e,
  ref: r,
  ...l
}) {
  return /* @__PURE__ */ n.jsx("p", { ref: r, className: o(N[t], a), ...l, children: e });
}
d.displayName = "Text";
const _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Heading: i,
  Text: d
}, Symbol.toStringTag, { value: "Module" })), v = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};
function c({
  className: a,
  name: t,
  size: e = "md",
  children: r,
  ref: l,
  ...s
}) {
  return /* @__PURE__ */ n.jsx(
    "svg",
    {
      ref: l,
      className: o("inline-block", v[e], a),
      fill: "currentColor",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      ...s,
      children: r
    }
  );
}
c.displayName = "Icon";
const w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Icon: c
}, Symbol.toStringTag, { value: "Module" }));
function x({
  className: a,
  children: t,
  ref: e,
  ...r
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: e,
      className: o(
        "rounded-lg border border-gray-200 bg-white shadow-soft",
        a
      ),
      ...r,
      children: t
    }
  );
}
x.displayName = "Card";
function u({
  className: a,
  children: t,
  ref: e,
  ...r
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: e,
      className: o("flex flex-col space-y-1.5 p-6", a),
      ...r,
      children: t
    }
  );
}
u.displayName = "CardHeader";
function m({
  className: a,
  children: t,
  ref: e,
  ...r
}) {
  return /* @__PURE__ */ n.jsx(
    "h3",
    {
      ref: e,
      className: o(
        "text-lg font-semibold leading-none tracking-tight",
        a
      ),
      ...r,
      children: t
    }
  );
}
m.displayName = "CardTitle";
function g({
  className: a,
  children: t,
  ref: e,
  ...r
}) {
  return /* @__PURE__ */ n.jsx("p", { ref: e, className: o("text-sm text-gray-500", a), ...r, children: t });
}
g.displayName = "CardDescription";
function f({
  className: a,
  children: t,
  ref: e,
  ...r
}) {
  return /* @__PURE__ */ n.jsx("div", { ref: e, className: o("p-6 pt-0", a), ...r, children: t });
}
f.displayName = "CardContent";
function p({
  className: a,
  children: t,
  ref: e,
  ...r
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: e,
      className: o("flex items-center p-6 pt-0", a),
      ...r,
      children: t
    }
  );
}
p.displayName = "CardFooter";
const C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Card: x,
  CardContent: f,
  CardDescription: g,
  CardFooter: p,
  CardHeader: u,
  CardTitle: m
}, Symbol.toStringTag, { value: "Module" })), S = {
  default: "bg-gray-100 text-gray-800",
  primary: "bg-primary-100 text-primary-800",
  secondary: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800"
};
function y({
  className: a,
  variant: t = "default",
  children: e,
  ref: r,
  ...l
}) {
  return /* @__PURE__ */ n.jsx(
    "span",
    {
      ref: r,
      className: o(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        S[t],
        a
      ),
      ...l,
      children: e
    }
  );
}
y.displayName = "Badge";
const O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Badge: y
}, Symbol.toStringTag, { value: "Module" })), T = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-16 w-16"
};
function b({
  className: a,
  src: t,
  alt: e,
  size: r = "md",
  children: l,
  ref: s,
  ...j
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: s,
      className: o(
        "relative flex shrink-0 overflow-hidden rounded-full",
        T[r],
        a
      ),
      ...j,
      children: t ? /* @__PURE__ */ n.jsx("img", { className: "aspect-square h-full w-full", src: t, alt: e }) : /* @__PURE__ */ n.jsx("div", { className: "flex h-full w-full items-center justify-center rounded-full bg-gray-100", children: l || /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-600", children: (e == null ? void 0 : e.charAt(0).toUpperCase()) || "U" }) })
    }
  );
}
b.displayName = "Avatar";
const z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: b
}, Symbol.toStringTag, { value: "Module" })), k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: z,
  Badge: O,
  Card: C,
  Icon: w,
  Typography: _
}, Symbol.toStringTag, { value: "Module" }));
export {
  _ as a,
  w as b,
  C as c,
  O as d,
  z as e,
  k as i
};
