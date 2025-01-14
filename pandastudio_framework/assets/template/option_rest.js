jQuery
  .get(
    pandastudio_framework.route + "pandastudio/framework/get_option_json",
    function (options) {
      if (typeof options == "string") {
        options = JSON.parse(options);
      }
      var panda_option_tabs = options;
      window.vue_rest = new Vue({
        el: "#vue_rest",
        data: function () {
          return {
            tabIndex: "0",
            loading: true,
            show: true,
            singleSelect: { loading: false, query: [] },
            tabs: panda_option_tabs,
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
          jQuery
            .ajax({
              url:
                pandastudio_framework.route +
                "pandastudio/framework/get_option",
              type: "POST",
              beforeSend: function (xhr) {
                xhr.setRequestHeader("X-WP-Nonce", pandastudio_framework.nonce);
              },
              data: JSON.stringify(optArr),
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
                      case "singleSelect":
                        _this.tabs[i].content[j].value = parseFloat(
                          data[_this.tabs[i].content[j].name]
                        );
                        break;
                      case "multitypes":
                      case "categoriesSelect":
                        if (data[_this.tabs[i].content[j].name] == "") {
                          _this.tabs[i].content[j].value = [];
                        } else {
                          _this.tabs[i].content[j].value =
                            data[_this.tabs[i].content[j].name];
                        }
                        break;
                      case "select":
                        if (data[_this.tabs[i].content[j].name]) {
                          _this.tabs[i].content[j].value =
                            data[_this.tabs[i].content[j].name];
                        } else {
                          _this.tabs[i].content[j].value = null;
                        }
                        break;
                      default:
                        _this.tabs[i].content[j].value =
                          data[_this.tabs[i].content[j].name];
                    }
                  }
                }
              }
              var singleSelectIDs = [];
              for (var i = 0; i < _this.tabs.length; i++) {
                for (var j = 0; j < _this.tabs[i].content.length; j++) {
                  if (
                    (_this.tabs[i].content[j].name != undefined) &
                    (_this.tabs[i].content[j].value != undefined)
                  ) {
                    switch (_this.tabs[i].content[j].type) {
                      case "singleSelect":
                        var val = _this.tabs[i].content[j].value;
                        singleSelectIDs.indexOf(val) < 0
                          ? singleSelectIDs.push(val)
                          : null;
                        break;
                      case "multitypes":
                        for (
                          var a = 0;
                          a < _this.tabs[i].content[j].types.length;
                          a++
                        ) {
                          if (
                            _this.tabs[i].content[j].types[a].type ==
                            "singleSelect"
                          ) {
                            for (
                              var b = 0;
                              b < _this.tabs[i].content[j].value.length;
                              b++
                            ) {
                              var val =
                                _this.tabs[i].content[j].value[b][
                                  _this.tabs[i].content[j].types[a].name
                                ];
                              singleSelectIDs.indexOf(val) < 0
                                ? singleSelectIDs.push(val)
                                : null;
                            }
                          }
                        }
                        break;
                      default:
                        break;
                    }
                  }
                }
              }
              for (var i = 0; i < singleSelectIDs.length; i++) {
                _this.queryExistValue(true, singleSelectIDs[i], true);
              }
              _this.loading = false;
            })
            .fail(function (data) {
              alert(data);
              _this.loading = false;
              _this.show = false;
              _this.$alert("连接服务器失败或后台读取出错！", "数据读取失败", {
                confirmButtonText: "确定",
              });
            });
        },
        methods: {
          updateOption: function () {
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
            jQuery
              .ajax({
                url:
                  pandastudio_framework.route +
                  "pandastudio/framework/update_option",
                type: "POST",
                beforeSend: function (xhr) {
                  xhr.setRequestHeader(
                    "X-WP-Nonce",
                    pandastudio_framework.nonce
                  );
                },
                data: JSON.stringify(optArr),
              })
              .done(function (data) {
                data.state
                  ? _this.$message.success("保存成功！")
                  : _this.$notify.error({
                      title: "保存失败",
                      message: "授权错误！",
                    });
              })
              .fail(function () {
                _this.$notify.error({
                  title: "保存失败",
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
                    } else {
                      _this.tabs[i].content[j].value = value;
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
                    } else {
                      _this.tabs[i].content[j].value =
                        _this.tabs[i].content[j].value.concat(value);
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
                    } else {
                      _this.tabs[i].content[j].value =
                        _this.tabs[i].content[j].value.concat(value);
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
                }
              }
            }
          },
          removeAllMultiUpload: function (name) {
            for (var i = 0; i < this.tabs.length; i++) {
              for (var j = 0; j < this.tabs[i].content.length; j++) {
                if (this.tabs[i].content[j].name == name) {
                  this.tabs[i].content[j].value = "";
                }
              }
            }
          },
          categorySelect: function () {
            return pandastudio_framework.categorySelector;
          },
          querySinglePosts: function (query) {
            if (query !== "") {
              this.singleSelect.loading = true;
              _this = this;
              setTimeout(function () {
                jQuery
                  .ajax({
                    url:
                      pandastudio_framework.route +
                      "pandastudio/framework/wp_query",
                    type: "POST",
                    beforeSend: function (xhr) {
                      xhr.setRequestHeader(
                        "X-WP-Nonce",
                        pandastudio_framework.nonce
                      );
                    },
                    data: JSON.stringify({ keyword: query }),
                  })
                  .done(function (query_result) {
                    _this.singleSelect.query = query_result;
                    _this.singleSelect.loading = false;
                  })
                  .fail(function () {
                    _this.singleSelect.query = [];
                    _this.singleSelect.loading = false;
                  });
              }, 200);
            } else {
              this.singleSelect.query = [];
            }
          },
          queryExistValue: function (event, keyword, push) {
            if (event) {
              this.singleSelect.query = [];
              this.singleSelect.loading = true;
              _this = this;
              jQuery
                .ajax({
                  url:
                    pandastudio_framework.route +
                    "pandastudio/framework/wp_query",
                  type: "POST",
                  beforeSend: function (xhr) {
                    xhr.setRequestHeader(
                      "X-WP-Nonce",
                      pandastudio_framework.nonce
                    );
                  },
                  data: JSON.stringify({ keyword: keyword }),
                })
                .done(function (query_result) {
                  if (push) {
                    _this.singleSelect.query.push(query_result[0]);
                  } else {
                    _this.singleSelect.query = query_result;
                  }
                })
                .fail(function () {
                  if (push) {
                  } else {
                    _this.singleSelect.query = [];
                  }
                })
                .always(function () {
                  _this.singleSelect.loading = false;
                });
            }
          },
          showSaveBtn: function (content) {
            var result = false;
            for (var i = content.length - 1; i >= 0; i--) {
              result = result | (content[i].value != undefined);
            }
            return result;
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
          uploadData: function () {
            window.fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.accept = ".json";
            fileInput.onchange = this.readFile;
            var event = document.createEvent("MouseEvents");
            event.initMouseEvent(
              "click",
              true,
              false,
              window,
              0,
              0,
              0,
              0,
              0,
              false,
              false,
              false,
              false,
              0,
              null
            );
            fileInput.dispatchEvent(event);
          },
          readFile: function () {
            var file = fileInput.files[0];
            if (!!file) {
              var reader = new FileReader();
              reader.readAsText(file);
              var _this = this;
              reader.onload = function () {
                try {
                  var json = JSON.parse(this.result);
                  if (json) {
                    var optArr = {};
                    for (var i = 0; i < _this.tabs.length; i++) {
                      for (var j = 0; j < _this.tabs[i].content.length; j++) {
                        if (
                          (_this.tabs[i].content[j].name != undefined) &
                          (_this.tabs[i].content[j].value != undefined)
                        ) {
                          optArr[_this.tabs[i].content[j].name] = "";
                        }
                      }
                    }
                    var valueLength = 0;
                    var optionLength = 0;
                    for (var key in optArr) {
                      optionLength++;
                      for (var jKey in json) {
                        if (key == jKey) {
                          optArr[key] = json[jKey];
                          valueLength++;
                          break;
                        }
                      }
                    }
                    var less = optionLength - valueLength;
                    if (valueLength == optionLength) {
                      confirmStr = "此操作将使用您上传的设置项覆盖到服务器上";
                    } else {
                      confirmStr =
                        "从您上传的数据中匹配到 " +
                        valueLength +
                        " 个设置项，共需要 " +
                        optionLength +
                        "个设置项。未匹配到的 " +
                        less +
                        " 个选项将被置空";
                    }
                    _this
                      .$confirm(confirmStr, "确认这样做", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "info",
                      })
                      .then(function () {
                        jQuery
                          .ajax({
                            url:
                              pandastudio_framework.route +
                              "pandastudio/framework/update_option",
                            type: "POST",
                            beforeSend: function (xhr) {
                              xhr.setRequestHeader(
                                "X-WP-Nonce",
                                pandastudio_framework.nonce
                              );
                            },
                            data: JSON.stringify(optArr),
                          })
                          .done(function (data) {
                            if (data.state) {
                              _this.$message.success(
                                "成功导入，页面正在刷新..."
                              );
                              window.setTimeout(function () {
                                window.location.reload();
                              }, 500);
                            } else {
                              _this.$notify.error({
                                title: "保存失败",
                                message: "授权错误！",
                              });
                            }
                          })
                          .fail(function () {
                            _this.$notify.error({
                              title: "保存失败",
                              message: "连接服务器失败或后台保存出错！",
                            });
                          });
                      })
                      .catch(function () {});
                  }
                } catch (e) {
                  _this.$alert(
                    "请选择由本主题导出的 JSON 格式文件",
                    "数据类型错误",
                    { confirmButtonText: "确定", type: "error" }
                  );
                }
              };
            }
            document.getElementById("uploadData").value = "";
          },
          downloadData: function () {
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
            jQuery
              .ajax({
                url:
                  pandastudio_framework.route +
                  "pandastudio/framework/get_option",
                type: "POST",
                beforeSend: function (xhr) {
                  xhr.setRequestHeader(
                    "X-WP-Nonce",
                    pandastudio_framework.nonce
                  );
                },
                data: JSON.stringify(optArr),
              })
              .done(function (data) {
                var myDate = new Date();
                var dateStr =
                  myDate.getFullYear().toString() +
                  (myDate.getMonth() + 1).toString() +
                  myDate.getDate().toString() +
                  myDate.getHours().toString() +
                  myDate.getMinutes().toString() +
                  myDate.getSeconds().toString();
                var blob = new Blob([JSON.stringify(data)]);
                var link = document.createElement("a");
                link.download =
                  pandastudio_framework.blog_name + "_" + dateStr + ".json";
                link.href = URL.createObjectURL(blob);
                var event = document.createEvent("MouseEvents");
                event.initMouseEvent(
                  "click",
                  true,
                  false,
                  window,
                  0,
                  0,
                  0,
                  0,
                  0,
                  false,
                  false,
                  false,
                  false,
                  0,
                  null
                );
                link.dispatchEvent(event);
                URL.revokeObjectURL(link.href);
                _this.loading = false;
              })
              .fail(function () {
                _this.loading = false;
                _this.$alert("连接服务器失败或后台读取出错！", "数据下载失败", {
                  confirmButtonText: "确定",
                });
              });
          },
          clearData: function () {
            var _this = this;
            this.$confirm("此操作将清空本主题的所有设置选项", "请确认", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning",
            })
              .then(function () {
                var optArr = {};
                for (var i = 0; i < _this.tabs.length; i++) {
                  for (var j = 0; j < _this.tabs[i].content.length; j++) {
                    if (
                      (_this.tabs[i].content[j].name != undefined) &
                      (_this.tabs[i].content[j].value != undefined)
                    ) {
                      optArr[_this.tabs[i].content[j].name] = "";
                    }
                  }
                }
                jQuery
                  .ajax({
                    url:
                      pandastudio_framework.route +
                      "pandastudio/framework/update_option",
                    type: "POST",
                    beforeSend: function (xhr) {
                      xhr.setRequestHeader(
                        "X-WP-Nonce",
                        pandastudio_framework.nonce
                      );
                    },
                    data: JSON.stringify(optArr),
                  })
                  .done(function (data) {
                    if (data.state) {
                      _this.$message.success(
                        "已清空主题设置项，页面正在刷新..."
                      );
                      window.setTimeout(function () {
                        window.location.reload();
                      }, 500);
                    } else {
                      _this.$notify.error({
                        title: "数据表上传失败",
                        message: "授权错误！",
                      });
                    }
                  })
                  .fail(function () {
                    _this.$notify.error({
                      title: "清空数据失败",
                      message: "连接服务器失败或后台保存出错！",
                    });
                  });
              })
              .catch(function () {});
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
      "Option数据获取失败！请检查：\n1、WordPress版本大于4.7\n2、Rest API是否被插件关闭\n3、服务器配置不正确导致“固定链接”故障，请将“设置-固定链接”设置为“朴素”并保存\n4、请检查“设置-常规”，WordPress安装地址是否与当前浏览器地址栏的地址不一致？"
    );
  });
