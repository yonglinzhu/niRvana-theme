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
  function (e, t) {
    var n = wp.i18n,
      l = (n.__, n.setLocaleData, wp.blocks.registerBlockType),
      i = wp.element.Fragment,
      r = wp.editor,
      a = r.RichText,
      c =
        (r.MediaUpload,
        r.BlockControls,
        r.AlignmentToolbar,
        r.InspectorControls),
      o = wp.components,
      s = o.Button,
      u = o.ButtonGroup;
    l("pandastudio/title", {
      title: "小标题",
      icon: "feedback",
      category: "pandastudio-block-category",
      attributes: { content: {}, titleClass: {}, titleInnerTag: {} },
      edit: function (e) {
        var t = e.attributes,
          n = t.content,
          l = t.titleClass,
          r = t.titleInnerTag,
          o = (t.isSelected, e.setAttributes);
        (l = l || "title_style_01"), (r = r || "p");
        var m = function (e) {
            o({ content: e.replace(/<br>/g, "") });
          },
          p = function (e) {
            o({ titleClass: e });
          },
          f = function (e) {
            o({ titleInnerTag: e });
          };
        return wp.element.createElement(
          i,
          null,
          wp.element.createElement(
            c,
            null,
            wp.element.createElement(
              "div",
              { className: "pf_inspectorTitle" },
              "标题样式"
            ),
            wp.element.createElement(
              u,
              null,
              wp.element.createElement(
                s,
                {
                  isPrimary: "title_style_01" == l,
                  isDefault: !0,
                  onClick: function () {
                    p("title_style_01");
                  },
                },
                "样式1"
              ),
              wp.element.createElement(
                s,
                {
                  isPrimary: "title_style_02" == l,
                  isDefault: !0,
                  onClick: function () {
                    p("title_style_02");
                  },
                },
                "样式2"
              )
            ),
            wp.element.createElement(
              "div",
              { className: "pf_inspectorTitle" },
              "标题类型"
            ),
            wp.element.createElement(
              u,
              null,
              wp.element.createElement(
                s,
                {
                  isPrimary: "h2" == r,
                  isDefault: !0,
                  onClick: function () {
                    f("h2");
                  },
                },
                "H2"
              ),
              wp.element.createElement(
                s,
                {
                  isPrimary: "h3" == r,
                  isDefault: !0,
                  onClick: function () {
                    f("h3");
                  },
                },
                "H3"
              ),
              wp.element.createElement(
                s,
                {
                  isPrimary: "p" == r,
                  isDefault: !0,
                  onClick: function () {
                    f("p");
                  },
                },
                "P"
              )
            )
          ),
          wp.element.createElement(
            "div",
            { className: l },
            wp.element.createElement(a, {
              tagName: r,
              onChange: m,
              value: n,
              multiline: !1,
              isSelected: !0,
              placeholder: "请输入...",
            })
          )
        );
      },
      save: function (e) {
        var t = e.attributes,
          n = t.content,
          l = t.titleClass,
          i = t.titleInnerTag;
        return (
          (l = l || "title_style_01"),
          (i = i || "p"),
          wp.element.createElement(
            "div",
            null,
            wp.element.createElement(
              "div",
              { className: l },
              wp.element.createElement(a.Content, { tagName: i, value: n })
            )
          )
        );
      },
    });
  },
]);
