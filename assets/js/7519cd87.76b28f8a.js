"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4806],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63687:function(e,t,n){n.d(t,{r:function(){return l}});var a=n(67294),i=n(45697),r=n.n(i),o=n(38545);function l(e){let{children:t,title:n="Code",open:i=!1}=e;return a.createElement(o.Q,{title:n,open:i},a.createElement("div",{className:"accordion-item-no-padding"},t))}l.propTypes={children:r().any,title:r().string,open:r().bool}},38545:function(e,t,n){n.d(t,{Q:function(){return l},U:function(){return o}});var a=n(67294),i=n(45697),r=n.n(i);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function l(e){let{open:t,title:n,actions:i,keepAlive:r=!0,children:o}=e;const[l,d]=(0,a.useState)(t),c=l||r;return a.createElement("div",{className:["accordion-item",l?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>d(!l)},a.createElement("h3",null,a.createElement(s,{opened:l}),a.createElement("span",null,n)),i),a.createElement("div",{className:"accordion-item-content"},c&&o))}function s(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:r().any},l.propTypes={open:r().bool,title:r().string,children:r().any,actions:r().any,keepAlive:r().bool},s.propTypes={opened:r().bool}},4007:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return y}});var a=n(83117),i=n(67294),r=n(3905),o=n(38545),l=n(45697),s=n.n(l);function d(e){let{fields:t,title:n="Standard",open:a=!1}=e;return i.createElement(o.Q,{title:n,open:a},i.createElement("div",{className:"accordion-table-overflow"},i.createElement("table",{className:"accordion-table"},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Field"),i.createElement("th",null,"Type"),i.createElement("th",{style:{minWidth:"25rem"}},"Description"))),i.createElement("tbody",null,i.createElement(c,{fields:t})))))}function c(e){let{fields:t,indent:n=0}=e;return t.map((e=>i.createElement(p,{key:e.name,field:e,indent:n})))}function p(e){var t;let{field:n,indent:a=0}=e;return i.createElement(i.Fragment,null,i.createElement("tr",{className:a>0?"accordion-table-nested-row":"",key:n.name},i.createElement("th",null,i.createElement("div",{style:{marginLeft:2*a+"rem"}},n.name)),i.createElement("td",null,n.type),i.createElement("td",null,i.createElement("div",{style:{display:"inline"},dangerouslySetInnerHTML:{__html:null!=(t=n.description)?t:""}}))),n.fields&&i.createElement(c,{fields:n.fields,indent:a+1}))}d.propTypes={fields:s().array,title:s().string,open:s().bool},c.propTypes={fields:s().array,indent:s().number},p.propTypes={field:s().object,indent:s().number};var u=n(63687),m={fungible:[{name:"name",type:"string",description:"Name of the token."},{name:"symbol",type:"string",description:"Symbol of the token."},{name:"description",type:"string",description:"Description of the token."},{name:"image",type:"string",description:"URI pointing to the token's logo."}],fungibleAsset:[{name:"name",type:"string",description:"Name of the asset."},{name:"symbol",type:"string",description:"Symbol of the asset."},{name:"description",type:"string",description:"Description of the asset."},{name:"image",type:"string",description:"URI pointing to the asset's logo."},{name:"animation_url",type:"string",description:"URI pointing to the asset's animation."},{name:"external_url",type:"string",description:"URI pointing to an external URL defining the asset \u2014 e.g. the game's main site."},{name:"attributes",type:"array",description:"Array of attributes defining the characteristics of the asset.",fields:[{name:"trait_type",type:"string",description:"The type of attribute."},{name:"value",type:"string",description:"The value for that attribute."}]}],nonFungible:[{name:"name",type:"string",description:"Name of the asset."},{name:"symbol",type:"string",description:"Symbol of the asset."},{name:"description",type:"string",description:"Description of the asset."},{name:"image",type:"string",description:"URI pointing to the asset's logo."},{name:"animation_url",type:"string",description:"URI pointing to the asset's animation."},{name:"external_url",type:"string",description:"URI pointing to an external URL defining the asset \u2014 e.g. the game's main site."},{name:"attributes",type:"array",description:"Array of attributes defining the characteristics of the asset.",fields:[{name:"trait_type",type:"string",description:"The type of attribute."},{name:"value",type:"string",description:"The value for that attribute."}]}]};const h={description:"How the Token Standard works."},f="Token Standard",g={unversionedId:"programs/token-metadata/token-standard",id:"programs/token-metadata/token-standard",title:"Token Standard",description:"How the Token Standard works.",source:"@site/docs/01-programs/01-token-metadata/04-token-standard.md",sourceDirName:"01-programs/01-token-metadata",slug:"/programs/token-metadata/token-standard",permalink:"/programs/token-metadata/token-standard",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/01-token-metadata/04-token-standard.md",tags:[],version:"current",lastUpdatedAt:1670576177,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:4,frontMatter:{description:"How the Token Standard works."},sidebar:"sidebar",previous:{title:"Instructions",permalink:"/programs/token-metadata/instructions"},next:{title:"Certified Collections",permalink:"/programs/token-metadata/certified-collections"}},k={},y=[{value:"Introduction",id:"introduction",level:2},{value:"The Token Standard field",id:"the-token-standard-field",level:2},{value:"The Fungible Standard",id:"the-fungible-standard",level:2},{value:"The Fungible Asset Standard",id:"the-fungible-asset-standard",level:2},{value:"The Non-Fungible Standard",id:"the-non-fungible-standard",level:2}],b={toc:y};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"token-standard"},"Token Standard"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'As token usage has evolved on Solana, it has become clear that there are more types of tokens than simply "fungible" and "non-fungible" tokens.'),(0,r.kt)("p",null,'An example is something the community is calling a "semi-fungible token", an SPL token with a supply greater than 1 but which has typical NFT attributes such as an image and an attributes array in the JSON metadata.'),(0,r.kt)("p",null,'The consensus seems to be that these should be stored in wallets in the same view as standard NFTs, or in their own view but separate from "standard" fungible SPL tokens. These tokens are becoming popular in gaming contexts to support fungible items such as a kind of sword or a piece of wood, etc. but which are in a different league from typical fungible SPL tokens such as USDC.'),(0,r.kt)("h2",{id:"the-token-standard-field"},"The Token Standard field"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The below Token Standard was introduced in Token Metadata ",(0,r.kt)("strong",{parentName:"p"},"v1.1.0"),"."),(0,r.kt)("p",{parentName:"admonition"},"Many tokens may still conform to the ",(0,r.kt)("a",{parentName:"p",href:"/programs/token-metadata/changelog/v1.0"},"v1.0 JSON Standard"),".")),(0,r.kt)("p",null,"In order to support this particular use-case but also to make the standard broad enough to allow expansion to other token types in the future, we keep track of the token's fungibility using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Token Standard")," enum on the Metadata account. This field maps to a particular JSON standard and is used to objectively differentiate token types."),(0,r.kt)("p",null,'This solves a pain point for third parties such as wallets which, before this field, had to apply inconsistent heuristics to determine what is and is not an "NFT".'),(0,r.kt)("p",null,"The Token Standard field can have the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NonFungible"),": A non-fungible token with a Master Edition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FungibleAsset"),": A token with metadata that can also have attributes, sometimes called Semi-Fungible."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Fungible"),": A token with simple metadata."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NonFungibleEdition"),": A non-fungible token with an Edition account (printed from a Master edition).")),(0,r.kt)("p",null,"It is important to note that the Token Standard is set automatically by the Token Metadata program and cannot be manually updated. It uses the following logic to apply the correct standard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the token has a ",(0,r.kt)("strong",{parentName:"li"},"Master Edition account"),", it is a ",(0,r.kt)("inlineCode",{parentName:"li"},"NonFungible"),"."),(0,r.kt)("li",{parentName:"ul"},"If the token has an ",(0,r.kt)("strong",{parentName:"li"},"Edition account"),", it is a ",(0,r.kt)("inlineCode",{parentName:"li"},"NonFungibleEdition"),"."),(0,r.kt)("li",{parentName:"ul"},"If the token has no (Master) Edition account (ensuring its supply can be > 1) and ",(0,r.kt)("strong",{parentName:"li"},"uses zero decimals places"),", it is a ",(0,r.kt)("inlineCode",{parentName:"li"},"FungibleAsset"),"."),(0,r.kt)("li",{parentName:"ul"},"If the token has no (Master) Edition account (ensuring its supply can be > 1) and ",(0,r.kt)("strong",{parentName:"li"},"uses at least one decimal place"),", it is a ",(0,r.kt)("inlineCode",{parentName:"li"},"Fungible"),".")),(0,r.kt)("p",null,"Each Token Standard type has its own JSON schema which is defined below."),(0,r.kt)("h2",{id:"the-fungible-standard"},"The Fungible Standard"),(0,r.kt)("p",null,"These are simple SPL tokens with limited metadata and supply >= 0. Examples are USDC, GBTC and RAY."),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(d,{fields:m.fungible,open:!0,mdxType:"AccordionTokenStandard"}),(0,r.kt)(u.r,{title:"Example",mdxType:"AccordionCode"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "USD Coin",\n  "symbol": "USDC",\n  "description": "Fully reserved fiat-backed stablecoin created by Circle.",\n  "image": "https://www.circle.com/hs-fs/hubfs/sundaes/USDC.png?width=540&height=540&name=USDC.png"\n}\n')))),(0,r.kt)("h2",{id:"the-fungible-asset-standard"},"The Fungible Asset Standard"),(0,r.kt)("p",null,'These are fungible tokens with more extensive metadata and supply >= 0. An example of this kind of token is something the community has been calling "semi-fungible tokens" often used to represent a fungible but attribute-heavy in-game item such as a sword or a piece of wood.'),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(d,{fields:m.fungibleAsset,open:!0,mdxType:"AccordionTokenStandard"}),(0,r.kt)(u.r,{title:"Example",mdxType:"AccordionCode"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SolanaGame Steel Sword",\n  "symbol": "SG-SS-1",\n  "description": "SolanaGame steel sword available after Level 4",\n  "image": "<https://arweave.net/26YdhY_eAzv26YdhY1uu9uiA3nmDZYwP8MwZAultcE?ext=jpeg>",\n  "animation_url": "<https://arweave.net/ZAultcE_eAzv26YdhY1uu9uiA3nmDZYwP8MwuiA3nm?ext=glb>",\n  "external_url": "<https://SolanaGame.io>",\n  "attributes": [\n    {\n      "trait_type": "attack",\n      "value": "4"\n    },\n    {\n      "trait_type": "defense",\n      "value": "3"\n    },\n    {\n      "trait_type": "durability",\n      "value": "47"\n    },\n    {\n      "trait_type": "components",\n      "value": "iron: 10; carbon: 1; wood: 2"\n    }\n  ]\n}\n')))),(0,r.kt)("h2",{id:"the-non-fungible-standard"},"The Non-Fungible Standard"),(0,r.kt)("p",null,'These are the "standard" non-fungible tokens the community is already familiar with and have both a Metadata PDA and a Master Edition (or Edition) PDA. Examples of these are Solana Monkey Business, Stylish Studs and Thugbirdz.'),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(d,{fields:m.nonFungible,open:!0,mdxType:"AccordionTokenStandard"}),(0,r.kt)(u.r,{title:"Example",mdxType:"AccordionCode"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SolanaArtProject #1",\n  "description": "Generative art on Solana.",\n  "image": "https://arweave.net/26YdhY_eAzv26YdhY1uu9uiA3nmDZYwP8MwZAultcE?ext=jpeg",\n  "animation_url": "https://arweave.net/ZAultcE_eAzv26YdhY1uu9uiA3nmDZYwP8MwuiA3nm?ext=glb",\n  "external_url": "https://example.com",\n  "attributes": [\n    {\n      "trait_type": "trait1",\n      "value": "value1"\n    },\n    {\n      "trait_type": "trait2",\n      "value": "value2"\n    }\n  ],\n  "properties": {\n    "files": [\n      {\n        "uri": "https://www.arweave.net/abcd5678?ext=png",\n        "type": "image/png"\n      },\n      {\n        "uri": "https://watch.videodelivery.net/9876jkl",\n        "type": "unknown",\n        "cdn": true\n      },\n      {\n        "uri": "https://www.arweave.net/efgh1234?ext=mp4",\n        "type": "video/mp4"\n      }\n    ],\n    "category": "video",\n\n    // @deprecated\n    // Do not use - may be removed in a future release.\n    // Use on-chain data instead.\n    "collection": {\n      "name": "Solflare X NFT",\n      "family": "Solflare"\n    },\n\n    // @deprecated\n    // Do not use - may be removed in a future release.\n    // Use on-chain data instead.\n    "creators": [\n      {\n        "address": "xEtQ9Fpv62qdc1GYfpNReMasVTe9YW5bHJwfVKqo72u",\n        "share": 100\n      }\n    ]\n  }\n}\n')))))}v.isMDXComponent=!0}}]);