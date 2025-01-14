!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var l = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(l.exports, l, l.exports, t), (l.l = !0), l.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
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
      r = (n.__, n.setLocaleData, wp.blocks.registerBlockType),
      l = wp.element.Fragment,
      o = wp.editor,
      a =
        (o.RichText,
        o.MediaUpload,
        o.BlockControls,
        o.AlignmentToolbar,
        o.InspectorControls),
      c = wp.components,
      p = c.ToggleControl,
      i = c.TextControl;
    r("pandastudio/download", {
      title: "下载按钮",
      description: "创建一个下载按钮，可通过启用“需评论下载”来增加与读者的互动",
      icon: "download",
      category: "pandastudio-block-category",
      attributes: { href: {}, need_reply: {} },
      edit: function (e) {
        var t = e.attributes,
          n = t.href,
          r = t.need_reply,
          o = e.setAttributes;
        return wp.element.createElement(
          l,
          null,
          wp.element.createElement(
            a,
            null,
            wp.element.createElement(
              "div",
              { className: "pf_inspectorTitle" },
              wp.element.createElement(i, {
                label: "下载地址",
                placeholder: "http://",
                value: n,
                onChange: function (e) {
                  return o({ href: e });
                },
              }),
              wp.element.createElement(p, {
                label: "需评论下载",
                checked: r,
                onChange: function (e) {
                  return o({ need_reply: e });
                },
              })
            )
          ),
          wp.element.createElement(
            "div",
            { className: "download_wrap" },
            wp.element.createElement("div", { className: "download_btn" })
          )
        );
      },
      save: function (e) {
        var t = e.attributes,
          n = t.href,
          r = t.need_reply,
          l = r ? "reply2down" : "download";
        return wp.element.createElement(
          "div",
          null,
          "[",
          l,
          "]",
          n,
          "[/",
          l,
          "]"
        );
      },
    });
  },
]);
