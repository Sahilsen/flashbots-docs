"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[1908],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,s(s({ref:t},h),{},{components:r})):n.createElement(m,s({ref:t},h))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2270:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"synthetix searcher"},c=void 0,l={unversionedId:"flashbots-auction/searchers/example-searchers/synthetix-searcher",id:"flashbots-auction/searchers/example-searchers/synthetix-searcher",isDocsHomePage:!1,title:"synthetix searcher",description:"This repo by Bert Miller contains a searcher developed to take advantage of a 1 off MEV opportunity created by the Synthetix team deprecating their ETH collateral trial program. As a result of this there were many loans that would be liquidatable after the governance proposal was executed. Taking advantage of this required a bot that could backrun the governance proposal execution transaction from the mempool as well as monitoring and execution infrastructure - all of which is contained here.",source:"@site/docs/flashbots-auction/searchers/example-searchers/synthetix-searcher.md",sourceDirName:"flashbots-auction/searchers/example-searchers",slug:"/flashbots-auction/searchers/example-searchers/synthetix-searcher",permalink:"/flashbots-auction/searchers/example-searchers/synthetix-searcher",tags:[],version:"current",frontMatter:{title:"synthetix searcher"},sidebar:"docs",previous:{title:"searcher minter",permalink:"/flashbots-auction/searchers/example-searchers/searcher-minter"},next:{title:"golang provider",permalink:"/flashbots-auction/searchers/libraries/golang"}},h=[],u={toc:h};function p(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This repo by ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/bertcmiller"},"Bert Miller")," contains a searcher developed to take advantage of a 1 off MEV opportunity created by the Synthetix team deprecating their ETH collateral trial program. As a result of this there were many loans that would be liquidatable after the governance proposal was executed. Taking advantage of this required a bot that could backrun the governance proposal execution transaction from the mempool as well as monitoring and execution infrastructure - all of which is contained here."),(0,o.kt)("p",null,"An accompanying blog post talking through the process of writing this bot and its strategy can be found ",(0,o.kt)("a",{parentName:"p",href:"https://bertcmiller.com/2021/09/05/mev-synthetix.html"},"on Bert Miller's website"),". This is highly recommended to understand the thought process and design decisions behind this repo."),(0,o.kt)("p",null,"Access the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bertmiller/sMEV"},"synthetix searcher repository here"),"."))}p.isMDXComponent=!0}}]);