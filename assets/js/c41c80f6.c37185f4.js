"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7293],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=h(n),m=i,u=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var h=2;h<r;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return s},U:function(){return o}});var a=n(67294),i=n(45697),r=n.n(i);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function s(e){let{open:t,title:n,actions:i,keepAlive:r=!0,children:o}=e;const[s,h]=(0,a.useState)(t),d=s||r;return a.createElement("div",{className:["accordion-item",s?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>h(!s)},a.createElement("h3",null,a.createElement(l,{opened:s}),a.createElement("span",null,n)),i),a.createElement("div",{className:"accordion-item-content"},d&&o))}function l(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:r().any},s.propTypes={open:r().bool,title:r().string,children:r().any,actions:r().any,keepAlive:r().bool},l.propTypes={opened:r().bool}},97159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var a=n(83117),i=(n(67294),n(3905)),r=n(38545);const o={description:"Explains Candy Machine settings in great detail."},s="Candy Machine Settings",l={unversionedId:"programs/candy-machine/candy-machine-settings",id:"programs/candy-machine/candy-machine-settings",title:"Candy Machine Settings",description:"Explains Candy Machine settings in great detail.",source:"@site/docs/01-programs/02-candy-machine/02-candy-machine-settings.md",sourceDirName:"01-programs/02-candy-machine",slug:"/programs/candy-machine/candy-machine-settings",permalink:"/programs/candy-machine/candy-machine-settings",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/02-candy-machine-settings.md",tags:[],version:"current",lastUpdatedAt:1670576177,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:2,frontMatter:{description:"Explains Candy Machine settings in great detail."},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/programs/candy-machine/getting-started"},next:{title:"Managing Candy Machines",permalink:"/programs/candy-machine/managing-candy-machines"}},h={},d=[{value:"Introduction",id:"introduction",level:2},{value:"The authority",id:"the-authority",level:2},{value:"Settings shared by all NFTs",id:"settings-shared-by-all-nfts",level:2},{value:"Metaplex Certified Collections",id:"metaplex-certified-collections",level:2},{value:"Item Settings",id:"item-settings",level:2},{value:"Config Line Settings",id:"config-line-settings",level:3},{value:"Hidden Settings",id:"hidden-settings",level:3},{value:"Guards and Groups",id:"guards-and-groups",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"candy-machine-settings"},"Candy Machine Settings"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"On this page, we\u2019re going to dig into all the settings available on a Candy Machine. We will focus on settings that affect the Candy Machine itself and the NFTs it generates rather than the settings that affect the minting process known as Guards. We will tackle the latter in dedicated pages."),(0,i.kt)("h2",{id:"the-authority"},"The authority"),(0,i.kt)("p",null,"One of the most important pieces of information when creating accounts on Solana is the wallet that is allowed to manage them, known as the ",(0,i.kt)("strong",{parentName:"p"},"Authority"),". Thus, when creating a new Candy Machine, you will need to provide the address of the authority that will, later on, be able to update it, insert items to it, delete it, etc."),(0,i.kt)("p",null,"There is an additional authority specifically for the minting process called the ",(0,i.kt)("strong",{parentName:"p"},"Mint Authority"),". When a Candy Machine is created without a Candy Guard, this authority is the only wallet that is allowed to mint from the Candy Machine. No one else can mint. However, in practice, this mint authority is set to the address of a Candy Guard which controls the minting process based on some preconfigured sets of rules known as ",(0,i.kt)("strong",{parentName:"p"},"guards"),"."),(0,i.kt)("p",null,"It is important to note that, when using our SDKs, Candy Machines will always be created with an associated Candy Guard by default so you do not need to worry about this mint authority."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"When using the JS SDK, the authority of a Candy Machine will always default to the current identity. You may explicitly set this authority by providing a valid signer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"authority")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Keypair } from "@solana/web3.js";\n\nconst myCustomAuthority = Keypair.generate();\nconst candyMachineSettings = {\n  authority: myCustomAuthority,\n};\n'))))),(0,i.kt)("h2",{id:"settings-shared-by-all-nfts"},"Settings shared by all NFTs"),(0,i.kt)("p",null,"A big chunk of the Candy Machine settings is used to define the NFTs that will be minted from them. This is because many of the NFT attributes will be the same for all minted NFTs. Therefore, instead of having to repeat these attributes every time we load an item in the Candy Machine, we set them up once on the Candy Machine settings."),(0,i.kt)("p",null,"Note that the only attributes that can distinguish one minted NFT from another are the ",(0,i.kt)("strong",{parentName:"p"},"Name")," of the NFT and the ",(0,i.kt)("strong",{parentName:"p"},"URI")," pointing to its JSON metadata. See ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/inserting-items"},"Inserting Items")," for more information."),(0,i.kt)("p",null,"Here is the list of attributes shared between all minted NFTs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Seller Fee Basis Points"),": The secondary sale royalties that should be set on minted NFTs in basis points. For instance ",(0,i.kt)("inlineCode",{parentName:"li"},"250")," means ",(0,i.kt)("inlineCode",{parentName:"li"},"2.50%")," royalties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Symbol"),': The symbol to use on minted NFTs \u2014 e.g. "MYPROJECT". This can be any text up to 10 characters and can be made optional by providing an empty text.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max Edition Supply"),": The maximum number of editions that can be printed from the minted NFTs. For most use cases, you will want to set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," to prevent minted NFTs to be printed multiple times. Note that you cannot set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," which means unlimited editions are not supported in Candy Machines."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Is Mutable"),": Whether the minted NFTs should be mutable or not. We recommend setting this to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," unless you have a specific reason. You can always make NFTs immutable in the future but you cannot make immutable NFTs mutable ever again."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creators"),": A list of creators that should be set on minted NFTs. It includes their address and their shares of the royalties in percent \u2014 i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"5")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"5%"),". Note that the Candy Machine address will always be set as the first creator of all minted NFTs and will automatically be verified. This makes it possible for anyone to verify that an NFT was minted from a trusted Candy Machine. All other provided creators will be set after that and will need to be verified manually by these creators.")),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"When creating a Candy Machine, only the ",(0,i.kt)("inlineCode",{parentName:"p"},"sellerFeeBasisPoints")," attribute is required out of the attributes listed above. The other attributes have the following default values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"symbol")," defaults to an empty string \u2014 i.e. minted NFTs don\u2019t use symbols."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxEditionSupply")," defaults to zero \u2014 i.e. minted NFTs are not printable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isMutable")," defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"creators")," defaults to the current identity with 100% of the shares.")),(0,i.kt)("p",null,"You may explicitly provide any of these attributes like so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toBigNumber } from "@metaplex-foundation/js";\nimport { Keypair } from "@solana/web3.js";\n\nconst creatorA = Keypair.generate();\nconst creatorB = Keypair.generate();\nconst candyMachineSettings = {\n  sellerFeeBasisPoints: 200,\n  symbol: "MYPROJECT",\n  maxEditionSupply: toBigNumber(0),\n  isMutable: true,\n  creators: [\n    { address: creatorA.publicKey, share: 50 },\n    { address: creatorB.publicKey, share: 50 },\n  ],\n};\n'))))),(0,i.kt)("h2",{id:"metaplex-certified-collections"},"Metaplex Certified Collections"),(0,i.kt)("p",null,"Each Candy Machine must be associated with a special NFT known as a ",(0,i.kt)("a",{parentName:"p",href:"/programs/token-metadata/certified-collections"},"Metaplex Certified Collection (MCC)"),". This ",(0,i.kt)("strong",{parentName:"p"},"Collection NFT")," enables minted NFTs to be grouped together\nand for that information to be verified on-chain."),(0,i.kt)("p",null,"To ensure no one else can use your Collection NFT on their Candy Machine, the ",(0,i.kt)("strong",{parentName:"p"},"Collection's Update Authority")," is required to sign any transaction that changes the Collection on a Candy Machine. As a result, the Candy Machine can safely verify the Collection of all minted NFTs automatically."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"When creating a new Candy Machine or updating the collection of a Candy Machine, you will need to provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"collection")," attribute as an object containing the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address"),": The address of the mint account of the Collection NFT."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updateAuthority"),": The update authority of the Collection NFT as a signer.")),(0,i.kt)("p",null,"Here\u2019s an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Keypair } from "@solana/web3.js";\n\n// Create the Collection NFT.\nconst collectionAuthority = Keypair.generate();\nconst { nft: collectionNft } = await metaplex.nfts().create({\n  name: "My Collection NFT",\n  uri: "https://example.com/path/to/some/json/metadata.json",\n  sellerFeeBasisPoints: 0,\n  isCollection: true,\n  updateAuthority: collectionAuthority,\n});\n\n// Pass the Collection NFT and its authority in the settings.\nconst candyMachineSettings = {\n  collection: {\n    address: collectionNft.address,\n    updateAuthority: collectionAuthority,\n  },\n};\n'))))),(0,i.kt)("h2",{id:"item-settings"},"Item Settings"),(0,i.kt)("p",null,"Candy Machine settings also contain information regarding the items that are or will be loaded inside it. The ",(0,i.kt)("strong",{parentName:"p"},"Items Available")," attribute falls in that category and stores the maximum amount of NFTs that will be minted from the Candy Machine."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"When creating a new Candy Machine, the ",(0,i.kt)("inlineCode",{parentName:"p"},"itemsAvailable")," attribute is required and must be passed like so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toBigNumber } from "@metaplex-foundation/js";\n\nconst candyMachineSettings = {\n  itemsAvailable: toBigNumber(500),\n};\n'))))),(0,i.kt)("p",null,"On top of the ",(0,i.kt)("strong",{parentName:"p"},"Items Available")," attribute, two other attributes define how items are loaded in the Candy Machine. You must choose exactly one of these attributes and leave the other one empty. These attributes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Config Line Settings"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Hidden Settings"),".")),(0,i.kt)("p",null,"Note that once a Candy Machine is created using one of these two modes, it cannot be updated to use the other mode. Additionally, when ",(0,i.kt)("strong",{parentName:"p"},"Config Line Settings")," are used, it is no longer possible to update the ",(0,i.kt)("strong",{parentName:"p"},"Items Available")," attribute."),(0,i.kt)("p",null,"Let\u2019s go through both of them in a bit more detail."),(0,i.kt)("h3",{id:"config-line-settings"},"Config Line Settings"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Config Line Settings")," attribute allows us to describe the items that are or will be inserted inside our Candy Machine. It enables us to keep the size of the Candy Machine to a minimum by providing exact lengths for the ",(0,i.kt)("strong",{parentName:"p"},"Names")," and ",(0,i.kt)("strong",{parentName:"p"},"URIs")," of our items as well as providing some shared prefixes to reduce that length. The ",(0,i.kt)("strong",{parentName:"p"},"Config Line Settings")," attribute is an object containing the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name Prefix"),": A name prefix shared by all inserted items. This prefix can have a maximum of 32 characters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name Length"),": The maximum length for the name of each inserted item excluding the name prefix."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URI Prefix"),": A URI prefix shared by all inserted items. This prefix can have a maximum of 200 characters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URI Length"),": The maximum length for the URI of each inserted item excluding the URI prefix."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Is Sequential"),": Indicates whether to mint NFTs sequentially \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," \u2014 or in random order \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". We recommend setting this to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," to prevent buyers from predicting which NFT will be minted next. Note that our SDKs will default to using Config Line Settings with Is Sequential set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," when creating new Candy Machines.")),(0,i.kt)("p",null,"To understand these ",(0,i.kt)("strong",{parentName:"p"},"Name")," and ",(0,i.kt)("strong",{parentName:"p"},"URI")," properties a bit better, let\u2019s go through an example. Say you want to create a Candy Machine with the following characteristics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It contains ",(0,i.kt)("inlineCode",{parentName:"li"},"1000")," items."),(0,i.kt)("li",{parentName:"ul"},"The name of each item is \u201cMy NFT Project #X\u201d where X is the item\u2019s index starting from 1."),(0,i.kt)("li",{parentName:"ul"},"Each item\u2019s JSON metadata has been uploaded to Arweave so their URIs start with \u201c",(0,i.kt)("a",{parentName:"li",href:"https://arweave.net/%E2%80%9D"},"https://arweave.net/\u201d")," and finish with a unique identifier with a maximum length of 43 characters.")),(0,i.kt)("p",null,"In this example, without prefixes, we would end up with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name Length = 20. 16 characters for \u201cMy NFT Project #\u201d and 4 characters for the highest number which is \u201c1000\u201d."),(0,i.kt)("li",{parentName:"ul"},"URI Length = 63. 20 characters for \u201c",(0,i.kt)("a",{parentName:"li",href:"https://arweave.net/%E2%80%9D"},"https://arweave.net/\u201d")," and 43 characters for the unique identifier.")),(0,i.kt)("p",null,"When inserting 1000 items, that\u2019s a total of 83\u2019000 characters that will be required just for storing items. However, if we use prefixes, we can significantly reduce the space needed to create our Candy Machine and, therefore, the cost of creating it on the blockchain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name Prefix = \u201cMy NFT Project #\u201d"),(0,i.kt)("li",{parentName:"ul"},"Name Length = 4"),(0,i.kt)("li",{parentName:"ul"},"URI Prefix = \u201c",(0,i.kt)("a",{parentName:"li",href:"https://arweave.net/%E2%80%9D"},"https://arweave.net/\u201d")),(0,i.kt)("li",{parentName:"ul"},"URI Length = 43")),(0,i.kt)("p",null,"With 1000 items, we now only need 47\u2019000 characters to store our items."),(0,i.kt)("p",null,"But that\u2019s not it! You may use ",(0,i.kt)("strong",{parentName:"p"},"two special variables")," within your name or URI prefixes to reduce that size even further. These variables are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ID$"),": This will be replaced by the index of the item starting at 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ID+1$"),": This will be replaced by the index of the item starting at 1.")),(0,i.kt)("p",null,"In our above example, we could leverage the ",(0,i.kt)("inlineCode",{parentName:"p"},"$ID+1$")," variable for the name prefix so we wouldn\u2019t need to insert it on every item. We end up with the following Config Line Settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name Prefix = \u201cMy NFT Project #$ID+1$\u201d"),(0,i.kt)("li",{parentName:"ul"},"Name Length = 0"),(0,i.kt)("li",{parentName:"ul"},"URI Prefix = \u201c",(0,i.kt)("a",{parentName:"li",href:"https://arweave.net/%E2%80%9D"},"https://arweave.net/\u201d")),(0,i.kt)("li",{parentName:"ul"},"URI Length = 43")),(0,i.kt)("p",null,"That\u2019s right, ",(0,i.kt)("strong",{parentName:"p"},"our name length is now zero")," and we\u2019ve reduced the characters needed down to 43\u2019000 characters."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"When using the JS SDK, both ",(0,i.kt)("strong",{parentName:"p"},"Config Line Settings")," and ",(0,i.kt)("strong",{parentName:"p"},"Hidden Settings")," live under the same object attribute called ",(0,i.kt)("inlineCode",{parentName:"p"},"itemSettings"),". It contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," property used to distinguish the two modes. This ensures exactly one of these settings is used on a Candy Machine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},'"configLines"'),", Config Line Settings are used."),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},'"hidden"'),", Hidden Settings are used.")),(0,i.kt)("p",null,"Here\u2019s a code snippet showing how you can set up the above example using the SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const candyMachineSettings = {\n  itemSettings: {\n    type: "configLines",\n    prefixName: "My NFT Project #$ID+1$",\n    nameLength: 0,\n    prefixUri: "https://arweave.net/",\n    uriLength: 43,\n    isSequential: false,\n  },\n};\n'))))),(0,i.kt)("h3",{id:"hidden-settings"},"Hidden Settings"),(0,i.kt)("p",null,"Another way of preparing items is by using ",(0,i.kt)("strong",{parentName:"p"},"Hidden Settings"),". This is a completely different approach than Config Line Settings as, using Hidden Settings, you do not need to insert any items to the Candy Machine as every single minted NFT will share the same name and the same URI. You might be wondering: why would someone want to do that? The reason for that is to create a ",(0,i.kt)("strong",{parentName:"p"},"hide-and-reveal NFT drop")," that reveals all NFTs after they have been minted. So how does that work?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, the creator configures the name and the URI of every minted NFTs using the Hidden Settings. The URI usually points to a \u201cteaser\u201d JSON metadata that makes it clear that a reveal is about to happen."),(0,i.kt)("li",{parentName:"ul"},"Then, buyers mint all these NFTs with the same URI and therefore the same \u201cteaser\u201d JSON metadata."),(0,i.kt)("li",{parentName:"ul"},"Finally, when all NFTs have been minted, the creator updates the URI of every single minted NFT to point to the real URI which is specific to that NFT.")),(0,i.kt)("p",null,"The issue with that last step is that it allows creators to mess with which buyer gets which NFTs. To avoid that and allow buyers to verify the mapping between NFTs and JSON metadata was not tampered with, the Hidden Settings contains a ",(0,i.kt)("strong",{parentName:"p"},"Hash")," property which should be filled with a 32-character hash of the file that maps NFT indices with their real JSON metadata. That way, after the reveal, the creator can make that file public and buyers and verify that its hash corresponds to the hash provided in the Hidden Settings."),(0,i.kt)("p",null,"Therefore, we end up with the following properties on the Hidden Settings attribute:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name"),": The \u201chidden\u201d name for all minted NFTs. This can have a maximum of 32 characters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URI"),": The \u201chidden\u201d URI for all minted NFTs. This can have a maximum of 200 characters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hash"),": The 32-character hash of the file that maps NFT indices with their real JSON metadata allowing buyers to verify it was not tampered with.")),(0,i.kt)("p",null,"Note that, just like for the prefixes of the Config Line Settings, special variables can be used for the ",(0,i.kt)("strong",{parentName:"p"},"Name")," and ",(0,i.kt)("strong",{parentName:"p"},"URI")," of the Hidden Settings. As a reminder, these variables are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ID$"),": This will be replaced by the index of the minted NFT starting at 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ID+1$"),": This will be replaced by the index of the minted NFT starting at 1.")),(0,i.kt)("p",null,"Also note that, since we are not inserting any item to the Candy Machine, Hidden Settings make it possible to create very large drops. The only caveat is that there is a need for an off-chain process to update the name and URI of each NFT after the mint."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"When using the JS SDK, both ",(0,i.kt)("strong",{parentName:"p"},"Config Line Settings")," and ",(0,i.kt)("strong",{parentName:"p"},"Hidden Settings")," live under the same object attribute called ",(0,i.kt)("inlineCode",{parentName:"p"},"itemSettings"),". It contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," property used to distinguish the two modes. This ensures exactly one of these settings is used on a Candy Machine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},'"configLines"'),", Config Line Settings are used."),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},'"hidden"'),", Hidden Settings are used.")),(0,i.kt)("p",null,"Here\u2019s a code snippet showing how you can use Hidden Settings via the JS SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const candyMachineSettings = {\n  itemSettings: {\n    type: "hidden",\n    name: "My NFT Project #$ID+1$",\n    uri: "https://example.com/path/to/teaser.json",\n    hash: hashOfTheFileThatMapsUris,\n  },\n};\n'))))),(0,i.kt)("h2",{id:"guards-and-groups"},"Guards and Groups"),(0,i.kt)("p",null,"As mentioned in the introduction, this page focuses on the main Candy Machine settings but there is a lot more you can configure on a Candy Machine by using guards."),(0,i.kt)("p",null,"Since this is a vast subject with a lot of available default guards to explain, we\u2019ve dedicated an entire section of this documentation to it. The best place to start is the ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-guards"},"Candy Guards")," page."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Now that we know about how the main Candy Machine settings, on ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/managing-candy-machines"},"the next page"),", we\u2019ll see how we can use them to create and update our own Candy Machines."))}p.isMDXComponent=!0}}]);