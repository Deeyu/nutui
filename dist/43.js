/*! NutUI v1.3.0 Thu Aug 09 2018 11:27:14 GMT+0800 (CST) */
webpackJsonpnutui([43],{1055:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{teml1:'<nut-infiniteloading \n@on-refresh="onRefresh" \n@on-infinite="onInfinite" \n:noMore="noMore">\n    <div v-for="item in resultList">\n        {{item}}\n    </div>\n</nut-infiniteloading>',teml2:"export default {\n    data(){\n        return{\n            page: 1, //当前页\n            pageSize: 10, // 一页显示多少条\n            noMore: false, //暂无更多数据显示\n            resultList:[]\n        }\n    },\n    created(){\n        this.getList();\n    },\n    methods:{\n        //查询列表\n        getList(suc){\n            let self = this;\n            //模拟异步\n            setTimeout(function(){\n                let queryList = [1,2,3,4,5,6,7,8,9,10];\n                if(self.page == 1){\n                    self.resultList = queryList;\n                } else {\n                    self.resultList =[...self.resultList, ...queryList];\n                }\n                // self.noMoreFlag = true;//根据查询回的数据判断是否还有更多数据\n                if(suc){\n                    suc();\n                }\n            },600);\n        },\n        //刷新调用\n        onRefresh(done) {\n            this.page = 1;\n            this.getList(done);\n        },\n        //下一页调用\n        onInfinite(done) {\n            this.page++;\n            this.getList(done);\n        }\n    }\n}"}},created:function(){},methods:{}}},1153:function(t,e,n){(t.exports=n(1)()).push([t.i,"",""])},1240:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"无限加载组件。",showQrCode:!0}}),t._v(" "),n("h5",[t._v("示例")]),t._v(" "),n("nut-codebox",{attrs:{code:t.teml1}}),t._v(" "),n("nut-codebox",{attrs:{code:t.teml2}}),t._v(" "),n("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),n("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("可选值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("botLoading")]),t._v(" "),n("td",[t._v("滚动到底部自动加载")]),t._v(" "),n("td",[t._v("Boolen")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("noMore")]),t._v(" "),n("td",[t._v("是否还有更多数据")]),t._v(" "),n("td",[t._v("Boolen")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("enableInfinite")]),t._v(" "),n("td",[t._v("允许无限加载")]),t._v(" "),n("td",[t._v("Boolen")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("enableRefresh")]),t._v(" "),n("td",[t._v("允许刷新")]),t._v(" "),n("td",[t._v("Boolen")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("--")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("on-refresh")]),t._v(" "),n("td",[t._v("列表顶部下拉时回调，通常用于刷新数据")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("on-infinite")]),t._v(" "),n("td",[t._v("列表底部上拉时回调，通常用于加载更多数据")]),t._v(" "),n("td",[t._v("--")])])])])])}]}},1383:function(t,e,n){var v=n(1153);"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);n(3)("5ac506f5",v,!0,{})},943:function(t,e,n){var v=n(2)(n(1055),n(1240),function(t){n(1383)},null,null);t.exports=v.exports}});