(function(t){function e(e){for(var a,i,c=e[0],o=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],r[i]&&f.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0503":function(t,e,n){},"0ce4":function(t,e,n){"use strict";var a=n("92c1"),r=n.n(a);r.a},"199c":function(t,e){},"23be":function(t,e,n){"use strict";var a=n("199c"),r=n.n(a);e["default"]=r.a},"3dfd":function(t,e,n){"use strict";var a=n("405d"),r=n("23be"),s=(n("034f"),n("2877")),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},"405d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"426f":function(t,e,n){"use strict";var a=n("bc55"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("3dfd"),s=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header"),n("index-main"),n("page-footer")],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"tab-a",attrs:{id:"page-header"}},[n("div",{staticClass:"row-1"},[t._m(0),t._m(1),n("nav",{staticClass:"col-3"},[n("ul",{staticClass:"nav-items"},[n("li",{staticClass:"nav-item nav-item-1"},[n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),n("li",{staticClass:"nav-item nav-item-2"},[n("router-link",{attrs:{to:"/product"}},[t._v("产品介绍")])],1),n("li",{staticClass:"nav-item nav-item-3",on:{mouseover:t.drop,mouseout:t.pack}},[n("router-link",{staticClass:"nav-item-3-link",attrs:{to:"/service"}},[t._v("服务项目")]),n("span",{staticClass:"arrow"}),n("ul",{staticClass:"nav-item-3-dropdown",attrs:{id:"nav-item-3-dropdown"}},[n("li",[n("router-link",{attrs:{to:"/datamanage"}},[t._v("临床试验")])],1),n("li",[n("router-link",{attrs:{to:"/datamanage"}},[t._v("统计分析")])],1),n("li",[n("router-link",{attrs:{to:"/datamanage"}},[t._v("数据管理")])],1),n("li",[n("router-link",{attrs:{to:"/databoard"}},[t._v("软件服务平台")])],1)])],1),n("li",{staticClass:"nav-item nav-item-4"},[n("router-link",{attrs:{to:"/about"}},[t._v("关于我们")])],1),t._m(2),t._m(3)])])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"col-1"},[n("a",{attrs:{href:"/"}},[n("h2",[t._v("北京崎崛科技发展有限公司")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"col-2"},[n("input",{attrs:{type:"text",size:"25"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"login",attrs:{href:""}},[t._v("登陆")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"sign-up",attrs:{href:""}},[t._v("注册")])])}],l={methods:{drop:function(){var t=document.getElementById("nav-item-3-dropdown");t.style.display="block"},pack:function(){var t=document.getElementById("nav-item-3-dropdown");t.style.display="none"}}},p=l,f=(n("0ce4"),n("2877")),d=Object(f["a"])(p,o,u,!1,null,"1209cc60",null),v=d.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",{attrs:{id:"page-footer"}},[n("p",[t._v("© 2019 北京崎崛科技发展有限公司 All rights reserved 备案号：京ICP备15012807号-1 ")])])])}],h={},b=h,y=(n("6270"),Object(f["a"])(b,_,m,!1,null,"551ad17c",null)),C=y.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index-main"}},[a("main",{staticClass:"tab-b"},[a("div",{staticClass:"row-1"},[a("img",{staticClass:"item-1",attrs:{src:n("a0e3"),alt:""}}),a("p",{staticClass:"item-2"},[t._v("临床研究数据信息化服务提供商")]),a("p",{staticClass:"item-3"},[t._v("数据驱动服务，信息创造价值")]),a("p",{staticClass:"item-4"},[a("router-link",{staticClass:"item-4-1",attrs:{to:"/about"}},[t._v("关于我们 →")])],1)])])])},E=[],w={},k=w,x=(n("5e76"),Object(f["a"])(k,g,E,!1,null,"eb4c2f7c",null)),O=x.exports,j={components:{PageHeader:v,PageFooter:C,IndexMain:O}},$=j,D=Object(f["a"])($,i,c,!1,null,"1330e181",null),P=D.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header"),n("main",{staticClass:"tab-b"},[n("div",{staticClass:"row-1"},[n("div",{staticClass:"sidebar"},[n("ul",t._l(t.chapter.contents,function(e){return n("li",{key:e.s},[n("h2",[n("a",{attrs:{href:"#"+e.s}},[t._v(t._s(e.s))])])])}),0)]),n("div",{staticClass:"contents"},t._l(t.chapter.contents,function(e){return n("div",{key:e.s},[n("h3",{attrs:{id:e.s}},[t._v(t._s(e.s))]),n("p",[t._v(t._s(e.p))])])}),0)])]),n("page-footer")],1)},S=[],I=(n("96cf"),n("3b8d")),M={components:{PageHeader:v,PageFooter:C},data:function(){return{chapter:{}}},created:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("aboutus/chapters");case 2:e=t.sent.data,this.chapter=e[0];case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},R=M,T=(n("7b0d"),Object(f["a"])(R,A,S,!1,null,"a3584f2e",null)),F=T.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header"),n("main",{staticClass:"tab-b"},[n("div",{staticClass:"row-1"},[n("div",{staticClass:"sidebar"},t._l(t.chapter,function(e,a){return n("ul",{key:a},t._l(e,function(e,a){return n("li",{key:a},["t2"===e.type?n("h2",[n("a",{attrs:{href:"#"+e.contents}},[t._v(t._s(e.contents))])]):t._e(),"t3"===e.type?n("h3",[n("a",{attrs:{href:"#"+e.contents}},[t._v(t._s(e.contents))])]):t._e(),"t4"===e.type?n("h4",[n("a",{attrs:{href:"#"+e.contents}},[t._v(t._s(e.contents))])]):t._e()])}),0)}),0),n("div",{staticClass:"contents"},t._l(t.chapter,function(e,a){return n("div",{key:a},t._l(e,function(e,a){return n("div",{key:a},["t2"===e.type?n("h2",{attrs:{id:e.contents}},[t._v(t._s(e.contents))]):t._e(),"t3"===e.type?n("h3",{attrs:{id:e.contents}},[t._v(t._s(e.contents))]):t._e(),"t4"===e.type?n("h4",{attrs:{id:e.contents}},[t._v(t._s(e.contents))]):t._e(),"p"===e.type?n("p",[t._v(t._s(e.contents))]):t._e()])}),0)}),0)])]),n("page-footer")],1)},B=[],J={components:{PageHeader:v,PageFooter:C},data:function(){return{chapter:[[{type:"t2",contents:"一、引言"},{type:"p",contents:"近年来随着互联网和计算机技术的不断发展，电子数据采集技术在临床试验中越来越多地被采用，它与传统的基于纸质的采集方式不同，具有数据及时录入、实时发现数据错误、加快研究进度、提高数据质量等优势，因此各国药品监管部门都鼓励临床试验中采用电子数据采集技术以保证数据质量。"},{type:"p",contents:"为了促进我国临床试验电子数据的完整性、准确性、真实性和可靠性符合《药物临床试验质量管理规范》和监管部门相应技术指南的原则要求，有必要对临床试验中应用电子数据采集技术的基本考虑和原则进行明确阐释，本指导原则通过对电子数据采集技术的概念和基本考虑，电子数据采集系统的基本技术要求以及在临床试验实施不同阶段的应用要求的详细阐述，旨在帮助和指导相关各方，包括申办者、合同研究组织（CRO）、临床研究者等在临床试验中规范合理地应用电子数据采集这一技术。"}],[{type:"t2",contents:"二、电子数据采集的定义"},{type:"p",contents:"电子数据采集（Electronic Data Capture, EDC）是一种基于计算机网络的用于临床试验数据采集的技术，通过软件、硬件、标准操作程序和人员配置的有机结合，以电子化的形式直接采集和传递临床数据。"},{type:"p",contents:"随着信息技术的发展，移动电子设备如平板电脑、智能手机、扫描仪等已具备作为EDC终端的条件，EDC系统已能将基于网络的交互应答系统（IWRS）、药物警戒系统、数据分析和报告系统、试验药品管理系统等整合成一体；同时，国际公认的数据标准（如CDISC）也正在EDC中得以应用。"}],[{type:"t2",contents:"三、应用电子数据采集技术的基本考虑"},{type:"p",contents:"当今时代，临床试验的各个阶段（从准备到研究结束）都离不开计算机化系统的辅助，而确保数据质量及其真实完整性是使用EDC系统的根本要求。"},{type:"t3",contents:"（一）数据质量与真实完整性"},{type:"p",contents:"数据质量和真实完整性是对整个临床试验的有效性和安全性进行正确评价的基础，是药品监管科学的核心要素。申办者在进行电子化临床试验数据管理的过程中应建立完善的基于风险考虑的质量管理体系，并遵循数据质量的ALCOA+原则，即可归因性（Attributable）、易读性(Legible)、同时性(Contemporaneous)、原始性(Original)、准确性(Accurate)、完整性(Complete)、一致性(Consistent)、持久性(Enduring)和可获得性（Available When Needed）。"},{type:"t3",contents:"（二）系统的风险管理"},{type:"p",contents:"电子化系统的风险管理对于保证临床试验的数据质量和真实完整性十分重要。风险管理的基本过程包括风险严重性的评估、出现风险的可能性分析、实际风险的监测、风险的纠正和预防等方面。"},{type:"t3",contents:"（三）生命周期"},{type:"p",contents:"EDC的生命周期包括两个方面，即EDC系统本身的从开发到退役的整个过程，和投入运行后的EDC系统在服务于临床试验项目过程中的运营周期。"},{type:"t4",contents:"1.系统的生命周期"},{type:"p",contents:"一个计算机化系统有自身的生命周期，历经开发、运用、维护和退役等多个阶段。EDC系统的生命周期包括：立项、用户需求、系统需求、系统设计、系统开发、系统测试、系统发布、系统维护更新、系统退役等。计算机系统的生命周期规范是要确保系统自始至终都保持着被验证过的状态。"},{type:"t4",contents:"2.项目应用的生命周期"},{type:"p",contents:"申办者在选择EDC系统时，应对系统进行严格的评估和审查，以确保用于临床试验的EDC系统符合本指导原则的要求。EDC系统服务商应能提供完整、规范的系统验证文档。实际项目在投入运营前应完成用户接受测试（User Acceptance Testing，UAT）。"},{type:"p",contents:"项目应用的生命周期包括但不限于：eCRF构建、系统设置、用户接受测试、数据采集、数据核查、数据锁库、数据导出、数据及系统保存、系统下线与归档等。"}]]}}},L=J,U=(n("426f"),Object(f["a"])(L,H,B,!1,null,"5cab685e",null)),W=U.exports;a["a"].use(s["a"]);var q=new s["a"]({routes:[{path:"/",component:P},{path:"/about",component:F},{path:"/datamanage",component:W}]}),z=n("bc3a"),N=n.n(z);a["a"].config.productionTip=!1,a["a"].prototype.$axios=N.a,new a["a"]({render:function(t){return t(r["default"])},router:q}).$mount("#app")},"5e76":function(t,e,n){"use strict";var a=n("0503"),r=n.n(a);r.a},6270:function(t,e,n){"use strict";var a=n("7327"),r=n.n(a);r.a},"64a9":function(t,e,n){},7327:function(t,e,n){},"7b0d":function(t,e,n){"use strict";var a=n("85d6"),r=n.n(a);r.a},"85d6":function(t,e,n){},"92c1":function(t,e,n){},a0e3:function(t,e,n){t.exports=n.p+"img/qijue.bf994777.png"},bc55:function(t,e,n){}});
//# sourceMappingURL=app.f4412035.js.map