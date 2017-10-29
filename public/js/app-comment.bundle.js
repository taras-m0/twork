webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppForm_vue__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppComent_vue__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_index_less__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_fonts_less__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_fonts_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_fonts_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_social_icon_less__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_social_icon_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_social_icon_less__);
/**
 * Created by ttt on 26.10.2017.
 */








var app = new __WEBPACK_IMPORTED_MODULE_0__store__["a" /* Vue */]({
    el: '#form-app',
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_1__AppForm_vue__["a" /* default */]);
    }
});

var app_coments = new __WEBPACK_IMPORTED_MODULE_0__store__["a" /* Vue */]({
    el: '#comment-app',
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_2__AppComent_vue__["a" /* default */]);
    }
});

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch_fetch__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_formdata_polyfill_FormData__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_formdata_polyfill_FormData___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_formdata_polyfill_FormData__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by ttt on 29.10.2017.
 */



var ROOT_URI = '/api/';

var api = function () {
    function api() {
        _classCallCheck(this, api);
    }

    _createClass(api, [{
        key: 'add',
        value: function add(comment) {

            var formData = new FormData();
            Object.keys(comment).map(function (paramName) {
                formData.append(paramName, comment[paramName]);
            });

            return fetch(ROOT_URI + 'add', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(comment)
            }).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    var error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
            }).then(function (response) {
                return response.json();
            });
        }
    }]);

    return api;
}();

/* harmony default export */ __webpack_exports__["a"] = (new api());

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_comment_less__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_comment_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_comment_less__);
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    computed: {
        comments: function comments() {
            return __WEBPACK_IMPORTED_MODULE_0__store__["b" /* default */].state.comments;
        }
    }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppForm_FormGroup__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_AppForm_less__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_AppForm_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_AppForm_less__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    components: { FormGroup: __WEBPACK_IMPORTED_MODULE_0__AppForm_FormGroup__["a" /* default */] },
    data: function data() {
        return { TYPE_TEXT: __WEBPACK_IMPORTED_MODULE_0__AppForm_FormGroup__["b" /* TYPE_TEXT */], TYPE_EMAIL: __WEBPACK_IMPORTED_MODULE_0__AppForm_FormGroup__["c" /* TYPE_EMAIL */], TYPE_TEXTAREA: __WEBPACK_IMPORTED_MODULE_0__AppForm_FormGroup__["d" /* TYPE_TEXTAREA */],
            name: '', email: '', comment: '',
            validName: false, validEmail: false, validComment: false,
            sended: false
        };
    },

    methods: {
        send: function send(e) {
            var _this = this;

            this.sended = true;

            __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */].add({
                name: this.name,
                email: this.email,
                comment: this.comment
            }).then(function (response) {
                if (response.id) {
                    __WEBPACK_IMPORTED_MODULE_1__store__["b" /* default */].commit('add', {
                        id: response.id,
                        name: _this.name,
                        email: _this.email,
                        comment: _this.comment
                    });
                    _this.name = '';
                    _this.email = '';
                    _this.comment = '';
                }

                _this.sended = false;
            }).catch(function (error) {
                _this.sended = false;
            });
        },
        validateName: function validateName(valid) {
            this.validName = valid;
        },
        validateEmail: function validateEmail(valid) {
            this.validEmail = valid;
        },
        validateComment: function validateComment(valid) {
            this.validComment = valid;
        }
    },
    computed: {
        disabled: function disabled() {
            return !(this.validName && this.validEmail && this.validComment && !this.sended);
        }
    }
});

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormGroup__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_input_less__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_input_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_input_less__);
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        label: {
            type: String
        },

        require: {
            type: Boolean,
            default: false
        },

        name: {
            type: String,
            required: true
        },

        type: {
            type: String,
            default: __WEBPACK_IMPORTED_MODULE_0__FormGroup__["b" /* TYPE_TEXT */]
        },

        validator: {
            type: RegExp,
            default: /.*/
        },

        value: {
            type: String
        }
    },

    data: function data() {
        return { TYPE_TEXT: __WEBPACK_IMPORTED_MODULE_0__FormGroup__["b" /* TYPE_TEXT */], TYPE_EMAIL: __WEBPACK_IMPORTED_MODULE_0__FormGroup__["c" /* TYPE_EMAIL */], TYPE_TEXTAREA: __WEBPACK_IMPORTED_MODULE_0__FormGroup__["d" /* TYPE_TEXTAREA */], error: false, requires: this.require };
    },
    methods: {
        change: function change(e) {
            var value = e.target.value;
            this.$emit('input', value);
        }
    },
    watch: {
        value: function value(_value) {
            if (_value == '') {
                this.error = false;
                this.$emit('valid', false);
            } else if (this.validator.test(_value)) {
                this.error = false;
                this.$emit('valid', true);
            } else {
                this.error = true;
                this.$emit('valid', false);
            }
        }
    }
});

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_AppComent_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dcac55b2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_AppComent_vue__ = __webpack_require__(351);
var disposed = false
var normalizeComponent = __webpack_require__(92)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_AppComent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dcac55b2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_AppComent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "AppComent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(46)
  hotAPI.install(__webpack_require__(93), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dcac55b2", Component.options)
  } else {
    hotAPI.reload("data-v-dcac55b2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_AppForm_vue__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2247f661_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_AppForm_vue__ = __webpack_require__(350);
var disposed = false
var normalizeComponent = __webpack_require__(92)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_AppForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2247f661_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_AppForm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "AppForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(46)
  hotAPI.install(__webpack_require__(93), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2247f661", Component.options)
  } else {
    hotAPI.reload("data-v-2247f661", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_FormGroup_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10f591cd_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_FormGroup_vue__ = __webpack_require__(349);
var disposed = false
var normalizeComponent = __webpack_require__(92)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_FormGroup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10f591cd_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_FormGroup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "AppForm\\FormGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(46)
  hotAPI.install(__webpack_require__(93), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10f591cd", Component.options)
  } else {
    hotAPI.reload("data-v-10f591cd", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "form-group",
      class: { "has-error": _vm.error, require: _vm.requires }
    },
    [
      _c("label", { attrs: { for: _vm.name } }, [_vm._v(_vm._s(_vm.label))]),
      _vm._v(" "),
      _vm.type == _vm.TYPE_TEXT || _vm.type == _vm.TYPE_EMAIL
        ? _c("input", {
            staticClass: "form-control",
            attrs: {
              type: _vm.type,
              id: _vm.name,
              name: _vm.name,
              placeholder: ""
            },
            domProps: { value: _vm.value },
            on: { input: _vm.change }
          })
        : _vm.type == _vm.TYPE_TEXTAREA
          ? _c("textarea", {
              staticClass: "form-control",
              attrs: { id: _vm.name, name: _vm.name },
              domProps: { value: _vm.value },
              on: { input: _vm.change }
            })
          : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(46)      .rerender("data-v-10f591cd", esExports)
  }
}

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-md-5 col-xs-offset-1 col-xs-10" },
      [
        _c("FormGroup", {
          attrs: {
            label: "Имя",
            type: _vm.TYPE_TEXT,
            require: true,
            name: "name",
            validator: /..+/
          },
          on: { valid: _vm.validateName },
          model: {
            value: _vm.name,
            callback: function($$v) {
              _vm.name = $$v
            },
            expression: "name"
          }
        }),
        _vm._v(" "),
        _c("FormGroup", {
          attrs: {
            label: "E-Mail",
            type: _vm.TYPE_EMAIL,
            require: true,
            name: "email",
            validator: /.+\@.+\..+/
          },
          on: { valid: _vm.validateEmail },
          model: {
            value: _vm.email,
            callback: function($$v) {
              _vm.email = $$v
            },
            expression: "email"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-5 col-xs-10 col-xs-offset-1 col-md-offset-0" },
      [
        _c("FormGroup", {
          attrs: {
            label: "Комментарий",
            type: _vm.TYPE_TEXTAREA,
            require: true,
            name: "comment",
            validator: /...+/
          },
          on: { valid: _vm.validateComment },
          model: {
            value: _vm.comment,
            callback: function($$v) {
              _vm.comment = $$v
            },
            expression: "comment"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-xs-10 col-xs-offset-1" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger pull-right",
          attrs: { type: "submit", disabled: _vm.disabled },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.send($event)
            }
          }
        },
        [_vm._v("Записать")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(46)      .rerender("data-v-2247f661", esExports)
  }
}

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col-lg-10 col-lg-offset-1 col-xs-12 col-xs-offset-0 comment-wrap"
    },
    _vm._l(_vm.comments, function(comment) {
      return _c("div", { staticClass: "col-md-4 col-sm-6" }, [
        _c(
          "div",
          { staticClass: "comment", attrs: { "data-id": comment.id } },
          [
            _c("h3", {}, [_vm._v(_vm._s(comment.name))]),
            _vm._v(" "),
            _c("p", { staticClass: "email" }, [_vm._v(_vm._s(comment.email))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(comment.comment))])
          ]
        )
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(46)      .rerender("data-v-dcac55b2", esExports)
  }
}

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(130);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_dist_vue__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_dist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_dist_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(353);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_vue_dist_vue___default.a; });
/* unused harmony reexport Vuex */
/**
 * Created by ttt on 28.10.2017.
 */



__WEBPACK_IMPORTED_MODULE_0_vue_dist_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);



var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: {
        comments: window.commentsData ? window.commentsData : []
    },
    mutations: {
        add: function add(state, comment) {
            return state.comments.push(comment);
        }
    }
});

/* harmony default export */ __webpack_exports__["b"] = (store);

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TYPE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TYPE_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TYPE_TEXTAREA; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormGroup_vue__ = __webpack_require__(348);


var TYPE_TEXT = 'text';
var TYPE_EMAIL = 'email';
var TYPE_TEXTAREA = 'textarea';

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__FormGroup_vue__["a" /* default */]);

/***/ })

},[355]);