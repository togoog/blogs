(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{405:function(t,a,s){"use strict";s.r(a);var n=s(9),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"函数式编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数式编程")]),t._v(" "),s("p",[t._v("以函数作为主要载体的编程方式，用函数去拆解、抽象一般的表达式。")]),t._v(" "),s("ul",[s("li",[t._v("语义更加清晰")]),t._v(" "),s("li",[t._v("可复用性更高")]),t._v(" "),s("li",[t._v("可维护性更好")]),t._v(" "),s("li",[t._v("作用域局限，副作用少")])]),t._v(" "),s("p",[t._v("回到语言层面，JavaScript是一种动态类型语言，"),s("code",[t._v("函数也是类型的一种(当作对象类型)，所以可以把函数当作参数值进行传递")]),t._v("（这就是FP(functional programming)中常说的函数天生是“一等公民”）。而Java这种强类型面向对象语言，是无法把定义的函数/方法当作一个参数，传入到另外一个函数/方法中。两者的编程风格区别可以看以下案例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// js函数式编程")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 函数作为参数值传入，使得逻辑更清晰并且无污染")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("filter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item "),s("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("map")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function"}},[t._v("funciton")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// java")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 定义的参数互相串行，复用性差")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// filter")]),t._v("\nList"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" filterArr "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("List")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filterArr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// map")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("MapArray")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filterArr"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"常见的函数式编程模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的函数式编程模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见的函数式编程模型")]),t._v(" "),s("ul",[s("li",[t._v("闭包（Closure）")]),t._v(" "),s("li",[t._v("高阶函数\n"),s("ul",[s("li",[t._v("map")]),t._v(" "),s("li",[t._v("filter")]),t._v(" "),s("li",[t._v("reduce")])])]),t._v(" "),s("li",[t._v("柯里化（Currying）\n"),s("ul",[s("li",[t._v("Currying 为实现多参函数提供了一个递归降解的实现思路——把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数")]),t._v(" "),s("li",[t._v("使用场景\n"),s("ul",[s("li",[t._v("参数复用")]),t._v(" "),s("li",[t._v("延迟执行")])])]),t._v(" "),s("li",[t._v("实现方式\n"),s("ul",[s("li",[t._v("bind语法糖 使得JSX可以绑定数据，同时延迟执行")]),t._v(" "),s("li",[t._v("箭头函数 使得JSX延迟执行")]),t._v(" "),s("li",[t._v("自定义curry函数")])])])])]),t._v(" "),s("li",[t._v("组合(Composing)/ 管道(Pipe)")])]),t._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://taobaofed.org/blog/2017/03/16/javascript-functional-programing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("我眼中的 JavaScript 函数式编程"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/5af13664f265da0ba266efcf",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 柯里化，了解一下"),s("OutboundLink")],1)])])])])},[],!1,null,null,null);r.options.__file="function-program.md";a.default=r.exports}}]);