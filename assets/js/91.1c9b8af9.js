(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{410:function(a,t,r){"use strict";r.r(t);var e=r(9),v=Object(e.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"浏览器底层原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器底层原理","aria-hidden":"true"}},[a._v("#")]),a._v(" 浏览器底层原理")]),a._v(" "),r("h2",{attrs:{id:"渲染引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎","aria-hidden":"true"}},[a._v("#")]),a._v(" 渲染引擎")]),a._v(" "),r("p",[a._v("浏览器内核"),r("code",[a._v("又叫渲染引擎，主要负责 HTML、CSS 的解析，页面布局、渲染与复合层合成")]),a._v("。浏览器内核的不同带来的主要问题是对 CSS 的支持度与属性表现差异。")]),a._v(" "),r("p",[a._v("现在主流的内核有：Blink、Webkit、Gecko、EdgeHTML、Trident，这里面有几个需要注意的地方：")]),a._v(" "),r("ul",[r("li",[a._v("Blink 是在 Webkit 的基础上的改进，是现在对新特性支持度最好的内核")]),a._v(" "),r("li",[a._v("移动端基本上全部是 Webkit 或 Blink 内核（除去 Android 上腾讯家的 X5），这两个内核对新特性的支持度较高，所以新特性可以在移动端大展身手。")]),a._v(" "),r("li",[a._v("Trident 是 IE4+ 的内核，一直持续到 IE11，EdgeHTML 是微软抛弃 IE 后开发的全新内核")])]),a._v(" "),r("blockquote",[r("p",[a._v("Chromium内核架构，包含Blink渲染引擎和V8 JS引擎。简单理解是阉割版Chrome浏览器。")])]),a._v(" "),r("h2",{attrs:{id:"javascript-引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-引擎","aria-hidden":"true"}},[a._v("#")]),a._v(" JavaScript 引擎")]),a._v(" "),r("p",[r("code",[a._v("负责 JavaScript 代码的解释与执行")]),a._v("，主流的 JavaScript 引擎有：V8、SpiderMonkey、JavaScriptCore、Chakra。")]),a._v(" "),r("h3",{attrs:{id:"v8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v8","aria-hidden":"true"}},[a._v("#")]),a._v(" V8")]),a._v(" "),r("p",[a._v("JavaScriptCore是WebKit的默认引擎，在谷歌系列产品中被替换为V8引擎。")]),a._v(" "),r("p",[a._v("V8 是谷歌开发的高性能 JavaScript 引擎，该引擎使用 C++ 开发。在V8引擎中，源代码先被解析器转变为抽象语法树(AST)，然后使用JIT编译器的全代码生成器从AST直接生成本地可执行代码。")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("JavaScriptCore 的大致流程为：源代码-→抽象语法树-→字节码(可优化阶段)-→JIT-→本地代码。")])]),a._v(" "),r("li",[r("p",[a._v("V8 的大致流程为：源代码-→抽象语法树-→JIT-→本地代码（在此优化）。")])])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-993bbf0a46f6feaef5f7b5005aa1aa34_hd.png",alt:""}})]),a._v(" "),r("h3",{attrs:{id:"性能比较"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能比较","aria-hidden":"true"}},[a._v("#")]),a._v(" 性能比较")]),a._v(" "),r("p",[a._v("JS是边解释边编译，Java是提前编译。Java在编译阶段把AST转换为字节码，同时做着优化，最后生成可直接执行的本地代码。所以从语言层面讲，JS的性能与Java、C++不再同一个层次上。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-0f5471e21a25e237dcfae2d34a306788_hd.png",alt:""}})]),a._v(" "),r("h2",{attrs:{id:"js引擎和渲染引擎关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js引擎和渲染引擎关系","aria-hidden":"true"}},[a._v("#")]),a._v(" JS引擎和渲染引擎关系")]),a._v(" "),r("p",[a._v("渲染引擎遇到js代码会通知让JS引擎解析，然后JS引擎解释执行后，通过DOM改变并渲染网页（这部分工作属于渲染引擎）。")]),a._v(" "),r("p",[a._v("JavaScript引擎和渲染引擎的关系如下图所示：\n"),r("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-43b71b75cd4f28db05ab967e3aad5a97_hd.png",alt:""}})]),a._v(" "),r("blockquote",[r("p",[a._v("JavaScript是一种动态类型语言，函数也是类型的一种，所以可以把函数当作参数值进行传递（这就是FP中常说的函数天生是“一等公民”）")])])])},[],!1,null,null,null);v.options.__file="js-base.md";t.default=v.exports}}]);