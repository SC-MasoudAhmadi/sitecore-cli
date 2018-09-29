(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{171:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("ul",[s("li",[t._v("Control over configuration values.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("li",[t._v("Extensible configuration,")]),t._v(" "),s("li",[t._v("All value can be overridden by env or args variable ("),s("a",{attrs:{href:"https://github.com/indexzero/nconf",target:"_blank",rel:"noopener noreferrer"}},[t._v("nconf"),s("OutboundLink")],1),t._v(").")])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("Default value of publishProperties:")]),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("Configuration management can get complicated very quickly for even trivial applications running in production. nconf addresses this problem by enabling you to setup a hierarchy for different sources of configuration with no defaults. The order in which you attach these configuration sources determines their priority in the hierarchy. Let's take a look at the options available to you")]),t._v(" "),s("p",[t._v("The priority of hierarchical configuration is defined like there :")]),t._v(" "),t._m(10),t._v(" "),s("h2",{attrs:{id:"extends-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extends-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Extends configuration "),s("Badge",{attrs:{text:"3.0.0+"}})],1),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("Here is an example of multiple project structure:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("Config instance has getters to provide some shortcut to resolve a path based on the main configuration and your local machine configuration (Mac or Windows).")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Placeholders is a pre-defined list by the "),s("a",{attrs:{href:"https://github.com/NodeSitecore/sitecore-cli/blob/master/packages/config/src/config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("placeholder.js"),s("OutboundLink")],1),t._v(" file.\nOnly plugins can add new placeholder with "),s("code",[t._v("Config.definePlaceholder")]),t._v(" method.")])]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),s("p",[t._v("To preview the resolved configuration, you can run this command:")]),t._v(" "),t._m(28),s("p",[t._v("Or in your project:")]),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A shared configuration between all packages based on "),e("code",[this._v("@node-sitecore/cli")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("Support multiple configuration files by environment ("),s("code",[t._v(".nscrc (default)")]),t._v(", "),s("code",[t._v(".development.nscrc")]),t._v(", "),s("code",[t._v(".test.nscrc")]),t._v(", "),s("code",[t._v(".production.nscrc")]),t._v(").")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Support custom configuration path with "),e("code",[this._v("nsc [cmd] --configPath ./my-custom.config.json")]),this._v(",")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration fields")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Default value")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("currentWebsite")]),t._v(" "),s("td",[s("code",[t._v("Common")])]),t._v(" "),s("td",[t._v("Current code name of the Sitecore website (Can be the same as "),s("code",[t._v("masterWebsite")]),t._v(". It used for localisation process).")])]),t._v(" "),s("tr",[s("td",[t._v("masterWebsite")]),t._v(" "),s("td",[s("code",[t._v("Common")])]),t._v(" "),s("td",[t._v("Master code name of the Sitecore website.")])]),t._v(" "),s("tr",[s("td",[t._v("solutionName")]),t._v(" "),s("td",[s("code",[t._v("Base")])]),t._v(" "),s("td",[t._v("Solution name of the Visual Studio project.")])]),t._v(" "),s("tr",[s("td",[t._v("siteUrl")]),t._v(" "),s("td",[s("code",[t._v("http://base.dev.local")])]),t._v(" "),s("td",[t._v("Site url use on your local machine. You change this value in a separated file like "),s("code",[t._v(".dev.nsrc")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("authConfigFilePath")]),t._v(" "),s("td",[s("code",[t._v("path/to//Unicorn.UI.config")])]),t._v(" "),s("td",[t._v("Auth config file path required by Unicorn task.")])]),t._v(" "),s("tr",[s("td",[t._v("outputDir")]),t._v(" "),s("td",[s("code",[t._v("<rootDir>/build")])]),t._v(" "),s("td",[t._v("Path to the Sitecore instance directory.")])]),t._v(" "),s("tr",[s("td",[t._v("licensePath")]),t._v(" "),s("td",[s("code",[t._v("<outputDir>/Data/license.xml")])]),t._v(" "),s("td",[t._v("License path required by Sitecore.")])]),t._v(" "),s("tr",[s("td",[t._v("authConfigFilePath")]),t._v(" "),s("td",[s("code",[t._v("<websiteDir>/App_config/Include/Unicorn/Unicorn.UI.config")])]),t._v(" "),s("td",[t._v("Auth config file path required by Unicorn task.")])]),t._v(" "),s("tr",[s("td",[t._v("srcDir")]),t._v(" "),s("td",[s("code",[t._v("<rootDir>/src")])]),t._v(" "),s("td",[t._v("Source code directory.")])]),t._v(" "),s("tr",[s("td",[t._v("foundationDir")]),t._v(" "),s("td",[s("code",[t._v("<srcDir>/src/Foundation")])]),t._v(" "),s("td",[t._v("Foundation level directory (Helix structure).")])]),t._v(" "),s("tr",[s("td",[t._v("foundationScriptsDir")]),t._v(" "),s("td",[s("code",[t._v("<foundationDir>/Core/code/Scripts")])]),t._v(" "),s("td",[t._v("Scripts Foundation directory. Shortcut to the shared code.")])]),t._v(" "),s("tr",[s("td",[t._v("featureDir")]),t._v(" "),s("td",[s("code",[t._v("<srcDir>/Feature")])]),t._v(" "),s("td",[t._v("Feature level directory (Helix structure).")])]),t._v(" "),s("tr",[s("td",[t._v("projectDir")]),t._v(" "),s("td",[s("code",[t._v("<srcDir>/Project")])]),t._v(" "),s("td",[t._v("Project level directory (Helix structure).")])]),t._v(" "),s("tr",[s("td",[t._v("websiteDir")]),t._v(" "),s("td",[s("code",[t._v("<outputDir>/Website")])]),t._v(" "),s("td",[t._v("Website directory used by Sitecore.")])]),t._v(" "),s("tr",[s("td",[t._v("websiteConfigDir")]),t._v(" "),s("td",[s("code",[t._v("<websiteDir>/App_Config")])]),t._v(" "),s("td",[t._v("Sitecore website config directory.")])]),t._v(" "),s("tr",[s("td",[t._v("websiteViewsDir")]),t._v(" "),s("td",[s("code",[t._v("<websiteDir>/Views")])]),t._v(" "),s("td",[t._v("Sitecore views directory.")])]),t._v(" "),s("tr",[s("td",[t._v("websiteLibrariesDir")]),t._v(" "),s("td",[s("code",[t._v("<websiteDir>/bin")])]),t._v(" "),s("td",[t._v("Sitecore libraries directory.")])]),t._v(" "),s("tr",[s("td",[t._v("themesDir")]),t._v(" "),s("td",[s("code",[t._v("<websiteDir>/themes")])]),t._v(" "),s("td",[t._v("Sitecore themes directory.")])]),t._v(" "),s("tr",[s("td",[t._v("buildConfiguration")]),t._v(" "),s("td",[s("code",[t._v("Debug")])]),t._v(" "),s("td",[t._v("MsBuild Configuration (Release or Debug).")])]),t._v(" "),s("tr",[s("td",[t._v("buildToolsVersion")]),t._v(" "),s("td",[s("code",[t._v("15.0")])]),t._v(" "),s("td",[t._v("MsBuild .NET Tools-Version (1.0, 1.1, 2.0, 3.5, 4.0, 12.0, 14.0, 15.0, auto).")])]),t._v(" "),s("tr",[s("td",[t._v("buildMaxCpuCount")]),t._v(" "),s("td",[s("code",[t._v("0")])]),t._v(" "),s("td",[t._v("Maximal CPU-Count to use. ("),s("code",[t._v("-1")]),t._v(": MSBuild Default, "),s("code",[t._v("0")]),t._v(": Automatic selection, "),s("code",[t._v("> 0")]),t._v(": Concrete value).")])]),t._v(" "),s("tr",[s("td",[t._v("buildVerbosity")]),t._v(" "),s("td",[s("code",[t._v("minimal")])]),t._v(" "),s("td",[t._v("Specify the amount of information to display in the build output ("),s("code",[t._v("quiet")]),t._v(", "),s("code",[t._v("minimal")]),t._v(", "),s("code",[t._v("normal")]),t._v(", "),s("code",[t._v("detailed")]),t._v(", "),s("code",[t._v("diagnostic")]),t._v(").")])]),t._v(" "),s("tr",[s("td",[t._v("buildNodeReuse")]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("MsBuild Specify whether to enable or disable the re-use of MSBuild nodes ("),s("code",[t._v("true")]),t._v(" or "),s("code",[t._v("false")]),t._v(").")])]),t._v(" "),s("tr",[s("td",[t._v("buildLogCommand")]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("Logs the MsBuild command that will be executed.")])]),t._v(" "),s("tr",[s("td",[t._v("excludeFilesFromDeployment")]),t._v(" "),s("td",[s("code",[t._v("['packages.config']")])]),t._v(" "),s("td",[t._v("Exclude files from the deployment on the Sitecore instance.")])]),t._v(" "),s("tr",[s("td",[t._v("buildTargets")]),t._v(" "),s("td",[s("code",[t._v("['<solutionPath>']")])]),t._v(" "),s("td",[t._v("Build all solutions or/and projects. Support glob patterns.")])]),t._v(" "),s("tr",[s("td",[t._v("buildPaths")]),t._v(" "),s("td",[s("code",[t._v("['Build']")])]),t._v(" "),s("td",[t._v("Build targets options ("),s("code",[t._v("Build")]),t._v(", "),s("code",[t._v("Clean")]),t._v(", "),s("code",[t._v("Rebuild")]),t._v(").")])]),t._v(" "),s("tr",[s("td",[t._v("buildPlatform")]),t._v(" "),s("td",[s("code",[t._v("Any CPU")])]),t._v(" "),s("td",[t._v("Build targets options (e.g. x86, x64, Any CPU).")])]),t._v(" "),s("tr",[s("td",[t._v("buildProperties")]),t._v(" "),s("td",[s("code",[t._v("{}")])]),t._v(" "),s("td",[t._v("Additional build properties.")])]),t._v(" "),s("tr",[s("td",[t._v("publishTargets")]),t._v(" "),s("td",[s("code",[t._v("['Build']")])]),t._v(" "),s("td",[t._v("Publish targets options ("),s("code",[t._v("Build")]),t._v(", "),s("code",[t._v("Clean")]),t._v(", "),s("code",[t._v("Rebuild")]),t._v(").")])]),t._v(" "),s("tr",[s("td",[t._v("publishTargets")]),t._v(" "),s("td",[s("code",[t._v("['<solutionPath>']")])]),t._v(" "),s("td",[t._v("Publish all solutions or/and projects. Support glob patterns.")])]),t._v(" "),s("tr",[s("td",[t._v("publishPlatform")]),t._v(" "),s("td",[s("code",[t._v("AnyCpu")])]),t._v(" "),s("td",[t._v("Publish platform (e.g. x86, x64, AnyCpu).")])]),t._v(" "),s("tr",[s("td",[t._v("publishProperties")]),t._v(" "),s("td",[s("code",[t._v("{...}")])]),t._v(" "),s("td",[t._v("Additional publish properties.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"publishproperties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publishproperties","aria-hidden":"true"}},[this._v("#")]),this._v(" PublishProperties")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"DeployOnBuild"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"true"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"DeployDefaultTarget"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"WebPublish"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"WebPublishMethod"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"FileSystem"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"DeleteExistingFiles"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"false"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"_FindDependencies"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hierarchical-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hierarchical-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Hierarchical configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("Default configuration from "),s("code",[t._v("@node-sitecore/config")]),t._v(",")]),t._v(" "),s("li",[t._v("Arguments given by command line tools,")]),t._v(" "),s("li",[t._v("Environment variables,")]),t._v(" "),s("li",[t._v("From file "),s("code",[t._v(".nscrc")]),t._v(",")]),t._v(" "),s("li",[t._v("From "),s("code",[t._v("--configPath")]),t._v(" command line options. Example: "),s("code",[t._v("nsc [cmd] --configPath ./my-custom.config.json")]),t._v(",")]),t._v(" "),s("li",[t._v("From "),s("code",[t._v(".development.nscrc")]),t._v(", "),s("code",[t._v(".test.nscrc")]),t._v(", "),s("code",[t._v(".production.nscrc")]),t._v(" or "),s("code",[t._v("[process.env.NODE_ENV].nscrc")]),t._v(" according to "),s("code",[t._v("process.env.NODE_ENV")]),t._v(" value.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In addiction with Hierarchical configuration feature, config file support the "),e("code",[this._v("extends")]),this._v(" keywords to set explicitly an inheritance from another configuration file.\nIt useful when you manage multiple project in different directories location.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(".\n├── ns-master-project (Master project)\n│   ├── package.json\n│   ├── master.sln\n│   └── .nscrc\n└── ns-child-project (Child project)\n    ├── package.json\n    ├── child.sln\n    └── .nscrc\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We can considere the "),e("strong",[this._v("Master")]),this._v(" as the project reference. His "),e("code",[this._v(".nscrc")]),this._v(" his look like that:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("  "),s("span",{attrs:{class:"token property"}},[t._v('"currentWebsite"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Master"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"siteUrl"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"https://master.dev.local"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"instanceRoot"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"<rootDir>/build"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"websiteRoot"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"<instanceDir>/Website"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"licensePath"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"<instanceDir>/Data/license.xml"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"sitecoreLibrariesRoot"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"<instanceDir>/Website/bin"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"solutionName"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"master"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"buildToolsVersion"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"15.0"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v(".nscrc")]),this._v(" file from ns-child-project can inherit his configuration from the master project like this:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"extends"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"../ns-master-project/.nscrc"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"currentWebsite"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Child"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"siteUrl"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"https://child.dev.local"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"solutionName"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"child"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Now the configuration file of "),e("code",[this._v("ns-child-project")]),this._v(" will be resolved with inherited values from "),e("code",[this._v("ns-master-project")]),this._v("\nand overrided values from "),e("code",[this._v("ns-child-project")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When you run a nsc command on "),s("code",[t._v("ns-child-project")]),t._v(", the placeholder "),s("code",[t._v("<rootDir>")]),t._v(" will be equals to the "),s("code",[t._v("ns-child-project")]),t._v(" path.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("To see how the values in the "),e("code",[this._v("ns-child-project/.nscrc")]),this._v(" file are resolved, run:")]),this._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("nsc inspect\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getters","aria-hidden":"true"}},[this._v("#")]),this._v(" Getters")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'@node-sitecore/config'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// getters")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentWebsite"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Custom")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("websiteDir"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// build/Website")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Or get()")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'customObj'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('// Object {attr1: "value1", ...}')]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'customObj:attr1'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// bundle")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// has()")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("has")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'customObj:attr1'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// set()")]),t._v("\nconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'customObj:attr1'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"new value"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Getters")]),t._v(" "),s("th",[t._v("Example value")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("config.currentWebsite")])]),t._v(" "),s("td",[s("code",[t._v("Custom")])]),t._v(" "),s("td",[t._v("Current website used by front-end and Sitecore")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.siteUrl")])]),t._v(" "),s("td",[s("code",[t._v("http://base.dev.local")])]),t._v(" "),s("td",[t._v("Site url configured on your local machine. Use "),s("code",[t._v(".development.nscrc")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.authConfigFile")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/App_config/Include/Unicorn/Unicorn.UI.config")])]),t._v(" "),s("td",[t._v("Path the unicorn script configuration.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.outputDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build")])]),t._v(" "),s("td",[t._v("Path to the Sitecore instance directory.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.websiteDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website")])]),t._v(" "),s("td",[t._v("Path to the Website directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.themeWebsiteDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/themes")])]),t._v(" "),s("td",[t._v("Path to the themes directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.currentWebsiteDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/themes/Custom")])]),t._v(" "),s("td",[t._v("Path to the current Website directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.sitecoreLibrariesDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/bin")])]),t._v(" "),s("td",[t._v("Path to the Sitecore libraries directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.licensePath")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Data/license.xml")])]),t._v(" "),s("td",[t._v("Path to the license file "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.solutionPath")])]),t._v(" "),s("td",[s("code",[t._v("path/to/Base.sln")])]),t._v(" "),s("td",[t._v("Path to the Visual Studio solution "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.websiteViewsDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/Views")])]),t._v(" "),s("td",[t._v("Path to the Views directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.websiteConfigDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/App_Config")])]),t._v(" "),s("td",[t._v("Path to the App_Config directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.srcDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/src")])]),t._v(" "),s("td",[t._v("Path to the source code directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.foundationDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/src/Foundation")])]),t._v(" "),s("td",[t._v("Path to the Foundation directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.foundationScriptsDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/src/Foundation/Core/code/Scripts")])]),t._v(" "),s("td",[t._v("Path to the Foundation script directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.featureDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/src/Feature")])]),t._v(" "),s("td",[t._v("Path to the Feature directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.projectDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/src/Project")])]),t._v(" "),s("td",[t._v("Path to the Project directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.projectScriptsDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/src/Project/Custom/code/Scripts")])]),t._v(" "),s("td",[t._v("Path to the current Project scripts directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.currentProjectDir")])]),t._v(" "),s("td",[s("code",[t._v("path/to/build/Website/src/Project/Custom/code")])]),t._v(" "),s("td",[t._v("Path to the current Project directory "),s("em",[t._v("1")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.buildPaths")])]),t._v(" "),s("td",[s("code",[t._v("[<solutionPath>]")])]),t._v(" "),s("td",[t._v("List of solutions or projects given to the command "),s("code",[t._v("nsc build")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("config.publishPaths")])]),t._v(" "),s("td",[s("code",[t._v("[<solutionPath>]")])]),t._v(" "),s("td",[t._v("List of solutions or projects given to the command "),s("code",[t._v("nsc publish")]),t._v(".")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"placeholders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#placeholders","aria-hidden":"true"}},[this._v("#")]),this._v(" Placeholders")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Config class define a list of placeholders which can be used in your configuration file. It's kind of shortcut to another\nfield in your configuration file. A placeholder follow this pattern: "),e("code",[this._v("<myPlaceholderName>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For example, one of the defined placeholder is the "),e("code",[this._v("<rootDir>")]),this._v(". Here a usage example of this placeholder:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"currentWebsite"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"MySite"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"siteUrl"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"https://mysite.dev.local"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"instanceDir"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"<rootDir>/build"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When the Config class is loaded, the "),e("code",[this._v(".nscrc")]),this._v(" configuration file will be imported and all placeholder will be resolved.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("nsc inspect\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'@node-sitecore/config'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// resolver")]),t._v("\nconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'<rootDir>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// path/to/root")]),t._v("\nconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'<ouputDir>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/build")]),t._v("\nconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'<websiteDir>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/build/Website")]),t._v("\nconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'<themesDir>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/build/Website/themes")]),t._v("\nconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'<srcDir>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src")]),t._v("\nconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'<projectDir>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src/Project")]),t._v("\nconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'<featureDir>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src/Feature")]),t._v("\nconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'<foundationDir>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src/Foundation")]),t._v("\nconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'<currentDir>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// path/to/root/src/Project/Custom/code")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"list-of-placeholder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-of-placeholder","aria-hidden":"true"}},[this._v("#")]),this._v(" List of placeholder")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("<currentWebsite>")]),t._v(": Current code name of the Sitecore website (Can be the same as "),s("code",[t._v("masterWebsite")]),t._v(". It used for localisation process).")]),t._v(" "),s("li",[s("code",[t._v("<foundationDir>")]),t._v(": Foundation level directory (Helix structure).")]),t._v(" "),s("li",[s("code",[t._v("<featureDir>")]),t._v(": Feature level directory (Helix structure)")]),t._v(" "),s("li",[s("code",[t._v("<projectDir>")]),t._v(": Project level directory (Helix structure)")]),t._v(" "),s("li",[s("code",[t._v("<srcDir>")]),t._v(": Source code directory.")]),t._v(" "),s("li",[s("code",[t._v("<themesDir>")]),t._v(": Themes directory.")]),t._v(" "),s("li",[s("code",[t._v("<websiteDir>")]),t._v(": Website directory.")]),t._v(" "),s("li",[s("code",[t._v("<outputDir>")]),t._v(": Output directory where is installed your Sitecore instance.")]),t._v(" "),s("li",[s("code",[t._v("<solutionPath>")]),t._v(": Path to the MsBuild Solution.")]),t._v(" "),s("li",[s("code",[t._v("<rootDir>")]),t._v(": Root directory of your project.")]),t._v(" "),s("li",[s("code",[t._v("<contextDir>")]),t._v(": Context directory where is runned the CLI command.")])])}],!1,null,null,null);a.options.__file="configuration.md";e.default=a.exports}}]);