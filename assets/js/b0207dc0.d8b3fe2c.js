"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},o=void 0,i={unversionedId:"how-to-contribute",id:"how-to-contribute",title:"how-to-contribute",description:"\x3c!--",source:"@site/community/how-to-contribute.md",sourceDirName:".",slug:"/how-to-contribute",permalink:"/community/how-to-contribute",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"project committers",permalink:"/community/project committers"}},s={},u=[{value:"Issues",id:"issues",level:2},{value:"Search Known Issues First",id:"search-known-issues-first",level:3},{value:"Reporting New Issues",id:"reporting-new-issues",level:3},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Make Pull Requests",id:"make-pull-requests",level:3},{value:"Code Style Guide",id:"code-style-guide",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing-to-uniffle"},"Contributing to Uniffle"),(0,a.kt)("p",null,"Welcome to report ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-uniffle/issues"},"Issues")," or make ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-uniffle/pulls"},"pull requests"),". It's recommended to read the following contributing guide first before contributing. "),(0,a.kt)("h2",{id:"issues"},"Issues"),(0,a.kt)("p",null,"We use GitHub Issues to track public bugs and feature requests."),(0,a.kt)("h3",{id:"search-known-issues-first"},"Search Known Issues First"),(0,a.kt)("p",null,"Please search on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-uniffle/issues"},"Issues")," to avoid creating duplicate issues."),(0,a.kt)("h3",{id:"reporting-new-issues"},"Reporting New Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Be sure to include a title and clear description, as much relevant information as possible."),(0,a.kt)("li",{parentName:"ul"},"A code sample or an executable test case demonstrating is highly recommended.")),(0,a.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use master branch as our developing branch."),(0,a.kt)("li",{parentName:"ul"},"Do not commit/push directly to the master branch. Instead, create a fork and file a pull request."),(0,a.kt)("li",{parentName:"ul"},"When maintaining a branch, merge frequently with the master."),(0,a.kt)("li",{parentName:"ul"},"When maintaining a branch, submit pull requests to the master frequently."),(0,a.kt)("li",{parentName:"ul"},"If you are working on a bigger issue try to split it up into several smaller issues."),(0,a.kt)("li",{parentName:"ul"},"We reserve full and final discretion over whether we will merge a pull request. Adhering to these guidelines is not a complete guarantee that your pull request will be merged.")),(0,a.kt)("h3",{id:"make-pull-requests"},"Make Pull Requests"),(0,a.kt)("p",null,"The code team will monitor all pull requests, we run some code check and test on it. After all tests passed and all the review comments addressed, we will accept the PR."),(0,a.kt)("p",null,"Before submitting a pull request, please make sure the followings are done:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fork the repo and create your branch from ",(0,a.kt)("inlineCode",{parentName:"li"},"master"),"."),(0,a.kt)("li",{parentName:"ol"},"Update code or documentation if you have changed APIs."),(0,a.kt)("li",{parentName:"ol"},"Add the copyright notice to the top of any new files you've added."),(0,a.kt)("li",{parentName:"ol"},"Check your code lints and checkstyle."),(0,a.kt)("li",{parentName:"ol"},"Test and test again your code.")),(0,a.kt)("h2",{id:"code-style-guide"},"Code Style Guide"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-uniffle/blob/master/checkstyle.xml"},"Code Style")," for Java."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 spaces for indentation rather than tabs")))}m.isMDXComponent=!0}}]);