"use strict";(self.webpackChunkarcomage_hd=self.webpackChunkarcomage_hd||[]).push([[7038],{20908:function(e,n,t){t(18374);var a=t(67294),s=t(73935),o=t(9835),r=t(76398),i=t(14890),c=t(29804),l=t(18172),u=t(63211),p=t(48093),d=(0,l.ZP)(((e,n)=>{switch(n.type){case u.F5:return{player:Object.assign({},n.payload),opponent:Object.assign({},n.payload)};case u.l7:for(const t of n.payload){const{isPlayer:n,statusProp:a}=t;"to"in t?e[n?"player":"opponent"][a]=t.to:e[n?"player":"opponent"][a]+=t.diff}}}),p.U8);const b={code:t(68199).Fp,erathian:p.QZ};var w=(0,l.ZP)(((e,n)=>{switch(n.type){case u.bd:e.code=n.lang;break;case u._G:e.erathian=n.erathian}}),b),h=(0,l.ZP)(((e,n)=>{switch(n.type){case u.zn:return n.payload;case u.$Z:e.list.push({n:n.n,position:-1,owner:"common",unusable:!1,discarded:!1,isFlipped:!0,zeroOpacity:!1});break;case u.B4:{const{owner:t}=n,a=e.nextPos[t];e.total[t]+=1;const s=e.list;s.forEach((e=>{(null==e?void 0:e.owner)===t&&e.position>=a&&(e.position+=1)}));const o=s[s.length-1];null!==o&&(o.position=a,o.owner=t,o.isFlipped=!1);break}case u.PX:{const t=e.list[n.index];null!==t&&(t.position=-5,t.unusable=!0,t.owner="common");break}case u._d:{const t=e.list[n.index];null!==t&&(t.position=n.toPosition,t.unusable=!0,t.owner="common");break}case u.EK:{const t=e.list[n.index];null!==t&&(t.position=-1,t.unusable=!0,t.isFlipped=!0,t.owner="common");break}case u.OK:{const t=e.list[n.index];null!==t&&(t.zeroOpacity=!0);break}case u.fj:if(null!==e.list[n.index]){const t=n.owner;e.total[t]-=1,e.list.forEach((e=>{(null==e?void 0:e.owner)===t&&e.position>n.position&&(e.position-=1)})),e.nextPos[t]=n.position}break;case u.iE:{const t=e.list[n.index];null!==t&&(t.discarded=!0);break}case u.M2:null!==e.list[n.index]&&(e.list[n.index]=null);break;case u.R9:n.unusables.forEach((n=>{const t=e.list[n];null!==t&&(t.unusable=!0)})),n.usables.forEach((n=>{const t=e.list[n];null!==t&&(t.unusable=!1)}))}}),{total:{player:0,opponent:0},list:[],nextPos:{player:0,opponent:0}});const m={playersTurn:!0,locked:[!1,!1],discardMode:!1,isNewTurn:!0};var y=(0,l.ZP)(((e,n)=>{var t;switch(n.type){case u.s3:return Object.assign(Object.assign({},m),{playersTurn:n.playersTurn});case u.vd:e.discardMode=n.on;break;case u.K5:e.playersTurn=!e.playersTurn;break;case u.Ut:{const a=null!==(t=n.locknumber)&&void 0!==t?t:0;e.locked[a]=n.on;break}case u.Z$:e.isNewTurn=n.on}}),m),v=(0,l.ZP)(((e,n)=>{if(n.type===u.Nc)return Object.assign(Object.assign({},e),n.payload)}),p.pt),f=(0,l.ZP)(((e,n)=>{switch(n.type){case u.fy:e.pref=n.show;break;case u.e8:e.langPref=n.show;break;case u.je:e.sgPref=n.show;break;case u.Xc:e.help=n.show;break;case u.Ij:e.landscape=n.show;break;case u.MZ:e.disconnectNotice=n.show;break;case u.SO:e.end.type=n.payload.type,e.end.surrender=n.payload.surrender}}),{pref:!1,langPref:!1,sgPref:!1,help:!1,landscape:!1,disconnectNotice:!1,end:{type:null}});const k={volume:p.Yz,stereo:p.j0};var g=(0,l.ZP)(((e,n)=>{switch(n.type){case u.cJ:e.volume=n.volume;break;case u.N8:e.stereo=n.stereo}}),k);const P={pixelation:p.p8,visualvalues:p.yf};var E=(0,l.ZP)(((e,n)=>{switch(n.type){case u.rW:e.pixelation=n.pixelation;break;case u.ir:e.visualvalues=Object.assign(Object.assign({},e.visualvalues),n.payload)}}),P);const x={aiLevel:p.mM};var Z=(0,l.ZP)(((e,n)=>{n.type===u.pv&&(e.aiLevel=n.aiLevel)}),x);const M={on:!1,yourId:"",opponentId:"",status:"disconnected",tempSettings:Object.assign({},p.he),tempPlayerName:"",tempOpponentName:"",gameNumber:-1};var O=(0,l.ZP)(((e,n)=>{switch(n.type){case u.Ig:e.on=n.on;break;case u.QU:e.yourId=n.id;break;case u.Mv:e.opponentId=n.id;break;case u.ns:e.status=n.status;break;case u.xD:e.gameNumber=n.n;break;case u.oG:null!==n.payload&&(e.tempSettings=n.payload);break;case u.vm:e.tempPlayerName=n.name;break;case u.w4:e.tempOpponentName=n.name}}),M),j=(0,i.UY)({status:d,lang:w,cards:h,game:y,settings:v,screen:f,sound:g,visual:E,ai:Z,multiplayer:O});const N=(0,t(78507).k)(),S=(0,i.MT)(j,(0,c.Uo)((0,i.md)(N)));var I=t(17474),T=t(74983),z=t(18255),L=t(70405);t(67728),N.run(I.Z),s.render(a.createElement(a.StrictMode,null,a.createElement(r.zt,{store:S},a.createElement(T.b,null,a.createElement(z.S,null,a.createElement(L.B6,null,a.createElement(o.Z,null)))))),document.getElementById("root"))},70377:function(e,n,t){t.d(n,{GY:function(){return i},sh:function(){return o}});var a=t(63211),s=t(96559);const o=[a.oG,a.w4,a.I4,a.M0,a.u3,a.S9,a.pS],r=[a.M0,a.u3,a.S9],i=e=>(0,s.dB)(e.type,r)},56187:function(e,n,t){t.d(n,{U:function(){return a}});const a=e=>null!==e.type},43543:function(e,n,t){t.d(n,{_:function(){return d},f:function(){return b}});var a=t(67294),s=t(18255);const o=188/252,r=(e,n,t)=>.8*e*o*t+(5*(t-1)+15)<=n,i=(e,n,t)=>r(e,n,t)?.8*e:c(e,n,t)/o,c=(e,n,t)=>r(e,n,t)?i(e,n,t)*o:(n-(5*(t-1)+15))/t,l=(e,n,t)=>r(t,e,n)?(e-c(t,e,n)*n)/(n-1+3):5,u=(e,n,t,a)=>s=>{const o=s-5;return o>=0?n*(a?.5:2/3)+(n*(a?.5:1/3)-i(n*(a?.5:1/3),t,e))/2:-5===o?n*(a?.5:2/3)-i(n*(a?.5:1/3),t,e)+16*(a?1:-1):16},p=(e,n,t,a)=>s=>{const o=s-5;return o>=0?((e,n,t)=>1.5*l(e,n,t))(t,e,n*(a?.5:1/3))+(c(n*(a?.5:1/3),t,e)+l(t,e,n*(a?.5:1/3)))*o:-5===o?t/2-c(n*(a?.5:1/3),t,e)/2:t/2-(c(n*(a?.5:1/3),t,e)*(o+3)-10*(-2.5-o))},d=(0,a.createContext)(null),b=({cardsInHand:e,winHeight:n,winWidth:t,children:o})=>{const[r,l]=(0,a.useState)(null),b=(0,a.useContext)(s.$),{narrowMobile:w}=b;return(0,a.useEffect)((()=>{const a=e+1,s=[...Array(a+5).keys()],o=n*(w?.5:1/3),r=c(o,t,a),d=i(o,t,a),b=s.map(u(a,n,t,w)),h=s.map(u(a-1,n,t,w)),m=s.map(p(a,n,t,w)),y=s.map(p(a-1,n,t,w));l({width:r,height:d,total:a,top:b,left:m,topM1:h,leftM1:y})}),[e,n,t,w]),a.createElement(d.Provider,{value:r},o)}},18255:function(e,n,t){t.d(n,{$:function(){return r},S:function(){return i}});var a=t(67294),s=t(81317);const o={width:window.innerWidth,height:window.innerHeight,narrowMobile:!1},r=(0,a.createContext)(o),i=({children:e})=>{const[n,t]=(0,a.useState)(o);return(0,a.useEffect)((()=>{const e=()=>{t({width:window.innerWidth,height:window.innerHeight,narrowMobile:window.innerHeight<=s.GS})};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),e(),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[]),a.createElement(r.Provider,{value:n},e)}}}]);