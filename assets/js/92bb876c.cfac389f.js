"use strict";(self.webpackChunkfana_docs=self.webpackChunkfana_docs||[]).push([[347],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"getting-started",slug:"/getting-started"},o="Getting Started",i={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"There are two options to deploy Fana to get started quickly.",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting-started",permalink:"/fana-docs/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",slug:"/getting-started"},sidebar:"docs",previous:{title:"Introduction",permalink:"/fana-docs/"},next:{title:"Example Flow",permalink:"/fana-docs/flag-management/example-flow"}},s={},p=[{value:"Using Docker",id:"using-docker",level:2},{value:"Using Fana&#39;s Javascript CDK",id:"using-fanas-javascript-cdk",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Deploy Fana App",id:"deploy-fana-app",level:2},{value:"Resources Deployed",id:"resources-deployed",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"There are two options to deploy Fana to get started quickly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-docker"},"Docker"),": Developers interested in using Fana in a self-hosted environment (non-AWS) or are interested in testing out Fana in their local development environment can deploy the entire Fana stack with one command using Docker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-fanas-javascript-cdk"},"Cloud deployment"),": Developers that are already familiar with the AWS environment can quickly deploy the Fana stack using the provided AWS Cloud Development Kit (CDK) template.")),(0,r.kt)("h2",{id:"using-docker"},"Using Docker"),(0,r.kt)("p",null,"This option works well for teams that want to test Fana out in a local developement environment or would like to run Fana on self-hosted infrastructure."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Fana-Docker")," directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd Fana-Docker\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Edit the",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file to the appropriate environment variable configurations for connecting to the PostgreSQL database. A template ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," with defaults has been provided."),(0,r.kt)("li",{parentName:"ol"},"To deploy, run the following command in the same directory as the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up -d\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:3000")," to access the developer dashboard. The Flag Bearer is available for SDK connections at ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:3001"),".")),(0,r.kt)("h2",{id:"using-fanas-javascript-cdk"},"Using Fana's Javascript CDK"),(0,r.kt)("p",null,"Fana's CDK uses the Elastic Container Services hosted on AWS Fargate, a serverless, pay as you go compute engine."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"To use the CDK App, you need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS CLI installed and configured with your credentials and AWS region."),(0,r.kt)("li",{parentName:"ul"},"Bootstrap (create dedicated Amazon S3 buckets and other containers to be available to AWS CloudFormation during deployment) using:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g aws-cdk\n$ cdk boostrap aws://YOUR-ACCOUNT-NUMBER/YOUR-REGION\n")),(0,r.kt)("h2",{id:"deploy-fana-app"},"Deploy Fana App"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Fana-CDK")," directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd Fana-CDK\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"cdk list")," to list the stacks in the app.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cdk list\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Deploy the Fana App and related stacks to AWS")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cdk deploy --all\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Use the load balancer DNS output to access the UI dashboard. Port over the load balancer URI into the SDKs configuration to specify Flag Bearer endpoint.")),(0,r.kt)("h3",{id:"resources-deployed"},"Resources Deployed"),(0,r.kt)("p",null,"There are two different stacks defined in our CDK:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"fana-shared-resources")," which includes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS VPC and subnets"),(0,r.kt)("li",{parentName:"ul"},"an ECS cluster"),(0,r.kt)("li",{parentName:"ul"},"an instance of Relational Database Service (RDS), and"),(0,r.kt)("li",{parentName:"ul"},"an Elasticache Redis cluster.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"FanaPlatformStack")," includes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the Fana Manager and Bearer containers defined as tasks for the Fargate service,"),(0,r.kt)("li",{parentName:"ul"},"the application load balancer configured with listener rules, and"),(0,r.kt)("li",{parentName:"ul"},"the security groups.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fana-shared-resources")," are referenced in the ",(0,r.kt)("inlineCode",{parentName:"p"},"FanaPlatformStack"),"."))}d.isMDXComponent=!0}}]);