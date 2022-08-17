"use strict";(self.webpackChunkfana_docs=self.webpackChunkfana_docs||[]).push([[188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,f=p["".concat(l,".").concat(y)]||p[y]||u[y]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"sdk-keys"},i="SDK Keys",s={unversionedId:"sdk/sdk-keys",id:"sdk/sdk-keys",title:"SDK Keys",description:"In order to properly connect your SDK to your Flag Bearer instance, you will need to provide the instantiation methods with an SDK key. This is used to authorize your app's connection with the Flag Bearer.",source:"@site/docs/sdk/sdk-keys.md",sourceDirName:"sdk",slug:"/sdk/sdk-keys",permalink:"/fana-docs/docs/sdk/sdk-keys",draft:!1,editUrl:"https://github.com/fana-io/fana-docs/docs/sdk/sdk-keys.md",tags:[],version:"current",frontMatter:{id:"sdk-keys"},sidebar:"docs",previous:{title:"Settings",permalink:"/fana-docs/docs/flag-management/settings"},next:{title:"Using the React SDK",permalink:"/fana-docs/docs/sdk/using-react-sdk"}},l={},c=[],d={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk-keys"},"SDK Keys"),(0,o.kt)("p",null,"In order to properly connect your SDK to your Flag Bearer instance, you will need to provide the instantiation methods with an SDK key. This is used to authorize your app's connection with the Flag Bearer."),(0,o.kt)("p",null,"You are provided one Node SDK Key and one React SDK Key. You must use them in the appropriate SDK."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: If the SDK key is not valid, the connection will fail and your evaluations will all return default values. You can set the default value at each ",(0,o.kt)("inlineCode",{parentName:"p"},"evaluateFlag")," invocation, but will be ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if not provided.")),(0,o.kt)("p",null,"Example of the SDK key being used to instantiate a Node SDK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const config = new FanaSDK.Config('node_key', 'http://localhost:3001')\n                                   ^Node SDK Key  ^Flag Bearer Address\n")),(0,o.kt)("p",null,"Here, the SDK key is being hardcoded, but you should keep it in an environment variable for security."),(0,o.kt)("p",null,"To find your SDK keys, go to your Manager Dashboard and navigate to the Settings page. Each SDK key can be copied with a click."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:n(4068).Z,width:"1194",height:"994"})),(0,o.kt)("p",null,"You also have the option of regenerating your SDK keys. However, be advised that this will invalidate the current one, so do this with caution."))}u.isMDXComponent=!0},4068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings-c2bcdb5876e49b71a912587250ce6595.png"}}]);