if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const defaultList$1 = [
    {
      companey: "中心",
      license: "鄂B8R713",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "黄石",
      destination: "散花",
      publicTime: "2024年5月10"
    },
    {
      companey: "11111",
      license: "鄂C99986",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "武汉",
      destination: "合肥",
      publicTime: "2024年5月10"
    },
    {
      companey: "222222",
      license: "鄂A123445",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "宜昌",
      destination: "重庆",
      publicTime: "2024年5月10"
    },
    {
      companey: "中心",
      license: "鄂B8R713",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "黄石",
      destination: "散花",
      publicTime: "2024年5月10"
    },
    {
      companey: "11111",
      license: "鄂C99986",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "武汉",
      destination: "合肥",
      publicTime: "2024年5月10"
    },
    {
      companey: "222222",
      license: "鄂A123445",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "宜昌",
      destination: "重庆",
      publicTime: "2024年5月10"
    },
    {
      companey: "中心",
      license: "鄂B8R713",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "黄石",
      destination: "散花",
      publicTime: "2024年5月10"
    },
    {
      companey: "11111",
      license: "鄂C99986",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "武汉",
      destination: "合肥",
      publicTime: "2024年5月10"
    },
    {
      companey: "222222",
      license: "鄂A123445",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "宜昌",
      destination: "重庆",
      publicTime: "2024年5月10"
    },
    {
      companey: "中心",
      license: "鄂B8R713",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "黄石",
      destination: "散花",
      publicTime: "2024年5月10"
    },
    {
      companey: "11111",
      license: "鄂C99986",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "武汉",
      destination: "合肥",
      publicTime: "2024年5月10"
    },
    {
      companey: "222222",
      license: "鄂A123445",
      startTime: "2024年6月1",
      endTime: "2024年6月30",
      entire: "宜昌",
      destination: "重庆",
      publicTime: "2024年5月10"
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$4 = {
    data() {
      return {
        list: defaultList$1,
        searchValue: ""
      };
    },
    onLoad() {
    },
    methods: {
      handleSearch() {
        const {
          searchValue
        } = this;
        this.list = defaultList$1.filter((e) => e.license.indexOf(searchValue) > -1);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "search" }, [
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchValue = $event),
            class: "search-input",
            placeholder: "请输入车牌号",
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.handleSearch && $options.handleSearch(...args))
          },
          null,
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ), [
          [vue.vModelText, $data.searchValue]
        ]),
        vue.createElementVNode("text", {
          class: "search-btn",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.handleSearch && $options.handleSearch(...args))
        }, "搜索")
      ]),
      vue.createElementVNode("view", { class: "list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.list, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "item"
            }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("text", { class: "label" }, "施工单位："),
                vue.createTextVNode(
                  vue.toDisplayString(item.companey),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("text", { class: "label" }, "车牌号码："),
                vue.createTextVNode(
                  vue.toDisplayString(item.license),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("text", { class: "label" }, "免费区间："),
                vue.createTextVNode(
                  vue.toDisplayString(item.entire) + " - " + vue.toDisplayString(item.destination),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("text", { class: "label" }, "免费时间："),
                vue.createTextVNode(
                  vue.toDisplayString(item.startTime) + " - " + vue.toDisplayString(item.endTime),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("text", { class: "label" }, "下发时间："),
                vue.createTextVNode(
                  vue.toDisplayString(item.publicTime),
                  1
                  /* TEXT */
                )
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("navigator", {
        url: "/pages/add-free-car/add-free-car",
        "hover-class": "other-navigator-hover"
      }, [
        vue.createElementVNode("view", { class: "add-btn" }, " + ")
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/eldoriszhang/projects/outsourcing/license/pages/index/index.vue"]]);
  const _sfc_main$3 = {
    props: {
      visiable: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClose() {
        this.$emit("close");
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.visiable ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "check-img-taost"
    }, [
      vue.createElementVNode("image", {
        src: "/static/car-img.jpeg",
        mode: "",
        class: "car-image"
      }),
      vue.createElementVNode("text", {
        class: "close-btn",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClose && $options.handleClose(...args))
      }, "x")
    ])) : vue.createCommentVNode("v-if", true);
  }
  const CheckImgToast = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-c5730591"], ["__file", "/Users/eldoriszhang/projects/outsourcing/license/pages/error-car/check-img-toast.vue"]]);
  const defaultList = [
    {
      companey: "中心",
      license: "鄂B8R713",
      type: "货车",
      publicTime: "2024年5月10"
    },
    {
      companey: "11111",
      license: "鄂C99986",
      type: "小轿车",
      publicTime: "2024年5月10"
    },
    {
      companey: "222222",
      license: "鄂A123445",
      type: "客车",
      publicTime: "2024年5月10"
    }
  ];
  const _sfc_main$2 = {
    components: {
      CheckImgToast
    },
    data() {
      return {
        list: defaultList,
        searchValue: "",
        imgToastVisiable: false
      };
    },
    onLoad() {
    },
    methods: {
      handleSearch() {
        const { searchValue } = this;
        this.list = defaultList.filter((e) => e.license.indexOf(searchValue) > -1);
      },
      handleCheckImg() {
        this.imgToastVisiable = true;
      },
      handleToastClose() {
        this.imgToastVisiable = false;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_CheckImgToast = vue.resolveComponent("CheckImgToast");
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "search" }, [
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchValue = $event),
            class: "search-input",
            placeholder: "请输入车牌号",
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.handleSearch && $options.handleSearch(...args))
          },
          null,
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ), [
          [vue.vModelText, $data.searchValue]
        ]),
        vue.createElementVNode("text", {
          class: "search-btn",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.handleSearch && $options.handleSearch(...args))
        }, "搜索")
      ]),
      vue.createElementVNode("view", { class: "list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.list, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "item"
            }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("text", { class: "label" }, "下发单位："),
                vue.createTextVNode(
                  vue.toDisplayString(item.companey),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "flex" }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("text", { class: "label" }, "车牌号码："),
                  vue.createTextVNode(
                    vue.toDisplayString(item.license),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("text", { class: "label" }, "车型车种："),
                  vue.createTextVNode(
                    vue.toDisplayString(item.type),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("text", { class: "label" }, "下发时间："),
                vue.createTextVNode(
                  vue.toDisplayString(item.publicTime),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("text", { class: "label" }, "查证图片："),
                vue.createElementVNode("text", {
                  class: "check-img-btn",
                  onClick: _cache[3] || (_cache[3] = (...args) => $options.handleCheckImg && $options.handleCheckImg(...args))
                }, " 查看 ")
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createVNode(_component_CheckImgToast, {
        visiable: $data.imgToastVisiable,
        onClose: $options.handleToastClose
      }, null, 8, ["visiable", "onClose"])
    ]);
  }
  const PagesErrorCarErrorCar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/eldoriszhang/projects/outsourcing/license/pages/error-car/error-car.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        form: {
          companey: "中心",
          license: "鄂B8R713",
          startTime: "2024年6月1",
          endTime: "2024年6月30",
          entire: "黄石",
          destination: "散花",
          publicTime: "2024年5月10"
        }
      };
    },
    methods: {
      handleSubmit() {
        uni.showToast({
          title: "创建成功",
          mask: true,
          success: () => {
            setTimeout(() => {
              uni.navigateBack();
            }, 1e3);
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "add-free-car" }, [
      vue.createElementVNode(
        "form",
        {
          onSubmit: _cache[7] || (_cache[7] = (...args) => $options.handleSubmit && $options.handleSubmit(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
            vue.createElementVNode("text", { class: "label" }, "施工单位："),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.companey = $event),
                class: "uni-input",
                name: "input",
                placeholder: "请输入"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.form.companey]
            ])
          ]),
          vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
            vue.createElementVNode("text", { class: "label" }, "车牌号码："),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.license = $event),
                class: "uni-input",
                name: "input",
                placeholder: "请输入"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.form.license]
            ])
          ]),
          vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
            vue.createElementVNode("text", { class: "label" }, "免费开始区间："),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.entire = $event),
                class: "uni-input",
                name: "input",
                placeholder: "请输入"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.form.entire]
            ])
          ]),
          vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
            vue.createElementVNode("text", { class: "label" }, "免费结束区间："),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.destination = $event),
                class: "uni-input",
                name: "input",
                placeholder: "请输入"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.form.destination]
            ])
          ]),
          vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
            vue.createElementVNode("text", { class: "label" }, "免费开始时间："),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.startTime = $event),
                class: "uni-input",
                name: "input",
                placeholder: "请输入"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.form.startTime]
            ])
          ]),
          vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
            vue.createElementVNode("text", { class: "label" }, "免费结束时间："),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.form.endTime = $event),
                class: "uni-input",
                name: "input",
                placeholder: "请输入"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.form.endTime]
            ])
          ]),
          vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
            vue.createElementVNode("text", { class: "label" }, "下发时间："),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.form.publicTime = $event),
                class: "uni-input",
                name: "input",
                placeholder: "请输入"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.form.publicTime]
            ])
          ]),
          vue.createElementVNode("button", {
            "form-type": "submit",
            class: "create-btn"
          }, "创建")
        ],
        32
        /* NEED_HYDRATION */
      )
    ]);
  }
  const PagesAddFreeCarAddFreeCar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/eldoriszhang/projects/outsourcing/license/pages/add-free-car/add-free-car.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/error-car/error-car", PagesErrorCarErrorCar);
  __definePage("pages/add-free-car/add-free-car", PagesAddFreeCarAddFreeCar);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/eldoriszhang/projects/outsourcing/license/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
