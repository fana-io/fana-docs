"use strict";(self.webpackChunkfana_docs=self.webpackChunkfana_docs||[]).push([[999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"audit-history"},o="Audit History",l={unversionedId:"flag-management/audit-history",id:"flag-management/audit-history",title:"Audit History",description:"The Audit History page can be accessed by clicking on the History section in the left navigation bar on the dashboard. It displays a record of every change that has occurred.",source:"@site/docs/flag-management/audit-history.md",sourceDirName:"flag-management",slug:"/flag-management/audit-history",permalink:"/fana-docs/flag-management/audit-history",draft:!1,tags:[],version:"current",frontMatter:{id:"audit-history"},sidebar:"docs",previous:{title:"Attributes",permalink:"/fana-docs/flag-management/attributes"},next:{title:"Settings",permalink:"/fana-docs/flag-management/settings"}},c={},s=[],u={toc:s};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"audit-history"},"Audit History"),(0,a.kt)("p",null,"The Audit History page can be accessed by clicking on the ",(0,a.kt)("em",{parentName:"p"},"History")," section in the left navigation bar on the dashboard. It displays a record of every change that has occurred."),(0,a.kt)("p",null,"Each entry contains the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entity Type"),": flags, audiences, or attributes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entity Key"),": The key of the affected flag, audience, or attribute. You can click on the key to be taken to its details page",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Note that if you click on the key of a deleted entity, you will arrive at a "not found" page.'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Event"),": The event that occurred. Possible events are:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Created"),(0,a.kt)("li",{parentName:"ul"},"Deleted"),(0,a.kt)("li",{parentName:"ul"},"Updated (can be a title update, or targeted audience/condition change)"),(0,a.kt)("li",{parentName:"ul"},"Toggled on/off"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Date"),": When the event occurred")),(0,a.kt)("p",null,"There is a Search bar that will search through entity types, entity keys, and events."),(0,a.kt)("p",null,"By default, logs are displayed with the newest entries first. You can also click on the Sort icon next to the Date column header to see the oldest entries first."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(6251).Z,width:"2252",height:"1450"})))}p.isMDXComponent=!0},6251:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/history-3ca85426b8fc073c25ebb3c9d5b1e3fc.png"}}]);