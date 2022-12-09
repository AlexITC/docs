"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5702],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return t?o.createElement(m,i(i({ref:n},l),{},{components:t})):o.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3142:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var o=t(83117),r=(t(67294),t(3905));const a={description:"OUTDATED: How to burn a token.",sidebar_label:"Burn Token"},i=void 0,s={unversionedId:"guides/archived/burn-token",id:"guides/archived/burn-token",title:"burn-token",description:"OUTDATED: How to burn a token.",source:"@site/docs/04-guides/07-archived/01-burn-token.md",sourceDirName:"04-guides/07-archived",slug:"/guides/archived/burn-token",permalink:"/guides/archived/burn-token",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/04-guides/07-archived/01-burn-token.md",tags:[],version:"current",lastUpdatedAt:1670576177,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:1,frontMatter:{description:"OUTDATED: How to burn a token.",sidebar_label:"Burn Token"},sidebar:"sidebar",previous:{title:"Metaplex",permalink:"/guides/archived/architecture/deep_dive/metaplex"},next:{title:"Resources",permalink:"/resources/"}},u={},c=[],l={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"There is a full burn instruction now which allows to fully burn Metaplex Tokens. If you use the guide below not all Accounts will be closed and you will not get back all rent SOL!"),(0,r.kt)("p",{parentName:"admonition"},"A new Guide will be added soon.")),(0,r.kt)("h1",{id:"burn-token"},"Burn Token"),(0,r.kt)("p",null,"You can also get rid of NFTs (or any token) by using the ",(0,r.kt)("a",{parentName:"p",href:"https://spl.solana.com/token#burning"},(0,r.kt)("inlineCode",{parentName:"a"},"spl-token burn"))," command available in your terminal after installing Solana. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This does not remove the token mint acount or delete the metadata or master edition/edition accounts. It only deletes the token stored at your token account so it will not show up in your wallet anymore. ")),(0,r.kt)("p",null,"First, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"spl-token accounts")," command, list the account data in your wallet. You'll see your NFT (in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"9w9Qe8GxkrFnSJYKfQMJug9k8ufpfzxW6o7kXTFKpXrK"),") as well as it's token ",(0,r.kt)("inlineCode",{parentName:"p"},"Account")," address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spl-token accounts\nToken                                         Account                                       Balance\n----------------------------------------------------------------------------------------------------------\n9w9Qe8GxkrFnSJYKfQMJug9k8ufpfzxW6o7kXTFKpXrK  wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN   1\n")),(0,r.kt)("p",null,"We need the value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Account")," column to burn the given token using the ",(0,r.kt)("inlineCode",{parentName:"p"},"burn")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> spl-token burn --help\n\nspl-token-burn\nBurn tokens from an account\n\nUSAGE:\n    spl-token burn [FLAGS] [OPTIONS] <SOURCE_TOKEN_ACCOUNT_ADDRESS> <TOKEN_AMOUNT>\n\nFLAGS:\n        --dump-transaction-message    Display the base64 encoded binary transaction message in sign-only mode\n    -h, --help                        Prints help information\n        --sign-only                   Sign the transaction offline\n    -V, --version                     Prints version information\n    -v, --verbose                     Show additional information\n\nOPTIONS:\n        --blockhash <BLOCKHASH>                   Use the supplied blockhash\n    -C, --config <PATH>\n            Configuration file to use [default: /Users/aaron/.config/solana/cli/config.yml]\n\n        --fee-payer <KEYPAIR>\n            Specify the fee-payer account. This may be a keypair file, the ASK keyword\n            or the pubkey of an offline signer, provided an appropriate --signer argument\n            is also passed. Defaults to the client keypair.\n    -u, --url <URL_OR_MONIKER>\n            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]\n            Default from the configuration file.\n        --with-memo <MEMO>                        Specify a memo string to include in the transaction.\n        --mint-address <MINT_ADDRESS>\n            Address of mint that token account is associated with. Required by --sign-only\n\n        --mint-decimals <MINT_DECIMALS>\n            Decimals of mint that token account is associated with. Required by --sign-only\n\n        --multisig-signer <MULTISIG_SIGNER>...    Member signer of a multisig account\n        --nonce <PUBKEY>\n            Provide the nonce account to use when creating a nonced\n            transaction. Nonced transactions are useful when a transaction\n            requires a lengthy signing process. Learn more about nonced\n            transactions at https://docs.solana.com/offline-signing/durable-nonce\n        --nonce-authority <KEYPAIR>\n            Provide the nonce authority keypair to use when signing a nonced transaction\n\n        --output <FORMAT>\n            Return information in specified output format [possible values: json, json-compact]\n\n        --owner <SOURCE_TOKEN_OWNER_KEYPAIR>\n            Specify the source token owner account. This may be a keypair file, the ASK keyword. Defaults to the client\n            keypair.\n        --signer <PUBKEY=SIGNATURE>...            Provide a public-key/signature pair for the transaction\n\nARGS:\n    <SOURCE_TOKEN_ACCOUNT_ADDRESS>    The token account address to burn from\n    <TOKEN_AMOUNT>                    Amount to burn, in tokens\n")),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> spl-token burn -v wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN 1\n\nBurn 1 tokens\n  Source: wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN\n\nSignature: 4hAbU8NcXNF9XGtfqkLKY2hqpuF2EDqWSNFrrydKeQNH74ufBcG8JLnNCuKZJ8w66wWRhxsRLKjCC6JrYkPQuqfP\n")),(0,r.kt)("p",null,"That's it. To confirm, rerun the ",(0,r.kt)("inlineCode",{parentName:"p"},"spl-token accounts")," command to show the Balance is now zero."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spl-token accounts -v\nToken                                         Account                                       Balance\n----------------------------------------------------------------------------------------------------------\n9w9Qe8GxkrFnSJYKfQMJug9k8ufpfzxW6o7kXTFKpXrK  wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN   0\n")))}p.isMDXComponent=!0}}]);