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
    var n = this,
      r = wp.i18n,
      l = (r.__, r.setLocaleData, wp.blocks.registerBlockType),
      a = wp.element.Fragment,
      o = wp.editor,
      i = (o.RichText, o.MediaUpload),
      c = (o.BlockControls, o.AlignmentToolbar, o.InspectorControls),
      u = (o.MediaPlaceholder, wp.components),
      s = u.Button,
      p = (u.Modal, u.TextControl);
    u.IconButton;
    l("pandastudio/gallery", {
      title: "轮播图",
      icon: "images-alt2",
      category: "pandastudio-block-category",
      attributes: { images: {} },
      edit: function (e) {
        var t = e.attributes,
          r = t.images,
          l = (t.showModal, t.userInput),
          o = e.setAttributes,
          u = e.isSelected;
        r || (r = []);
        var m = function (e) {
            var t = JSON.parse(JSON.stringify(r));
            e.map(function (e, n) {
              t.push(e.url);
            }),
              o({ images: t });
          },
          d = function (e) {
            var t = JSON.parse(JSON.stringify(r));
            t.push(e), o({ images: t }), o({ userInput: "" });
          },
          f = function (e) {
            var t = JSON.parse(JSON.stringify(r));
            t.splice(e, 1), o({ images: t });
          };
        return wp.element.createElement(
          a,
          null,
          wp.element.createElement(c, null),
          r.map(function (e, t) {
            return wp.element.createElement(
              "div",
              {
                key: t,
                style: { backgroundImage: "url(" + e + ")" },
                class: "panda_album_img",
              },
              wp.element.createElement(
                "span",
                { class: "remove", onClick: f.bind(n, t) },
                wp.element.createElement("i", { class: "fas fa-times" }),
                " 移除"
              )
            );
          }),
          (u || r.length < 1) &&
            wp.element.createElement(
              "div",
              { class: "panda_gallery_inputform" },
              wp.element.createElement(i, {
                onSelect: m,
                allowedTypes: "image",
                multiple: !0,
                render: function (e) {
                  var t = e.open;
                  return wp.element.createElement(
                    s,
                    { isDefault: !0, onClick: t },
                    "媒体库"
                  );
                },
              }),
              wp.element.createElement("br", null),
              wp.element.createElement(
                "div",
                { class: "panda_image_input marginT10" },
                wp.element.createElement(p, {
                  value: l,
                  onChange: function (e) {
                    return o({ userInput: e });
                  },
                  placeholder: "http://图片地址",
                })
              ),
              wp.element.createElement(
                s,
                {
                  label: "外链",
                  icon: "edit",
                  isDefault: !0,
                  onClick: function () {
                    d(l);
                  },
                },
                "插入"
              )
            )
        );
      },
      save: function (e) {
        return null;
      },
    });
  },
]);
