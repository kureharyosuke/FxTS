"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2834],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(b,l(l({ref:n},s),{},{components:t})):r.createElement(b,l({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7979:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),l=["components"],c={id:"slice"},o=void 0,u={unversionedId:"slice",id:"slice",isDocsHomePage:!1,title:"slice",description:"slice() function",source:"@site/docs/slice.md",sourceDirName:".",slug:"/slice",permalink:"/docs/slice",tags:[],version:"current",frontMatter:{id:"slice"},sidebar:"api",previous:{title:"scan",permalink:"/docs/scan"},next:{title:"split",permalink:"/docs/split"}},s=[{value:"slice() function",id:"slice-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"slice-function"},"slice() function"),(0,a.kt)("p",null,"Returns Iterable/AsyncIterable of the given elements from startIndex(inclusive) to endIndex(exclusive)."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function slice<T>(start: number, iterable: Iterable<T>): IterableIterator<T>;\n\ndeclare function slice<T>(start: number, iterable: AsyncIterable<T>): AsyncIterableIterator<T>;\n\ndeclare function slice<T>(start: number, end: number, iterable: Iterable<T>): IterableIterator<T>;\n\ndeclare function slice<T>(start: number, end: number, iterable: AsyncIterable<T>): AsyncIterableIterator<T>;\n\ndeclare function slice<A extends Iterable<unknown> | AsyncIterable<unknown>>(start: number): (iterable: A) => ReturnIterableIteratorType<A>;\n\ndeclare function slice<A extends Iterable<unknown> | AsyncIterable<unknown>>(start: number, end: number): (iterable: A) => ReturnIterableIteratorType<A>;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const iter1 = slice(1, 3, ['a', 'b', 'c', 'd', 'e']);\niter1.next(); // {value: 'b', done: false};\niter1.next(); // {value: 'c', done: false};\niter1.next(); // {value: undefined, done: true};\n\nconst iter2 = slice(3, ['a', 'b', 'c', 'd', 'e']);\niter2.next(); // {value: 'd', done: false};\niter2.next(); // {value: 'e', done: false};\niter2.next(); // {value: undefined, done: true};\n\nconst iter3 = slice(3, \"abcde\");\niter3.next(); // {value: 'd', done: false};\niter3.next(); // {value: 'e', done: false};\niter3.next(); // {value: undefined, done: true};\n\n// with pipe\npipe(\n [1, 2, 3, 4, 5],\n slice(3),\n toArray,\n); // [4, 5]\n\npipe(\n [1, 2, 3, 4, 5],\n slice(1, 3),\n toArray,\n); // [2, 3]\n\nsee {@link https://fxts.dev/docs/pipe | pipe}, {@link https://fxts.dev/docs/toArray | toArray}\n")))}d.isMDXComponent=!0}}]);