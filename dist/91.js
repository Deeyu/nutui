/*! NutUI v1.3.0 Thu Aug 09 2018 11:27:14 GMT+0800 (CST) */
webpackJsonpnutui([91],{1003:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{loading1:null,loading2:null,loading3:null,loading4:null}},mounted:function(){this.loading1=this.$loading(),this.loading2=this.$loading({maxDuring:4e3,text:"加载中...",userClose:!1}),this.loading3=this.$loading({mini:!1,text:"LOADING",textColor:"rgba(255,255,255,.7)"}),this.loading4=this.$loading({fade:!0})},methods:{showLoading1:function(){this.loading1.show()},showLoading2:function(){this.loading2.show()},showLoading3:function(){this.loading3.show()},showLoading4:function(){this.loading4.show()}}}},1184:function(t,n,o){(t.exports=o(1)()).push([t.i,"",""])},1297:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("nut-demoheader",{attrs:{name:t.$route.name}}),t._v(" "),o("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:t.showLoading1}},[t._v("自定义ICON")]),t._v(" "),o("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:t.showLoading2}},[t._v("禁止点击关闭，4秒后自动关闭")]),t._v(" "),o("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:t.showLoading3}},[t._v("全屏+自定义文字及颜色")]),t._v(" "),o("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:t.showLoading4}},[t._v("渐隐渐现")])],1)},staticRenderFns:[]}},1414:function(t,n,o){var i=o(1184);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(3)("34730e9b",i,!0,{})},892:function(t,n,o){var i=o(2)(o(1003),o(1297),function(t){o(1414)},null,null);t.exports=i.exports}});