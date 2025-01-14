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
      s = wp.components,
      p = (s.Panel, s.PanelBody, s.TextControl);
    l("pandastudio/collapse", {
      title: "折叠内容",
      icon: "archive",
      category: "pandastudio-block-category",
      attributes: { id: {}, btn_type: {}, btn_label: {} },
      edit: function (e) {
        var t = e.attributes,
          n = t.id,
          l = t.btn_type,
          r = t.btn_label,
          s = e.setAttributes,
          i = e.isSelected;
        (l = l || "btn-primary"),
          n || s({ id: "uuid-timestamp-" + new Date().getTime() });
        var m = function (e) {
            var t = e.target.attributes.btnType.value;
            s({ btn_type: t });
          },
          u = function (e) {
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
                onClick: m,
                btnType: "btn-default",
                typeselected: u("btn-default"),
              }),
              wp.element.createElement("button", {
                className: "info",
                onClick: m,
                btnType: "btn-primary",
                typeselected: u("btn-primary"),
              }),
              wp.element.createElement("button", {
                className: "success",
                onClick: m,
                btnType: "btn-success",
                typeselected: u("btn-success"),
              }),
              wp.element.createElement("button", {
                className: "worning",
                onClick: m,
                btnType: "btn-warning",
                typeselected: u("btn-warning"),
              }),
              wp.element.createElement("button", {
                className: "error",
                onClick: m,
                btnType: "btn-danger",
                typeselected: u("btn-danger"),
              })
            )
          ),
          wp.element.createElement(
            "div",
            { className: "collapse_wrap" },
            wp.element.createElement(
              "span",
              { className: "btn " + l },
              r || "按钮未定义"
            ),
            i &&
              wp.element.createElement(p, {
                label: "按钮名称",
                value: r,
                placeholder: "请输入...",
                onChange: function (e) {
                  return s({ btn_label: e });
                },
              }),
            wp.element.createElement(
              "div",
              { class: "collapse_innerBlocks" },
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
          r = e.setAttributes;
        return (
          (l = l || "btn-primary"),
          n || r({ id: "uuid-timestamp-" + new Date().getTime() }),
          wp.element.createElement(
            "div",
            null,
            '[collapse id="',
            n,
            '" btn_type="',
            l,
            '" btn_label="',
            a,
            '"]',
            wp.element.createElement(o.Content, null),
            "[/collapse]"
          )
        );
      },
    });
  },
]);
