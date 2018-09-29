(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{165:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",[n("li",[t._v("Control over configuration values.")]),t._v(" "),n("li",[t._v("Support multiple configuration files by environment (.nscrc (default), .development.nscrc, .test.nscrc, .production.nscrc).")]),t._v(" "),n("li",[t._v("All value can be overridden by env or args variable ("),n("a",{attrs:{href:"https://github.com/indexzero/nconf",target:"_blank",rel:"noopener noreferrer"}},[t._v("nconf"),n("OutboundLink")],1),t._v(")")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),n("blockquote",[n("p",[t._v("Documentation about available options is documented on "),n("router-link",{attrs:{to:"/usage/configuration.html"}},[t._v("Configuration page")]),t._v(".")],1)]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("In node.js:")]),t._v(" "),t._m(5),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("API is documented on "),n("a",{attrs:{href:"https://NodeSitecore.github.io/sitecore-cli/usage/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration page"),n("OutboundLink")],1),t._v(".")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"package-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Package Config")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" @node-sitecore/config --save-dev\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'@node-sitecore/config'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// getters")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentWebsite"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Custom")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("websiteRoot"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// build/Website")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// get()")]),t._v("\n\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'bundles'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v('// Object {bundleName: "bundle", ...}')]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'bundles:bundleName'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// bundle")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// has()")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("has")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'bundle:bundleName'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// set()")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'bundle:bundleName'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"bundle-app"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// resolver")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<rootDir>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// path/to/root")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<instanceDir>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/build")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<websiteDir>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/build/Website")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<themesDir>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/build/Website/themes")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<srcDir>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<projectDir>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src/Project")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<featureDir>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src/Feature")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<foundationDir>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src/Foundation")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<currentDir>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src/Project/Custom/code")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<masterDir>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src/Project/Common/code")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// resolver + concat path")]),t._v("\nconfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<masterDir>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Styles'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src/Project/Common/code/Styles")]),t._v("\n")])])])}],!1,null,null,null);o.options.__file="config.md";s.default=o.exports}}]);