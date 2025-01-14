!(function (e) {
  function t(o) {
    if (n[o]) return n[o].exports;
    var a = (n[o] = { i: o, l: !1, exports: {} });
    return e[o].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, o) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: o,
        });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function (e, t) {
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      })(),
      r = wp.richText,
      s = r.registerFormatType,
      l = (r.toggleFormat, r.applyFormat),
      c = r.removeFormat,
      p = (r.getTextContent, r.slice, wp.editor),
      u = p.RichTextToolbarButton,
      d = (p.RichTextShortcut, p.__unstableRichTextInputEvent, wp.element),
      m = d.Component,
      _ = (d.createElement, d.Fragment),
      h = wp.components,
      f = h.ButtonGroup,
      v = h.Button,
      w = (h.Modal, h.TextControl),
      y = (h.SelectControl, h.Popover),
      b = (wp.compose.withState, wp.dom.getRectangleFromRange),
      x = "pandastudio/description";
    s(x, {
      title: "弹出提示",
      tagName: "span",
      className: "pandastudio_format_description",
      attributes: { text: "data-description", placement: "data-placement" },
      edit: (function (e) {
        function t() {
          n(this, t);
          var e = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          );
          return (
            (e.show_modal = e.show_modal.bind(e)),
            (e.close_modal = e.close_modal.bind(e)),
            (e.set_text = e.set_text.bind(e)),
            (e.add_description_data = e.add_description_data.bind(e)),
            (e.remove_description_data = e.remove_description_data.bind(e)),
            (e.words_selected = e.words_selected.bind(e)),
            (e.set_placement = e.set_placement.bind(e)),
            (e.set_popover_rect = e.set_popover_rect.bind(e)),
            (e.text_key_down = e.text_key_down.bind(e)),
            (e.state = {
              modal_visibility: !1,
              text: "",
              placement: "top",
              popover_rect: {},
            }),
            e
          );
        }
        return (
          a(t, e),
          i(t, [
            {
              key: "words_selected",
              value: function () {
                var e = this.props.value;
                return e.start !== e.end;
              },
            },
            {
              key: "show_modal",
              value: function () {
                var e = this.props.activeAttributes;
                this.set_text(e.text),
                  this.set_placement(e.placement),
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
              key: "set_text",
              value: function (e) {
                this.setState({ text: e || "" });
              },
            },
            {
              key: "set_placement",
              value: function (e) {
                this.setState({ placement: e || "top" }),
                  this.add_description_data();
              },
            },
            {
              key: "add_description_data",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.value,
                  o = t.onChange;
                window.setTimeout(function () {
                  o(
                    e.state.text
                      ? l(n, {
                          type: x,
                          attributes: {
                            text: e.state.text,
                            placement: e.state.placement,
                          },
                        })
                      : c(n, x)
                  );
                }, 0);
              },
            },
            {
              key: "remove_description_data",
              value: function () {
                var e = this.props,
                  t = e.value;
                (0, e.onChange)(c(t, x)), this.close_modal();
              },
            },
            {
              key: "text_key_down",
              value: function (e) {
                13 == e && (this.add_description_data(), this.close_modal()),
                  27 == e && this.close_modal();
              },
            },
            {
              key: "set_popover_rect",
              value: function () {
                var e = window.getSelection(),
                  t = e.rangeCount > 0 ? e.getRangeAt(0) : null,
                  n = b(t);
                this.setState({ popover_rect: n });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.isActive;
                t.value, t.onChange;
                return wp.element.createElement(
                  _,
                  null,
                  wp.element.createElement(u, {
                    icon: "admin-comments",
                    title: "弹出提示",
                    onClick: this.show_modal,
                    isActive: n,
                    shortcutType: "primary",
                    isDisabled: !this.words_selected(),
                  }),
                  this.state.modal_visibility &&
                    wp.element.createElement(
                      y,
                      {
                        anchorRect: this.state.popover_rect,
                        position: "bottom center",
                        className: "pandastudio_format_description_popover",
                        onClickOutside: this.close_modal,
                      },
                      wp.element.createElement(
                        "div",
                        { style: { padding: "10px" } },
                        wp.element.createElement(
                          "div",
                          { className: "inputerWrapper" },
                          wp.element.createElement(
                            "div",
                            { className: "inputer" },
                            wp.element.createElement(w, {
                              value: this.state.text,
                              placeholder: "请输入提示语...",
                              onKeyDown: function (t) {
                                e.text_key_down(t.keyCode);
                              },
                              onChange: function (t) {
                                return e.set_text(t);
                              },
                            })
                          ),
                          wp.element.createElement(
                            "button",
                            {
                              className: "confirm_button",
                              onClick: function () {
                                e.add_description_data(), e.close_modal();
                              },
                            },
                            wp.element.createElement(
                              "svg",
                              {
                                "aria-hidden": "true",
                                role: "img",
                                focusable: "false",
                                class: "dashicon dashicons-editor-break",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                              },
                              wp.element.createElement("path", {
                                d: "M16 4h2v9H7v3l-5-4 5-4v3h9V4z",
                              })
                            )
                          )
                        ),
                        this.state.text &&
                          wp.element.createElement(
                            f,
                            null,
                            wp.element.createElement(
                              v,
                              {
                                isDefault: !0,
                                onClick: function () {
                                  return e.set_placement("top");
                                },
                                isPrimary: "top" == this.state.placement,
                              },
                              "上"
                            ),
                            wp.element.createElement(
                              v,
                              {
                                isDefault: !0,
                                onClick: function () {
                                  return e.set_placement("bottom");
                                },
                                isPrimary: "bottom" == this.state.placement,
                              },
                              "下"
                            ),
                            wp.element.createElement(
                              v,
                              {
                                isDefault: !0,
                                onClick: function () {
                                  return e.set_placement("left");
                                },
                                isPrimary: "left" == this.state.placement,
                              },
                              "左"
                            ),
                            wp.element.createElement(
                              v,
                              {
                                isDefault: !0,
                                onClick: function () {
                                  return e.set_placement("right");
                                },
                                isPrimary: "right" == this.state.placement,
                              },
                              "右"
                            )
                          )
                      )
                    )
                );
              },
            },
          ]),
          t
        );
      })(m),
    });
  },
]);
