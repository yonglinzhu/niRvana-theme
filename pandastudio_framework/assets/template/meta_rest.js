var postID = jQuery("#post_ID").val();
var postType = jQuery("#post_type").val();
jQuery(document).on("click", "#publish", function (event) {
  event.preventDefault();
  vue_rest.updateMeta(jQuery(this));
});
jQuery(document).on("click", "#save-post", function (event) {
  event.preventDefault();
  vue_rest.updateMeta(jQuery(this));
});
jQuery(document).on("click", "#post-preview", function (event) {
  vue_rest.updateMeta();
});
jQuery(document).on(
  "click",
  ".editor-post-publish-button,.editor-post-preview,.editor-post-save-draft,.editor-post-switch-to-draft ",
  function (event) {
    vue_rest.updateMeta();
  }
);
jQuery
  .get(
    pandastudio_framework.route +
      "pandastudio/framework/get_posttype_and_meta_json",
    function (posttype_and_meta) {
      if (typeof posttype_and_meta == "string") {
        posttype_and_meta = JSON.parse(posttype_and_meta);
      }
      var panda_meta_tabs = posttype_and_meta.meta;
      var current_post_type_tabs = [];
      for (var i = 0; i < panda_meta_tabs.length; i++) {
        if (panda_meta_tabs[i].screen.indexOf(postType) >= 0) {
          current_post_type_tabs.push(panda_meta_tabs[i]);
        }
      }
      if (current_post_type_tabs <= 0) {
        jQuery(
          "#pandastudio_framework_meta,label[for='pandastudio_framework_meta-hide']"
        ).remove();
      }
      jQuery(function () {
        jQuery("#postcustom,label[for='postcustom-hide']").remove();
      });
      window.vue_rest = { tabs: current_post_type_tabs };
      var components = posttype_and_meta.components;
      for (var key in components) {
        components[key].methods = {
          _: function (optname) {
            for (var i = 0; i < window.vue_rest.tabs.length; i++) {
              for (var j = 0; j < window.vue_rest.tabs[i].content.length; j++) {
                if (window.vue_rest.tabs[i].content[j].name == optname) {
                  return window.vue_rest.tabs[i].content[j].value;
                }
              }
            }
          },
        };
      }
      window.vue_rest = new Vue({
        el: "#vue_rest",
        components: components,
        data: function () {
          return {
            tabIndex: "0",
            loading: true,
            show: true,
            tabs: current_post_type_tabs,
          };
        },
        mounted: function () {
          this.loading = true;
          var optArr = {};
          for (var i = 0; i < this.tabs.length; i++) {
            for (var j = 0; j < this.tabs[i].content.length; j++) {
              if (
                (this.tabs[i].content[j].name != undefined) &
                (this.tabs[i].content[j].value != undefined)
              ) {
                optArr[this.tabs[i].content[j].name] = "";
              }
            }
          }
          var _this = this;
          var ajaxData = { postID: postID, postMeta: optArr };
          jQuery
            .ajax({
              url:
                pandastudio_framework.route +
                "pandastudio/framework/get_post_meta",
              type: "POST",
              beforeSend: function (xhr) {
                xhr.setRequestHeader("X-WP-Nonce", pandastudio_framework.nonce);
              },
              data: JSON.stringify(ajaxData),
            })
            .done(function (data) {
              for (var i = 0; i < _this.tabs.length; i++) {
                for (var j = 0; j < _this.tabs[i].content.length; j++) {
                  if (
                    (_this.tabs[i].content[j].name != undefined) &
                    (_this.tabs[i].content[j].value != undefined)
                  ) {
                    switch (_this.tabs[i].content[j].type) {
                      case "slider":
                      case "inputNumber":
                        if (data[_this.tabs[i].content[j].name]) {
                          _this.tabs[i].content[j].value = parseFloat(
                            data[_this.tabs[i].content[j].name]
                          );
                        } else {
                          _this.tabs[i].content[j].value = 0;
                        }
                        break;
                      case "multitypes":
                        if (data[_this.tabs[i].content[j].name] == "") {
                          _this.tabs[i].content[j].value = [];
                        } else {
                          _this.tabs[i].content[j].value =
                            data[_this.tabs[i].content[j].name];
                        }
                        break;
                      default:
                        _this.tabs[i].content[j].value =
                          data[_this.tabs[i].content[j].name];
                    }
                  }
                }
              }
              _this.loading = false;
            })
            .fail(function () {
              _this.loading = false;
              _this.show = false;
              _this.$alert("连接服务器失败或后台读取出错！", "设置项读取失败", {
                confirmButtonText: "确定",
              });
            });
        },
        methods: {
          updateMeta: function (jQuery_Btn) {
            var optArr = {};
            for (var i = 0; i < this.tabs.length; i++) {
              for (var j = 0; j < this.tabs[i].content.length; j++) {
                if (
                  (this.tabs[i].content[j].name != undefined) &
                  (this.tabs[i].content[j].value != undefined)
                ) {
                  optArr[this.tabs[i].content[j].name] =
                    this.tabs[i].content[j].value;
                }
              }
            }
            var _this = this;
            var ajaxData = { postID: postID, postMeta: optArr };
            jQuery
              .ajax({
                url:
                  pandastudio_framework.route +
                  "pandastudio/framework/update_post_meta",
                type: "POST",
                beforeSend: function (xhr) {
                  xhr.setRequestHeader(
                    "X-WP-Nonce",
                    pandastudio_framework.nonce
                  );
                },
                data: JSON.stringify(ajaxData),
              })
              .done(function (data) {
                if (jQuery_Btn) {
                  _this.$message.success("Meta保存成功，请稍后...");
                  window.abc = jQuery_Btn;
                  jQuery(document).off("click", "#" + jQuery_Btn.attr("id"));
                  window.setTimeout(function () {
                    jQuery(jQuery_Btn).click();
                  }, 200);
                }
              })
              .fail(function () {
                _this.$notify.error({
                  title: "Meta保存失败",
                  message: "连接服务器失败或后台保存出错！",
                });
              });
          },
          mediaUpload: function (name, index, typeName) {
            var _this = this;
            var media_upload_frame = wp.media({
              title: "上传",
              button: { text: "插入" },
              multiple: false,
            });
            media_upload_frame.open();
            media_upload_frame.on("select", function () {
              attachment = media_upload_frame
                .state()
                .get("selection")
                .first()
                .toJSON();
              value = attachment.url;
              for (var i = 0; i < _this.tabs.length; i++) {
                for (var j = 0; j < _this.tabs[i].content.length; j++) {
                  if (_this.tabs[i].content[j].name == name) {
                    if (typeName != "") {
                      _this.tabs[i].content[j].value[index][typeName] = value;
                      _this.waitToUpdate();
                    } else {
                      _this.tabs[i].content[j].value = value;
                      _this.waitToUpdate();
                    }
                  }
                }
              }
            });
          },
          multiMediaUpload: function (name) {
            var _this = this;
            var media_upload_frame = wp.media({
              title: "按住 ctrl 批量选择",
              button: { text: "批量插入" },
              multiple: true,
            });
            media_upload_frame.open();
            media_upload_frame.on("select", function () {
              var attachment = media_upload_frame
                .state()
                .get("selection")
                .toJSON();
              var value = [];
              for (var i = 0; i < attachment.length; i++) {
                value[i] = attachment[i].url;
              }
              for (var i = 0; i < _this.tabs.length; i++) {
                for (var j = 0; j < _this.tabs[i].content.length; j++) {
                  if (_this.tabs[i].content[j].name == name) {
                    if (typeof _this.tabs[i].content[j].value === "string") {
                      _this.tabs[i].content[j].value = value;
                      _this.waitToUpdate();
                    } else {
                      _this.tabs[i].content[j].value =
                        _this.tabs[i].content[j].value.concat(value);
                      _this.waitToUpdate();
                    }
                  }
                }
              }
            });
          },
          multiMediaUpload_input: function (name) {
            var _this = this;
            this.$prompt("请输入图片地址", "外链图片", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
            }).then(function (val) {
              var value = val.value;
              for (var i = 0; i < _this.tabs.length; i++) {
                for (var j = 0; j < _this.tabs[i].content.length; j++) {
                  if (_this.tabs[i].content[j].name == name) {
                    if (typeof _this.tabs[i].content[j].value === "string") {
                      _this.tabs[i].content[j].value = [value];
                      _this.waitToUpdate();
                    } else {
                      _this.tabs[i].content[j].value =
                        _this.tabs[i].content[j].value.concat(value);
                      _this.waitToUpdate();
                    }
                  }
                }
              }
            });
          },
          addMultiTypes: function (name) {
            for (var i = 0; i < this.tabs.length; i++) {
              for (var j = 0; j < this.tabs[i].content.length; j++) {
                if (this.tabs[i].content[j].name == name) {
                  var component = this.tabs[i].content[j];
                  var newSubValue = {};
                  for (var k = 0; k < component.types.length; k++) {
                    newSubValue[component.types[k].name] = "";
                  }
                  component.value.push(newSubValue);
                  this.waitToUpdate();
                }
              }
            }
          },
          removeMultiTypes: function (name, index) {
            for (var i = 0; i < this.tabs.length; i++) {
              for (var j = 0; j < this.tabs[i].content.length; j++) {
                if (this.tabs[i].content[j].name == name) {
                  var component = this.tabs[i].content[j];
                  component.value.splice(index, 1);
                  this.waitToUpdate();
                }
              }
            }
          },
          removeMultiUpload: function (name, index) {
            for (var i = 0; i < this.tabs.length; i++) {
              for (var j = 0; j < this.tabs[i].content.length; j++) {
                if (this.tabs[i].content[j].name == name) {
                  var component = this.tabs[i].content[j];
                  component.value.splice(index, 1);
                  this.waitToUpdate();
                }
              }
            }
          },
          removeAllMultiUpload: function (name) {
            for (var i = 0; i < this.tabs.length; i++) {
              for (var j = 0; j < this.tabs[i].content.length; j++) {
                if (this.tabs[i].content[j].name == name) {
                  this.tabs[i].content[j].value = "";
                  this.waitToUpdate();
                }
              }
            }
          },
          swapItems: function (arr, index1, index2) {
            arr[index1] = arr.splice(index2, 1, arr[index1])[0];
            return arr;
          },
          multitypeMoveUp: function (arr, typeIndex) {
            if (typeIndex == 0) {
              return;
            }
            this.swapItems(arr, typeIndex, typeIndex - 1);
          },
          multitypeMoveDown: function (arr, typeIndex) {
            if (typeIndex == arr.length - 1) {
              return;
            }
            this.swapItems(arr, typeIndex, typeIndex + 1);
          },
          gear_show: function (name, value) {
            if ((name == undefined) | (name == "") | (value == undefined)) {
              return true;
            }
            for (var i = 0; i < this.tabs.length; i++) {
              for (var j = 0; j < this.tabs[i].content.length; j++) {
                if (
                  (this.tabs[i].content[j].name == name) &
                  (this.tabs[i].content[j].value == value)
                ) {
                  return true;
                }
              }
            }
            return false;
          },
        },
      });
    }
  )
  .error(function () {
    alert(
      "MetaBox数据获取失败！请检查：\n1、WordPress版本大于4.7\n2、Rest API是否被插件关闭\n3、服务器配置不正确导致“固定链接”故障，请将“设置-固定链接”设置为“朴素”并保存\n4、请检查“设置-常规”，WordPress安装地址是否与当前浏览器地址栏的地址不一致？"
    );
  });
