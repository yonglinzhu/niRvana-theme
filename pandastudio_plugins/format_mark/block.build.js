!(function (t) {
  function e(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var r = {};
  (e.m = t),
    (e.c = r),
    (e.d = function (t, r, n) {
      e.o(t, r) ||
        Object.defineProperty(t, r, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (e.n = function (t) {
      var r =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(r, "a", r), r;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 36));
})([
  function (t, e, r) {
    var n = r(23),
      o = "object" == typeof self && self && self.Object === Object && self,
      c = n || o || Function("return this")();
    t.exports = c;
  },
  function (t, e) {
    var r = Array.isArray;
    t.exports = r;
  },
  function (t, e, r) {
    function n(t, e) {
      var r = c(t, e);
      return o(r) ? r : void 0;
    }
    var o = r(51),
      c = r(57);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      return null == t
        ? void 0 === t
          ? u
          : a
        : s && s in Object(t)
        ? c(t)
        : i(t);
    }
    var o = r(7),
      c = r(53),
      i = r(54),
      a = "[object Null]",
      u = "[object Undefined]",
      s = o ? o.toStringTag : void 0;
    t.exports = n;
  },
  function (t, e) {
    function r(t) {
      return null != t && "object" == typeof t;
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    var o = r(41),
      c = r(42),
      i = r(43),
      a = r(44),
      u = r(45);
    (n.prototype.clear = o),
      (n.prototype.delete = c),
      (n.prototype.get = i),
      (n.prototype.has = a),
      (n.prototype.set = u),
      (t.exports = n);
  },
  function (t, e, r) {
    function n(t, e) {
      for (var r = t.length; r--; ) if (o(t[r][0], e)) return r;
      return -1;
    }
    var o = r(21);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(0),
      o = n.Symbol;
    t.exports = o;
  },
  function (t, e, r) {
    var n = r(2),
      o = n(Object, "create");
    t.exports = o;
  },
  function (t, e, r) {
    function n(t, e) {
      var r = t.__data__;
      return o(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
    }
    var o = r(66);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      if ("string" == typeof t || o(t)) return t;
      var e = t + "";
      return "0" == e && 1 / t == -c ? "-0" : e;
    }
    var o = r(18),
      c = 1 / 0;
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(2),
      o = r(0),
      c = n(o, "Map");
    t.exports = c;
  },
  function (t, e) {
    function r(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    var o = r(58),
      c = r(65),
      i = r(67),
      a = r(68),
      u = r(69);
    (n.prototype.clear = o),
      (n.prototype.delete = c),
      (n.prototype.get = i),
      (n.prototype.has = a),
      (n.prototype.set = u),
      (t.exports = n);
  },
  function (t, e, r) {
    function n(t) {
      return i(t) ? o(t) : c(t);
    }
    var o = r(87),
      c = r(94),
      i = r(16);
    t.exports = n;
  },
  function (t, e) {
    function r(t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
    }
    var n = 9007199254740991;
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      return null != t && c(t.length) && !o(t);
    }
    var o = r(22),
      c = r(15);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e) {
      if (o(t)) return !1;
      var r = typeof t;
      return (
        !(
          "number" != r &&
          "symbol" != r &&
          "boolean" != r &&
          null != t &&
          !c(t)
        ) ||
        a.test(t) ||
        !i.test(t) ||
        (null != e && t in Object(e))
      );
    }
    var o = r(1),
      c = r(18),
      i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      return "symbol" == typeof t || (c(t) && o(t) == i);
    }
    var o = r(3),
      c = r(4),
      i = "[object Symbol]";
    t.exports = n;
  },
  function (t, e) {
    function r(t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n; )
        o[r] = e(t[r], r, t);
      return o;
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      var e = (this.__data__ = new o(t));
      this.size = e.size;
    }
    var o = r(5),
      c = r(46),
      i = r(47),
      a = r(48),
      u = r(49),
      s = r(50);
    (n.prototype.clear = c),
      (n.prototype.delete = i),
      (n.prototype.get = a),
      (n.prototype.has = u),
      (n.prototype.set = s),
      (t.exports = n);
  },
  function (t, e) {
    function r(t, e) {
      return t === e || (t !== t && e !== e);
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      if (!c(t)) return !1;
      var e = o(t);
      return e == a || e == u || e == i || e == s;
    }
    var o = r(3),
      c = r(12),
      i = "[object AsyncFunction]",
      a = "[object Function]",
      u = "[object GeneratorFunction]",
      s = "[object Proxy]";
    t.exports = n;
  },
  function (t, e, r) {
    (function (e) {
      var r = "object" == typeof e && e && e.Object === Object && e;
      t.exports = r;
    }.call(e, r(52)));
  },
  function (t, e) {
    function r(t) {
      if (null != t) {
        try {
          return o.call(t);
        } catch (t) {}
        try {
          return t + "";
        } catch (t) {}
      }
      return "";
    }
    var n = Function.prototype,
      o = n.toString;
    t.exports = r;
  },
  function (t, e, r) {
    function n(t, e, r, i, a) {
      return (
        t === e ||
        (null == t || null == e || (!c(t) && !c(e))
          ? t !== t && e !== e
          : o(t, e, r, i, n, a))
      );
    }
    var o = r(70),
      c = r(4);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e, r, n, s, f) {
      var l = r & a,
        p = t.length,
        v = e.length;
      if (p != v && !(l && v > p)) return !1;
      var h = f.get(t);
      if (h && f.get(e)) return h == e;
      var b = -1,
        d = !0,
        _ = r & u ? new o() : void 0;
      for (f.set(t, e), f.set(e, t); ++b < p; ) {
        var y = t[b],
          x = e[b];
        if (n) var g = l ? n(x, y, b, e, t, f) : n(y, x, b, t, e, f);
        if (void 0 !== g) {
          if (g) continue;
          d = !1;
          break;
        }
        if (_) {
          if (
            !c(e, function (t, e) {
              if (!i(_, e) && (y === t || s(y, t, r, n, f))) return _.push(e);
            })
          ) {
            d = !1;
            break;
          }
        } else if (y !== x && !s(y, x, r, n, f)) {
          d = !1;
          break;
        }
      }
      return f.delete(t), f.delete(e), d;
    }
    var o = r(71),
      c = r(74),
      i = r(75),
      a = 1,
      u = 2;
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(89),
      o = r(4),
      c = Object.prototype,
      i = c.hasOwnProperty,
      a = c.propertyIsEnumerable,
      u = n(
        (function () {
          return arguments;
        })()
      )
        ? n
        : function (t) {
            return o(t) && i.call(t, "callee") && !a.call(t, "callee");
          };
    t.exports = u;
  },
  function (t, e, r) {
    (function (t) {
      var n = r(0),
        o = r(90),
        c = "object" == typeof e && e && !e.nodeType && e,
        i = c && "object" == typeof t && t && !t.nodeType && t,
        a = i && i.exports === c,
        u = a ? n.Buffer : void 0,
        s = u ? u.isBuffer : void 0,
        f = s || o;
      t.exports = f;
    }.call(e, r(29)(t)));
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e) {
    function r(t, e) {
      var r = typeof t;
      return (
        !!(e = null == e ? n : e) &&
        ("number" == r || ("symbol" != r && o.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
      );
    }
    var n = 9007199254740991,
      o = /^(?:0|[1-9]\d*)$/;
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(91),
      o = r(92),
      c = r(93),
      i = c && c.isTypedArray,
      a = i ? o(i) : n;
    t.exports = a;
  },
  function (t, e, r) {
    function n(t) {
      return t === t && !o(t);
    }
    var o = r(12);
    t.exports = n;
  },
  function (t, e) {
    function r(t, e) {
      return function (r) {
        return null != r && r[t] === e && (void 0 !== e || t in Object(r));
      };
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t, e) {
      e = o(e, t);
      for (var r = 0, n = e.length; null != t && r < n; ) t = t[c(e[r++])];
      return r && r == n ? t : void 0;
    }
    var o = r(35),
      c = r(10);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e) {
      return o(t) ? t : c(t, e) ? [t] : i(a(t));
    }
    var o = r(1),
      c = r(17),
      i = r(106),
      a = r(109);
    t.exports = n;
  },
  function (t, e, r) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function c(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = r(37),
      a = r.n(i),
      u = (function () {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      s = wp.richText,
      f = s.registerFormatType,
      l = (s.toggleFormat, s.applyFormat),
      p = s.removeFormat,
      v = (s.getTextContent, s.slice, wp.editor),
      h = v.RichTextToolbarButton,
      b = (v.RichTextShortcut, v.__unstableRichTextInputEvent, wp.element),
      d = b.Component,
      _ = (b.createElement, b.Fragment),
      y = wp.components,
      x =
        (y.ButtonGroup,
        y.Button,
        y.Modal,
        y.TextControl,
        y.SelectControl,
        y.Popover),
      g = y.ColorIndicator,
      m = y.ColorPicker,
      j = (y.ColorPalette, y.TabPanel),
      w = y.ToggleControl,
      k = (wp.compose.withState, wp.dom.getRectangleFromRange),
      O = "pandastudio/mark";
    f(O, {
      title: "标记",
      tagName: "span",
      className: "pandastudio-mark",
      attributes: { style: "style", block: "inline-block" },
      edit: (function (t) {
        function e() {
          n(this, e);
          var t = o(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
          );
          return (
            (t.show_modal = t.show_modal.bind(t)),
            (t.close_modal = t.close_modal.bind(t)),
            (t.words_selected = t.words_selected.bind(t)),
            (t.set_popover_rect = t.set_popover_rect.bind(t)),
            (t.set_color = t.set_color.bind(t)),
            (t.reloadPicker = t.reloadPicker.bind(t)),
            (t.tab_changed = t.tab_changed.bind(t)),
            (t.reset_color = t.reset_color.bind(t)),
            (t.block_changed = t.block_changed.bind(t)),
            (t.state = {
              modal_visibility: !1,
              color: "",
              background: "",
              block: !1,
              current_color: "",
              current_tab: "color",
              show_colorpicker: !0,
            }),
            t
          );
        }
        return (
          c(e, t),
          u(e, [
            {
              key: "words_selected",
              value: function () {
                var t = this.props.value;
                return t.start !== t.end;
              },
            },
            {
              key: "set_popover_rect",
              value: function () {
                var t = window.getSelection(),
                  e = t.rangeCount > 0 ? t.getRangeAt(0) : null,
                  r = k(e);
                this.setState({ popover_rect: r });
              },
            },
            {
              key: "show_modal",
              value: function () {
                var t = this.props.activeAttributes;
                this.setState({ block: t.block });
                var e = document.createElement("div");
                e.setAttribute("style", t.style),
                  this.setState({ current_tab: "color" }),
                  this.setState({ current_color: e.style.color }),
                  this.setState({ color: e.style.color }),
                  this.setState({ background: e.style.backgroundColor }),
                  this.setState({ modal_visibility: !0 }),
                  this.set_popover_rect();
              },
            },
            {
              key: "close_modal",
              value: function () {
                this.setState({ modal_visibility: !1 });
              },
            },
            {
              key: "set_color",
              value: function (t, e) {
                var r = this,
                  n = this.props,
                  o = n.value,
                  c = n.onChange;
                this.setState({ current_color: t }),
                  "color" == this.state.current_tab &&
                    this.setState({ color: t }),
                  "background" == this.state.current_tab &&
                    this.setState({ background: t }),
                  e && this.reloadPicker(),
                  window.setTimeout(function () {
                    var t = "";
                    r.state.color && (t += "color: " + r.state.color + ";"),
                      r.state.background &&
                        (t += "background-color: " + r.state.background + ";");
                    var e = { style: t };
                    r.state.block && (e.block = "true"),
                      c(l(o, { type: O, attributes: e }));
                  }, 0);
              },
            },
            {
              key: "reset_color",
              value: function () {
                var t = this.props,
                  e = t.value;
                (0, t.onChange)(p(e, O)), this.close_modal();
              },
            },
            {
              key: "tab_changed",
              value: function (t) {
                this.setState({ current_tab: t }),
                  "color" == t &&
                    this.setState({ current_color: this.state.color }),
                  "background" == t &&
                    this.setState({ current_color: this.state.background }),
                  this.reloadPicker();
              },
            },
            {
              key: "block_changed",
              value: function (t) {
                this.setState({ block: t }),
                  this.set_color(this.state.current_color);
              },
            },
            {
              key: "reloadPicker",
              value: function () {
                var t = this;
                this.setState({ show_colorpicker: !1 }),
                  window.setTimeout(function () {
                    t.setState({ show_colorpicker: !0 });
                  }, 0);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.isActive,
                  n =
                    (e.value,
                    e.onChange,
                    [
                      "#1f2d3d",
                      "#20a0ff",
                      "#13ce66",
                      "#f7ba2a",
                      "#ff4949",
                      "#eef1f7",
                      "#b5e8ff",
                      "#a9f3d5",
                      "#fdeebb",
                      "#ffcaca",
                      "#d5dae0",
                      "#9bd9ff",
                      "#8fecbf",
                      "#fce3a1",
                      "#ffb2b2",
                      "#b0b7c1",
                      "#70bcff",
                      "#68db99",
                      "#f9cd77",
                      "#ff8586",
                      "#8892a0",
                      "#418fff",
                      "#3fbf66",
                      "#f3a845",
                      "#ff5655",
                      "#677384",
                      "#1e5bff",
                      "#1d9832",
                      "#e9781e",
                      "#ff2828",
                      "#49576a",
                      "#0026ea",
                      "#016e09",
                      "#e04b01",
                      "#dd0000",
                      "#3e4b5b",
                      "#0122db",
                      "#015f07",
                      "#bf3f01",
                      "#db0303",
                      "#2d3743",
                      "#0119a0",
                      "#014505",
                      "#8d2f01",
                      "#a10202",
                      "#000",
                      "#fff",
                    ]);
                return wp.element.createElement(
                  _,
                  null,
                  wp.element.createElement(h, {
                    icon: wp.element.createElement(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                      },
                      wp.element.createElement("path", {
                        id: "pandastudio_mark",
                        class: "cls-1",
                        d: "M10.511,16.2l-6.5,2.789V4.557A2.494,2.494,0,0,1,6.448,2.011h8.125a2.494,2.494,0,0,1,2.438,2.547V18.989Zm1.121-8.07L10.511,4.557,9.389,8.13,5.739,8.123l2.957,2.2L7.562,13.892l2.949-2.212,2.949,2.212-1.135-3.568,2.957-2.2Z",
                        transform: "translate(-0.5 -0.5)",
                      })
                    ),
                    title: "标记",
                    onClick: this.show_modal,
                    isActive: r,
                    shortcutType: "primary",
                    isDisabled: !this.words_selected(),
                  }),
                  this.state.modal_visibility &&
                    wp.element.createElement(
                      x,
                      {
                        anchorRect: this.state.popover_rect,
                        position: "bottom center",
                        className: "pandastudio_mark_popover",
                        onClickOutside: this.close_modal,
                      },
                      wp.element.createElement(
                        j,
                        {
                          className: "pandastudio_mark_tab",
                          activeClass: "active-tab",
                          onSelect: function (e) {
                            t.tab_changed(e);
                          },
                          tabs: [
                            {
                              name: "color",
                              title: "文字",
                              className: "tab-color",
                            },
                            {
                              name: "background",
                              title: "背景",
                              className: "tab-background",
                            },
                          ],
                        },
                        function (e) {
                          return wp.element.createElement(
                            "div",
                            null,
                            "显示为块",
                            wp.element.createElement(w, {
                              checked: t.state.block,
                              onChange: function (e) {
                                t.block_changed(e);
                              },
                            }),
                            wp.element.createElement(
                              "button",
                              { class: "enter-button", onClick: t.reset_color },
                              wp.element.createElement(
                                "svg",
                                {
                                  "aria-hidden": "true",
                                  focusable: "false",
                                  "data-prefix": "far",
                                  "data-icon": "undo-alt",
                                  role: "img",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 512 512",
                                  class:
                                    "svg-inline--fa fa-undo-alt fa-w-16 fa-2x",
                                },
                                wp.element.createElement("path", {
                                  fill: "currentColor",
                                  d: "M28.485 28.485L80.65 80.65C125.525 35.767 187.515 8 255.999 8 392.66 8 504.1 119.525 504 256.185 503.9 393.067 392.905 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.353-12.561-.482-17.433l19.738-19.738c4.498-4.498 11.753-4.785 16.501-.552C160.213 433.246 205.895 452 256 452c108.321 0 196-87.662 196-196 0-108.321-87.662-196-196-196-54.163 0-103.157 21.923-138.614 57.386l54.128 54.129c7.56 7.56 2.206 20.485-8.485 20.485H20c-6.627 0-12-5.373-12-12V36.971c0-10.691 12.926-16.045 20.485-8.486z",
                                  class: "",
                                })
                              )
                            )
                          );
                        }
                      ),
                      wp.element.createElement(
                        "div",
                        { className: "my_color_selector" },
                        wp.element.createElement(
                          "div",
                          { className: "palette" },
                          a()(n, function (e) {
                            return wp.element.createElement(g, {
                              colorValue: e,
                              onClick: function () {
                                t.set_color(e, !0);
                              },
                            });
                          }),
                          wp.element.createElement("span", {
                            class: "component-color-indicator",
                            onClick: function () {
                              t.set_color("", !0);
                            },
                          })
                        ),
                        wp.element.createElement(
                          "div",
                          { className: "picker" },
                          this.state.show_colorpicker &&
                            wp.element.createElement(m, {
                              color: this.state.current_color,
                              disableAlpha: !0,
                              onChangeComplete: function (e) {
                                return t.set_color(e.hex);
                              },
                            })
                        )
                      )
                    )
                );
              },
            },
          ]),
          e
        );
      })(d),
    });
  },
  function (t, e, r) {
    function n(t, e) {
      return (a(t) ? o : i)(t, c(e, 3));
    }
    var o = r(19),
      c = r(38),
      i = r(118),
      a = r(1);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      return "function" == typeof t
        ? t
        : null == t
        ? i
        : "object" == typeof t
        ? a(t)
          ? c(t[0], t[1])
          : o(t)
        : u(t);
    }
    var o = r(39),
      c = r(104),
      i = r(114),
      a = r(1),
      u = r(115);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      var e = c(t);
      return 1 == e.length && e[0][2]
        ? i(e[0][0], e[0][1])
        : function (r) {
            return r === t || o(r, t, e);
          };
    }
    var o = r(40),
      c = r(103),
      i = r(33);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e, r, n) {
      var u = r.length,
        s = u,
        f = !n;
      if (null == t) return !s;
      for (t = Object(t); u--; ) {
        var l = r[u];
        if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
      }
      for (; ++u < s; ) {
        l = r[u];
        var p = l[0],
          v = t[p],
          h = l[1];
        if (f && l[2]) {
          if (void 0 === v && !(p in t)) return !1;
        } else {
          var b = new o();
          if (n) var d = n(v, h, p, t, e, b);
          if (!(void 0 === d ? c(h, v, i | a, n, b) : d)) return !1;
        }
      }
      return !0;
    }
    var o = r(20),
      c = r(25),
      i = 1,
      a = 2;
    t.exports = n;
  },
  function (t, e) {
    function r() {
      (this.__data__ = []), (this.size = 0);
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      var e = this.__data__,
        r = o(e, t);
      return (
        !(r < 0) &&
        (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, !0)
      );
    }
    var o = r(6),
      c = Array.prototype,
      i = c.splice;
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      var e = this.__data__,
        r = o(e, t);
      return r < 0 ? void 0 : e[r][1];
    }
    var o = r(6);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      return o(this.__data__, t) > -1;
    }
    var o = r(6);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e) {
      var r = this.__data__,
        n = o(r, t);
      return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
    }
    var o = r(6);
    t.exports = n;
  },
  function (t, e, r) {
    function n() {
      (this.__data__ = new o()), (this.size = 0);
    }
    var o = r(5);
    t.exports = n;
  },
  function (t, e) {
    function r(t) {
      var e = this.__data__,
        r = e.delete(t);
      return (this.size = e.size), r;
    }
    t.exports = r;
  },
  function (t, e) {
    function r(t) {
      return this.__data__.get(t);
    }
    t.exports = r;
  },
  function (t, e) {
    function r(t) {
      return this.__data__.has(t);
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t, e) {
      var r = this.__data__;
      if (r instanceof o) {
        var n = r.__data__;
        if (!c || n.length < a - 1)
          return n.push([t, e]), (this.size = ++r.size), this;
        r = this.__data__ = new i(n);
      }
      return r.set(t, e), (this.size = r.size), this;
    }
    var o = r(5),
      c = r(11),
      i = r(13),
      a = 200;
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      return !(!i(t) || c(t)) && (o(t) ? h : s).test(a(t));
    }
    var o = r(22),
      c = r(55),
      i = r(12),
      a = r(24),
      u = /[\\^$.*+?()[\]{}|]/g,
      s = /^\[object .+?Constructor\]$/,
      f = Function.prototype,
      l = Object.prototype,
      p = f.toString,
      v = l.hasOwnProperty,
      h = RegExp(
        "^" +
          p
            .call(v)
            .replace(u, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    t.exports = n;
  },
  function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      var e = i.call(t, u),
        r = t[u];
      try {
        t[u] = void 0;
        var n = !0;
      } catch (t) {}
      var o = a.call(t);
      return n && (e ? (t[u] = r) : delete t[u]), o;
    }
    var o = r(7),
      c = Object.prototype,
      i = c.hasOwnProperty,
      a = c.toString,
      u = o ? o.toStringTag : void 0;
    t.exports = n;
  },
  function (t, e) {
    function r(t) {
      return o.call(t);
    }
    var n = Object.prototype,
      o = n.toString;
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      return !!c && c in t;
    }
    var o = r(56),
      c = (function () {
        var t = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || "");
        return t ? "Symbol(src)_1." + t : "";
      })();
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(0),
      o = n["__core-js_shared__"];
    t.exports = o;
  },
  function (t, e) {
    function r(t, e) {
      return null == t ? void 0 : t[e];
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n() {
      (this.size = 0),
        (this.__data__ = {
          hash: new o(),
          map: new (i || c)(),
          string: new o(),
        });
    }
    var o = r(59),
      c = r(5),
      i = r(11);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    var o = r(60),
      c = r(61),
      i = r(62),
      a = r(63),
      u = r(64);
    (n.prototype.clear = o),
      (n.prototype.delete = c),
      (n.prototype.get = i),
      (n.prototype.has = a),
      (n.prototype.set = u),
      (t.exports = n);
  },
  function (t, e, r) {
    function n() {
      (this.__data__ = o ? o(null) : {}), (this.size = 0);
    }
    var o = r(8);
    t.exports = n;
  },
  function (t, e) {
    function r(t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      var e = this.__data__;
      if (o) {
        var r = e[t];
        return r === c ? void 0 : r;
      }
      return a.call(e, t) ? e[t] : void 0;
    }
    var o = r(8),
      c = "__lodash_hash_undefined__",
      i = Object.prototype,
      a = i.hasOwnProperty;
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      var e = this.__data__;
      return o ? void 0 !== e[t] : i.call(e, t);
    }
    var o = r(8),
      c = Object.prototype,
      i = c.hasOwnProperty;
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e) {
      var r = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (r[t] = o && void 0 === e ? c : e),
        this
      );
    }
    var o = r(8),
      c = "__lodash_hash_undefined__";
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      var e = o(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    }
    var o = r(9);
    t.exports = n;
  },
  function (t, e) {
    function r(t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e
        ? "__proto__" !== t
        : null === t;
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      return o(this, t).get(t);
    }
    var o = r(9);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      return o(this, t).has(t);
    }
    var o = r(9);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e) {
      var r = o(this, t),
        n = r.size;
      return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
    }
    var o = r(9);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e, r, n, d, y) {
      var x = s(t),
        g = s(e),
        m = x ? h : u(t),
        j = g ? h : u(e);
      (m = m == v ? b : m), (j = j == v ? b : j);
      var w = m == b,
        k = j == b,
        O = m == j;
      if (O && f(t)) {
        if (!f(e)) return !1;
        (x = !0), (w = !1);
      }
      if (O && !w)
        return (
          y || (y = new o()),
          x || l(t) ? c(t, e, r, n, d, y) : i(t, e, m, r, n, d, y)
        );
      if (!(r & p)) {
        var S = w && _.call(t, "__wrapped__"),
          A = k && _.call(e, "__wrapped__");
        if (S || A) {
          var P = S ? t.value() : t,
            E = A ? e.value() : e;
          return y || (y = new o()), d(P, E, r, n, y);
        }
      }
      return !!O && (y || (y = new o()), a(t, e, r, n, d, y));
    }
    var o = r(20),
      c = r(26),
      i = r(76),
      a = r(80),
      u = r(98),
      s = r(1),
      f = r(28),
      l = r(31),
      p = 1,
      v = "[object Arguments]",
      h = "[object Array]",
      b = "[object Object]",
      d = Object.prototype,
      _ = d.hasOwnProperty;
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.__data__ = new o(); ++e < r; ) this.add(t[e]);
    }
    var o = r(13),
      c = r(72),
      i = r(73);
    (n.prototype.add = n.prototype.push = c),
      (n.prototype.has = i),
      (t.exports = n);
  },
  function (t, e) {
    function r(t) {
      return this.__data__.set(t, n), this;
    }
    var n = "__lodash_hash_undefined__";
    t.exports = r;
  },
  function (t, e) {
    function r(t) {
      return this.__data__.has(t);
    }
    t.exports = r;
  },
  function (t, e) {
    function r(t, e) {
      for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
        if (e(t[r], r, t)) return !0;
      return !1;
    }
    t.exports = r;
  },
  function (t, e) {
    function r(t, e) {
      return t.has(e);
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t, e, r, n, o, w, O) {
      switch (r) {
        case j:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            return !1;
          (t = t.buffer), (e = e.buffer);
        case m:
          return !(t.byteLength != e.byteLength || !w(new c(t), new c(e)));
        case p:
        case v:
        case d:
          return i(+t, +e);
        case h:
          return t.name == e.name && t.message == e.message;
        case _:
        case x:
          return t == e + "";
        case b:
          var S = u;
        case y:
          var A = n & f;
          if ((S || (S = s), t.size != e.size && !A)) return !1;
          var P = O.get(t);
          if (P) return P == e;
          (n |= l), O.set(t, e);
          var E = a(S(t), S(e), n, o, w, O);
          return O.delete(t), E;
        case g:
          if (k) return k.call(t) == k.call(e);
      }
      return !1;
    }
    var o = r(7),
      c = r(77),
      i = r(21),
      a = r(26),
      u = r(78),
      s = r(79),
      f = 1,
      l = 2,
      p = "[object Boolean]",
      v = "[object Date]",
      h = "[object Error]",
      b = "[object Map]",
      d = "[object Number]",
      _ = "[object RegExp]",
      y = "[object Set]",
      x = "[object String]",
      g = "[object Symbol]",
      m = "[object ArrayBuffer]",
      j = "[object DataView]",
      w = o ? o.prototype : void 0,
      k = w ? w.valueOf : void 0;
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(0),
      o = n.Uint8Array;
    t.exports = o;
  },
  function (t, e) {
    function r(t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (t, n) {
          r[++e] = [n, t];
        }),
        r
      );
    }
    t.exports = r;
  },
  function (t, e) {
    function r(t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (t) {
          r[++e] = t;
        }),
        r
      );
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t, e, r, n, i, u) {
      var s = r & c,
        f = o(t),
        l = f.length;
      if (l != o(e).length && !s) return !1;
      for (var p = l; p--; ) {
        var v = f[p];
        if (!(s ? v in e : a.call(e, v))) return !1;
      }
      var h = u.get(t);
      if (h && u.get(e)) return h == e;
      var b = !0;
      u.set(t, e), u.set(e, t);
      for (var d = s; ++p < l; ) {
        v = f[p];
        var _ = t[v],
          y = e[v];
        if (n) var x = s ? n(y, _, v, e, t, u) : n(_, y, v, t, e, u);
        if (!(void 0 === x ? _ === y || i(_, y, r, n, u) : x)) {
          b = !1;
          break;
        }
        d || (d = "constructor" == v);
      }
      if (b && !d) {
        var g = t.constructor,
          m = e.constructor;
        g != m &&
          "constructor" in t &&
          "constructor" in e &&
          !(
            "function" == typeof g &&
            g instanceof g &&
            "function" == typeof m &&
            m instanceof m
          ) &&
          (b = !1);
      }
      return u.delete(t), u.delete(e), b;
    }
    var o = r(81),
      c = 1,
      i = Object.prototype,
      a = i.hasOwnProperty;
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      return o(t, i, c);
    }
    var o = r(82),
      c = r(84),
      i = r(14);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e, r) {
      var n = e(t);
      return c(t) ? n : o(n, r(t));
    }
    var o = r(83),
      c = r(1);
    t.exports = n;
  },
  function (t, e) {
    function r(t, e) {
      for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
      return t;
    }
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(85),
      o = r(86),
      c = Object.prototype,
      i = c.propertyIsEnumerable,
      a = Object.getOwnPropertySymbols,
      u = a
        ? function (t) {
            return null == t
              ? []
              : ((t = Object(t)),
                n(a(t), function (e) {
                  return i.call(t, e);
                }));
          }
        : o;
    t.exports = u;
  },
  function (t, e) {
    function r(t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, o = 0, c = []; ++r < n; ) {
        var i = t[r];
        e(i, r, t) && (c[o++] = i);
      }
      return c;
    }
    t.exports = r;
  },
  function (t, e) {
    function r() {
      return [];
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t, e) {
      var r = i(t),
        n = !r && c(t),
        f = !r && !n && a(t),
        p = !r && !n && !f && s(t),
        v = r || n || f || p,
        h = v ? o(t.length, String) : [],
        b = h.length;
      for (var d in t)
        (!e && !l.call(t, d)) ||
          (v &&
            ("length" == d ||
              (f && ("offset" == d || "parent" == d)) ||
              (p &&
                ("buffer" == d || "byteLength" == d || "byteOffset" == d)) ||
              u(d, b))) ||
          h.push(d);
      return h;
    }
    var o = r(88),
      c = r(27),
      i = r(1),
      a = r(28),
      u = r(30),
      s = r(31),
      f = Object.prototype,
      l = f.hasOwnProperty;
    t.exports = n;
  },
  function (t, e) {
    function r(t, e) {
      for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
      return n;
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      return c(t) && o(t) == i;
    }
    var o = r(3),
      c = r(4),
      i = "[object Arguments]";
    t.exports = n;
  },
  function (t, e) {
    function r() {
      return !1;
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      return i(t) && c(t.length) && !!a[o(t)];
    }
    var o = r(3),
      c = r(15),
      i = r(4),
      a = {};
    (a["[object Float32Array]"] =
      a["[object Float64Array]"] =
      a["[object Int8Array]"] =
      a["[object Int16Array]"] =
      a["[object Int32Array]"] =
      a["[object Uint8Array]"] =
      a["[object Uint8ClampedArray]"] =
      a["[object Uint16Array]"] =
      a["[object Uint32Array]"] =
        !0),
      (a["[object Arguments]"] =
        a["[object Array]"] =
        a["[object ArrayBuffer]"] =
        a["[object Boolean]"] =
        a["[object DataView]"] =
        a["[object Date]"] =
        a["[object Error]"] =
        a["[object Function]"] =
        a["[object Map]"] =
        a["[object Number]"] =
        a["[object Object]"] =
        a["[object RegExp]"] =
        a["[object Set]"] =
        a["[object String]"] =
        a["[object WeakMap]"] =
          !1),
      (t.exports = n);
  },
  function (t, e) {
    function r(t) {
      return function (e) {
        return t(e);
      };
    }
    t.exports = r;
  },
  function (t, e, r) {
    (function (t) {
      var n = r(23),
        o = "object" == typeof e && e && !e.nodeType && e,
        c = o && "object" == typeof t && t && !t.nodeType && t,
        i = c && c.exports === o,
        a = i && n.process,
        u = (function () {
          try {
            var t = c && c.require && c.require("util").types;
            return t || (a && a.binding && a.binding("util"));
          } catch (t) {}
        })();
      t.exports = u;
    }.call(e, r(29)(t)));
  },
  function (t, e, r) {
    function n(t) {
      if (!o(t)) return c(t);
      var e = [];
      for (var r in Object(t)) a.call(t, r) && "constructor" != r && e.push(r);
      return e;
    }
    var o = r(95),
      c = r(96),
      i = Object.prototype,
      a = i.hasOwnProperty;
    t.exports = n;
  },
  function (t, e) {
    function r(t) {
      var e = t && t.constructor;
      return t === (("function" == typeof e && e.prototype) || n);
    }
    var n = Object.prototype;
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(97),
      o = n(Object.keys, Object);
    t.exports = o;
  },
  function (t, e) {
    function r(t, e) {
      return function (r) {
        return t(e(r));
      };
    }
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(99),
      o = r(11),
      c = r(100),
      i = r(101),
      a = r(102),
      u = r(3),
      s = r(24),
      f = s(n),
      l = s(o),
      p = s(c),
      v = s(i),
      h = s(a),
      b = u;
    ((n && "[object DataView]" != b(new n(new ArrayBuffer(1)))) ||
      (o && "[object Map]" != b(new o())) ||
      (c && "[object Promise]" != b(c.resolve())) ||
      (i && "[object Set]" != b(new i())) ||
      (a && "[object WeakMap]" != b(new a()))) &&
      (b = function (t) {
        var e = u(t),
          r = "[object Object]" == e ? t.constructor : void 0,
          n = r ? s(r) : "";
        if (n)
          switch (n) {
            case f:
              return "[object DataView]";
            case l:
              return "[object Map]";
            case p:
              return "[object Promise]";
            case v:
              return "[object Set]";
            case h:
              return "[object WeakMap]";
          }
        return e;
      }),
      (t.exports = b);
  },
  function (t, e, r) {
    var n = r(2),
      o = r(0),
      c = n(o, "DataView");
    t.exports = c;
  },
  function (t, e, r) {
    var n = r(2),
      o = r(0),
      c = n(o, "Promise");
    t.exports = c;
  },
  function (t, e, r) {
    var n = r(2),
      o = r(0),
      c = n(o, "Set");
    t.exports = c;
  },
  function (t, e, r) {
    var n = r(2),
      o = r(0),
      c = n(o, "WeakMap");
    t.exports = c;
  },
  function (t, e, r) {
    function n(t) {
      for (var e = c(t), r = e.length; r--; ) {
        var n = e[r],
          i = t[n];
        e[r] = [n, i, o(i)];
      }
      return e;
    }
    var o = r(32),
      c = r(14);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e) {
      return a(t) && u(e)
        ? s(f(t), e)
        : function (r) {
            var n = c(r, t);
            return void 0 === n && n === e ? i(r, t) : o(e, n, l | p);
          };
    }
    var o = r(25),
      c = r(105),
      i = r(111),
      a = r(17),
      u = r(32),
      s = r(33),
      f = r(10),
      l = 1,
      p = 2;
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e, r) {
      var n = null == t ? void 0 : o(t, e);
      return void 0 === n ? r : n;
    }
    var o = r(34);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(107),
      o =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      c = /\\(\\)?/g,
      i = n(function (t) {
        var e = [];
        return (
          46 === t.charCodeAt(0) && e.push(""),
          t.replace(o, function (t, r, n, o) {
            e.push(n ? o.replace(c, "$1") : r || t);
          }),
          e
        );
      });
    t.exports = i;
  },
  function (t, e, r) {
    function n(t) {
      var e = o(t, function (t) {
          return r.size === c && r.clear(), t;
        }),
        r = e.cache;
      return e;
    }
    var o = r(108),
      c = 500;
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e) {
      if ("function" != typeof t || (null != e && "function" != typeof e))
        throw new TypeError(c);
      var r = function () {
        var n = arguments,
          o = e ? e.apply(this, n) : n[0],
          c = r.cache;
        if (c.has(o)) return c.get(o);
        var i = t.apply(this, n);
        return (r.cache = c.set(o, i) || c), i;
      };
      return (r.cache = new (n.Cache || o)()), r;
    }
    var o = r(13),
      c = "Expected a function";
    (n.Cache = o), (t.exports = n);
  },
  function (t, e, r) {
    function n(t) {
      return null == t ? "" : o(t);
    }
    var o = r(110);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t) {
      if ("string" == typeof t) return t;
      if (i(t)) return c(t, n) + "";
      if (a(t)) return f ? f.call(t) : "";
      var e = t + "";
      return "0" == e && 1 / t == -u ? "-0" : e;
    }
    var o = r(7),
      c = r(19),
      i = r(1),
      a = r(18),
      u = 1 / 0,
      s = o ? o.prototype : void 0,
      f = s ? s.toString : void 0;
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e) {
      return null != t && c(t, e, o);
    }
    var o = r(112),
      c = r(113);
    t.exports = n;
  },
  function (t, e) {
    function r(t, e) {
      return null != t && e in Object(t);
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t, e, r) {
      e = o(e, t);
      for (var n = -1, f = e.length, l = !1; ++n < f; ) {
        var p = s(e[n]);
        if (!(l = null != t && r(t, p))) break;
        t = t[p];
      }
      return l || ++n != f
        ? l
        : !!(f = null == t ? 0 : t.length) && u(f) && a(p, f) && (i(t) || c(t));
    }
    var o = r(35),
      c = r(27),
      i = r(1),
      a = r(30),
      u = r(15),
      s = r(10);
    t.exports = n;
  },
  function (t, e) {
    function r(t) {
      return t;
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      return i(t) ? o(a(t)) : c(t);
    }
    var o = r(116),
      c = r(117),
      i = r(17),
      a = r(10);
    t.exports = n;
  },
  function (t, e) {
    function r(t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t) {
      return function (e) {
        return o(e, t);
      };
    }
    var o = r(34);
    t.exports = n;
  },
  function (t, e, r) {
    function n(t, e) {
      var r = -1,
        n = c(t) ? Array(t.length) : [];
      return (
        o(t, function (t, o, c) {
          n[++r] = e(t, o, c);
        }),
        n
      );
    }
    var o = r(119),
      c = r(16);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(120),
      o = r(123),
      c = o(n);
    t.exports = c;
  },
  function (t, e, r) {
    function n(t, e) {
      return t && o(t, e, c);
    }
    var o = r(121),
      c = r(14);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(122),
      o = n();
    t.exports = o;
  },
  function (t, e) {
    function r(t) {
      return function (e, r, n) {
        for (var o = -1, c = Object(e), i = n(e), a = i.length; a--; ) {
          var u = i[t ? a : ++o];
          if (!1 === r(c[u], u, c)) break;
        }
        return e;
      };
    }
    t.exports = r;
  },
  function (t, e, r) {
    function n(t, e) {
      return function (r, n) {
        if (null == r) return r;
        if (!o(r)) return t(r, n);
        for (
          var c = r.length, i = e ? c : -1, a = Object(r);
          (e ? i-- : ++i < c) && !1 !== n(a[i], i, a);

        );
        return r;
      };
    }
    var o = r(16);
    t.exports = n;
  },
]);
