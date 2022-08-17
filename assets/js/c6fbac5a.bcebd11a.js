"use strict";(self.webpackChunkfana_docs=self.webpackChunkfana_docs||[]).push([[103],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(a),b=r,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={id:"attributes"},o="Attributes",u={unversionedId:"flag-management/attributes",id:"flag-management/attributes",title:"Attributes",description:"Attributes are the primary building block of audiences. They represent specific traits about your users, like location, age, whether they're a beta user, and anything else that you can identify. Attributes are used to build conditions, which you can read more about on the Audiences page.",source:"@site/docs/flag-management/attributes.md",sourceDirName:"flag-management",slug:"/flag-management/attributes",permalink:"/fana-docs/flag-management/attributes",draft:!1,tags:[],version:"current",frontMatter:{id:"attributes"},sidebar:"docs",previous:{title:"Audiences",permalink:"/fana-docs/flag-management/audiences"},next:{title:"Audit History",permalink:"/fana-docs/flag-management/audit-history"}},s={},l=[{value:"Attribute Dashboard",id:"attribute-dashboard",level:2},{value:"Creating an Attribute",id:"creating-an-attribute",level:2},{value:"Attribute Details",id:"attribute-details",level:2},{value:"Deleting an Attribute",id:"deleting-an-attribute",level:2}],c={toc:l};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"Attributes are the primary building block of audiences. They represent specific traits about your users, like location, age, whether they're a beta user, and anything else that you can identify. Attributes are used to build ",(0,r.kt)("em",{parentName:"p"},"conditions"),", which you can read more about on ",(0,r.kt)("a",{parentName:"p",href:"/fana-docs/flag-management/audiences"},"the Audiences page.")),(0,r.kt)("h2",{id:"attribute-dashboard"},"Attribute Dashboard"),(0,r.kt)("p",null,"The main view of the Attributes section is a list of all of your attributes. You can see the key, data type, and when it was created. There is also a Search bar where you can filter by both key and data type."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:a(1744).Z,width:"2456",height:"1034"})),(0,r.kt)("h2",{id:"creating-an-attribute"},"Creating an Attribute"),(0,r.kt)("p",null,"To create an attribute, click on the ",(0,r.kt)("em",{parentName:"p"},"Create Attribute")," button on the top right of the Attribute Dashboard. Clicking on it will reveal a modal. Attributes only require two pieces of information:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"A key"),". This is how you will refer to the attribute when building conditions and in your user context as well.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note that the key must be made up of alphanumeric/underscore characters only. It also cannot be changed after creation."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Data type of the attribute"),". Fana currently support strings, booleans, and numbers. These will affect the kind of operators you can use in your conditions.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:a(3775).Z,width:"2428",height:"1134"}),"\nOnce you've decided on a key and data type, you can hit Create to create your attribute."),(0,r.kt)("h2",{id:"attribute-details"},"Attribute Details"),(0,r.kt)("p",null,"Clicking into an attribute on the dashboard will bring up the details page. You can see the key and data type, as well as Related Audiences - a list of all of the audiences this attribute is being used in. There is also a ",(0,r.kt)("em",{parentName:"p"},"Delete Attribute")," button in the top right."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:a(8983).Z,width:"1964",height:"1000"})),(0,r.kt)("h2",{id:"deleting-an-attribute"},"Deleting an Attribute"),(0,r.kt)("p",null,"You can delete an attribute by clicking on the ",(0,r.kt)("em",{parentName:"p"},"Delete Attribute")," button on the top right of the Attribute Details page. "),(0,r.kt)("p",null,"You may only delete an attribute if it's not in use by any audiences. If it is in use, it will inform you how many audiences are using it. You can reference the Related Audiences section to see which specific audiences are using the attribute."))}d.isMDXComponent=!0},3775:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/att_create-4d110341900d525b1063c3531f8183e3.png"},1744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/att_dash-bbcbc2708b71a5df139d3840a39a36a8.png"},8983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/att_dets-feeb578383f3ef736f0efd971b834198.png"}}]);