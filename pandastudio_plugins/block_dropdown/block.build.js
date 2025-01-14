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
      r = wp.editor,
      i =
        (r.RichText,
        r.MediaUpload,
        r.BlockControls,
        r.AlignmentToolbar,
        r.InspectorControls),
      s = (r.InnerBlocks, wp.components),
      c = s.TextControl,
      o = s.Button;
    l("pandastudio/dropdown", {
      title: "下拉菜单",
      icon: function () {
        return wp.element.createElement("i", {
          class: "far fa-caret-square-down",
          style: { fontSize: "22px", float: "left" },
        });
      },
      category: "pandastudio-block-category",
      attributes: { id: {}, btn_type: {}, btn_label: {}, lists: {} },
      edit: function (e) {
        var t = e.attributes,
          n = t.id,
          l = t.btn_type,
          r = t.btn_label,
          s = t.lists,
          p = e.setAttributes,
          m = (e.setState, e.isSelected);
        (l = l || "btn-default"),
          p({ btn_type: l }),
          n || p({ id: "uuid-timestamp-" + new Date().getTime() }),
          s || (s = []);
        var u = function (e) {
            var t = e.target.attributes.btnType.value;
            p({ btn_type: t });
          },
          b = function (e) {
            return l == e ? "selected" : "";
          },
          d = function (e, t) {
            var n = JSON.parse(JSON.stringify(s));
            (n[e].label = t), p({ lists: n });
          },
          f = function (e, t) {
            var n = JSON.parse(JSON.stringify(s));
            (n[e].href = t), p({ lists: n });
          },
          w = function (e) {
            var t = JSON.parse(JSON.stringify(s));
            t.splice(e, 1), p({ lists: t });
          },
          y = function () {
            var e = JSON.parse(JSON.stringify(s));
            e.push({ label: "", href: "" }), p({ lists: e }), console.log(s);
          };
        return wp.element.createElement(
          a,
          null,
          wp.element.createElement(
            i,
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
                onClick: u,
                btnType: "btn-default",
                typeselected: b("btn-default"),
              }),
              wp.element.createElement("button", {
                className: "info",
                onClick: u,
                btnType: "btn-primary",
                typeselected: b("btn-primary"),
              }),
              wp.element.createElement("button", {
                className: "success",
                onClick: u,
                btnType: "btn-success",
                typeselected: b("btn-success"),
              }),
              wp.element.createElement("button", {
                className: "worning",
                onClick: u,
                btnType: "btn-warning",
                typeselected: b("btn-warning"),
              }),
              wp.element.createElement("button", {
                className: "error",
                onClick: u,
                btnType: "btn-danger",
                typeselected: b("btn-danger"),
              })
            ),
            wp.element.createElement(
              "div",
              { className: "pf_inspectorTitle" },
              "下拉列表"
            ),
            wp.element.createElement(
              "div",
              null,
              s.map(function (e, t) {
                return wp.element.createElement(
                  "div",
                  { key: t },
                  wp.element.createElement(c, {
                    label: "项目" + (t + 1) + "：",
                    value: e.label,
                    placeholder: "请输入名称",
                    onChange: d.bind(this, t),
                  }),
                  wp.element.createElement(c, {
                    value: e.href,
                    placeholder: "http://",
                    onChange: f.bind(this, t),
                  }),
                  wp.element.createElement(
                    "div",
                    { style: { textAlign: "right" } },
                    wp.element.createElement(
                      o,
                      { isDefault: !0, isSmall: !0, onClick: w.bind(this, t) },
                      "移除"
                    )
                  )
                );
              }),
              wp.element.createElement(
                o,
                { isPrimary: !0, isSmall: !0, onClick: y },
                "增加列表项"
              )
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
            m &&
              wp.element.createElement(c, {
                label: "按钮名称",
                value: r,
                placeholder: "请输入...",
                onChange: function (e) {
                  return p({ btn_label: e });
                },
              })
          )
        );
      },
      save: function (e) {
        var t = e.attributes,
          n = t.id,
          l = t.btn_type,
          a = t.btn_label,
          r = t.lists;
        r || (r = []);
        for (var i = "", s = 0; s < r.length; s++) {
          var c = r[s];
          i += '[li href="' + c.href + '"]' + c.label + "[/li]";
        }
        return wp.element.createElement(
          "div",
          null,
          '[dropdown id="',
          n,
          '" btn_type="',
          l,
          '" btn_label="',
          a,
          '"]',
          i,
          "[/dropdown]"
        );
      },
    });
  },
]);
