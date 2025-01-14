!(function (e) {
  function t(l) {
    if (n[l]) return n[l].exports;
    var i = (n[l] = { i: l, l: !1, exports: {} });
    return e[l].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, l) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: l,
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var l = n(1),
      i = wp.i18n,
      a = (i.__, i.setLocaleData, wp.blocks.registerBlockType),
      c = wp.element.Fragment,
      r = wp.editor,
      o = r.RichText,
      s =
        (r.MediaUpload,
        r.BlockControls,
        r.AlignmentToolbar,
        r.InspectorControls);
    wp.components.Button;
    a("pandastudio/tips", {
      title: "提示框",
      icon: "info",
      category: "pandastudio-block-category",
      attributes: { content: {}, typeClass: {} },
      edit: function (e) {
        var t = e.attributes,
          n = t.content,
          l = t.typeClass,
          i = (t.isSelected, e.setAttributes);
        l = l || "tip info";
        var a = function (e) {
            i({ content: e });
          },
          r = function (e) {
            var t = e.target.className;
            i(
              l.indexOf("inlineBlock") > 0
                ? { typeClass: "tip " + t + " inlineBlock" }
                : { typeClass: "tip " + t }
            );
          },
          p = function (e) {
            return l.indexOf(e) > 0 ? "selected" : "";
          },
          m = function () {
            if (l.indexOf("inlineBlock") > 0) {
              var e = l.replace(" inlineBlock", "");
              (e = l.replace("inlineBlock", "")),
                (e = e.replace("  ", " ")),
                i({ typeClass: e });
            } else i({ typeClass: l + " inlineBlock" });
          };
        return wp.element.createElement(
          c,
          null,
          wp.element.createElement(
            s,
            null,
            wp.element.createElement(
              "div",
              { className: "pf_inspectorTitle" },
              "选择颜色"
            ),
            wp.element.createElement(
              "div",
              { className: "panda tipSelector" },
              wp.element.createElement("button", {
                className: "info",
                onClick: r,
                typeselected: p("info"),
              }),
              wp.element.createElement("button", {
                className: "success",
                onClick: r,
                typeselected: p("success"),
              }),
              wp.element.createElement("button", {
                className: "worning",
                onClick: r,
                typeselected: p("worning"),
              }),
              wp.element.createElement("button", {
                className: "error",
                onClick: r,
                typeselected: p("error"),
              })
            ),
            wp.element.createElement(
              "div",
              { className: "pf_inspectorTitle" },
              "全宽样式"
            ),
            wp.element.createElement(
              "div",
              { className: "panda tipSelector" },
              wp.element.createElement("button", {
                className: "inline",
                onClick: m,
                typeInline: (function () {
                  return l.indexOf("inlineBlock") > 0 ? "true" : "false";
                })(),
              })
            )
          ),
          wp.element.createElement(
            "div",
            { className: l },
            wp.element.createElement(o, {
              multiline: !0,
              onChange: a,
              value: n,
              isSelected: !0,
              placeholder: "请输入...",
            })
          )
        );
      },
      save: function (e) {
        var t = e.attributes,
          n = t.content,
          l = t.typeClass;
        if (((l = l || "tip info"), l.indexOf("inlineBlock") > 0))
          var i = 'display="inlineBlock"';
        else var i = "";
        var a = l.replace("inlineBlock", "");
        (a = a.replace("tip", "")), (a = a.replace(" ", ""));
        var a = 'type="' + l + '"';
        return wp.element.createElement(
          "div",
          null,
          "[tip ",
          a,
          " ",
          i,
          "]",
          wp.element.createElement(o.Content, { value: n }),
          "[/tip]"
        );
      },
      deprecated: [l.a],
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var l = wp.i18n,
      i =
        (l.__,
        l.setLocaleData,
        wp.blocks.registerBlockType,
        wp.element.Fragment),
      a = wp.editor,
      c = a.RichText,
      r =
        (a.MediaUpload,
        a.BlockControls,
        a.AlignmentToolbar,
        a.InspectorControls),
      o =
        (wp.components.Button,
        {
          attributes: { content: {}, typeClass: {} },
          edit: function (e) {
            var t = e.attributes,
              n = t.content,
              l = t.typeClass,
              a = (t.isSelected, e.setAttributes);
            l = l || "tip info";
            var o = function (e) {
                a({ content: e });
              },
              s = function (e) {
                var t = e.target.className;
                a(
                  l.indexOf("inlineBlock") > 0
                    ? { typeClass: "tip " + t + " inlineBlock" }
                    : { typeClass: "tip " + t }
                );
              },
              p = function (e) {
                return l.indexOf(e) > 0 ? "selected" : "";
              },
              m = function () {
                if (l.indexOf("inlineBlock") > 0) {
                  var e = l.replace(" inlineBlock", "");
                  (e = l.replace("inlineBlock", "")),
                    (e = e.replace("  ", " ")),
                    a({ typeClass: e });
                } else a({ typeClass: l + " inlineBlock" });
              };
            return wp.element.createElement(
              i,
              null,
              wp.element.createElement(
                r,
                null,
                wp.element.createElement(
                  "div",
                  { className: "pf_inspectorTitle" },
                  "选择颜色"
                ),
                wp.element.createElement(
                  "div",
                  { className: "panda tipSelector" },
                  wp.element.createElement("button", {
                    className: "info",
                    onClick: s,
                    typeselected: p("info"),
                  }),
                  wp.element.createElement("button", {
                    className: "success",
                    onClick: s,
                    typeselected: p("success"),
                  }),
                  wp.element.createElement("button", {
                    className: "worning",
                    onClick: s,
                    typeselected: p("worning"),
                  }),
                  wp.element.createElement("button", {
                    className: "error",
                    onClick: s,
                    typeselected: p("error"),
                  })
                ),
                wp.element.createElement(
                  "div",
                  { className: "pf_inspectorTitle" },
                  "全宽样式"
                ),
                wp.element.createElement(
                  "div",
                  { className: "panda tipSelector" },
                  wp.element.createElement("button", {
                    className: "inline",
                    onClick: m,
                    typeInline: (function () {
                      return l.indexOf("inlineBlock") > 0 ? "true" : "false";
                    })(),
                  })
                )
              ),
              wp.element.createElement(
                "div",
                { className: l },
                wp.element.createElement(c, {
                  tagName: "p",
                  multiline: !0,
                  onChange: o,
                  value: n,
                  isSelected: !0,
                  placeholder: "请输入...",
                })
              )
            );
          },
          save: function (e) {
            var t = e.attributes,
              n = t.content,
              l = t.typeClass;
            if (((l = l || "tip info"), l.indexOf("inlineBlock") > 0))
              var i = 'display="inlineBlock"';
            else var i = "";
            var a = l.replace("inlineBlock", "");
            (a = a.replace("tip", "")), (a = a.replace(" ", ""));
            var a = 'type="' + l + '"';
            return wp.element.createElement(
              "div",
              null,
              "[tip ",
              a,
              " ",
              i,
              "]",
              wp.element.createElement(c.Content, { tagName: "p", value: n }),
              "[/tip]"
            );
          },
        });
  },
]);
