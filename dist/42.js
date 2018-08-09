/*! NutUI v1.3.0 Thu Aug 09 2018 11:27:14 GMT+0800 (CST) */
webpackJsonpnutui([42],{1057:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={data:function(){return{demo1:'<nut-lazycomponent class="demo">\n    \x3c!--预加载loading可以自定义不传则系统默认 --\x3e\n    <div class="loading" slot="loading" v-html="svg"></div>   \n    \x3c!--需要预加载的模块 --\x3e\n    <div class="cp-box">\n                 我是模块13\n    </div>\n</nut-lazycomponent> '}},methods:{}}},1127:function(t,v,_){(t.exports=_(1)()).push([t.i,"",""])},1286:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Filter",desc:"",showQrCode:!0}}),t._v(" "),_("h5",[t._v("示例")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),_("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),_("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("可选值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("viewport")]),t._v(" "),_("td",[t._v("组件所在的视口，如果组件是在页面容器内滚动，视口就是该容器")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("null，代表视图最外层")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("direction")]),t._v(" "),_("td",[t._v("视口的滚动方向")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'vertical'（竖直），'horizontal'（横向）")]),t._v(" "),_("td",[t._v("vertical")])]),t._v(" "),_("tr",[_("td",[t._v("threshold")]),t._v(" "),_("td",[t._v("预加载暴露值, css单位")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'.01rem'")]),t._v(" "),_("td",[t._v("'--px'")])]),t._v(" "),_("tr",[_("td",[t._v("tagName")]),t._v(" "),_("td",[t._v("组件外层的元素")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'div'")]),t._v(" "),_("td",[t._v("--")])])])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("事件名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("回调参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("before-enter")]),t._v(" "),_("td",[t._v("懒加载模块开始进入")]),t._v(" "),_("td",[t._v("最外层包裹元素")])]),t._v(" "),_("tr",[_("td",[t._v("before-enter")]),t._v(" "),_("td",[t._v("懒加载模快已经进入")]),t._v(" "),_("td",[t._v("最外层包裹元素")])]),t._v(" "),_("tr",[_("td",[t._v("before-leave")]),t._v(" "),_("td",[t._v("等待元素开始离开")]),t._v(" "),_("td",[t._v("最外层包裹元素")])]),t._v(" "),_("tr",[_("td",[t._v("after-leave")]),t._v(" "),_("td",[t._v("等待元素已经离开")]),t._v(" "),_("td",[t._v("最外层包裹元素")])]),t._v(" "),_("tr",[_("td",[t._v("after-init")]),t._v(" "),_("td",[t._v("组件开始显示")]),t._v(" "),_("td",[t._v("最外层包裹元素")])])])])])}]}},1357:function(t,v,_){var e=_(1127);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);_(3)("40a272cd",e,!0,{})},944:function(t,v,_){var e=_(2)(_(1057),_(1286),function(t){_(1357)},null,null);t.exports=e.exports}});