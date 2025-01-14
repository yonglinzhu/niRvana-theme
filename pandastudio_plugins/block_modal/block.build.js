!(function (e) {
  function t(l) {
    if (n[l]) return n[l].exports;
    var a = (n[l] = { i: l, l: !1, exports: {} });
    return e[l].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
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
      a = wp.element.Fragment,
      r = wp.blockEditor,
      c =
        (r.RichText,
        r.MediaUpload,
        r.BlockControls,
        r.AlignmentToolbar,
        r.InspectorControls),
      o = r.InnerBlocks,
      i = wp.components,
      p = (i.Panel, i.PanelBody, i.TextControl);
    l("pandastudio/modal", {
      title: "模态框",
      icon: "welcome-view-site",
      category: "pandastudio-block-category",
      description: "用于浮动展示更多内容",
      attributes: {
        id: {},
        btn_type: {},
        btn_label: {},
        title: {},
        close_label: {},
        href_label: {},
        href: {},
      },
      edit: function (e) {
        var t = e.attributes,
          n = t.id,
          l = t.btn_type,
          r = t.btn_label,
          i = t.title,
          s = t.close_label,
          m = t.href_label,
          u = t.href,
          b = e.setAttributes,
          d = e.isSelected;
        (l = l || "btn-primary"),
          n || b({ id: "uuid-timestamp-" + new Date().getTime() });
        var f = function (e) {
            var t = e.target.attributes.btnType.value;
            b({ btn_type: t });
          },
          w = function (e) {
            return l == e ? "selected" : "";
          };
        return wp.element.createElement(
          a,
          null,
          wp.element.createElement(
            c,
            null,
            wp.element.createElement(
              "div",
              { className: "pf_inspectorTitle" },
              "按钮颜色"
            ),
            wp.element.createElement(
              "div",
              { className: "panda tipSelector" },
              wp.element.createElement("button", {
                className: "default",
                onClick: f,
                btnType: "btn-default",
                typeselected: w("btn-default"),
              }),
              wp.element.createElement("button", {
                className: "info",
                onClick: f,
                btnType: "btn-primary",
                typeselected: w("btn-primary"),
              }),
              wp.element.createElement("button", {
                className: "success",
                onClick: f,
                btnType: "btn-success",
                typeselected: w("btn-success"),
              }),
              wp.element.createElement("button", {
                className: "worning",
                onClick: f,
                btnType: "btn-warning",
                typeselected: w("btn-warning"),
              }),
              wp.element.createElement("button", {
                className: "error",
                onClick: f,
                btnType: "btn-danger",
                typeselected: w("btn-danger"),
              })
            ),
            wp.element.createElement(p, {
              label: "模态框标题",
              value: i,
              placeholder: "请输入...",
              onChange: function (e) {
                return b({ title: e });
              },
            }),
            wp.element.createElement(p, {
              label: "关闭按钮文本",
              value: s,
              placeholder: "默认：关闭",
              onChange: function (e) {
                return b({ close_label: e });
              },
            }),
            wp.element.createElement(p, {
              label: "链接按钮文本",
              value: m,
              placeholder: "默认：跳转到",
              onChange: function (e) {
                return b({ href_label: e });
              },
            }),
            wp.element.createElement(p, {
              label: "链接按钮地址",
              value: u,
              placeholder: "http://",
              onChange: function (e) {
                return b({ href: e });
              },
            })
          ),
          wp.element.createElement(
            "div",
            { className: "collapse_wrap" },
            wp.element.createElement(
              "span",
              { className: "btn " + l },
              r || "按钮未定义"
            ),
            d &&
              wp.element.createElement(p, {
                label: "按钮名称",
                value: r,
                placeholder: "请输入...",
                onChange: function (e) {
                  return b({ btn_label: e });
                },
              }),
            wp.element.createElement(
              "div",
              { class: "modal_innerBlocks" },
              wp.element.createElement(
                "div",
                { className: "title" },
                wp.element.createElement(p, {
                  value: i,
                  placeholder: "请输入模态框标题...",
                  onChange: function (e) {
                    return b({ title: e });
                  },
                  class: "signle-line-input",
                })
              ),
              wp.element.createElement(o, null)
            )
          )
        );
      },
      save: function (e) {
        var t = e.attributes,
          n = t.id,
          l = t.btn_type,
          a = t.btn_label,
          r = t.title,
          c = t.close_label,
          i = t.href_label,
          p = t.href;
        e.setAttributes;
        return (
          (l = l || "btn-primary"),
          n || (n = "uuid-timestamp-" + new Date().getTime()),
          r || (r = "未标题"),
          c || (c = "关闭"),
          i || (i = "跳转到"),
          wp.element.createElement(
            "div",
            null,
            '[modal id="',
            n,
            '" btn_type="',
            l,
            '" btn_label="',
            a,
            '" title="',
            r,
            '" close_label="',
            c,
            '" href_label="',
            i,
            '" href="',
            p,
            '"]',
            wp.element.createElement(o.Content, null),
            "[/modal]"
          )
        );
      },
    });
  },
]);
