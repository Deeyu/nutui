/*! NutUI v1.3.0 Thu Aug 09 2018 11:27:14 GMT+0800 (CST) */
webpackJsonpnutui([74],{1022:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(87);(a=r)&&a.__esModule;t.default={name:"index",data:function(){return{data1:"2018-04-12,2019-05-12",data2:"2018-04-12,2019-05-12",type2:"datetime",demo2:"test2",type3:"time",demo3:"test3"}},methods:{choseTime:function(e){console.log(e)}}}},1097:function(e,t,n){(e.exports=n(1)()).push([e.i,"\n.nut-slidecalendar input {\n  border: 1px solid #ccc;\n  height: .4rem;\n  line-height: .4rem;\n  border-radius: .04rem;\n}\n",""])},1222:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("nut-demoheader",{attrs:{name:e.$route.name}}),e._v(" "),n("h5",[e._v("示例")]),e._v(" "),n("p",[e._v("日期")]),e._v(" "),n("nut-slidecalendar",{attrs:{data:e.data1},on:{confirm:e.choseTime}}),e._v(" "),n("p",[e._v(" 日期时间")]),e._v(" "),n("nut-slidecalendar",{attrs:{data:e.data2,type:e.type2,id:e.demo2}}),e._v(" "),n("p",[e._v("时间")]),e._v(" "),n("nut-slidecalendar",{attrs:{type:e.type3,id:e.demo3}})],1)},staticRenderFns:[]}},1327:function(e,t,n){var a=n(1097);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(3)("686186f4",a,!0,{})},911:function(e,t,n){var a=n(2)(n(1022),n(1222),function(e){n(1327)},null,null);e.exports=a.exports}});