import fe, { useState as xe, useRef as Or, useEffect as zr } from "react";
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
function Ir() {
  for (var r, o, t = 0, n = "", i = arguments.length; t < i; t++)
    (r = arguments[t]) && (o = er(r)) && (n && (n += " "), n += o);
  return n;
}
const Oe = "-", Mr = (r) => {
  const o = Wr(r), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: n
  } = r;
  return {
    getClassGroupId: (d) => {
      const c = d.split(Oe);
      return c[0] === "" && c.length !== 1 && c.shift(), rr(c, o) || Fr(d);
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
  const s = r.join(Oe);
  return (d = o.validators.find(({
    validator: c
  }) => c(s))) == null ? void 0 : d.classGroupId;
}, Ke = /^\[(.+)\]$/, Fr = (r) => {
  if (Ke.test(r)) {
    const o = Ke.exec(r)[1], t = o == null ? void 0 : o.substring(0, o.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Wr = (r) => {
  const {
    theme: o,
    prefix: t
  } = r, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Lr(Object.entries(r.classGroups), t).forEach(([s, d]) => {
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
      if (Dr(i)) {
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
  return o.split(Oe).forEach((n) => {
    t.nextPart.has(n) || t.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(n);
  }), t;
}, Dr = (r) => r.isThemeGetter, Lr = (r, o) => o ? r.map(([t, n]) => {
  const i = n.map((s) => typeof s == "string" ? o + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([d, c]) => [o + d, c])) : s);
  return [t, i];
}) : r, Vr = (r) => {
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
}, tr = "!", $r = (r) => {
  const {
    separator: o,
    experimentalParseClassName: t
  } = r, n = o.length === 1, i = o[0], s = o.length, d = (c) => {
    const f = [];
    let v = 0, b = 0, E;
    for (let k = 0; k < c.length; k++) {
      let _ = c[k];
      if (v === 0) {
        if (_ === i && (n || c.slice(k, k + s) === o)) {
          f.push(c.slice(b, k)), b = k + s;
          continue;
        }
        if (_ === "/") {
          E = k;
          continue;
        }
      }
      _ === "[" ? v++ : _ === "]" && v--;
    }
    const S = f.length === 0 ? c : c.substring(b), A = S.startsWith(tr), I = A ? S.substring(1) : S, P = E && E > b ? E - b : void 0;
    return {
      modifiers: f,
      hasImportantModifier: A,
      baseClassName: I,
      maybePostfixModifierPosition: P
    };
  };
  return t ? (c) => t({
    className: c,
    parseClassName: d
  }) : d;
}, Gr = (r) => {
  if (r.length <= 1)
    return r;
  const o = [];
  let t = [];
  return r.forEach((n) => {
    n[0] === "[" ? (o.push(...t.sort(), n), t = []) : t.push(n);
  }), o.push(...t.sort()), o;
}, Ur = (r) => ({
  cache: Vr(r.cacheSize),
  parseClassName: $r(r),
  ...Mr(r)
}), Yr = /\s+/, Br = (r, o) => {
  const {
    parseClassName: t,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = o, s = [], d = r.trim().split(Yr);
  let c = "";
  for (let f = d.length - 1; f >= 0; f -= 1) {
    const v = d[f], {
      modifiers: b,
      hasImportantModifier: E,
      baseClassName: S,
      maybePostfixModifierPosition: A
    } = t(v);
    let I = !!A, P = n(I ? S.substring(0, A) : S);
    if (!P) {
      if (!I) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (P = n(S), !P) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      I = !1;
    }
    const k = Gr(b).join(":"), _ = E ? k + tr : k, x = _ + P;
    if (s.includes(x))
      continue;
    s.push(x);
    const B = i(P, I);
    for (let L = 0; L < B.length; ++L) {
      const H = B[L];
      s.push(_ + H);
    }
    c = v + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function qr() {
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
function Jr(r, ...o) {
  let t, n, i, s = d;
  function d(f) {
    const v = o.reduce((b, E) => E(b), r());
    return t = Ur(v), n = t.cache.get, i = t.cache.set, s = c, c(f);
  }
  function c(f) {
    const v = n(f);
    if (v)
      return v;
    const b = Br(f, t);
    return i(f, b), b;
  }
  return function() {
    return s(qr.apply(null, arguments));
  };
}
const R = (r) => {
  const o = (t) => t[r] || [];
  return o.isThemeGetter = !0, o;
}, nr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Hr = /^\d+\/\d+$/, Kr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Xr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Zr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Qr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, et = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, rt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, V = (r) => ee(r) || Kr.has(r) || Hr.test(r), U = (r) => re(r, "length", ct), ee = (r) => !!r && !Number.isNaN(Number(r)), Ne = (r) => re(r, "number", ee), le = (r) => !!r && Number.isInteger(Number(r)), tt = (r) => r.endsWith("%") && ee(r.slice(0, -1)), m = (r) => nr.test(r), Y = (r) => Xr.test(r), ot = /* @__PURE__ */ new Set(["length", "size", "percentage"]), nt = (r) => re(r, ot, ar), at = (r) => re(r, "position", ar), st = /* @__PURE__ */ new Set(["image", "url"]), it = (r) => re(r, st, ut), lt = (r) => re(r, "", dt), ce = () => !0, re = (r, o, t) => {
  const n = nr.exec(r);
  return n ? n[1] ? typeof o == "string" ? n[1] === o : o.has(n[1]) : t(n[2]) : !1;
}, ct = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Zr.test(r) && !Qr.test(r)
), ar = () => !1, dt = (r) => et.test(r), ut = (r) => rt.test(r), ft = () => {
  const r = R("colors"), o = R("spacing"), t = R("blur"), n = R("brightness"), i = R("borderColor"), s = R("borderRadius"), d = R("borderSpacing"), c = R("borderWidth"), f = R("contrast"), v = R("grayscale"), b = R("hueRotate"), E = R("invert"), S = R("gap"), A = R("gradientColorStops"), I = R("gradientColorStopPositions"), P = R("inset"), k = R("margin"), _ = R("opacity"), x = R("padding"), B = R("saturate"), L = R("scale"), H = R("sepia"), pe = R("skew"), me = R("space"), be = R("translate"), K = () => ["auto", "contain", "none"], te = () => ["auto", "hidden", "clip", "visible", "scroll"], oe = () => ["auto", m, o], w = () => [m, o], M = () => ["", V, U], F = () => ["auto", ee, m], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", m], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [ee, m];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ce],
      spacing: [V, U],
      blur: ["none", "", Y, m],
      brightness: W(),
      borderColor: [r],
      borderRadius: ["none", "", "full", Y, m],
      borderSpacing: w(),
      borderWidth: M(),
      contrast: W(),
      grayscale: G(),
      hueRotate: W(),
      invert: G(),
      gap: w(),
      gradientColorStops: [r],
      gradientColorStopPositions: [tt, U],
      inset: oe(),
      margin: oe(),
      opacity: W(),
      padding: w(),
      saturate: W(),
      scale: W(),
      sepia: G(),
      skew: W(),
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
        aspect: ["auto", "square", "video", m]
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
        columns: [Y]
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
        object: [...$(), m]
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
        z: ["auto", le, m]
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
        flex: ["1", "auto", "initial", "none", m]
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
        order: ["first", "last", "none", le, m]
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
          span: ["full", le, m]
        }, m]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
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
          span: [le, m]
        }, m]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        "auto-cols": ["auto", "min", "max", "fr", m]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", m]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [S]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [S]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [S]
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
        m: [k]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [k]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [k]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [k]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [k]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [k]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [k]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [k]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [k]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [me]
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
        "space-y": [me]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", m, o]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [m, o, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [m, o, "none", "full", "min", "max", "fit", "prose", {
          screen: [Y]
        }, Y]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [m, o, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [m, o, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [m, o, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [m, o, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Y, U]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ne]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", m]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ee, Ne]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", V, m]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", m]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", m]
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
        "placeholder-opacity": [_]
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
        "text-opacity": [_]
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
        decoration: ["auto", "from-font", V, U]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", V, m]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", m]
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
        content: ["none", m]
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
        "bg-opacity": [_]
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
        bg: [...$(), at]
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
        bg: ["auto", "cover", "contain", nt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, it]
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
        from: [I]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [I]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [I]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [A]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [A]
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
        "border-opacity": [_]
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
        "divide-opacity": [_]
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
        "outline-offset": [V, m]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [V, U]
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
        ring: M()
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
        "ring-opacity": [_]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [V, U]
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
        shadow: ["", "inner", "none", Y, lt]
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
        opacity: [_]
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
        "drop-shadow": ["", "none", Y, m]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [v]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [E]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B]
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
        "backdrop-grayscale": [v]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [E]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", m]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: W()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", m]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: W()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", m]
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
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [le, m]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [be]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [be]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", m]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", m]
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
        "will-change": ["auto", "scroll", "contents", "transform", m]
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
        stroke: [V, U, Ne]
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
}, pt = /* @__PURE__ */ Jr(ft);
function j(...r) {
  return pt(Ir(r));
}
var Ae = { exports: {} }, de = {};
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
function mt() {
  if (Ze)
    return de;
  Ze = 1;
  var r = fe, o = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(c, f, v) {
    var b, E = {}, S = null, A = null;
    v !== void 0 && (S = "" + v), f.key !== void 0 && (S = "" + f.key), f.ref !== void 0 && (A = f.ref);
    for (b in f)
      n.call(f, b) && !s.hasOwnProperty(b) && (E[b] = f[b]);
    if (c && c.defaultProps)
      for (b in f = c.defaultProps, f)
        E[b] === void 0 && (E[b] = f[b]);
    return { $$typeof: o, type: c, key: S, ref: A, props: E, _owner: i.current };
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
function bt() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = fe, o = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), I = Symbol.iterator, P = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = I && e[I] || e[P];
      return typeof a == "function" ? a : null;
    }
    var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
          l[p - 1] = arguments[p];
        B("error", e, l);
      }
    }
    function B(e, a, l) {
      {
        var p = _.ReactDebugCurrentFrame, y = p.getStackAddendum();
        y !== "" && (a += "%s", l = l.concat([y]));
        var C = l.map(function(h) {
          return String(h);
        });
        C.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, C);
      }
    }
    var L = !1, H = !1, pe = !1, me = !1, be = !1, K;
    K = Symbol.for("react.module.reference");
    function te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === s || be || e === i || e === v || e === b || me || e === A || L || H || pe || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === E || e.$$typeof === d || e.$$typeof === c || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function oe(e, a, l) {
      var p = e.displayName;
      if (p)
        return p;
      var y = a.displayName || a.name || "";
      return y !== "" ? l + "(" + y + ")" : l;
    }
    function w(e) {
      return e.displayName || "Context";
    }
    function M(e) {
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
        case v:
          return "Suspense";
        case b:
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
          case E:
            var p = e.displayName || null;
            return p !== null ? p : M(e.type) || "Memo";
          case S: {
            var y = e, C = y._payload, h = y._init;
            try {
              return M(h(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, $ = 0, q, ne, X, G, ae, W, ze;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function sr() {
      {
        if ($ === 0) {
          q = console.log, ne = console.info, X = console.warn, G = console.error, ae = console.group, W = console.groupCollapsed, ze = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
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
        $++;
      }
    }
    function ir() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: q
            }),
            info: F({}, e, {
              value: ne
            }),
            warn: F({}, e, {
              value: X
            }),
            error: F({}, e, {
              value: G
            }),
            group: F({}, e, {
              value: ae
            }),
            groupCollapsed: F({}, e, {
              value: W
            }),
            groupEnd: F({}, e, {
              value: ze
            })
          });
        }
        $ < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var we = _.ReactCurrentDispatcher, Ce;
    function ge(e, a, l) {
      {
        if (Ce === void 0)
          try {
            throw Error();
          } catch (y) {
            var p = y.stack.trim().match(/\n( *(at )?)/);
            Ce = p && p[1] || "";
          }
        return `
` + Ce + e;
      }
    }
    var je = !1, he;
    {
      var lr = typeof WeakMap == "function" ? WeakMap : Map;
      he = new lr();
    }
    function Me(e, a) {
      if (!e || je)
        return "";
      {
        var l = he.get(e);
        if (l !== void 0)
          return l;
      }
      var p;
      je = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = we.current, we.current = null, sr();
      try {
        if (a) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (z) {
              p = z;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (z) {
              p = z;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            p = z;
          }
          e();
        }
      } catch (z) {
        if (z && p && typeof z.stack == "string") {
          for (var g = z.stack.split(`
`), O = p.stack.split(`
`), T = g.length - 1, N = O.length - 1; T >= 1 && N >= 0 && g[T] !== O[N]; )
            N--;
          for (; T >= 1 && N >= 0; T--, N--)
            if (g[T] !== O[N]) {
              if (T !== 1 || N !== 1)
                do
                  if (T--, N--, N < 0 || g[T] !== O[N]) {
                    var D = `
` + g[T].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && he.set(e, D), D;
                  }
                while (T >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        je = !1, we.current = C, ir(), Error.prepareStackTrace = y;
      }
      var Q = e ? e.displayName || e.name : "", J = Q ? ge(Q) : "";
      return typeof e == "function" && he.set(e, J), J;
    }
    function cr(e, a, l) {
      return Me(e, !1);
    }
    function dr(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function ve(e, a, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Me(e, dr(e));
      if (typeof e == "string")
        return ge(e);
      switch (e) {
        case v:
          return ge("Suspense");
        case b:
          return ge("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return cr(e.render);
          case E:
            return ve(e.type, a, l);
          case S: {
            var p = e, y = p._payload, C = p._init;
            try {
              return ve(C(y), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, Fe = {}, We = _.ReactDebugCurrentFrame;
    function ye(e) {
      if (e) {
        var a = e._owner, l = ve(e.type, e._source, a ? a.type : null);
        We.setExtraStackFrame(l);
      } else
        We.setExtraStackFrame(null);
    }
    function ur(e, a, l, p, y) {
      {
        var C = Function.call.bind(se);
        for (var h in e)
          if (C(e, h)) {
            var g = void 0;
            try {
              if (typeof e[h] != "function") {
                var O = Error((p || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              g = e[h](a, h, p, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              g = T;
            }
            g && !(g instanceof Error) && (ye(y), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", l, h, typeof g), ye(null)), g instanceof Error && !(g.message in Fe) && (Fe[g.message] = !0, ye(y), x("Failed %s type: %s", l, g.message), ye(null));
          }
      }
    }
    var fr = Array.isArray;
    function Re(e) {
      return fr(e);
    }
    function pr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function mr(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function Le(e) {
      if (mr(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(e)), De(e);
    }
    var ie = _.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, $e, Ee;
    Ee = {};
    function gr(e) {
      if (se.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function hr(e) {
      if (se.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function vr(e, a) {
      if (typeof e.ref == "string" && ie.current && a && ie.current.stateNode !== a) {
        var l = M(ie.current.type);
        Ee[l] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(ie.current.type), e.ref), Ee[l] = !0);
      }
    }
    function yr(e, a) {
      {
        var l = function() {
          Ve || (Ve = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function xr(e, a) {
      {
        var l = function() {
          $e || ($e = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var wr = function(e, a, l, p, y, C, h) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: l,
        props: h,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Cr(e, a, l, p, y) {
      {
        var C, h = {}, g = null, O = null;
        l !== void 0 && (Le(l), g = "" + l), hr(a) && (Le(a.key), g = "" + a.key), gr(a) && (O = a.ref, vr(a, y));
        for (C in a)
          se.call(a, C) && !br.hasOwnProperty(C) && (h[C] = a[C]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (C in T)
            h[C] === void 0 && (h[C] = T[C]);
        }
        if (g || O) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && yr(h, N), O && xr(h, N);
        }
        return wr(e, g, O, y, p, ie.current, h);
      }
    }
    var ke = _.ReactCurrentOwner, Ge = _.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var a = e._owner, l = ve(e.type, e._source, a ? a.type : null);
        Ge.setExtraStackFrame(l);
      } else
        Ge.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function Se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ue() {
      {
        if (ke.current) {
          var e = M(ke.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function jr(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), l = e.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var Ye = {};
    function Rr(e) {
      {
        var a = Ue();
        if (!a) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Be(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = Rr(a);
        if (Ye[l])
          return;
        Ye[l] = !0;
        var p = "";
        e && e._owner && e._owner !== ke.current && (p = " It was passed a child from " + M(e._owner.type) + "."), Z(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, p), Z(null);
      }
    }
    function qe(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Re(e))
          for (var l = 0; l < e.length; l++) {
            var p = e[l];
            Se(p) && Be(p, a);
          }
        else if (Se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = k(e);
          if (typeof y == "function" && y !== e.entries)
            for (var C = y.call(e), h; !(h = C.next()).done; )
              Se(h.value) && Be(h.value, a);
        }
      }
    }
    function Er(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === E))
          l = a.propTypes;
        else
          return;
        if (l) {
          var p = M(a);
          ur(l, e.props, "prop", p, e);
        } else if (a.PropTypes !== void 0 && !_e) {
          _e = !0;
          var y = M(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(e) {
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
    function He(e, a, l, p, y, C) {
      {
        var h = te(e);
        if (!h) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = jr(y);
          O ? g += O : g += Ue();
          var T;
          e === null ? T = "null" : Re(e) ? T = "array" : e !== void 0 && e.$$typeof === o ? (T = "<" + (M(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, g);
        }
        var N = Cr(e, a, l, y, C);
        if (N == null)
          return N;
        if (h) {
          var D = a.children;
          if (D !== void 0)
            if (p)
              if (Re(D)) {
                for (var Q = 0; Q < D.length; Q++)
                  qe(D[Q], e);
                Object.freeze && Object.freeze(D);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qe(D, e);
        }
        if (se.call(a, "key")) {
          var J = M(e), z = Object.keys(a).filter(function(Ar) {
            return Ar !== "key";
          }), Te = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Je[J + Te]) {
            var Pr = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Te, J, Pr, J), Je[J + Te] = !0;
          }
        }
        return e === n ? kr(N) : Er(N), N;
      }
    }
    function _r(e, a, l) {
      return He(e, a, l, !0);
    }
    function Sr(e, a, l) {
      return He(e, a, l, !1);
    }
    var Tr = Sr, Nr = _r;
    ue.Fragment = n, ue.jsx = Tr, ue.jsxs = Nr;
  }()), ue;
}
process.env.NODE_ENV === "production" ? Ae.exports = mt() : Ae.exports = bt();
var u = Ae.exports;
const gt = {
  1: "text-4xl font-bold tracking-tight",
  2: "text-3xl font-bold tracking-tight",
  3: "text-2xl font-semibold tracking-tight",
  4: "text-xl font-semibold",
  5: "text-lg font-medium",
  6: "text-base font-medium"
};
function ht({ className: r, level: o = 1, children: t, ref: n, ...i }) {
  const s = {
    ref: n,
    className: j(gt[o], r),
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
ht.displayName = "Heading";
const vt = {
  body: "text-base leading-relaxed",
  caption: "text-sm text-gray-600",
  small: "text-sm",
  large: "text-lg leading-relaxed"
};
function yt({
  className: r,
  variant: o = "body",
  children: t,
  ref: n,
  ...i
}) {
  return /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: n,
      className: j(vt[o], r),
      ...i,
      children: t
    }
  );
}
yt.displayName = "Text";
const xt = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};
function wt({ className: r, name: o, size: t = "md", children: n, ref: i, ...s }) {
  return /* @__PURE__ */ u.jsx("svg", { ref: i, className: j("inline-block", xt[t], r), fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", ...s, children: n });
}
wt.displayName = "Icon";
function Ct({
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
Ct.displayName = "Card";
function jt({
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
jt.displayName = "CardHeader";
function Rt({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    "h3",
    {
      ref: t,
      className: j("text-lg font-semibold leading-none tracking-tight", r),
      ...n,
      children: o
    }
  );
}
Rt.displayName = "CardTitle";
function Et({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: t,
      className: j("text-sm text-gray-500", r),
      ...n,
      children: o
    }
  );
}
Et.displayName = "CardDescription";
function kt({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx("div", { ref: t, className: j("p-6 pt-0", r), ...n, children: o });
}
kt.displayName = "CardContent";
function _t({
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
_t.displayName = "CardFooter";
const St = {
  default: "bg-gray-100 text-gray-800",
  primary: "bg-primary-100 text-primary-800",
  secondary: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800"
};
function Tt({
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
        St[o],
        r
      ),
      ...i,
      children: t
    }
  );
}
Tt.displayName = "Badge";
const Nt = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-16 w-16"
};
function Pt({
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
        Nt[n],
        r
      ),
      ...d,
      children: o ? /* @__PURE__ */ u.jsx(
        "img",
        {
          className: "aspect-square h-full w-full",
          src: o,
          alt: t
        }
      ) : /* @__PURE__ */ u.jsx("div", { className: "flex h-full w-full items-center justify-center rounded-full bg-gray-100", children: i || /* @__PURE__ */ u.jsx("span", { className: "text-sm font-medium text-gray-600", children: (t == null ? void 0 : t.charAt(0).toUpperCase()) || "U" }) })
    }
  );
}
Pt.displayName = "Avatar";
const At = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-primary-500",
  ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
}, Ot = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base"
};
function zt({
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
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        At[o],
        Ot[t],
        r
      ),
      ref: d,
      disabled: i || n,
      ...c,
      children: [
        n && /* @__PURE__ */ u.jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ u.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ u.jsx(
            "path",
            {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }
          )
        ] }),
        s
      ]
    }
  );
}
zt.displayName = "Button";
function It({ className: r, label: o, error: t, helperText: n, id: i, ref: s, ...d }) {
  const c = i || `input-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ u.jsxs("div", { className: "w-full", children: [
    o && /* @__PURE__ */ u.jsx("label", { htmlFor: c, className: "block text-sm font-medium text-gray-700 mb-1", children: o }),
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
It.displayName = "Input";
function Mt({
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
  const v = d || `select-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ u.jsxs("div", { className: "w-full", children: [
    o && /* @__PURE__ */ u.jsx("label", { htmlFor: v, className: "block text-sm font-medium text-gray-700 mb-1", children: o }),
    /* @__PURE__ */ u.jsxs(
      "select",
      {
        id: v,
        className: j(
          "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
          t && "border-red-300 focus:border-red-500 focus:ring-red-500",
          r
        ),
        ref: c,
        ...f,
        children: [
          s && /* @__PURE__ */ u.jsx("option", { value: "", disabled: !0, children: s }),
          i.map((b) => /* @__PURE__ */ u.jsx(
            "option",
            {
              value: b.value,
              disabled: b.disabled,
              children: b.label
            },
            b.value
          ))
        ]
      }
    ),
    t && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-sm text-red-600", children: t }),
    n && !t && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-sm text-gray-500", children: n })
  ] });
}
Mt.displayName = "Select";
const Ft = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, Wt = {
  primary: "text-primary-600",
  white: "text-white",
  gray: "text-gray-600"
};
function Dt({ className: r, size: o = "md", color: t = "primary", ref: n, ...i }) {
  return /* @__PURE__ */ u.jsx("div", { ref: n, className: j("animate-spin", Ft[o], Wt[t], r), ...i, children: /* @__PURE__ */ u.jsxs("svg", { className: "h-full w-full", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ u.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
    /* @__PURE__ */ u.jsx(
      "path",
      {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      }
    )
  ] }) });
}
Dt.displayName = "Spinner";
const Lt = {
  info: "bg-blue-50 text-blue-800 border-blue-200",
  success: "bg-green-50 text-green-800 border-green-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
  error: "bg-red-50 text-red-800 border-red-200"
};
function Vt({ className: r, variant: o = "info", children: t, ref: n, ...i }) {
  return /* @__PURE__ */ u.jsx("div", { ref: n, className: j("rounded-md border p-4", Lt[o], r), role: "alert", ...i, children: t });
}
Vt.displayName = "Alert";
function $t({
  className: r,
  isOpen: o,
  onClose: t,
  children: n,
  ref: i,
  ...s
}) {
  return o ? /* @__PURE__ */ u.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
    /* @__PURE__ */ u.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50",
        onClick: t
      }
    ),
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
$t.displayName = "Modal";
const Gt = {
  top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
  left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
};
function Ut({
  className: r,
  content: o,
  children: t,
  position: n = "top",
  delay: i = 200,
  ref: s,
  ...d
}) {
  const [c, f] = xe(!1), [v, b] = xe(null), E = () => {
    const A = setTimeout(() => f(!0), i);
    b(A);
  }, S = () => {
    v && (clearTimeout(v), b(null)), f(!1);
  };
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: s,
      className: "relative inline-block",
      onMouseEnter: E,
      onMouseLeave: S,
      onFocus: E,
      onBlur: S,
      ...d,
      children: [
        t,
        c && /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: j(
              "absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap",
              Gt[n],
              r
            ),
            role: "tooltip",
            children: [
              o,
              /* @__PURE__ */ u.jsx(
                "div",
                {
                  className: j(
                    "absolute w-2 h-2 bg-gray-900 transform rotate-45",
                    n === "top" && "top-full left-1/2 -translate-x-1/2 -mt-1",
                    n === "bottom" && "bottom-full left-1/2 -translate-x-1/2 -mb-1",
                    n === "left" && "left-full top-1/2 -translate-y-1/2 -ml-1",
                    n === "right" && "right-full top-1/2 -translate-y-1/2 -mr-1"
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
Ut.displayName = "Tooltip";
function Yt({
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
Yt.displayName = "Tabs";
function Bt({
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
Bt.displayName = "TabList";
function qt({
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
        "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
        t ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
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
qt.displayName = "Tab";
function Jt({
  className: r,
  children: o,
  ref: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsx("div", { ref: t, className: j("mt-4", r), ...n, children: o });
}
Jt.displayName = "TabPanels";
function Ht({
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
Ht.displayName = "TabPanel";
function Kt({
  className: r,
  trigger: o,
  children: t,
  align: n = "left",
  ref: i,
  ...s
}) {
  const [d, c] = xe(!1), f = Or(null);
  return zr(() => {
    const v = (b) => {
      f.current && !f.current.contains(b.target) && c(!1);
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, []), /* @__PURE__ */ u.jsxs("div", { ref: f, className: "relative inline-block text-left", ...s, children: [
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
  ] });
}
Kt.displayName = "Dropdown";
function Xt({
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
        "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer",
        r
      ),
      onClick: t,
      role: "menuitem",
      ...i,
      children: o
    }
  );
}
Xt.displayName = "DropdownItem";
export {
  Vt as Alert,
  Pt as Avatar,
  Tt as Badge,
  zt as Button,
  Ct as Card,
  kt as CardContent,
  Et as CardDescription,
  _t as CardFooter,
  jt as CardHeader,
  Rt as CardTitle,
  Kt as Dropdown,
  Xt as DropdownItem,
  ht as Heading,
  wt as Icon,
  It as Input,
  $t as Modal,
  Mt as Select,
  Dt as Spinner,
  qt as Tab,
  Bt as TabList,
  Ht as TabPanel,
  Jt as TabPanels,
  Yt as Tabs,
  yt as Text,
  Ut as Tooltip,
  j as cn
};
