import fe, { useState as xe, useRef as nt, useEffect as at } from "react";
function er(r) {
  var o, t, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var i = r.length;
      for (o = 0; o < i; o++)
        r[o] && (t = er(r[o])) && (n && (n += " "), n += t);
    } else
      for (t in r)
        r[t] && (n && (n += " "), n += t);
  return n;
}
function st() {
  for (var r, o, t = 0, n = "", i = arguments.length; t < i; t++)
    (r = arguments[t]) && (o = er(r)) && (n && (n += " "), n += o);
  return n;
}
const ze = "-", it = (r) => {
  const o = ct(r), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: n
  } = r;
  return {
    getClassGroupId: (d) => {
      const c = d.split(ze);
      return c[0] === "" && c.length !== 1 && c.shift(), rr(c, o) || lt(d);
    },
    getConflictingClassGroupIds: (d, c) => {
      const f = t[d] || [];
      return c && n[d] ? [...f, ...n[d]] : f;
    }
  };
}, rr = (r, o) => {
  var d;
  if (r.length === 0)
    return o.classGroupId;
  const t = r[0], n = o.nextPart.get(t), i = n ? rr(r.slice(1), n) : void 0;
  if (i)
    return i;
  if (o.validators.length === 0)
    return;
  const s = r.join(ze);
  return (d = o.validators.find(({
    validator: c
  }) => c(s))) == null ? void 0 : d.classGroupId;
}, Ke = /^\[(.+)\]$/, lt = (r) => {
  if (Ke.test(r)) {
    const o = Ke.exec(r)[1], t = o == null ? void 0 : o.substring(0, o.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, ct = (r) => {
  const {
    theme: o,
    prefix: t
  } = r, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ut(Object.entries(r.classGroups), t).forEach(([s, d]) => {
    Pe(d, n, s, o);
  }), n;
}, Pe = (r, o, t, n) => {
  r.forEach((i) => {
    if (typeof i == "string") {
      const s = i === "" ? o : Xe(o, i);
      s.classGroupId = t;
      return;
    }
    if (typeof i == "function") {
      if (dt(i)) {
        Pe(i(n), o, t, n);
        return;
      }
      o.validators.push({
        validator: i,
        classGroupId: t
      });
      return;
    }
    Object.entries(i).forEach(([s, d]) => {
      Pe(d, Xe(o, s), t, n);
    });
  });
}, Xe = (r, o) => {
  let t = r;
  return o.split(ze).forEach((n) => {
    t.nextPart.has(n) || t.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(n);
  }), t;
}, dt = (r) => r.isThemeGetter, ut = (r, o) => o ? r.map(([t, n]) => {
  const i = n.map((s) => typeof s == "string" ? o + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([d, c]) => [o + d, c])) : s);
  return [t, i];
}) : r, ft = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let o = 0, t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (s, d) => {
    t.set(s, d), o++, o > r && (o = 0, n = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let d = t.get(s);
      if (d !== void 0)
        return d;
      if ((d = n.get(s)) !== void 0)
        return i(s, d), d;
    },
    set(s, d) {
      t.has(s) ? t.set(s, d) : i(s, d);
    }
  };
}, tr = "!", pt = (r) => {
  const {
    separator: o,
    experimentalParseClassName: t
  } = r, n = o.length === 1, i = o[0], s = o.length, d = (c) => {
    const f = [];
    let h = 0, g = 0, C;
    for (let R = 0; R < c.length; R++) {
      let E = c[R];
      if (h === 0) {
        if (E === i && (n || c.slice(R, R + s) === o)) {
          f.push(c.slice(g, R)), g = R + s;
          continue;
        }
        if (E === "/") {
          C = R;
          continue;
        }
      }
      E === "[" ? h++ : E === "]" && h--;
    }
    const T = f.length === 0 ? c : c.substring(g), N = T.startsWith(tr), M = N ? T.substring(1) : T, P = C && C > g ? C - g : void 0;
    return {
      modifiers: f,
      hasImportantModifier: N,
      baseClassName: M,
      maybePostfixModifierPosition: P
    };
  };
  return t ? (c) => t({
    className: c,
    parseClassName: d
  }) : d;
}, bt = (r) => {
  if (r.length <= 1)
    return r;
  const o = [];
  let t = [];
  return r.forEach((n) => {
    n[0] === "[" ? (o.push(...t.sort(), n), t = []) : t.push(n);
  }), o.push(...t.sort()), o;
}, gt = (r) => ({
  cache: ft(r.cacheSize),
  parseClassName: pt(r),
  ...it(r)
}), mt = /\s+/, yt = (r, o) => {
  const {
    parseClassName: t,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = o, s = [], d = r.trim().split(mt);
  let c = "";
  for (let f = d.length - 1; f >= 0; f -= 1) {
    const h = d[f], {
      modifiers: g,
      hasImportantModifier: C,
      baseClassName: T,
      maybePostfixModifierPosition: N
    } = t(h);
    let M = !!N, P = n(M ? T.substring(0, N) : T);
    if (!P) {
      if (!M) {
        c = h + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (P = n(T), !P) {
        c = h + (c.length > 0 ? " " + c : c);
        continue;
      }
      M = !1;
    }
    const R = bt(g).join(":"), E = C ? R + tr : R, x = E + P;
    if (s.includes(x))
      continue;
    s.push(x);
    const Y = i(P, M);
    for (let W = 0; W < Y.length; ++W) {
      const H = Y[W];
      s.push(E + H);
    }
    c = h + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function ht() {
  let r = 0, o, t, n = "";
  for (; r < arguments.length; )
    (o = arguments[r++]) && (t = or(o)) && (n && (n += " "), n += t);
  return n;
}
const or = (r) => {
  if (typeof r == "string")
    return r;
  let o, t = "";
  for (let n = 0; n < r.length; n++)
    r[n] && (o = or(r[n])) && (t && (t += " "), t += o);
  return t;
};
function vt(r, ...o) {
  let t, n, i, s = d;
  function d(f) {
    const h = o.reduce((g, C) => C(g), r());
    return t = gt(h), n = t.cache.get, i = t.cache.set, s = c, c(f);
  }
  function c(f) {
    const h = n(f);
    if (h)
      return h;
    const g = yt(f, t);
    return i(f, g), g;
  }
  return function() {
    return s(ht.apply(null, arguments));
  };
}
const S = (r) => {
  const o = (t) => t[r] || [];
  return o.isThemeGetter = !0, o;
}, nr = /^\[(?:([a-z-]+):)?(.+)\]$/i, xt = /^\d+\/\d+$/, wt = /* @__PURE__ */ new Set(["px", "full", "screen"]), _t = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, St = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ct = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Rt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, L = (r) => ee(r) || wt.has(r) || xt.test(r), B = (r) => re(r, "length", At), ee = (r) => !!r && !Number.isNaN(Number(r)), Oe = (r) => re(r, "number", ee), le = (r) => !!r && Number.isInteger(Number(r)), Et = (r) => r.endsWith("%") && ee(r.slice(0, -1)), b = (r) => nr.test(r), U = (r) => _t.test(r), Tt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), kt = (r) => re(r, Tt, ar), Ot = (r) => re(r, "position", ar), Pt = /* @__PURE__ */ new Set(["image", "url"]), Nt = (r) => re(r, Pt, It), zt = (r) => re(r, "", Mt), ce = () => !0, re = (r, o, t) => {
  const n = nr.exec(r);
  return n ? n[1] ? typeof o == "string" ? n[1] === o : o.has(n[1]) : t(n[2]) : !1;
}, At = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  jt.test(r) && !St.test(r)
), ar = () => !1, Mt = (r) => Ct.test(r), It = (r) => Rt.test(r), $t = () => {
  const r = S("colors"), o = S("spacing"), t = S("blur"), n = S("brightness"), i = S("borderColor"), s = S("borderRadius"), d = S("borderSpacing"), c = S("borderWidth"), f = S("contrast"), h = S("grayscale"), g = S("hueRotate"), C = S("invert"), T = S("gap"), N = S("gradientColorStops"), M = S("gradientColorStopPositions"), P = S("inset"), R = S("margin"), E = S("opacity"), x = S("padding"), Y = S("saturate"), W = S("scale"), H = S("sepia"), pe = S("skew"), be = S("space"), ge = S("translate"), K = () => ["auto", "contain", "none"], te = () => ["auto", "hidden", "clip", "visible", "scroll"], oe = () => ["auto", b, o], w = () => [b, o], I = () => ["", L, B], $ = () => ["auto", ee, b], V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", b], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [ee, b];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ce],
      spacing: [L, B],
      blur: ["none", "", U, b],
      brightness: F(),
      borderColor: [r],
      borderRadius: ["none", "", "full", U, b],
      borderSpacing: w(),
      borderWidth: I(),
      contrast: F(),
      grayscale: G(),
      hueRotate: F(),
      invert: G(),
      gap: w(),
      gradientColorStops: [r],
      gradientColorStopPositions: [Et, B],
      inset: oe(),
      margin: oe(),
      opacity: F(),
      padding: w(),
      saturate: F(),
      scale: F(),
      sepia: G(),
      skew: F(),
      space: w(),
      translate: w()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [U]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ae()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ae()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...V(), b]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: te()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": te()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": te()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: K()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": K()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": K()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [P]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [P]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [P]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [P]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [P]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [P]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [P]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [P]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [P]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", le, b]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: oe()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", b]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", le, b]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ce]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", le, b]
        }, b]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ce]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [le, b]
        }, b]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", b]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", b]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [T]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [T]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [T]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...X()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...X(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...X(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [R]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [R]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [R]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [R]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [R]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [R]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [R]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [R]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [R]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [be]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [be]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", b, o]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [b, o, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [b, o, "none", "full", "min", "max", "fit", "prose", {
          screen: [U]
        }, U]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [b, o, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [b, o, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [b, o, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [b, o, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", U, B]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Oe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ce]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", b]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ee, Oe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", L, b]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", b]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", b]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [E]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [E]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", L, B]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", L, b]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", b]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", b]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [E]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...V(), Ot]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", kt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Nt]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [M]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [M]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [M]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [N]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [N]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [N]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [E]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...q(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [c]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [E]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: q()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...q()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [L, b]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [L, B]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: I()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [E]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [L, B]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", U, zt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ce]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [E]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ne(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ne()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", U, b]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [C]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [H]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [C]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [E]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [H]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [d]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [d]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [d]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", b]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: F()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", b]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: F()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", b]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [W]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [W]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [W]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [le, b]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ge]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ge]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [pe]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [pe]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", b]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", b]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", b]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [L, B, Oe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Ft = /* @__PURE__ */ vt($t);
function j(...r) {
  return Ft(st(r));
}
var Ne = { exports: {} }, de = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Dt() {
  if (Ze)
    return de;
  Ze = 1;
  var r = fe, o = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(c, f, h) {
    var g, C = {}, T = null, N = null;
    h !== void 0 && (T = "" + h), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && (N = f.ref);
    for (g in f)
      n.call(f, g) && !s.hasOwnProperty(g) && (C[g] = f[g]);
    if (c && c.defaultProps)
      for (g in f = c.defaultProps, f)
        C[g] === void 0 && (C[g] = f[g]);
    return { $$typeof: o, type: c, key: T, ref: N, props: C, _owner: i.current };
  }
  return de.Fragment = t, de.jsx = d, de.jsxs = d, de;
}
var ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Wt() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = fe, o = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), M = Symbol.iterator, P = "@@iterator";
    function R(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = M && e[M] || e[P];
      return typeof a == "function" ? a : null;
    }
    var E = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
          l[p - 1] = arguments[p];
        Y("error", e, l);
      }
    }
    function Y(e, a, l) {
      {
        var p = E.ReactDebugCurrentFrame, v = p.getStackAddendum();
        v !== "" && (a += "%s", l = l.concat([v]));
        var _ = l.map(function(y) {
          return String(y);
        });
        _.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var W = !1, H = !1, pe = !1, be = !1, ge = !1, K;
    K = Symbol.for("react.module.reference");
    function te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === s || ge || e === i || e === h || e === g || be || e === N || W || H || pe || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === C || e.$$typeof === d || e.$$typeof === c || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function oe(e, a, l) {
      var p = e.displayName;
      if (p)
        return p;
      var v = a.displayName || a.name || "";
      return v !== "" ? l + "(" + v + ")" : l;
    }
    function w(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case h:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var a = e;
            return w(a) + ".Consumer";
          case d:
            var l = e;
            return w(l._context) + ".Provider";
          case f:
            return oe(e, e.render, "ForwardRef");
          case C:
            var p = e.displayName || null;
            return p !== null ? p : I(e.type) || "Memo";
          case T: {
            var v = e, _ = v._payload, y = v._init;
            try {
              return I(y(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, V = 0, q, ne, X, G, ae, F, Ae;
    function Me() {
    }
    Me.__reactDisabledLog = !0;
    function Pr() {
      {
        if (V === 0) {
          q = console.log, ne = console.info, X = console.warn, G = console.error, ae = console.group, F = console.groupCollapsed, Ae = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function Nr() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: q
            }),
            info: $({}, e, {
              value: ne
            }),
            warn: $({}, e, {
              value: X
            }),
            error: $({}, e, {
              value: G
            }),
            group: $({}, e, {
              value: ae
            }),
            groupCollapsed: $({}, e, {
              value: F
            }),
            groupEnd: $({}, e, {
              value: Ae
            })
          });
        }
        V < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var we = E.ReactCurrentDispatcher, _e;
    function me(e, a, l) {
      {
        if (_e === void 0)
          try {
            throw Error();
          } catch (v) {
            var p = v.stack.trim().match(/\n( *(at )?)/);
            _e = p && p[1] || "";
          }
        return `
` + _e + e;
      }
    }
    var je = !1, ye;
    {
      var zr = typeof WeakMap == "function" ? WeakMap : Map;
      ye = new zr();
    }
    function Ie(e, a) {
      if (!e || je)
        return "";
      {
        var l = ye.get(e);
        if (l !== void 0)
          return l;
      }
      var p;
      je = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = we.current, we.current = null, Pr();
      try {
        if (a) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (A) {
              p = A;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (A) {
              p = A;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            p = A;
          }
          e();
        }
      } catch (A) {
        if (A && p && typeof A.stack == "string") {
          for (var m = A.stack.split(`
`), z = p.stack.split(`
`), k = m.length - 1, O = z.length - 1; k >= 1 && O >= 0 && m[k] !== z[O]; )
            O--;
          for (; k >= 1 && O >= 0; k--, O--)
            if (m[k] !== z[O]) {
              if (k !== 1 || O !== 1)
                do
                  if (k--, O--, O < 0 || m[k] !== z[O]) {
                    var D = `
` + m[k].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && ye.set(e, D), D;
                  }
                while (k >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        je = !1, we.current = _, Nr(), Error.prepareStackTrace = v;
      }
      var Q = e ? e.displayName || e.name : "", J = Q ? me(Q) : "";
      return typeof e == "function" && ye.set(e, J), J;
    }
    function Ar(e, a, l) {
      return Ie(e, !1);
    }
    function Mr(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function he(e, a, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ie(e, Mr(e));
      if (typeof e == "string")
        return me(e);
      switch (e) {
        case h:
          return me("Suspense");
        case g:
          return me("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ar(e.render);
          case C:
            return he(e.type, a, l);
          case T: {
            var p = e, v = p._payload, _ = p._init;
            try {
              return he(_(v), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, $e = {}, Fe = E.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var a = e._owner, l = he(e.type, e._source, a ? a.type : null);
        Fe.setExtraStackFrame(l);
      } else
        Fe.setExtraStackFrame(null);
    }
    function Ir(e, a, l, p, v) {
      {
        var _ = Function.call.bind(se);
        for (var y in e)
          if (_(e, y)) {
            var m = void 0;
            try {
              if (typeof e[y] != "function") {
                var z = Error((p || "React class") + ": " + l + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              m = e[y](a, y, p, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (ve(v), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", l, y, typeof m), ve(null)), m instanceof Error && !(m.message in $e) && ($e[m.message] = !0, ve(v), x("Failed %s type: %s", l, m.message), ve(null));
          }
      }
    }
    var $r = Array.isArray;
    function Se(e) {
      return $r(e);
    }
    function Fr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function Dr(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function We(e) {
      if (Dr(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fr(e)), De(e);
    }
    var ie = E.ReactCurrentOwner, Wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ve, Ce;
    Ce = {};
    function Lr(e) {
      if (se.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Vr(e) {
      if (se.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Gr(e, a) {
      if (typeof e.ref == "string" && ie.current && a && ie.current.stateNode !== a) {
        var l = I(ie.current.type);
        Ce[l] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(ie.current.type), e.ref), Ce[l] = !0);
      }
    }
    function Br(e, a) {
      {
        var l = function() {
          Le || (Le = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Ur(e, a) {
      {
        var l = function() {
          Ve || (Ve = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Yr = function(e, a, l, p, v, _, y) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: l,
        props: y,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function qr(e, a, l, p, v) {
      {
        var _, y = {}, m = null, z = null;
        l !== void 0 && (We(l), m = "" + l), Vr(a) && (We(a.key), m = "" + a.key), Lr(a) && (z = a.ref, Gr(a, v));
        for (_ in a)
          se.call(a, _) && !Wr.hasOwnProperty(_) && (y[_] = a[_]);
        if (e && e.defaultProps) {
          var k = e.defaultProps;
          for (_ in k)
            y[_] === void 0 && (y[_] = k[_]);
        }
        if (m || z) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Br(y, O), z && Ur(y, O);
        }
        return Yr(e, m, z, v, p, ie.current, y);
      }
    }
    var Re = E.ReactCurrentOwner, Ge = E.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var a = e._owner, l = he(e.type, e._source, a ? a.type : null);
        Ge.setExtraStackFrame(l);
      } else
        Ge.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function Te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Be() {
      {
        if (Re.current) {
          var e = I(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Jr(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), l = e.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var Ue = {};
    function Hr(e) {
      {
        var a = Be();
        if (!a) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Ye(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = Hr(a);
        if (Ue[l])
          return;
        Ue[l] = !0;
        var p = "";
        e && e._owner && e._owner !== Re.current && (p = " It was passed a child from " + I(e._owner.type) + "."), Z(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, p), Z(null);
      }
    }
    function qe(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Se(e))
          for (var l = 0; l < e.length; l++) {
            var p = e[l];
            Te(p) && Ye(p, a);
          }
        else if (Te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = R(e);
          if (typeof v == "function" && v !== e.entries)
            for (var _ = v.call(e), y; !(y = _.next()).done; )
              Te(y.value) && Ye(y.value, a);
        }
      }
    }
    function Kr(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === C))
          l = a.propTypes;
        else
          return;
        if (l) {
          var p = I(a);
          Ir(l, e.props, "prop", p, e);
        } else if (a.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var v = I(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xr(e) {
      {
        for (var a = Object.keys(e.props), l = 0; l < a.length; l++) {
          var p = a[l];
          if (p !== "children" && p !== "key") {
            Z(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    var Je = {};
    function He(e, a, l, p, v, _) {
      {
        var y = te(e);
        if (!y) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Jr(v);
          z ? m += z : m += Be();
          var k;
          e === null ? k = "null" : Se(e) ? k = "array" : e !== void 0 && e.$$typeof === o ? (k = "<" + (I(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var O = qr(e, a, l, v, _);
        if (O == null)
          return O;
        if (y) {
          var D = a.children;
          if (D !== void 0)
            if (p)
              if (Se(D)) {
                for (var Q = 0; Q < D.length; Q++)
                  qe(D[Q], e);
                Object.freeze && Object.freeze(D);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qe(D, e);
        }
        if (se.call(a, "key")) {
          var J = I(e), A = Object.keys(a).filter(function(ot) {
            return ot !== "key";
          }), ke = A.length > 0 ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Je[J + ke]) {
            var tt = A.length > 0 ? "{" + A.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ke, J, tt, J), Je[J + ke] = !0;
          }
        }
        return e === n ? Xr(O) : Kr(O), O;
      }
    }
    function Zr(e, a, l) {
      return He(e, a, l, !0);
    }
    function Qr(e, a, l) {
      return He(e, a, l, !1);
    }
    var et = Qr, rt = Zr;
    ue.Fragment = n, ue.jsx = et, ue.jsxs = rt;
  }()), ue;
}
process.env.NODE_ENV === "production" ? Ne.exports = Dt() : Ne.exports = Wt();
var u = Ne.exports;
const Lt = {
  1: "text-4xl font-bold tracking-tight",
  2: "text-3xl font-bold tracking-tight",
  3: "text-2xl font-semibold tracking-tight",
  4: "text-xl font-semibold",
  5: "text-lg font-medium",
  6: "text-base font-medium"
};
function sr({
  className: r,
  level: o = 1,
  children: t,
  ref: n,
  ...i
}) {
  const s = {
    ref: n,
    className: j(Lt[o], r),
    ...i
  };
  switch (o) {
    case 1:
      return /* @__PURE__ */ u.jsx("h1", { ...s, children: t });
    case 2:
      return /* @__PURE__ */ u.jsx("h2", { ...s, children: t });
    case 3:
      return /* @__PURE__ */ u.jsx("h3", { ...s, children: t });
    case 4:
      return /* @__PURE__ */ u.jsx("h4", { ...s, children: t });
    case 5:
      return /* @__PURE__ */ u.jsx("h5", { ...s, children: t });
    case 6:
      return /* @__PURE__ */ u.jsx("h6", { ...s, children: t });
    default:
      return /* @__PURE__ */ u.jsx("h1", { ...s, children: t });
  }
}
sr.displayName = "Heading";
const Vt = {
  body: "text-base leading-relaxed",
  caption: "text-sm text-gray-600",
  small: "text-sm",
  large: "text-lg leading-relaxed"
};
function ir({
  className: r,
  variant: o = "body",
  children: t,
  ref: n,
  ...i
}) {
  return /* @__PURE__ */ u.jsx("p", { ref: n, className: j(Vt[o], r), ...i, children: t });
}
ir.displayName = "Text";
const Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Heading: sr,
  Text: ir
}, Symbol.toStringTag, { value: "Module" })), Bt = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};
function lr({
  className: r,
  name: o,
  size: t = "md",
  children: n,
  ref: i,
  ...s
}) {
  return /* @__PURE__ */ u.jsx(
    "svg",
    {
      ref: i,
      className: j("inline-block", Bt[t], r),
      fill: "currentColor",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      ...s,
      children: n
    }
  );
}
lr.displayName = "Icon";
const Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Icon: lr
}, Symbol.toStringTag, { value: "Module" }));
function cr({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: t,
      className: j(
        "rounded-lg border border-gray-200 bg-white shadow-soft",
        r
      ),
      ...n,
      children: o
    }
  );
}
cr.displayName = "Card";
function dr({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: t,
      className: j("flex flex-col space-y-1.5 p-6", r),
      ...n,
      children: o
    }
  );
}
dr.displayName = "CardHeader";
function ur({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    "h3",
    {
      ref: t,
      className: j(
        "text-lg font-semibold leading-none tracking-tight",
        r
      ),
      ...n,
      children: o
    }
  );
}
ur.displayName = "CardTitle";
function fr({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx("p", { ref: t, className: j("text-sm text-gray-500", r), ...n, children: o });
}
fr.displayName = "CardDescription";
function pr({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx("div", { ref: t, className: j("p-6 pt-0", r), ...n, children: o });
}
pr.displayName = "CardContent";
function br({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: t,
      className: j("flex items-center p-6 pt-0", r),
      ...n,
      children: o
    }
  );
}
br.displayName = "CardFooter";
const Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Card: cr,
  CardContent: pr,
  CardDescription: fr,
  CardFooter: br,
  CardHeader: dr,
  CardTitle: ur
}, Symbol.toStringTag, { value: "Module" })), qt = {
  default: "bg-gray-100 text-gray-800",
  primary: "bg-primary-100 text-primary-800",
  secondary: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800"
};
function gr({
  className: r,
  variant: o = "default",
  children: t,
  ref: n,
  ...i
}) {
  return /* @__PURE__ */ u.jsx(
    "span",
    {
      ref: n,
      className: j(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        qt[o],
        r
      ),
      ...i,
      children: t
    }
  );
}
gr.displayName = "Badge";
const Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Badge: gr
}, Symbol.toStringTag, { value: "Module" })), Ht = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-16 w-16"
};
function mr({
  className: r,
  src: o,
  alt: t,
  size: n = "md",
  children: i,
  ref: s,
  ...d
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: s,
      className: j(
        "relative flex shrink-0 overflow-hidden rounded-full",
        Ht[n],
        r
      ),
      ...d,
      children: o ? /* @__PURE__ */ u.jsx("img", { className: "aspect-square h-full w-full", src: o, alt: t }) : /* @__PURE__ */ u.jsx("div", { className: "flex h-full w-full items-center justify-center rounded-full bg-gray-100", children: i || /* @__PURE__ */ u.jsx("span", { className: "text-sm font-medium text-gray-600", children: (t == null ? void 0 : t.charAt(0).toUpperCase()) || "U" }) })
    }
  );
}
mr.displayName = "Avatar";
const Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: mr
}, Symbol.toStringTag, { value: "Module" })), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: Kt,
  Badge: Jt,
  Card: Yt,
  Icon: Ut,
  Typography: Gt
}, Symbol.toStringTag, { value: "Module" })), Zt = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-primary-500",
  ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
}, Qt = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base"
};
function yr({
  className: r,
  variant: o = "primary",
  size: t = "md",
  loading: n = !1,
  disabled: i,
  children: s,
  ref: d,
  ...c
}) {
  return /* @__PURE__ */ u.jsxs(
    "button",
    {
      className: j(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        Zt[o],
        Qt[t],
        r
      ),
      ref: d,
      disabled: i || n,
      ...c,
      children: [
        n && /* @__PURE__ */ u.jsxs(
          "svg",
          {
            className: "-ml-1 mr-2 h-4 w-4 animate-spin",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ u.jsx(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "path",
                {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }
              )
            ]
          }
        ),
        s
      ]
    }
  );
}
yr.displayName = "Button";
const eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: yr
}, Symbol.toStringTag, { value: "Module" }));
function hr({
  className: r,
  label: o,
  error: t,
  helperText: n,
  id: i,
  ref: s,
  ...d
}) {
  const c = i || `input-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ u.jsxs("div", { className: "w-full", children: [
    o && /* @__PURE__ */ u.jsx(
      "label",
      {
        htmlFor: c,
        className: "mb-1 block text-sm font-medium text-gray-700",
        children: o
      }
    ),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        id: c,
        className: j(
          "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
          t && "border-red-300 focus:border-red-500 focus:ring-red-500",
          r
        ),
        ref: s,
        ...d
      }
    ),
    t && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-sm text-red-600", children: t }),
    n && !t && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-sm text-gray-500", children: n })
  ] });
}
hr.displayName = "Input";
const ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Input: hr
}, Symbol.toStringTag, { value: "Module" }));
function vr({
  className: r,
  label: o,
  error: t,
  helperText: n,
  options: i,
  placeholder: s,
  id: d,
  ref: c,
  ...f
}) {
  const h = d || `select-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ u.jsxs("div", { className: "w-full", children: [
    o && /* @__PURE__ */ u.jsx(
      "label",
      {
        htmlFor: h,
        className: "mb-1 block text-sm font-medium text-gray-700",
        children: o
      }
    ),
    /* @__PURE__ */ u.jsxs(
      "select",
      {
        id: h,
        className: j(
          "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
          t && "border-red-300 focus:border-red-500 focus:ring-red-500",
          r
        ),
        ref: c,
        ...f,
        children: [
          s && /* @__PURE__ */ u.jsx("option", { value: "", disabled: !0, children: s }),
          i.map((g) => /* @__PURE__ */ u.jsx(
            "option",
            {
              value: g.value,
              disabled: g.disabled,
              children: g.label
            },
            g.value
          ))
        ]
      }
    ),
    t && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-sm text-red-600", children: t }),
    n && !t && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-sm text-gray-500", children: n })
  ] });
}
vr.displayName = "Select";
const to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Select: vr
}, Symbol.toStringTag, { value: "Module" })), oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: eo,
  Input: ro,
  Select: to
}, Symbol.toStringTag, { value: "Module" })), no = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, ao = {
  primary: "text-primary-600",
  white: "text-white",
  gray: "text-gray-600"
};
function xr({
  className: r,
  size: o = "md",
  color: t = "primary",
  ref: n,
  ...i
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      className: j(
        "animate-spin",
        no[o],
        ao[t],
        r
      ),
      ...i,
      children: /* @__PURE__ */ u.jsxs(
        "svg",
        {
          className: "h-full w-full",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            /* @__PURE__ */ u.jsx(
              "circle",
              {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "path",
              {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }
            )
          ]
        }
      )
    }
  );
}
xr.displayName = "Spinner";
const so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Spinner: xr
}, Symbol.toStringTag, { value: "Module" })), io = {
  info: "bg-blue-50 text-blue-800 border-blue-200",
  success: "bg-green-50 text-green-800 border-green-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
  error: "bg-red-50 text-red-800 border-red-200"
};
function wr({
  className: r,
  variant: o = "info",
  children: t,
  ref: n,
  ...i
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      className: j("rounded-md border p-4", io[o], r),
      role: "alert",
      ...i,
      children: t
    }
  );
}
wr.displayName = "Alert";
const lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alert: wr
}, Symbol.toStringTag, { value: "Module" }));
function _r({
  className: r,
  isOpen: o,
  onClose: t,
  children: n,
  ref: i,
  ...s
}) {
  return o ? /* @__PURE__ */ u.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
    /* @__PURE__ */ u.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50", onClick: t }),
    /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: i,
        className: j(
          "relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-large",
          r
        ),
        ...s,
        children: n
      }
    )
  ] }) : null;
}
_r.displayName = "Modal";
const co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Modal: _r
}, Symbol.toStringTag, { value: "Module" })), uo = {
  top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
  left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
};
function jr({
  className: r,
  content: o,
  children: t,
  position: n = "top",
  delay: i = 200,
  ref: s,
  ...d
}) {
  const [c, f] = xe(!1), [h, g] = xe(null), C = () => {
    const N = setTimeout(() => f(!0), i);
    g(N);
  }, T = () => {
    h && (clearTimeout(h), g(null)), f(!1);
  };
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: s,
      className: "relative inline-block",
      onMouseEnter: C,
      onMouseLeave: T,
      onFocus: C,
      onBlur: T,
      ...d,
      children: [
        t,
        c && /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: j(
              "absolute z-50 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-sm text-white shadow-lg",
              uo[n],
              r
            ),
            role: "tooltip",
            children: [
              o,
              /* @__PURE__ */ u.jsx(
                "div",
                {
                  className: j(
                    "absolute h-2 w-2 rotate-45 transform bg-gray-900",
                    n === "top" && "left-1/2 top-full -mt-1 -translate-x-1/2",
                    n === "bottom" && "bottom-full left-1/2 -mb-1 -translate-x-1/2",
                    n === "left" && "left-full top-1/2 -ml-1 -translate-y-1/2",
                    n === "right" && "right-full top-1/2 -mr-1 -translate-y-1/2"
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}
jr.displayName = "Tooltip";
const fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tooltip: jr
}, Symbol.toStringTag, { value: "Module" })), po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dialog: co,
  Error: lo,
  Loading: so,
  Tooltip: fo
}, Symbol.toStringTag, { value: "Module" }));
function Sr({
  className: r,
  children: o,
  defaultIndex: t = 0,
  ref: n,
  ...i
}) {
  const [s, d] = xe(t);
  return /* @__PURE__ */ u.jsx("div", { ref: n, className: j("w-full", r), ...i, children: fe.Children.map(o, (c, f) => fe.isValidElement(c) ? fe.cloneElement(c, {
    isActive: f === s,
    onSelect: () => d(f)
  }) : c) });
}
Sr.displayName = "Tabs";
function Cr({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: t,
      className: j("flex border-b border-gray-200", r),
      role: "tablist",
      ...n,
      children: o
    }
  );
}
Cr.displayName = "TabList";
function Rr({
  className: r,
  children: o,
  isActive: t = !1,
  onSelect: n,
  ref: i,
  ...s
}) {
  return /* @__PURE__ */ u.jsx(
    "button",
    {
      ref: i,
      className: j(
        "border-b-2 px-4 py-2 text-sm font-medium transition-colors",
        t ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
        r
      ),
      onClick: n,
      role: "tab",
      "aria-selected": t,
      ...s,
      children: o
    }
  );
}
Rr.displayName = "Tab";
function Er({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx("div", { ref: t, className: j("mt-4", r), ...n, children: o });
}
Er.displayName = "TabPanels";
function Tr({
  className: r,
  children: o,
  isActive: t = !1,
  ref: n,
  ...i
}) {
  return t ? /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      className: j("outline-none", r),
      role: "tabpanel",
      ...i,
      children: o
    }
  ) : null;
}
Tr.displayName = "TabPanel";
const bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tab: Rr,
  TabList: Cr,
  TabPanel: Tr,
  TabPanels: Er,
  Tabs: Sr
}, Symbol.toStringTag, { value: "Module" }));
function kr({
  className: r,
  trigger: o,
  children: t,
  align: n = "left",
  ref: i,
  ...s
}) {
  const [d, c] = xe(!1), f = nt(null);
  return at(() => {
    const h = (g) => {
      f.current && !f.current.contains(g.target) && c(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []), /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: f,
      className: "relative inline-block text-left",
      ...s,
      children: [
        /* @__PURE__ */ u.jsx("div", { onClick: () => c(!d), children: o }),
        d && /* @__PURE__ */ u.jsx(
          "div",
          {
            className: j(
              "absolute z-50 mt-2 w-56 rounded-md bg-white shadow-large ring-1 ring-black ring-opacity-5",
              n === "right" ? "right-0" : "left-0"
            ),
            children: /* @__PURE__ */ u.jsx("div", { className: "py-1", role: "menu", children: t })
          }
        )
      ]
    }
  );
}
kr.displayName = "Dropdown";
function Or({
  className: r,
  children: o,
  onClick: t,
  ref: n,
  ...i
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      className: j(
        "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
        r
      ),
      onClick: t,
      role: "menuitem",
      ...i,
      children: o
    }
  );
}
Or.displayName = "DropdownItem";
const go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dropdown: kr,
  DropdownItem: Or
}, Symbol.toStringTag, { value: "Module" })), mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dropdown: go,
  Tabs: bo
}, Symbol.toStringTag, { value: "Module" })), ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  display: Xt,
  feedback: po,
  input: oo,
  navigation: mo
}, Symbol.toStringTag, { value: "Module" }));
export {
  oo as a,
  po as b,
  mo as c,
  j as d,
  ho as e,
  Xt as i
};
