(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{174:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"multiple-projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-projects","aria-hidden":"true"}},[t._v("#")]),t._v(" Multiple projects "),a("Badge",{attrs:{text:"3.0.0+"}})],1),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("One of the new feature of NodeSitecore CLI is the possibility to build and publish mutiple solutions in different directory.")]),t._v(" "),a("p",[t._v("Here is an example of multiple project structure:")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),a("p",[t._v("With Visual Studio and "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM Task Runner plugin"),a("OutboundLink")],1),t._v("\nyou're able to run task from UI.")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("It could be something like that:")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("To debug configuration, run this inspect command:")]),t._v(" "),t._m(31)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n├── ns-master-project (Master project)\n│   ├── build/\n│   ├── package.json\n│   ├── master.sln\n│   └── .nscrc\n└── ns-child-project (Child project)\n    ├── build/\n    ├── package.json\n    ├── child.sln\n    └── .nscrc\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Important")]),t._v(" "),a("p",[t._v("The important point there, is "),a("strong",[t._v("Master")]),t._v(" project is dependent on "),a("strong",[t._v("Child")]),t._v(" project. Each project has, package.json, .nscrc file and\na build directory where is installed his Sitecore instance ("),a("code",[t._v("<outputDir>")]),t._v(").")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("We can use the new "),s("code",[this._v("extends")]),this._v(" key configuration to share and inherit configuration between two projects.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configuration-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration files")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("We can considere the "),s("strong",[this._v("Master")]),this._v(" as the project reference. His "),s("code",[this._v(".nscrc")]),this._v(" his look like that:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token property"}},[t._v('"currentWebsite"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Master"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"siteUrl"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"https://master.dev.local"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"instanceRoot"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<rootDir>/build"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"websiteRoot"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<instanceDir>/Website"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"licensePath"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<instanceDir>/Data/license.xml"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"sitecoreLibrariesRoot"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<instanceDir>/Website/bin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"solutionName"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"master"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"buildToolsVersion"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"15.0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now, we can configure the "),s("strong",[this._v("Child")]),this._v(" project. Create a new "),s("code",[this._v(".nscrc")]),this._v(" file on "),s("strong",[this._v("Child")]),this._v(" and add this configuration:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"../ns-master-project/.nscrc"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"currentWebsite"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Child"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"siteUrl"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"https://child.dev.local"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"solutionName"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"child"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The configuration of "),s("strong",[this._v("Child")]),this._v(" project will be resolved with inherited values from "),s("strong",[this._v("Master")]),this._v("\nand overrided values from "),s("strong",[this._v("Child")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("When you run a nsc command on "),a("strong",[t._v("Child")]),t._v(", the placeholder "),a("code",[t._v("<rootDir>")]),t._v(" will be equals to the "),a("strong",[t._v("Child")]),t._v(" project path.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("To see how the values in the "),s("code",[this._v("ns-child-project/.nscrc")]),this._v(" file are resolved, run:")]),this._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("nsc inspect\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"npm-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-tasks","aria-hidden":"true"}},[this._v("#")]),this._v(" NPM Tasks")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To simlify your workflow with Visual Studio, it's recommanded to create npm tasks in your "),s("code",[this._v("package.json")]),this._v(" to clean, build or publish your solution.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For the "),s("strong",[this._v("Master")]),this._v(" project:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"ns-master-project"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"version"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"1.0.0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc build --targets Build"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:rebuild"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc build --targets Rebuild"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:clean"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc build --targets Clean"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:publish"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc publish"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:sync"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc unicorn sync"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:inspect"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc inspect"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("And the "),s("strong",[this._v("Child")]),this._v(" project:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"ns-child-project"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"version"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"1.0.0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc build --targets Build"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:rebuild"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc build --targets Rebuild"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:clean"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc build --targets Clean"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:publish"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc publish"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:sync"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc unicorn sync"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:inspect"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc inspect"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://github.com/madskristensen/NpmTaskRunner/raw/master/art/verbose-output.png",alt:"run-task"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"build-publish-master-from-child-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-publish-master-from-child-project","aria-hidden":"true"}},[this._v("#")]),this._v(" Build & Publish Master from Child project")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("With CLI it also possible to build the "),a("strong",[t._v("Master")]),t._v(" project from "),a("strong",[t._v("Child")]),t._v(" project.\nTo do that, we have to create a second config file named "),a("code",[t._v("master.nscrc")]),t._v(" on root on "),a("strong",[t._v("Child")]),t._v(" project.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n├── ns-master-project (Master project)\n│   ├── build/\n│   ├── package.json\n│   ├── master.sln\n│   └── .nscrc\n└── ns-child-project (Child project)\n    ├── build/\n    ├── package.json\n    ├── child.sln\n    ├── master.nscrc  <-- here\n    └── .nscrc\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Then edit "),s("code",[this._v("master.nscrc")]),this._v(" configuration and copy the following code:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"../ns-master-project/.nscrc"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"rootDir"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<contextDir>/../ns-master-project"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"outputDir"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<contextDir>/build"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("We override orputDir value to tell the CLI to publish code on the "),s("strong",[this._v("Child")]),this._v(" level "),s("code",[this._v("ns-child-project/build")]),this._v(".")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Important")]),t._v(" "),a("p",[a("code",[t._v("rootDir")]),t._v(" "),a("strong",[t._v("MUST")]),t._v(" be configured explicitly to allow the CLI to solve the configuration of the "),a("strong",[t._v("Master")]),t._v(" with the right paths.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Finally add theses new NPM tasks in the "),s("code",[this._v("package.json")]),this._v(" of the "),s("strong",[this._v("Child")]),this._v(" project.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"ns-child-project"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"version"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"1.0.0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc build --targets Build"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:rebuild"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc build --targets Rebuild"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:clean"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc build --targets Clean"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:publish"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc publish"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:sync"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc unicorn sync"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:inspect"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc inspect"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:master:build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc run sc:build --configPath ./master.nscrc"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:master:rebuild"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc run sc:rebuild --configPath ./master.nscrc"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:master:clean"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc run sc:clean --configPath ./master.nscrc"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:master:publish"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc run sc:publish --configPath ./master.nscrc"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:master:sync"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc run sc:sync --configPath ./master.nscrc"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:master:inspect"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nsc run sc:inspect --configPath ./master.nscrc"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sc:build::all"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"npm run sc:master:build && npm run sc:build"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The command "),a("code",[t._v("nsc run sc:build --configPath ./master.nscrc")]),t._v(" take "),a("code",[t._v("./master.nscrc")]),t._v(" config file, bind "),a("strong",[t._v("Master")]),t._v(" NPM tasks like sc:build or sc:publish.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("For example, NPM tasks like "),a("code",[t._v("sc:master:publish")]),t._v("  will run the "),a("code",[t._v("sc:publish")]),t._v(" from "),a("strong",[t._v("Master")]),t._v(" "),a("code",[t._v("package.json")]),t._v(" with the right configuration values.\nSo instead of publishing code on "),a("strong",[t._v("Master")]),t._v(", this command will publish the code on "),a("strong",[t._v("Child")]),t._v(" level ("),a("code",[t._v("ns-child-project/build/")]),t._v(").")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"debug-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Debug configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[this._v("// check config for you current project\nnpm run sc"),s("span",{attrs:{class:"token operator"}},[this._v(":")]),this._v("inspect\n\n// check Master config on Child level\nnpm run sc"),s("span",{attrs:{class:"token operator"}},[this._v(":")]),this._v("master"),s("span",{attrs:{class:"token operator"}},[this._v(":")]),this._v("inspect\n")])])])}],!1,null,null,null);e.options.__file="multiple-projects.md";s.default=e.exports}}]);