/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var p=function(e,t){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s])},p(e,t)};function b(e,t){p(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r())}function U(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),s,i=[],o;try{for(;(t===void 0||t-- >0)&&!(s=n.next()).done;)i.push(s.value)}catch(c){o={error:c}}finally{try{s&&!s.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return i}function E(e){return typeof e=="function"}var y=!1,a={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){var t=new Error();""+t.stack}y=e},get useDeprecatedSynchronousErrorHandling(){return y}};function h(e){setTimeout(function(){throw e},0)}var l={closed:!0,next:function(e){},error:function(e){if(a.useDeprecatedSynchronousErrorHandling)throw e;h(e)},complete:function(){}},v=function(){return Array.isArray||function(e){return e&&typeof e.length=="number"}}();function w(e){return e!==null&&typeof e=="object"}var A=function(){function e(t){return Error.call(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(r,n){return n+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t,this}return e.prototype=Object.create(Error.prototype),e}(),f=A,R=function(){function e(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return e.prototype.unsubscribe=function(){var t;if(this.closed)return;var r=this,n=r._parentOrParents,s=r._ctorUnsubscribe,i=r._unsubscribe,o=r._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(n!==null)for(var c=0;c<n.length;++c){var u=n[c];u.remove(this)}if(E(i)){s&&(this._unsubscribe=void 0);try{i.call(this)}catch(_){t=_ instanceof f?P(_.errors):[_]}}if(v(o))for(var c=-1,I=o.length;++c<I;){var S=o[c];if(w(S))try{S.unsubscribe()}catch(_){t=t||[],_ instanceof f?t=t.concat(P(_.errors)):t.push(_)}}if(t)throw new f(t)},e.prototype.add=function(t){var r=t;if(!t)return e.EMPTY;switch(typeof t){case"function":r=new e(t);case"object":if(r===this||r.closed||typeof r.unsubscribe!="function")return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof e)){var n=r;r=new e(),r._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var s=r._parentOrParents;if(s===null)r._parentOrParents=this;else if(s instanceof e){if(s===this)return r;r._parentOrParents=[s,this]}else if(s.indexOf(this)===-1)s.push(this);else return r;var i=this._subscriptions;return i===null?this._subscriptions=[r]:i.push(r),r},e.prototype.remove=function(t){var r=this._subscriptions;if(r){var n=r.indexOf(t);n!==-1&&r.splice(n,1)}},e.EMPTY=function(t){return t.closed=!0,t}(new e()),e}();function P(e){return e.reduce(function(t,r){return t.concat(r instanceof f?r.errors:r)},[])}var T=function(){return typeof Symbol=="function"?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),d=function(e){b(t,e);function t(r,n,s){var i=e.call(this)||this;i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1;switch(arguments.length){case 0:i.destination=l;break;case 1:if(!r){i.destination=l;break}if(typeof r=="object"){r instanceof t?(i.syncErrorThrowable=r.syncErrorThrowable,i.destination=r,r.add(i)):(i.syncErrorThrowable=!0,i.destination=new O(i,r));break}default:i.syncErrorThrowable=!0,i.destination=new O(i,r,n,s);break}return i}return t.prototype[T]=function(){return this},t.create=function(r,n,s){var i=new t(r,n,s);return i.syncErrorThrowable=!1,i},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){if(this.closed)return;this.isStopped=!0,e.prototype.unsubscribe.call(this)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var r=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this},t}(R),O=function(e){b(t,e);function t(r,n,s,i){var o=e.call(this)||this;o._parentSubscriber=r;var c,u=o;return E(n)?c=n:n&&(c=n.next,s=n.error,i=n.complete,n!==l&&(u=Object.create(n),E(u.unsubscribe)&&o.add(u.unsubscribe.bind(u)),u.unsubscribe=o.unsubscribe.bind(o))),o._context=u,o._next=c,o._error=s,o._complete=i,o}return t.prototype.next=function(r){if(!this.isStopped&&this._next){var n=this._parentSubscriber;!a.useDeprecatedSynchronousErrorHandling||!n.syncErrorThrowable?this.__tryOrUnsub(this._next,r):this.__tryOrSetError(n,this._next,r)&&this.unsubscribe()}},t.prototype.error=function(r){if(!this.isStopped){var n=this._parentSubscriber,s=a.useDeprecatedSynchronousErrorHandling;if(this._error)!s||!n.syncErrorThrowable?(this.__tryOrUnsub(this._error,r),this.unsubscribe()):(this.__tryOrSetError(n,this._error,r),this.unsubscribe());else if(n.syncErrorThrowable)s?(n.syncErrorValue=r,n.syncErrorThrown=!0):h(r),this.unsubscribe();else{if(this.unsubscribe(),s)throw r;h(r)}}},t.prototype.complete=function(){var r=this;if(!this.isStopped){var n=this._parentSubscriber;if(this._complete){var s=function(){return r._complete.call(r._context)};!a.useDeprecatedSynchronousErrorHandling||!n.syncErrorThrowable?(this.__tryOrUnsub(s),this.unsubscribe()):(this.__tryOrSetError(n,s),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(r,n){try{r.call(this._context,n)}catch(s){if(this.unsubscribe(),a.useDeprecatedSynchronousErrorHandling)throw s;h(s)}},t.prototype.__tryOrSetError=function(r,n,s){if(!a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{n.call(this._context,s)}catch(i){return a.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=i,r.syncErrorThrown=!0,!0):(h(i),!0)}return!1},t.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},t}(d);export{d as S,b as _,R as a,U as b,a as c,l as e,T as r};
