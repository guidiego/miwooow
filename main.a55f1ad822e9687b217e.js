(()=>{"use strict";var t,e={709:(t,e,r)=>{var n=r(260),o=r.n(n);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function l(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}const s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(s,t);var e,r,n,o,i=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=a(n);if(o){var r=a(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return l(this,t)});function s(){return c(this,s),i.apply(this,arguments)}return e=s,(r=[{key:"preload",value:function(){}},{key:"create",value:function(){this.add.text(innerWidth/2,innerHeight/2,"Hello World")}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),s}(o().Scene);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function d(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var w,m,_,P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(c,t);var e,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(n);if(o){var r=v(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return d(this,t)});function c(t,e){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:0,y:0,scale:1,autoInsert:!1};return y(this,c),(r=i.call(this,t,n.x,n.y,"cursors",e)).setScale(n.scale),r.scene.input.setDefaultCursor("none"),r.setDepth(2),n.autoInsert&&t.add.existing(O(r)),r}return e=c,(r=[{key:"update",value:function(){this.setX(this.scene.input.mousePointer.x),this.setY(this.scene.input.mousePointer.y)}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),c}(o().GameObjects.Sprite);_={DEFAULT:0,DIALOG:1,LOOT:2,ENTRY:3,POTION:4,PLACE:5,POINT:6,HOLD:7,PLACE2:8,COLLECT:9,GEAR:10},(m="KEYS")in(w=P)?Object.defineProperty(w,m,{value:_,enumerable:!0,configurable:!0,writable:!0}):w.KEYS=_;const j=P;function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){return g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},g(t,e)}function R(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return k(t)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(i,t);var e,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(n){var o=T(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return R(this,t)});function i(t,e){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:0,y:0,scale:1,autoInsert:!1,cursorType:0,kind:"loot"};return E(this,i),x(k(r=o.call(this,t,n.x,n.y,"itens",e)),"waitingForCollect",!1),r.key=e,r.setInteractive(),r.setScale(n.scale),n.autoInsert&&t.add.existing(k(r)),r.on("pointerover",(function(){"loot"===n.kind&&r.scene.cursor.setFrame(j.KEYS.LOOT)})),r.on("pointerout",(function(){"loot"===n.kind&&r.scene.cursor.setFrame(j.KEYS.DEFAULT)})),r.on("pointerdown",(function(){"loot"===n.kind&&(r.waitingForCollect=!0)})),r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(o().GameObjects.Sprite);x(C,"KEYS",{BAG:0,COLLAR:1,POTION_BLUE:2,BOOK_1:3,BOOK_2:4,BOOK_3:5,WOOD_PLANK:6,CHEESE:7,COIN_COPPER:8,CRYSTAL:9,EMERALD:10,EMPTY_BOTTLE:11,FABRIC:12,WOOL:13,FISH:14,GEAR:15,COIN_GOLD:16,KEY_GOLD:17,POTION_GREEN:18,HAMMER:19,HEART:21,KEY_OLD:22,MAP:23,EYE:24,PICKAXE:25,POTION_RED:26,ROPE:28,RUBY:29,RUNE:30,SAPPHIRE:31,SCROLL:32,COIN_SILVER:33,KEY_SILVER:35,STRING:36,TOPAZ:37,TORCH:38,BOTTLE_EMPTY:39,WOOD:40});const L=C;function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function I(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function A(t,e){return A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},A(t,e)}function D(t,e){if(e&&("object"===M(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return B(t)}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Y(t){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Y(t)}function F(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,r,n,i,c=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Y(n);if(i){var r=Y(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return D(this,t)});function u(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),F(B(e=c.call(this,t,window.innerWidth/2,window.innerHeight-100)),"_items",Array(6).fill(-1)),F(B(e),"_slotSize",64),t.add.existing(B(e));for(var r=0;r<6;r++)e.add(e._createSlot(r));return e}return e=u,(r=[{key:"_createSlot",value:function(t){var e=new(o().GameObjects.Rectangle)(this.scene,t*this._slotSize,0,this._slotSize,this._slotSize);return e.setStrokeStyle(2,10053375),e}},{key:"addItem",value:function(t){var e=this._items.indexOf(-1);this._items[e]=t,this.add(new L(this.scene,t,{x:e*this._slotSize,y:0,autoInsert:!0,kind:"inv"}))}}])&&I(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(o().GameObjects.Container);function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function G(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function N(t,e){return N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},N(t,e)}function W(t,e){if(e&&("object"===H(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return U(t)}function U(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}function X(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(u,t);var e,r,n,i,c=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(n);if(i){var r=z(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return W(this,t)});function u(t,e,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),X(U(n=c.call(this,t,e,r,"player",0)),"_followMarkCooldown",100),X(U(n),"_nextFollowMarkTime",0),X(U(n),"_speed",5),n.setOrigin(.5,.5),n.setScale(2),n.scene.add.existing(U(n)),n}return e=u,(r=[{key:"pointer",get:function(){return this.scene.input.activePointer}},{key:"time",get:function(){return new(o().Time.Clock)(this.scene).scene.time.now}},{key:"captureFollowMark",value:function(){this.pointer.isDown&&(!this._followMark||this.time>=this._nextFollowMarkTime)&&(this._followMark&&this._followMark.destroy(),this._nextFollowMarkTime=this.time+this._followMarkCooldown,this._followMark=this.scene.add.circle(this.pointer.x,this.pointer.y,5,16738047))}},{key:"prepareArrive",value:function(t,e){var r=this[e]+this._speed*t;return(1===t?r>this._followMark[e]:this[e]<this._followMark[e])?this._followMark[e]:r}},{key:"handleMovement",value:function(){if(this._followMark){if(this.x!==this._followMark.x){var t=this.x-this._followMark.x>0?-1:1;this.setX(this.prepareArrive(t,"x")),this.setFrame(2),this.flipX=1===t}if(this.y!==this._followMark.y){var e=this.y-this._followMark.y>0?-1:1;this.setY(this.prepareArrive(e,"y")),this.setFrame(-1===e?1:0)}this.x===this._followMark.x&&this.y===this._followMark.y&&(this._followMark.destroy(),this._followMark=void 0,this.setFrame(0))}}},{key:"update",value:function(){this.captureFollowMark(),this.handleMovement()}}])&&G(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(o().GameObjects.Sprite);function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function J(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Q(t,e){return Q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},Q(t,e)}function $(t,e){if(e&&("object"===Z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return tt(t)}function tt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function et(t){return et=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},et(t)}function rt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function nt(t){return nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(t)}function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function it(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ct(){return ct="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=ut(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},ct.apply(this,arguments)}function ut(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=at(t)););return t}function ft(t,e){return ft=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ft(t,e)}function lt(t,e){if(e&&("object"===nt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function at(t){return at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},at(t)}const st=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ft(t,e)}(c,t);var e,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=at(n);if(o){var r=at(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return lt(this,t)});function c(){return ot(this,c),i.apply(this,arguments)}return e=c,(r=[{key:"create",value:function(){ct(at(c.prototype),"create",this).call(this),this.addLoot(L.KEYS.WOOD,300,300),this.addLoot(L.KEYS.STRING,600,300),this.addLoot(L.KEYS.TOPAZ,200,200),this.addLoot(L.KEYS.FISH,700,700),this.addLoot(L.KEYS.RUNE,800,800)}}])&&it(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),c}(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Q(t,e)}(c,t);var e,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=et(n);if(o){var r=et(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return $(this,t)});function c(){var t;q(this,c);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return rt(tt(t=i.call.apply(i,[this].concat(r))),"loot",[]),t}return e=c,(r=[{key:"preload",value:function(){this.load.spritesheet("player","sprites/player.png",{frameWidth:32,frameHeight:64}),this.load.spritesheet("itens","sprites/itens.png",{frameWidth:32,frameHeight:32}),this.load.spritesheet("cursors","sprites/cursors.png",{frameWidth:64,frameHeight:64})}},{key:"create",value:function(){this.input.setDefaultCursor("none"),this.player=new V(this,innerWidth/2,innerHeight/2),this.cursor=new j(this,j.KEYS.DEFAULT,{x:this.input.mousePointer.x,y:this.input.mousePointer.y,autoInsert:!0}),this.inventory=new K(this)}},{key:"update",value:function(){var t=this;this.player.update(),this.cursor.update(),this.loot.forEach((function(e){e.waitingForCollect&&t.player.x-50<=e.x&&e.x<=t.player.x+50&&t.player.y-50<=e.y&&e.y<=t.player.y+50&&(t.inventory.addItem(e.key),t.cursor.setFrame(j.KEYS.DEFAULT),e.waitingForCollect=!1,e.destroy())}))}},{key:"addLoot",value:function(t,e,r){this.loot.push(new L(this,t,{x:e,y:r,autoInsert:!0,kind:"loot"}))}}])&&J(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),c}(o().Scene));var pt=new(o().Game)({width:innerWidth,height:innerHeight,fps:{min:30}});pt.scene.add("entry-scene",s),pt.scene.add("level-01",st),pt.scene.start("level-01")}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var c=1/0;for(a=0;a<t.length;a++){for(var[r,o,i]=t[a],u=!0,f=0;f<r.length;f++)(!1&i||c>=i)&&Object.keys(n.O).every((t=>n.O[t](r[f])))?r.splice(f--,1):(u=!1,i<c&&(c=i));if(u){t.splice(a--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var a=t.length;a>0&&t[a-1][2]>i;a--)t[a]=t[a-1];t[a]=[r,o,i]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[c,u,f]=r,l=0;if(c.some((e=>0!==t[e]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(f)var a=f(n)}for(e&&e(r);l<c.length;l++)i=c[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(a)},r=self.webpackChunkphaser_test=self.webpackChunkphaser_test||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[426],(()=>n(709)));o=n.O(o)})();