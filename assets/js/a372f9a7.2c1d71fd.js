"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3052],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1225:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=a(83117),n=(a(67294),a(3905));const o={},i="Getting Started",s={unversionedId:"programs/token-metadata/getting-started",id:"programs/token-metadata/getting-started",title:"Getting Started",description:"Like any Solana program, one can interact with the Token Metadata program by sending UDP packets to the network or by using the API provided by RPC nodes. However, this is not a great developer experience and, as such, this page aims to help you get started with the Token Metadata program in a much more developer-friendly way.",source:"@site/docs/01-programs/01-token-metadata/01-getting-started.md",sourceDirName:"01-programs/01-token-metadata",slug:"/programs/token-metadata/getting-started",permalink:"/programs/token-metadata/getting-started",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/01-token-metadata/01-getting-started.md",tags:[],version:"current",lastUpdatedAt:1670576177,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/programs/token-metadata/overview"},next:{title:"Accounts",permalink:"/programs/token-metadata/accounts"}},l={},p=[{value:"JavaScript SDK",id:"javascript-sdk",level:2},{value:"Auto-generated JavaScript library",id:"auto-generated-javascript-library",level:2},{value:"Rust crate",id:"rust-crate",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Like any Solana program, one can interact with the Token Metadata program by sending UDP packets to the network or by using the API provided by RPC nodes. However, this is not a great developer experience and, as such, this page aims to help you get started with the Token Metadata program in a much more developer-friendly way."),(0,n.kt)("h2",{id:"javascript-sdk"},"JavaScript SDK"),(0,n.kt)("p",null,"When developing for the web or using ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js"),", one of the easiest ways to interact with the Token Metadata program \u2014 and other Metaplex programs \u2014 is to use our new JavaScript SDK."),(0,n.kt)("p",null,"It not only provides a great API to interact with programs but also abstracts away some pain points we have to deal with when interacting with the Solana blockchain. For instance, it encapsulates who is using the SDK via Identity Drivers and which storage provider we should use via Storage Drivers. On top of that, the SDK was built with modularity in mind so one can easily inject plugins and modules to extend its feature set."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The main module that interacts with the Token Metadata program is the ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/metaplex-foundation/js-next#nfts"},"NFT module")),". It is composed of several methods that focus on real use cases to make our life easier. Here are some of them."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"metaplex.nfts().findByMint(mint);\nmetaplex.nfts().findAllByMintList(mints);\nmetaplex.nfts().findAllByOwner(owner);\nmetaplex.nfts().findAllByCreator(creator, position);\nmetaplex.nfts().findAllByCandyMachine(candyMachine);\nmetaplex.nfts().uploadMetadata(metadata);\nmetaplex.nfts().create(onChainData);\nmetaplex.nfts().update(nft, onChainData);\nmetaplex.nfts().printNewEdition(originalMint, params);\n")),(0,n.kt)("p",null,"Note that this SDK is fairly new, and we are planning on adding more methods, modules, and plugins in the future. For now, the entire documentation is written in the README of the GitHub repository. We will be writing more content as we go until the SDK is mature enough to have its own folder in this documentation."),(0,n.kt)("p",null,"\ud83d\udd17 ",(0,n.kt)("strong",{parentName:"p"},"Helpful links:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/js-next"},"GitHub repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/js-examples"},"Repository of examples using the JS SDK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metaplex-foundation/js-next"},"NPM package"))),(0,n.kt)("h2",{id:"auto-generated-javascript-library"},"Auto-generated JavaScript library"),(0,n.kt)("p",null,"Another way to interact with the Token Metadata program is to use its auto-generated JavaScript library. Whenever the program (written in Rust) gets updated and published, the library gets regenerated to match the latest version of the program. Note that this is what the JavaScript SDK mentioned above uses under the hood to interact with the program."),(0,n.kt)("p",null,"Therefore, these auto-generated libraries can be used by more advanced developers who wish to interact with the program at a lower level, i.e. by preparing instructions and sending transactions directly."),(0,n.kt)("p",null,"\ud83d\udd17 ",(0,n.kt)("strong",{parentName:"p"},"Helpful links:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-program-library/tree/master/token-metadata/js"},"GitHub repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metaplex-foundation/mpl-token-metadata"},"NPM package")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/metaplex-program-library/docs/token-metadata/index.html"},"API references"))),(0,n.kt)("h2",{id:"rust-crate"},"Rust crate"),(0,n.kt)("p",null,"If you are a Rust developer, you can also use a Rust crate to interact with the Token Metadata program. Since the program is written in Rust, this crate contains all the program's logic, including helper methods that prepare instructions for us."),(0,n.kt)("p",null,"This can be helpful if you are developing a Rust client or if you want to make ",(0,n.kt)("a",{parentName:"p",href:"https://solanacookbook.com/references/programs.html#how-to-do-cross-program-invocation"},"CPI calls")," to the Token Metadata program within your program."),(0,n.kt)("p",null,"\ud83d\udd17 ",(0,n.kt)("strong",{parentName:"p"},"Helpful links:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-program-library/tree/master/token-metadata/program"},"GitHub repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/mpl-token-metadata"},"Crate page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/mpl-token-metadata/latest/mpl_token_metadata/"},"API references"))))}m.isMDXComponent=!0}}]);