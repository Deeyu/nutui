/*! NutUI v1.3.0 Thu Aug 09 2018 11:27:14 GMT+0800 (CST) */
webpackJsonpnutui([89],{1005:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{map1:{id:"test1",options:{center:[39.91485,116.403765],zoomControl:!1,zoom:15,minZoom:2,maxZoom:18,mapZoomType:"CENTER",draggable:!0,scrollwheel:!0,disableDoubleClickZoom:!0},marker:{draggable:!1,icon:"../../asset/img/map/mark.svg",title:"测试",visible:!0,click:function(t){console.log(t)},info:function(t){return console.log(t),""}}}}},methods:{}}},1116:function(t,o,e){(t.exports=e(1)()).push([t.i,"\n.map-box {\n  width: 100%;\n  height: 500px;\n}\n",""])},1263:function(t,o){t.exports={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",[o("nut-demoheader",{attrs:{name:this.$route.name}}),this._v(" "),o("nut-map",{staticClass:"map-box",attrs:{location:!0,option:this.map1}})],1)},staticRenderFns:[]}},1346:function(t,o,e){var n=e(1116);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(3)("4bdd6c3e",n,!0,{})},894:function(t,o,e){var n=e(2)(e(1005),e(1263),function(t){e(1346)},null,null);t.exports=n.exports}});