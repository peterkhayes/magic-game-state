(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,r){e.exports={touchDisplay:"touchDisplay___1kIlj",touchTargets:"touchTargets___2vCum",vertical:"vertical___3oVLw",touchTarget:"touchTarget___NqDX_",pressed:"pressed___2JohK"}},105:function(e,n,r){},106:function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.n(t),a=r(1),s=r.n(a),i=r(47),c=r.n(i),l=(r(3),r(6),r(7)),u=r.n(l),p=r(17),m=r.n(p),d=r(8),v=r.n(d),f=r(48),_=r.n(f),b=600;var g=r(10),h=r.n(g);function y(e){var{children:n,orientation:r,targets:t}=e;return o()("div",{className:h.a.touchDisplay},void 0,o()("div",{className:m()({[h.a.touchTargets]:!0,[h.a[r]]:!0})},void 0,t.map((e,n)=>{var{onTap:r,onLongPress:t}=e;return o()(P,{onTap:r,onLongPress:t},n)})),n)}function P(e){var{onTap:n,onLongPress:r}=e,[t,o]=function(e){var{onTap:n,onLongPress:r}=e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b,o=Object(a.useRef)(null);Object(a.useEffect)(()=>()=>{null!=o.current&&clearTimeout(o.current)},[]);var s=Object(a.useRef)(!1),[i,c]=Object(a.useState)(!1),l=Object(a.useCallback)(e=>{null!=o.current&&clearTimeout(o.current),c(e),s.current=e},[]),u=Object(a.useCallback)(e=>{s.current&&e()},[]);return[i,{onPointerDown:Object(a.useCallback)(e=>{e.stopPropagation(),l(!0),o.current=setTimeout(()=>{u(r),l(!1)},t)},[t,r,u,l]),onPointerUp:Object(a.useCallback)(e=>{e.stopPropagation(),u(n),l(!1)},[n,u,l]),onPointerLeave:Object(a.useCallback)(()=>l(!1),[l])}]}({onTap:n,onLongPress:r||n});return s.a.createElement("div",u()({className:m()({[h.a.touchTarget]:!0,[h.a.pressed]:t})},o))}function O(e){var{increment:n,decrement:r,reset:t}=e,o=_()(e,["increment","decrement","reset"]),a=[{onTap:r,onLongPress:t},{onTap:n,onLongPress:t}];return s.a.createElement(y,u()({},o,{targets:a}))}y.defaultProps={orientation:"horizontal"};var C=r(11),w=r.n(C),j=r(49),N=r.n(j);function T(e){return e+1}function k(e){return Math.max(e-1,0)}function x(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[r,t]=Object(a.useReducer)((r,t)=>{switch(t){case"increment":return r+1;case"decrement":return Math.max(r-1,n);case"reset":return e;default:return r}},e);return[r,{increment:()=>t("increment"),decrement:()=>t("decrement"),reset:()=>t("reset")}]}function D(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function E(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?D(r,!0).forEach((function(n){N()(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var L={colorless:0,white:0,blue:0,black:0,red:0,green:0};var R=r(50),F=r.n(R),S=r(51),M=r.n(S),z=r(52),H=r.n(z),q=r(53),I=r.n(q),J=r(54),Q=r.n(J),U=r(55),V=r.n(U),X=r(56),Y=r.n(X),B={colorless:"rgb(155,122,103)",white:"rgb(248,231,185)",blue:"rgb(179,206,234)",black:"rgb(166,159,157)",red:"rgb(235,159,130)",green:"rgb(166,211,182)"},K={colorless:M.a,white:H.a,blue:I.a,black:Q.a,red:V.a,green:Y.a};function A(){var[e,{increment:n,decrement:r,reset:t}]=function(){var[e,n]=Object(a.useReducer)((e,n)=>{switch(n.type){case"increment":return E({},e,{[n.color]:T(e[n.color])});case"decrement":return E({},e,{[n.color]:k(e[n.color])});case"reset":return L;default:return e}},L);return[e,{increment:e=>n({type:"increment",color:e}),decrement:e=>n({type:"decrement",color:e}),reset:()=>n({type:"reset"})}]}();return o()("div",{className:w.a.manaControls},void 0,["colorless","white","blue","black","red","green"].map(a=>o()("div",{className:w.a.manaControl,style:{backgroundColor:B[a]}},a,o()(O,{orientation:"vertical",increment:()=>n(a),decrement:()=>r(a),reset:t},void 0,o()("div",{className:w.a.manaSymbols},void 0,0===e[a]?o()("img",{src:K[a],className:w.a.manaPlaceholder}):F()(e[a],e=>o()("img",{src:K[a],className:w.a.manaSymbol},e)))))))}var G=20,W=0,Z=o()(A,{});function $(e){var{flip:n}=e,[r,t]=x(G,-1/0),[a,i]=x(W);return o()("div",{className:m()(v.a.playerControls,n&&v.a.flip)},void 0,o()("div",{className:v.a.lifeContainer},void 0,s.a.createElement(O,u()({orientation:"horizontal"},t,{increment:t.increment}),o()("div",{className:v.a.life},void 0,r))),o()("div",{className:v.a.poisonContainer},void 0,s.a.createElement(O,u()({orientation:"horizontal"},i),o()("div",{className:v.a.poison},void 0,a," Poison"))),Z)}var ee=r(12),ne=r.n(ee);function re(){var[e,n]=x(0),[r,t]=function(){var[e,n]=Object(a.useReducer)((e,n)=>{switch(n){case"flip":return Math.random()>.5;case"reset":return null;default:return e}},null);return[e,{flip:()=>n("flip"),reset:()=>n("reset")}]}();return o()("div",{className:ne.a.gameControls},void 0,o()("div",{className:ne.a.coinFlip},void 0,o()(y,{targets:[{onTap:t.flip}]},void 0,"Flip Coin")),o()("div",{className:ne.a.stormCounter},void 0,o()(y,{targets:[{onTap:n.increment,onLongPress:n.reset}]},void 0,"Storm: ",e)),null!=r&&o()("div",{className:ne.a.coinFlipResultOverlay,onPointerDown:e=>e.stopPropagation(),onPointerUp:e=>{e.stopPropagation(),t.reset()}},void 0,o()("div",{className:ne.a.coinFlipResultModal},void 0,o()("div",{},void 0,r?"⇧":"⇩"))))}var te=r(57),oe=r.n(te),ae=o()($,{flip:!0}),se=o()(re,{}),ie=o()($,{});var ce=function(){return o()("div",{className:oe.a.root},void 0,ae,se,ie)},le=r(58),ue=r.n(le);r(105);window.oncontextmenu=function(e){return e.preventDefault(),e.stopPropagation(),!1},document.addEventListener("touchmove",e=>{e.preventDefault()},{passive:!1}),ue()(),c.a.render(o()(ce,{}),document.getElementById("app"))},11:function(e,n,r){e.exports={manaControls:"manaControls___UHiRg",manaControl:"manaControl___16pq5",manaSymbols:"manaSymbols___2iLDE",manaSymbol:"manaSymbol___3XQen",manaPlaceholder:"manaPlaceholder___f5Q9s"}},12:function(e,n,r){e.exports={gameControls:"gameControls___Htvk8",stormCounter:"stormCounter___9YEVz",coinFlip:"coinFlip___3Q1gg",coinFlipResultOverlay:"coinFlipResultOverlay___Sabua",coinFlipResultModal:"coinFlipResultModal___3dD2s"}},51:function(e,n,r){e.exports=r.p+"images/25425f71d40e750066144d24bcce49b4.svg"},52:function(e,n,r){e.exports=r.p+"images/e09c9b001fae5a882a6ea4c854922539.svg"},53:function(e,n,r){e.exports=r.p+"images/6249a48f3283f4053709fe5276a3c99a.svg"},54:function(e,n,r){e.exports=r.p+"images/f68809d4f072d976ad534a80c40ab3cd.svg"},55:function(e,n,r){e.exports=r.p+"images/fad05c8232b36c0ef327b9701b9afb16.svg"},56:function(e,n,r){e.exports=r.p+"images/93f0ffd310b8a2f904f563a52bf33598.svg"},57:function(e,n,r){e.exports={root:"root___1cMNh"}},8:function(e,n,r){e.exports={playerControls:"playerControls___3PvVH",flip:"flip___2H7eo",lifeContainer:"lifeContainer___1Yy74",life:"life___2cbFj",poisonContainer:"poisonContainer___3qTkM",poison:"poison___3eIE-"}}},[[106,1,2]]]);
//# sourceMappingURL=main.436f3ebfedb4cc10b31a.js.map