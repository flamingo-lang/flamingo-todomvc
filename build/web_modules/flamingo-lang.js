import{c as xn,a as k,g as Kn}from"./common/_commonjsHelpers-2c0027bd.js";var g=xn(function(Nn,p){!function(P,L){Nn.exports=L()}(typeof self!="undefined"?self:k,function(){return function(P){var L={};function j(u){if(L[u])return L[u].exports;var w=L[u]={i:u,l:!1,exports:{}};return P[u].call(w.exports,w,w.exports,j),w.l=!0,w.exports}return j.m=P,j.c=L,j.d=function(u,w,x){j.o(u,w)||Object.defineProperty(u,w,{configurable:!1,enumerable:!0,get:x})},j.r=function(u){Object.defineProperty(u,"__esModule",{value:!0})},j.n=function(u){var w=u&&u.__esModule?function(){return u.default}:function(){return u};return j.d(w,"a",w),w},j.o=function(u,w){return Object.prototype.hasOwnProperty.call(u,w)},j.p="",j(j.s=0)}([function(P,L,j){function u(n){if(!(this instanceof u))return new u(n);this._=n}var w=u.prototype;function x(n,t){for(var o=0;o<n;o++)t(o)}function E(n,t,o){return function(a,s){x(s.length,function(h){a(s[h],h,s)})}(function(a,s,h){t=n(t,a,s,h)},o),t}function b(n,t){return E(function(o,a,s,h){return o.concat([n(a,s,h)])},[],t)}function v(n,t){var o={v:0,buf:t};return x(n,function(){var a;o={v:o.v<<1|(a=o.buf,a[0]>>7),buf:function(s){var h=E(function(F,N,X,en){return F.concat(X===en.length-1?Buffer.from([N,0]).readUInt16BE(0):en.readUInt16BE(X))},[],s);return Buffer.from(b(function(F){return(F<<1&65535)>>8},h))}(o.buf)}}),o}function e(){return typeof Buffer!="undefined"}function i(){if(!e())throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.")}function r(n){i();var t=E(function(h,F){return h+F},0,n);if(t%8!=0)throw new Error("The bits ["+n.join(", ")+"] add up to "+t+" which is not an even number of bytes; the total should be divisible by 8");var o,a=t/8,s=(o=function(h){return h>48},E(function(h,F){return h||(o(F)?F:h)},null,n));if(s)throw new Error(s+" bit range requested exceeds 48 bit (6 byte) Number max.");return new u(function(h,F){var N=a+F;return N>h.length?Z(F,a.toString()+" bytes"):W(N,E(function(X,en){var un=v(en,X.buf);return{coll:X.coll.concat(un.v),buf:un.buf}},{coll:[],buf:h.slice(F,N)},n).coll)})}function c(n,t){return new u(function(o,a){return i(),a+t>o.length?Z(a,t+" bytes for "+n):W(a+t,o.slice(a,a+t))})}function m(n,t){if(typeof(o=t)!="number"||Math.floor(o)!==o||t<0||t>6)throw new Error(n+" requires integer length in range [0, 6].");var o}function d(n){return m("uintBE",n),c("uintBE("+n+")",n).map(function(t){return t.readUIntBE(0,n)})}function f(n){return m("uintLE",n),c("uintLE("+n+")",n).map(function(t){return t.readUIntLE(0,n)})}function S(n){return m("intBE",n),c("intBE("+n+")",n).map(function(t){return t.readIntBE(0,n)})}function O(n){return m("intLE",n),c("intLE("+n+")",n).map(function(t){return t.readIntLE(0,n)})}function C(n){return n instanceof u}function q(n){return{}.toString.call(n)==="[object Array]"}function tn(n){return e()&&Buffer.isBuffer(n)}function W(n,t){return{status:!0,index:n,value:t,furthest:-1,expected:[]}}function Z(n,t){return q(t)||(t=[t]),{status:!1,index:-1,value:null,furthest:n,expected:t}}function K(n,t){if(!t)return n;if(n.furthest>t.furthest)return n;var o=n.furthest===t.furthest?function(a,s){if(function(){if(u._supportsSet!==void 0)return u._supportsSet;var On=typeof Set!="undefined";return u._supportsSet=On,On}()&&Array.from){for(var h=new Set(a),F=0;F<s.length;F++)h.add(s[F]);var N=Array.from(h);return N.sort(),N}for(var X={},en=0;en<a.length;en++)X[a[en]]=!0;for(var un=0;un<s.length;un++)X[s[un]]=!0;var pn=[];for(var dn in X)({}).hasOwnProperty.call(X,dn)&&pn.push(dn);return pn.sort(),pn}(n.expected,t.expected):t.expected;return{status:n.status,index:n.index,value:n.value,furthest:t.furthest,expected:o}}var U={};function l(n,t){if(tn(n))return{offset:t,line:-1,column:-1};if(U.input===n&&U.i===t)return U.value;var o=n.slice(0,t).split(`
`),a={offset:t,line:o.length,column:o[o.length-1].length+1};return U.input=n,U.i=t,U.value=a,a}function y(n){if(!C(n))throw new Error("not a parser: "+n)}function A(n,t){return typeof n=="string"?n.charAt(t):n[t]}function R(n){if(typeof n!="number")throw new Error("not a number: "+n)}function I(n){if(typeof n!="function")throw new Error("not a function: "+n)}function B(n){if(typeof n!="string")throw new Error("not a string: "+n)}var T=2,V=3,M=8,Y=5*M,H=4*M,Q="  ";function rn(n,t){return new Array(t+1).join(n)}function J(n,t,o){var a=t-n.length;return a<=0?n:rn(o,a)+n}function bn(n,t,o,a){return{from:n-t>0?n-t:0,to:n+o>a?a:n+o}}function on(n,t){var o,a,s,h,F,N=t.index,X=N.offset,en=1;if(X===n.length)return"Got the end of the input";if(tn(n)){var un=X-X%M,pn=X-un,dn=bn(un,Y,H+M,n.length),On=b(function(vn){return b(function(Hn){return J(Hn.toString(16),2,"0")},vn)},function(vn,Hn){var Gn=vn.length,qn=[],Un=0;if(Gn<=Hn)return[vn.slice()];for(var Qn=0;Qn<Gn;Qn++)qn[Un]||qn.push([]),qn[Un].push(vn[Qn]),(Qn+1)%Hn==0&&Un++;return qn}(n.slice(dn.from,dn.to).toJSON().data,M));h=function(vn){return vn.from===0&&vn.to===1?{from:vn.from,to:vn.to}:{from:vn.from/M,to:Math.floor(vn.to/M)}}(dn),a=un/M,o=3*pn,pn>=4&&(o+=1),en=2,s=b(function(vn){return vn.length<=4?vn.join(" "):vn.slice(0,4).join(" ")+"  "+vn.slice(4).join(" ")},On),(F=(8*(h.to>0?h.to-1:h.to)).toString(16).length)<2&&(F=2)}else{var Dn=n.split(/\r\n|[\n\r\u2028\u2029]/);o=N.column-1,a=N.line-1,h=bn(a,T,V,Dn.length),s=Dn.slice(h.from,h.to),F=h.to.toString().length}var Zn=a-h.from;return tn(n)&&(F=(8*(h.to>0?h.to-1:h.to)).toString(16).length)<2&&(F=2),E(function(vn,Hn,Gn){var qn,Un=Gn===Zn,Qn=Un?"> ":Q;return qn=tn(n)?J((8*(h.from+Gn)).toString(16),F,"0"):J((h.from+Gn+1).toString(),F," "),[].concat(vn,[Qn+qn+" | "+Hn],Un?[Q+rn(" ",F)+" | "+J("",o," ")+rn("^",en)]:[])},[],s).join(`
`)}function D(n,t){return[`
`,"-- PARSING FAILED "+rn("-",50),`

`,on(n,t),`

`,(o=t.expected,o.length===1?`Expected:

`+o[0]:`Expected one of the following: 

`+o.join(", ")),`
`].join("");var o}function G(n){var t=""+n;return t.slice(t.lastIndexOf("/")+1)}function $(){for(var n=[].slice.call(arguments),t=n.length,o=0;o<t;o+=1)y(n[o]);return u(function(a,s){for(var h,F=new Array(t),N=0;N<t;N+=1){if(!(h=K(n[N]._(a,s),h)).status)return h;F[N]=h.value,s=h.index}return K(W(s,F),h)})}function ln(){var n=[].slice.call(arguments);if(n.length===0)throw new Error("seqMap needs at least one argument");var t=n.pop();return I(t),$.apply(null,n).map(function(o){return t.apply(null,o)})}function Vn(){var n=[].slice.call(arguments),t=n.length;if(t===0)return Fn("zero alternates");for(var o=0;o<t;o+=1)y(n[o]);return u(function(a,s){for(var h,F=0;F<n.length;F+=1)if((h=K(n[F]._(a,s),h)).status)return h;return h})}function Ln(n,t){return Rn(n,t).or(In([]))}function Rn(n,t){return y(n),y(t),ln(n,t.then(n).many(),function(o,a){return[o].concat(a)})}function mn(n){B(n);var t="'"+n+"'";return u(function(o,a){var s=a+n.length,h=o.slice(a,s);return h===n?W(s,h):Z(a,t)})}function cn(n,t){!function(s){if(!(s instanceof RegExp))throw new Error("not a regexp: "+s);for(var h=G(s),F=0;F<h.length;F++){var N=h.charAt(F);if(N!=="i"&&N!=="m"&&N!=="u"&&N!=="s")throw new Error('unsupported regexp flag "'+N+'": '+s)}}(n),arguments.length>=2?R(t):t=0;var o=function(s){return RegExp("^(?:"+s.source+")",G(s))}(n),a=""+n;return u(function(s,h){var F=o.exec(s.slice(h));if(F){if(0<=t&&t<=F.length){var N=F[0],X=F[t];return W(h+N.length,X)}return Z(h,"valid match group (0 to "+F.length+") in "+a)}return Z(h,a)})}function In(n){return u(function(t,o){return W(o,n)})}function Fn(n){return u(function(t,o){return Z(o,n)})}function Sn(n){if(C(n))return u(function(t,o){var a=n._(t,o);return a.index=o,a.value="",a});if(typeof n=="string")return Sn(mn(n));if(n instanceof RegExp)return Sn(cn(n));throw new Error("not a string, regexp, or parser: "+n)}function Cn(n){return y(n),u(function(t,o){var a=n._(t,o),s=t.slice(o,a.index);return a.status?Z(o,'not "'+s+'"'):W(o,null)})}function Bn(n){return I(n),u(function(t,o){var a=A(t,o);return o<t.length&&n(a)?W(o+1,a):Z(o,"a character/byte matching "+n)})}function kn(n,t){arguments.length<2&&(t=n,n=void 0);var o=u(function(a,s){return o._=t()._,o._(a,s)});return n?o.desc(n):o}function jn(){return Fn("fantasy-land/empty")}w.parse=function(n){if(typeof n!="string"&&!tn(n))throw new Error(".parse must be called with a string or Buffer as its argument");var t=this.skip(Pn)._(n,0);return t.status?{status:!0,value:t.value}:{status:!1,index:l(n,t.furthest),expected:t.expected}},w.tryParse=function(n){var t=this.parse(n);if(t.status)return t.value;var o=D(n,t),a=new Error(o);throw a.type="ParsimmonError",a.result=t,a},w.assert=function(n,t){return this.chain(function(o){return n(o)?In(o):Fn(t)})},w.or=function(n){return Vn(this,n)},w.trim=function(n){return this.wrap(n,n)},w.wrap=function(n,t){return ln(n,this,t,function(o,a){return a})},w.thru=function(n){return n(this)},w.then=function(n){return y(n),$(this,n).map(function(t){return t[1]})},w.many=function(){var n=this;return u(function(t,o){for(var a=[],s=void 0;;){if(!(s=K(n._(t,o),s)).status)return K(W(o,a),s);if(o===s.index)throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");o=s.index,a.push(s.value)}})},w.tieWith=function(n){return B(n),this.map(function(t){if(function(s){if(!q(s))throw new Error("not an array: "+s)}(t),t.length){B(t[0]);for(var o=t[0],a=1;a<t.length;a++)B(t[a]),o+=n+t[a];return o}return""})},w.tie=function(){return this.tieWith("")},w.times=function(n,t){var o=this;return arguments.length<2&&(t=n),R(n),R(t),u(function(a,s){for(var h=[],F=void 0,N=void 0,X=0;X<n;X+=1){if(N=K(F=o._(a,s),N),!F.status)return N;s=F.index,h.push(F.value)}for(;X<t&&(N=K(F=o._(a,s),N),F.status);X+=1)s=F.index,h.push(F.value);return K(W(s,h),N)})},w.result=function(n){return this.map(function(){return n})},w.atMost=function(n){return this.times(0,n)},w.atLeast=function(n){return ln(this.times(n),this.many(),function(t,o){return t.concat(o)})},w.map=function(n){I(n);var t=this;return u(function(o,a){var s=t._(o,a);return s.status?K(W(s.index,n(s.value)),s):s})},w.contramap=function(n){I(n);var t=this;return u(function(o,a){var s=t.parse(n(o.slice(a)));return s.status?W(a+o.length,s.value):s})},w.promap=function(n,t){return I(n),I(t),this.contramap(n).map(t)},w.skip=function(n){return $(this,n).map(function(t){return t[0]})},w.mark=function(){return ln(En,this,En,function(n,t,o){return{start:n,value:t,end:o}})},w.node=function(n){return ln(En,this,En,function(t,o,a){return{name:n,value:o,start:t,end:a}})},w.sepBy=function(n){return Ln(this,n)},w.sepBy1=function(n){return Rn(this,n)},w.lookahead=function(n){return this.skip(Sn(n))},w.notFollowedBy=function(n){return this.skip(Cn(n))},w.desc=function(n){q(n)||(n=[n]);var t=this;return u(function(o,a){var s=t._(o,a);return s.status||(s.expected=n),s})},w.fallback=function(n){return this.or(In(n))},w.ap=function(n){return ln(n,this,function(t,o){return t(o)})},w.chain=function(n){var t=this;return u(function(o,a){var s=t._(o,a);return s.status?K(n(s.value)._(o,s.index),s):s})},w.concat=w.or,w.empty=jn,w.of=In,w["fantasy-land/ap"]=w.ap,w["fantasy-land/chain"]=w.chain,w["fantasy-land/concat"]=w.concat,w["fantasy-land/empty"]=w.empty,w["fantasy-land/of"]=w.of,w["fantasy-land/map"]=w.map;var En=u(function(n,t){return W(t,l(n,t))}),Mn=u(function(n,t){return t>=n.length?Z(t,"any character/byte"):W(t+1,A(n,t))}),Xn=u(function(n,t){return W(n.length,n.slice(t))}),Pn=u(function(n,t){return t<n.length?Z(t,"EOF"):W(t,null)}),_=cn(/[0-9]/).desc("a digit"),z=cn(/[0-9]*/).desc("optional digits"),nn=cn(/[a-z]/i).desc("a letter"),sn=cn(/[a-z]*/i).desc("optional letters"),an=cn(/\s*/).desc("optional whitespace"),fn=cn(/\s+/).desc("whitespace"),hn=mn("\r"),wn=mn(`
`),An=mn(`\r
`),yn=Vn(An,wn,hn).desc("newline"),gn=Vn(yn,Pn);u.all=Xn,u.alt=Vn,u.any=Mn,u.cr=hn,u.createLanguage=function(n){var t={};for(var o in n)({}).hasOwnProperty.call(n,o)&&function(a){t[a]=kn(function(){return n[a](t)})}(o);return t},u.crlf=An,u.custom=function(n){return u(n(W,Z))},u.digit=_,u.digits=z,u.empty=jn,u.end=gn,u.eof=Pn,u.fail=Fn,u.formatError=D,u.index=En,u.isParser=C,u.lazy=kn,u.letter=nn,u.letters=sn,u.lf=wn,u.lookahead=Sn,u.makeFailure=Z,u.makeSuccess=W,u.newline=yn,u.noneOf=function(n){return Bn(function(t){return n.indexOf(t)<0}).desc("none of '"+n+"'")},u.notFollowedBy=Cn,u.of=In,u.oneOf=function(n){for(var t=n.split(""),o=0;o<t.length;o++)t[o]="'"+t[o]+"'";return Bn(function(a){return n.indexOf(a)>=0}).desc(t)},u.optWhitespace=an,u.Parser=u,u.range=function(n,t){return Bn(function(o){return n<=o&&o<=t}).desc(n+"-"+t)},u.regex=cn,u.regexp=cn,u.sepBy=Ln,u.sepBy1=Rn,u.seq=$,u.seqMap=ln,u.seqObj=function(){for(var n,t={},o=0,a=(n=arguments,Array.prototype.slice.call(n)),s=a.length,h=0;h<s;h+=1){var F=a[h];if(!C(F)){if(q(F)&&F.length===2&&typeof F[0]=="string"&&C(F[1])){var N=F[0];if(Object.prototype.hasOwnProperty.call(t,N))throw new Error("seqObj: duplicate key "+N);t[N]=!0,o++;continue}throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.")}}if(o===0)throw new Error("seqObj expects at least one named parser, found zero");return u(function(X,en){for(var un,pn={},dn=0;dn<s;dn+=1){var On,Dn;if(q(a[dn])?(On=a[dn][0],Dn=a[dn][1]):(On=null,Dn=a[dn]),!(un=K(Dn._(X,en),un)).status)return un;On&&(pn[On]=un.value),en=un.index}return K(W(en,pn),un)})},u.string=mn,u.succeed=In,u.takeWhile=function(n){return I(n),u(function(t,o){for(var a=o;a<t.length&&n(A(t,a));)a++;return W(a,t.slice(o,a))})},u.test=Bn,u.whitespace=fn,u["fantasy-land/empty"]=jn,u["fantasy-land/of"]=In,u.Binary={bitSeq:r,bitSeqObj:function(n){i();var t={},o=0,a=b(function(h){if(q(h)){var F=h;if(F.length!==2)throw new Error("["+F.join(", ")+"] should be length 2, got length "+F.length);if(B(F[0]),R(F[1]),Object.prototype.hasOwnProperty.call(t,F[0]))throw new Error("duplicate key in bitSeqObj: "+F[0]);return t[F[0]]=!0,o++,F}return R(h),[null,h]},n);if(o<1)throw new Error("bitSeqObj expects at least one named pair, got ["+n.join(", ")+"]");var s=b(function(h){return h[0]},a);return r(b(function(h){return h[1]},a)).map(function(h){return E(function(F,N){return N[0]!==null&&(F[N[0]]=N[1]),F},{},b(function(F,N){return[F,h[N]]},s))})},byte:function(n){if(i(),R(n),n>255)throw new Error("Value specified to byte constructor ("+n+"=0x"+n.toString(16)+") is larger in value than a single byte.");var t=(n>15?"0x":"0x0")+n.toString(16);return u(function(o,a){var s=A(o,a);return s===n?W(a+1,s):Z(a,t)})},buffer:function(n){return c("buffer",n).map(function(t){return Buffer.from(t)})},encodedString:function(n,t){return c("string",t).map(function(o){return o.toString(n)})},uintBE:d,uint8BE:d(1),uint16BE:d(2),uint32BE:d(4),uintLE:f,uint8LE:f(1),uint16LE:f(2),uint32LE:f(4),intBE:S,int8BE:S(1),int16BE:S(2),int32BE:S(4),intLE:O,int8LE:O(1),int16LE:O(2),int32LE:O(4),floatBE:c("floatBE",4).map(function(n){return n.readFloatBE(0)}),floatLE:c("floatLE",4).map(function(n){return n.readFloatLE(0)}),doubleBE:c("doubleBE",8).map(function(n){return n.readDoubleBE(0)}),doubleLE:c("doubleLE",8).map(function(n){return n.readDoubleLE(0)})},P.exports=u}])})}),Wn=xn(function(Nn,p){var P=k&&k.__assign||function(){return P=Object.assign||function(e){for(var i,r=1,c=arguments.length;r<c;r++){i=arguments[r];for(var m in i)Object.prototype.hasOwnProperty.call(i,m)&&(e[m]=i[m])}return e},P.apply(this,arguments)},L=k&&k.__rest||function(e,i){var r={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&i.indexOf(c)<0&&(r[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,c=Object.getOwnPropertySymbols(e);m<c.length;m++)i.indexOf(c[m])<0&&Object.prototype.propertyIsEnumerable.call(e,c[m])&&(r[c[m]]=e[c[m]]);return r},j=k&&k.__read||function(e,i){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var c=r.call(e),m,d=[],f;try{for(;(i===void 0||i-- >0)&&!(m=c.next()).done;)d.push(m.value)}catch(S){f={error:S}}finally{try{m&&!m.done&&(r=c.return)&&r.call(c)}finally{if(f)throw f.error}}return d},u=k&&k.__spread||function(){for(var e=[],i=0;i<arguments.length;i++)e=e.concat(j(arguments[i]));return e};Object.defineProperty(p,"__esModule",{value:!0}),p.parseModule=p.ALM=p.Nodes=void 0,p.Nodes={Boolean:"Boolean",Identifier:"Identifier",Variable:"Variable",BasicTerm:"BasicTerm",ArithmeticTerm:"ArithmeticTerm",Term:"Term",FunctionTerm:"FunctionTerm",FunctionLiteral:"FunctionLiteral",_FunctionLiteralInput:"FunctionLiteralInput",Statics:"Statics",DefinedFluents:"DefinedFluents",BasicFluents:"BasicFluents",ArithmeticExpression:"ArithmeticExpression",FunctionDecl:"FunctionDecl",Sorts:"Sorts",FunctionAssignment:"FunctionAssignment",CausalLaw:"CausalLaw",StateConstraint:"StateConstraint",ExecutabilityCondition:"ExecutabilityCondition",Fact:"Fact",Eq:"=",Neq:"!="};var w=function(e,i){return g.seq(e,i).map(function(r){return r[1]})},x=function(e){return g.sepBy1(e,g.regexp(/\s*,\s*/)).skip(g.optWhitespace)},E=function(e,i){return w(g.string(e).wrap(g.optWhitespace,g.optWhitespace),i.skip(g.optWhitespace))},b=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return g.seq.apply(g,u([g.optWhitespace],e.map(function(r){return r.skip(g.optWhitespace)}))).map(function(r){var c=j(r),m=c[0],d=c.slice(1);return d})};p.ALM=g.createLanguage({True:function(){return g.string("true")},False:function(){return g.string("false")},Boolean:function(e){return g.alt(e.True,e.False).desc("a boolean").map(function(i){return i==="true"}).node(p.Nodes.Boolean)},Integer:function(){return g.regexp(/(\-)?[0-9]+/).map(function(e){return Number(e)}).desc("an integer")},Identifier:function(){return g.regexp(/[a-z]+[A-Za-z0-9_]*/).desc("an identifier").node(p.Nodes.Identifier)},Variable:function(){return g.regexp(/[A-Z]+[A-Za-z0-9_]*/).desc("a variable").node("Variable")},ArithmeticOp:function(){return g.regexp(/\+|\-|\*|\/|mod/).desc("an arithmetic operator (+, -, *, /, or mod)")},ComparisonRel:function(){return g.regexp(/>=|>|<=|</)},Eq:function(){return g.string("=")},Neq:function(){return g.string("!=")},ArithmeticRel:function(e){return g.alt(e.ComparisonRel,e.Eq,e.Neq)},BasicArithmeticTerm:function(e){return g.alt(e.Variable,e.Identifier,e.Integer)},BasicTerm:function(e){return g.alt(e.BasicArithmeticTerm,e.Boolean).node(p.Nodes.BasicTerm)},ArithmeticTerm:function(e){return b(e.BasicArithmeticTerm,e.ArithmeticOp,e.BasicArithmeticTerm).node(p.Nodes.ArithmeticTerm)},Term:function(e){return g.alt(e.ArithmeticTerm,e.BasicTerm)},Negation:function(){return g.string("-").desc("negation (-)").fallback(null)},FunctionTerm:function(e){return g.seq(e.Negation,e.Identifier,x(e.BasicTerm).wrap(g.string("("),g.string(")"))).node(p.Nodes.FunctionTerm).map(function(i){var r=j(i.value,3),c=r[0],m=r[1],d=r[2],f=L(i,["value"]);return P({value:{negated:Boolean(c),fn:m,args:d}},f)})},FunctionAssignment:function(e){return b(g.alt(e.FunctionTerm,e.Identifier),g.alt(e.Eq,e.Neq),e.Term).node(p.Nodes.FunctionAssignment).map(function(i){var r=j(i.value,3),c=r[0],m=r[1],d=r[2],f=L(i,["value"]);return P({value:{fnTerm:c,operator:m,ret:d}},f)})},FunctionLiteral:function(e){return g.alt(e.FunctionAssignment,e.FunctionTerm,g.seq(e.Negation,e.Identifier)).node(p.Nodes._FunctionLiteralInput).map(function(i){var r=i;switch(!0){case("name"in r.value&&r.value.name===p.Nodes.FunctionAssignment):{var c=r.value.value,m=c.fnTerm,d=c.ret,f=c.operator;if(m.name==="FunctionTerm"){var S=m.value,O=S.args,C=S.fn,q=S.negated,tn=q||f==="!=";return P(P({},r),{name:p.Nodes.FunctionLiteral,value:{negated:tn,fn:C.value,args:O,ret:d,node:r.value}})}else return P(P({},r),{name:p.Nodes.FunctionLiteral,value:{negated:f==="!=",fn:m.value,args:[],ret:d,node:r.value}})}case("name"in r.value&&r.value.name===p.Nodes.FunctionTerm):{var W=r.value.value,C=W.fn.value,O=W.args,q=W.negated;return P(P({},r),{name:p.Nodes.FunctionLiteral,value:{negated:q,fn:C,args:O,ret:!0,node:r.value}})}case Array.isArray(r.value):{var Z=j(r.value,2),q=Z[0],K=Z[1];return P(P({},r),{name:p.Nodes.FunctionLiteral,value:{negated:!!q,fn:K.value,args:[],ret:!0,node:K}})}default:throw new Error("unreachable")}})},ArithmeticExpression:function(e){return b(e.Term,e.ArithmeticRel,e.Term).node(p.Nodes.ArithmeticExpression)},Literal:function(e){return g.alt(e.FunctionLiteral,e.ArithmeticExpression)},Body:function(e){return x(e.Literal).skip(g.string(".")).skip(g.optWhitespace)},Occurs:function(e){return e.Variable.wrap(g.optWhitespace.skip(g.string("occurs(")),g.optWhitespace.skip(g.string(")"))).skip(g.optWhitespace)},CausalLaw:function(e){return b(e.Occurs.skip(g.string("causes")),x(e.FunctionLiteral),g.string("if"),e.Body).node(p.Nodes.CausalLaw).map(function(i){var r=j(i.value,4),c=r[0],m=r[1],d=r[2],f=r[3],S=L(i,["value"]);return P({value:{occurs:c,head:m,body:f}},S)})},SCHead:function(e){return g.alt(g.string("false"),e.FunctionLiteral)},StateConstraint:function(e){return b(e.SCHead,g.string("if"),e.Body).node(p.Nodes.StateConstraint).map(function(i){var r=j(i.value,3),c=r[0],m=r[1],d=r[2],f=L(i,["value"]);return P({value:{head:c,body:d}},f)})},ExecutabilityCondition:function(e){return b(g.string("impossible"),e.Occurs,g.string("if"),e.Body).node(p.Nodes.ExecutabilityCondition).map(function(i){var r=j(i.value,4),c=r[0],m=r[1],d=r[2],f=r[3],S=L(i,["value"]);return P({value:{occurs:m,body:f}},S)})},Sorts:function(e){return E("sorts",e.SortDecl.many()).node(p.Nodes.Sorts)},SortDecl:function(e){return b(x(e.Identifier).skip(g.string("::")),x(e.SortName),e.Attributes.fallback(null)).map(function(i){var r=j(i,3),c=r[0],m=r[1],d=r[2];return{first:c,second:m,attributes:d}})},Set:function(e){return x(e.Identifier).wrap(g.string("{").skip(g.optWhitespace),g.string("}").skip(g.optWhitespace)).map(function(i){return new Set(i)})},SortName:function(e){return g.alt(e.Identifier,g.seq(e.Integer.skip(g.string("..")),e.Integer),e.Set)},Attributes:function(e){return E("attributes",e.FunctionDecl.wrap(g.optWhitespace,g.optWhitespace).atLeast(1))},Arguments:function(e){return g.sepBy1(e.Identifier,g.regexp(/\s*x\s*/)).skip(g.optWhitespace).skip(g.string("->")).skip(g.optWhitespace)},Statics:function(e){return E("statics",e.FunctionDecl.many()).node(p.Nodes.Statics)},Fluents:function(e){return E("fluents",g.seq(e.BasicFluents.fallback(null),e.DefinedFluents.fallback(null))).map(function(i){var r=j(i,2),c=r[0],m=r[1];return{basic:c,defined:m}})},BasicFluents:function(e){return E("basic",e.FunctionDecl.many()).node(p.Nodes.BasicFluents)},DefinedFluents:function(e){return E("defined",e.FunctionDecl.many()).node(p.Nodes.DefinedFluents)},FunctionDecl:function(e){return b(e.Identifier.skip(g.seq(g.optWhitespace,g.string(":"),g.optWhitespace)),e.Arguments.fallback(null),e.Identifier).node(p.Nodes.FunctionDecl).map(function(i){var r=i.name,c=j(i.value,3),m=c[0],d=c[1],f=c[2],S=i.start,O=i.end;return{name:r,start:S,end:O,value:{ident:m,args:d,ret:f}}})},Axioms:function(e){return E("axioms",e.Axiom.many())},Fact:function(e){return e.FunctionLiteral.skip(g.string(".")).node(p.Nodes.Fact)},Axiom:function(e){return g.alt(e.CausalLaw,e.StateConstraint,e.ExecutabilityCondition,e.Fact)},Initially:function(e){return E("initially",e.Fact.many())},ModuleBody:function(e){return b(e.Sorts.fallback(null),e.Statics.fallback(null),e.Fluents.fallback(null),e.Axioms.fallback(null),e.Initially.fallback(null))},Module:function(e){return E("module",b(e.Identifier,e.ModuleBody)).map(function(i){var r=j(i,2),c=r[0],m=j(r[1],5),d=m[0],f=m[1],S=m[2],O=m[3],C=m[4];return{moduleName:c,sorts:d,statics:f,fluents:S,axioms:O,initially:C}})},Query:function(e){return x(e.FunctionLiteral).skip(g.string(".").skip(g.optWhitespace))},String:function(e){return g.regexp(/"((?:\\.|.)*?)"/,1)},QueryVars:function(e){return x(e.Variable).wrap(g.string('"'),g.string('"')).map(function(i){return i.map(function(r){return r.value})})},QueryResult:function(e){return g.seq(e.String.skip(g.string(",")),e.QueryVars.skip(g.string(",")),x(g.alt(e.Integer,e.Boolean.map(function(i){return i.value}),e.String,e.Identifier.map(function(i){return i.value})))).wrap(g.string("("),g.string(")"))}});function v(e){return p.ALM.Module.tryParse(e)}p.parseModule=v}),Jn=xn(function(Nn,p){var P=k&&k.__awaiter||function(x,E,b,v){function e(i){return i instanceof b?i:new b(function(r){r(i)})}return new(b||(b=Promise))(function(i,r){function c(f){try{d(v.next(f))}catch(S){r(S)}}function m(f){try{d(v.throw(f))}catch(S){r(S)}}function d(f){f.done?i(f.value):e(f.value).then(c,m)}d((v=v.apply(x,E||[])).next())})},L=k&&k.__generator||function(x,E){var b={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},v,e,i,r;return r={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(r[Symbol.iterator]=function(){return this}),r;function c(d){return function(f){return m([d,f])}}function m(d){if(v)throw new TypeError("Generator is already executing.");for(;b;)try{if(v=1,e&&(i=d[0]&2?e.return:d[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,d[1])).done)return i;(e=0,i)&&(d=[d[0]&2,i.value]);switch(d[0]){case 0:case 1:i=d;break;case 4:return b.label++,{value:d[1],done:!1};case 5:b.label++,e=d[1],d=[0];continue;case 7:d=b.ops.pop(),b.trys.pop();continue;default:if(!(i=b.trys,i=i.length>0&&i[i.length-1])&&(d[0]===6||d[0]===2)){b=0;continue}if(d[0]===3&&(!i||d[1]>i[0]&&d[1]<i[3])){b.label=d[1];break}if(d[0]===6&&b.label<i[1]){b.label=i[1],i=d;break}if(i&&b.label<i[2]){b.label=i[2],b.ops.push(d);break}i[2]&&b.ops.pop(),b.trys.pop();continue}d=E.call(x,b)}catch(f){d=[6,f],e=0}finally{v=i=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}},j=k&&k.__read||function(x,E){var b=typeof Symbol=="function"&&x[Symbol.iterator];if(!b)return x;var v=b.call(x),e,i=[],r;try{for(;(E===void 0||E-- >0)&&!(e=v.next()).done;)i.push(e.value)}catch(c){r={error:c}}finally{try{e&&!e.done&&(b=v.return)&&b.call(v)}finally{if(r)throw r.error}}return i},u=k&&k.__spread||function(){for(var x=[],E=0;E<arguments.length;E++)x=x.concat(j(arguments[E]));return x};Object.defineProperty(p,"__esModule",{value:!0}),p.pLimit=void 0;var w=function(x){for(var E=[],b=1;b<arguments.length;b++)E[b-1]=arguments[b];return new Promise(function(v){v(x.apply(void 0,u(E)))})};p.pLimit=function(x){if(!((Number.isInteger(x)||x===Infinity)&&x>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");var E=[],b=0,v=function(){b--,E.length>0&&E.shift()()},e=function(c,m){for(var d=[],f=2;f<arguments.length;f++)d[f-2]=arguments[f];return P(void 0,void 0,void 0,function(){var S,O;return L(this,function(C){switch(C.label){case 0:b++,S=w.apply(void 0,u([c],d)),m(S),C.label=1;case 1:return C.trys.push([1,3,,4]),[4,S];case 2:return C.sent(),[3,4];case 3:return O=C.sent(),[3,4];case 4:return v(),[2]}})})},i=function(c,m){for(var d=[],f=2;f<arguments.length;f++)d[f-2]=arguments[f];E.push(e.bind.apply(e,u([null,c,m],d))),function(){return P(void 0,void 0,void 0,function(){return L(this,function(S){switch(S.label){case 0:return[4,Promise.resolve()];case 1:return S.sent(),b<x&&E.length>0&&E.shift()(),[2]}})})}()},r=function(c){for(var m=[],d=1;d<arguments.length;d++)m[d-1]=arguments[d];return new Promise(function(f){return i.apply(void 0,u([c,f],m))})};return Object.defineProperties(r,{activeCount:{get:function(){return b}},pendingCount:{get:function(){return E.length}},clearQueue:{value:function(){E.length=0}}}),r}}),Tn=xn(function(Nn,p){Object.defineProperty(p,"__esModule",{value:!0}),p.unpad=void 0;function P(L){for(var j=L.match(/ +/g)[0].length,u=`
`,w=0;w<j;w++)u=u+" ";return L.split(u).join(`
`)}p.unpad=P}),zn=xn(function(Nn,p){var P=k&&k.__assign||function(){return P=Object.assign||function(v){for(var e,i=1,r=arguments.length;i<r;i++){e=arguments[i];for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&(v[c]=e[c])}return v},P.apply(this,arguments)},L=k&&k.__values||function(v){var e=typeof Symbol=="function"&&Symbol.iterator,i=e&&v[e],r=0;if(i)return i.call(v);if(v&&typeof v.length=="number")return{next:function(){return v&&r>=v.length&&(v=void 0),{value:v&&v[r++],done:!v}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},j=k&&k.__read||function(v,e){var i=typeof Symbol=="function"&&v[Symbol.iterator];if(!i)return v;var r=i.call(v),c,m=[],d;try{for(;(e===void 0||e-- >0)&&!(c=r.next()).done;)m.push(c.value)}catch(f){d={error:f}}finally{try{c&&!c.done&&(i=r.return)&&i.call(r)}finally{if(d)throw d.error}}return m},u=k&&k.__spread||function(){for(var v=[],e=0;e<arguments.length;e++)v=v.concat(j(arguments[e]));return v};Object.defineProperty(p,"__esModule",{value:!0}),p.collectFunctionSignatures=p.collectFluentSignatures=p.collectStaticSignatures=p.collectAttributeSignatures=void 0;function w(v){var e,i,r,c,m,d,f,S={};if(v){var O=v.value;try{for(var C=L(O),q=C.next();!q.done;q=C.next()){var tn=q.value,W=tn.first,Z=tn.attributes;try{for(var K=(r=void 0,L(W)),U=K.next();!U.done;U=K.next()){var l=U.value.value;if(Z)try{for(var y=(m=void 0,L(Z)),A=y.next();!A.done;A=y.next()){var R=A.value.value,I=R.ident.value,B=R.args,T=R.ret;S[I]={args:u([l],(f=B==null?void 0:B.map(function(V){return V.value}))!==null&&f!==void 0?f:[]),ret:T.value}}}catch(V){m={error:V}}finally{try{A&&!A.done&&(d=y.return)&&d.call(y)}finally{if(m)throw m.error}}}}catch(V){r={error:V}}finally{try{U&&!U.done&&(c=K.return)&&c.call(K)}finally{if(r)throw r.error}}}}catch(V){e={error:V}}finally{try{q&&!q.done&&(i=C.return)&&i.call(C)}finally{if(e)throw e.error}}}return S}p.collectAttributeSignatures=w;function x(v){var e,i,r,c={};if(v){var m=v.value;try{for(var d=L(m),f=d.next();!f.done;f=d.next()){var S=f.value.value,O=S.ident.value,C=S.args,q=S.ret;c[O]={args:(r=C==null?void 0:C.map(function(tn){return tn.value}))!==null&&r!==void 0?r:[],ret:q.value}}}catch(tn){e={error:tn}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(e)throw e.error}}}return c}p.collectStaticSignatures=x;function E(v){var e,i,r,c,m,d={};if(v){var f=v.basic,S=v.defined,O=u((r=f==null?void 0:f.value)!==null&&r!==void 0?r:[],(c=S==null?void 0:S.value)!==null&&c!==void 0?c:[]);try{for(var C=L(O),q=C.next();!q.done;q=C.next()){var tn=q.value.value,W=tn.ident.value,Z=tn.args,K=tn.ret;d[W]={args:(m=Z==null?void 0:Z.map(function(U){return U.value}))!==null&&m!==void 0?m:[],ret:K.value}}}catch(U){e={error:U}}finally{try{q&&!q.done&&(i=C.return)&&i.call(C)}finally{if(e)throw e.error}}}return d}p.collectFluentSignatures=E;function b(v){return P(P(P({instance:{args:["universe","universe"],ret:"booleans"},is_a:{args:["universe"],ret:"sort"}},w(v.sorts)),x(v.statics)),E(v.fluents))}p.collectFunctionSignatures=b}),Yn=xn(function(Nn,p){var P=k&&k.__assign||function(){return P=Object.assign||function(l){for(var y,A=1,R=arguments.length;A<R;A++){y=arguments[A];for(var I in y)Object.prototype.hasOwnProperty.call(y,I)&&(l[I]=y[I])}return l},P.apply(this,arguments)},L=k&&k.__read||function(l,y){var A=typeof Symbol=="function"&&l[Symbol.iterator];if(!A)return l;var R=A.call(l),I,B=[],T;try{for(;(y===void 0||y-- >0)&&!(I=R.next()).done;)B.push(I.value)}catch(V){T={error:V}}finally{try{I&&!I.done&&(A=R.return)&&A.call(R)}finally{if(T)throw T.error}}return B},j=k&&k.__spread||function(){for(var l=[],y=0;y<arguments.length;y++)l=l.concat(L(arguments[y]));return l},u=k&&k.__values||function(l){var y=typeof Symbol=="function"&&Symbol.iterator,A=y&&l[y],R=0;if(A)return A.call(l);if(l&&typeof l.length=="number")return{next:function(){return l&&R>=l.length&&(l=void 0),{value:l&&l[R++],done:!l}}};throw new TypeError(y?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(p,"__esModule",{value:!0}),p.printReasoningModule=p.printQuery=p.printModule=p.printInitially=p.printStaticAssignments=p.printCausalLaws=p.printStateConstraints=p.getVariablesFromFnLit=p.isVariable=p.printFluents=p.printStatics=p.printAttributes=p.printSortNames=void 0;function w(l,y){var A=y-l;return j(Array(A).keys()).map(function(R){return R+l})}function x(l){return l.value.map(function(y){var A=y.first,R=y.second;return A.map(function(I){var B=I.value;return["sort("+B+").",R.map(function(T){if(Array.isArray(T)){var V=w(T[0],T[1]+1).map(function(H){return"dom("+B+", "+H+")."}).join(" "),M=w(T[0],T[1]+1).map(function(H){return"holds(static(is_a("+H+"), "+B+"))."}).join(" ");return Tn.unpad(`
                        holds(static(link(`+B+`), integers)).
                        `+V+`
                        `+M+`
                        `)}else{if("name"in T)return Tn.unpad(`
                        holds(static(link(`+B+"), "+T.value+`)).
                        `);var Y=Array.from(T),V=Y.map(function(H){var Q=H.value;return"dom("+B+", "+Q+")."}).join(" "),M=Y.map(function(H){return"holds(static(is_a("+H.value+"), "+B+"))."}).join(" ");return V+`
`+M}})]})}).flat(Infinity).join(`
`)}p.printSortNames=x;function E(l){var y=l.value;return y.map(function(A){var R=A.first,I=A.attributes;return R.map(function(B){var T=B.value;return I===null?"":I.map(function(V){var M=V.value,Y=M.ident.value,H=M.args,Q=M.ret;if(H){var rn=j([T],H.map(function(D){return D.value})).map(function(D,G){return[D,"S"+G]}),J=rn.map(function(D){var G=L(D,2),$=G[0],ln=G[1];return ln}).join(","),bn=rn.map(function(D){var G=L(D,2),$=G[0],ln=G[1];return"dom("+$+", "+ln+")"}).join(", "),on=rn.map(function(D){var G=L(D,2),$=G[0],ln=G[1];return"dom("+$+", "+ln+") :- holds(static("+Y+"("+J+"), Ret))."}).join(`
`);return Tn.unpad(`
                    attr(`+Y+"("+J+"), Ret) :- "+bn+", dom("+Q.value+`, Ret).
                    `+on+`
                    dom(`+Q.value+", Ret) :- holds(static("+Y+"("+J+`), Ret)).
                    `)}else return Tn.unpad(`
                        attr(`+Y+"(X), Ret) :- dom("+T+", X), dom("+Q.value+`, Ret).
                        dom(`+T+", X) :- holds(static("+Y+`(X), Ret)).
                        dom(`+Q.value+", Ret) :- holds(static("+Y+`(X), Ret)).
                        `)})})}).flat(Infinity).join(`
`)}p.printAttributes=E;function b(l){var y=l.value;return y.map(function(A){var R=A.value,I=R.ident.value,B=R.args,T=R.ret;if(B){var V=B.map(function(H){return H.value}).map(function(H,Q){return[H,"S"+Q]}),M=V.map(function(H){var Q=L(H,2),rn=Q[0],J=Q[1];return J}),Y=V.map(function(H){var Q=L(H,2),rn=Q[0],J=Q[1];return"dom("+rn+", "+J+")"}).join(", ");return Tn.unpad(`
                static(`+I+"("+M.join(", ")+"), Ret) :- "+Y+", dom("+T.value+`, Ret).
                `)}else return Tn.unpad(`
                static(`+I+", Ret) :- dom("+T.value+`, Ret).
                `)}).flat(Infinity).join(`
`)}p.printStatics=b;function v(l){var y,A,R=l.basic,I=l.defined,B=function(T){return function(V){var M=V.value,Y=M.ident.value,H=M.args,Q=M.ret;if(H){var rn=H.map(function(on){return on.value}).map(function(on,D){return[on,"S"+D]}),J=rn.map(function(on){var D=L(on,2),G=D[0],$=D[1];return $}),bn=rn.map(function(on){var D=L(on,2),G=D[0],$=D[1];return"dom("+G+", "+$+")"}).join(", ");return Tn.unpad(`
                    fluent(`+T+", "+Y+"("+J.join(", ")+"), Ret) :- "+bn+", dom("+Q.value+`, Ret).
                    `)}else return Tn.unpad(`
                    fluent(`+T+", "+Y+", Ret) :- dom("+Q.value+`, Ret).
                    `)}};return[(y=R==null?void 0:R.value.map(B("basic")))!==null&&y!==void 0?y:[],(A=I==null?void 0:I.value.map(B("defined")))!==null&&A!==void 0?A:[]].flat(Infinity).join(`
`)}p.printFluents=v;function e(l){return typeof l=="object"&&l.name===Wn.Nodes.Variable}p.isVariable=e;function i(l){var y=l.value,A=y.args,R=y.ret;return{ret:function(){return R===!0?null:R.name==="BasicTerm"?e(R.value)?[R.value]:null:R.value.filter(e)}(),args:A==null?void 0:A.map(function(I,B){return Array.isArray(I.value)?I.value.filter(e).map(function(T){return[T,B]}):e(I.value)?[[I.value,B]]:[]})}}p.getVariablesFromFnLit=i;function r(l){var y=L(l.value,3),A=y[0],R=y[1],I=y[2];return[A,I].filter(e)}function c(l){return l.name==="BasicTerm"?e(l.value)?[l.value]:[]:r(l)}function m(l){var y,A,R,I,B,T,V,M,Y,H,Q,rn,J,bn,on={},D=j((T=(B=l.statics)===null||B===void 0?void 0:B.value)!==null&&T!==void 0?T:[],(M=(V=l.sorts)===null||V===void 0?void 0:V.value.filter(function(cn){return cn.attributes}).flatMap(function(cn){return cn.attributes}))!==null&&M!==void 0?M:[]);try{for(var G=u(D),$=G.next();!$.done;$=G.next()){var ln=$.value;on[ln.value.ident.value]="static"}}catch(cn){y={error:cn}}finally{try{$&&!$.done&&(A=G.return)&&A.call(G)}finally{if(y)throw y.error}}var Vn={},Ln=j((Q=(H=(Y=l.fluents)===null||Y===void 0?void 0:Y.basic)===null||H===void 0?void 0:H.value)!==null&&Q!==void 0?Q:[],(bn=(J=(rn=l.fluents)===null||rn===void 0?void 0:rn.defined)===null||J===void 0?void 0:J.value)!==null&&bn!==void 0?bn:[]);try{for(var Rn=u(Ln),mn=Rn.next();!mn.done;mn=Rn.next()){var ln=mn.value;Vn[ln.value.ident.value]="fluent"}}catch(cn){R={error:cn}}finally{try{mn&&!mn.done&&(I=Rn.return)&&I.call(Rn)}finally{if(R)throw R.error}}return P(P({instance:"static"},on),Vn)}var d=function(l){return typeof l=="number"?l.toString():l.value},f=function(l){var y=L(l.value,3),A=y[0],R=y[1],I=y[2];return d(A)+" "+R+" "+d(I)},S=function(l){return typeof l.value=="object"&&l.value.name==="Boolean"?""+l.value.value:d(l.value)},O=function(l){return l===!0?"true":l.name==="ArithmeticTerm"?f(l):S(l)};function C(l){var y,A,R=zn.collectFunctionSignatures(l),I=(y=l.axioms)===null||y===void 0?void 0:y.filter(function(B){var T=B.name;return T===Wn.Nodes.StateConstraint}).map(function(B,T){var V,M,Y,H,Q=B.value,rn=Q.body,J=Q.head,bn=rn.filter(function(_){return _.name==="FunctionLiteral"}).concat(J!=="false"?[J]:[]),on=bn.reduce(function(_,z){var nn,sn,an,fn,hn,wn,An,yn=i(z),gn=R[z.value.fn];try{for(var n=u((An=yn==null?void 0:yn.args)!==null&&An!==void 0?An:[]),t=n.next();!t.done;t=n.next()){var o=t.value;try{for(var a=(an=void 0,u(o)),s=a.next();!s.done;s=a.next()){var h=L(s.value,2),F=h[0],N=h[1];_[F.value]=gn.args[N]}}catch(pn){an={error:pn}}finally{try{s&&!s.done&&(fn=a.return)&&fn.call(a)}finally{if(an)throw an.error}}}}catch(pn){nn={error:pn}}finally{try{t&&!t.done&&(sn=n.return)&&sn.call(n)}finally{if(nn)throw nn.error}}if(yn.ret)try{for(var X=u(yn.ret),en=X.next();!en.done;en=X.next()){var un=en.value;_[un.value]=gn.ret}}catch(pn){hn={error:pn}}finally{try{en&&!en.done&&(wn=X.return)&&wn.call(X)}finally{if(hn)throw hn.error}}return _},{});try{for(var D=u(rn.filter(function(_){return _.name==="ArithmeticExpression"})),G=D.next();!G.done;G=D.next()){var $=G.value,ln=L($.value,3),Vn=ln[0],Ln=ln[2],Rn=c(Vn).concat(c(Ln)),mn=Rn.find(function(_){return _.value in on}),cn=on[mn.value];try{for(var In=(Y=void 0,u(Rn)),Fn=In.next();!Fn.done;Fn=In.next()){var Sn=Fn.value;Sn.value in on||(on[Sn.value]=cn)}}catch(_){Y={error:_}}finally{try{Fn&&!Fn.done&&(H=In.return)&&H.call(In)}finally{if(Y)throw Y.error}}}}catch(_){V={error:_}}finally{try{G&&!G.done&&(M=D.return)&&M.call(D)}finally{if(V)throw V.error}}var Cn=Object.keys(on).length?"("+Object.keys(on).join(", ")+")":"",Bn=[];for(var kn in on)Bn.push("dom("+on[kn]+", "+kn+")");var jn=function(){if(J!=="false"){var _=J.value,z=_.fn,nn=_.args,sn=_.ret,an=_.negated,fn=(nn==null?void 0:nn.length)?"("+nn.map(O).join(", ")+")":"",hn=an?"neg":"pos";return hn+"_fluent("+z+fn+", "+O(sn)+")"}else return""}(),En=Bn.length?" :- "+Bn.join(", "):"",Mn="state_constraint"+(T+1)+Cn,Xn=m(l),Pn=rn.map(function(_){var z=function(){switch(_.name){case"FunctionLiteral":var nn=_.value,sn=nn.fn,an=nn.args,fn=nn.ret,hn=nn.negated,wn=Xn[_.value.fn],An=hn?"neg":"pos",yn=(an==null?void 0:an.length)?"("+an.map(O).join(", ")+")":"";return An+"_"+wn+"("+sn+yn+", "+O(fn)+")";case"ArithmeticExpression":var gn=L(_.value,3),n=gn[0],t=gn[1],o=gn[2],a={">":"gt","<":"lt",">=":"gte","<=":"lte","=":"eq","!=":"neq"};return a[t]+"("+O(n)+", "+O(o)+")"}}();return"body("+Mn+", "+z+")"+En+"."}).join(`
`);return Tn.unpad(`
            state_constraint(`+Mn+")"+En+`.
            head(`+Mn+", "+jn+")"+En+`.
            
            `+Pn+`
            `)});return(A=I==null?void 0:I.join(`
`))!==null&&A!==void 0?A:""}p.printStateConstraints=C;function q(l){var y,A,R=zn.collectFunctionSignatures(l),I=(y=l.axioms)===null||y===void 0?void 0:y.filter(function(B){var T=B.name;return T===Wn.Nodes.CausalLaw}).map(function(B,T){var V,M,Y,H,Q=B.value,rn=Q.occurs,J=Q.body,bn=Q.head,on=J.filter(function(z){return z.name==="FunctionLiteral"}).concat(bn),D=on.reduce(function(z,nn){var sn,an,fn,hn,wn,An,yn,gn=i(nn),n=R[nn.value.fn];if(n===void 0)throw new Error(Tn.unpad("Error while printing function "+nn.value.fn+`.
                             Most likely cause is that function `+nn.value.fn+` doesn't exist in the program signature.
                             Check your sorts and/or function declarations.
                            `));try{for(var t=u((yn=gn==null?void 0:gn.args)!==null&&yn!==void 0?yn:[]),o=t.next();!o.done;o=t.next()){var a=o.value;try{for(var s=(fn=void 0,u(a)),h=s.next();!h.done;h=s.next()){var F=L(h.value,2),N=F[0],X=F[1];z[N.value]=n.args[X]}}catch(dn){fn={error:dn}}finally{try{h&&!h.done&&(hn=s.return)&&hn.call(s)}finally{if(fn)throw fn.error}}}}catch(dn){sn={error:dn}}finally{try{o&&!o.done&&(an=t.return)&&an.call(t)}finally{if(sn)throw sn.error}}if(gn.ret)try{for(var en=u(gn.ret),un=en.next();!un.done;un=en.next()){var pn=un.value;z[pn.value]=n.ret}}catch(dn){wn={error:dn}}finally{try{un&&!un.done&&(An=en.return)&&An.call(en)}finally{if(wn)throw wn.error}}return z},{});try{for(var G=u(J.filter(function(z){return z.name==="ArithmeticExpression"})),$=G.next();!$.done;$=G.next()){var ln=$.value,Vn=L(ln.value,3),Ln=Vn[0],Rn=Vn[2],mn=c(Ln).concat(c(Rn)),cn=mn.find(function(z){return z.value in D}),In=D[cn.value];try{for(var Fn=(Y=void 0,u(mn)),Sn=Fn.next();!Sn.done;Sn=Fn.next()){var Cn=Sn.value;Cn.value in D||(D[Cn.value]=In)}}catch(z){Y={error:z}}finally{try{Sn&&!Sn.done&&(H=Fn.return)&&H.call(Fn)}finally{if(Y)throw Y.error}}}}catch(z){V={error:z}}finally{try{$&&!$.done&&(M=G.return)&&M.call(G)}finally{if(V)throw V.error}}D[rn.value]="actions";var Bn=Object.keys(D).join(", "),kn=[];for(var jn in D)kn.push("dom("+D[jn]+", "+jn+")");var En=kn.join(", "),Mn="causal_law"+(T+1)+"("+Bn+")",Xn=m(l),Pn=J.map(function(z){var nn=function(){switch(z.name){case"FunctionLiteral":var sn=z.value,an=sn.fn,fn=sn.args,hn=sn.ret,wn=sn.negated,An=Xn[z.value.fn],yn=wn?"neg":"pos",gn=(fn==null?void 0:fn.length)?"("+fn.map(O).join(", ")+")":"";return yn+"_"+An+"("+an+gn+", "+O(hn)+")";case"ArithmeticExpression":var n=L(z.value,3),t=n[0],o=n[1],a=n[2],s={">":"gt","<":"lt",">=":"gte","<=":"lte","=":"eq","!=":"neq"};return s[o]+"("+O(t)+", "+O(a)+")"}}();return"body("+Mn+", "+nn+") :- "+En+"."}).join(`
`),_=bn.map(function(z){var nn=z.value,sn=nn.fn,an=nn.args,fn=nn.ret,hn=nn.negated,wn=(an==null?void 0:an.length)?"("+an.map(O).join(", ")+")":"",An=hn?"neg":"pos";return"head(causal_law"+(T+1)+"("+Bn+"), "+An+"_fluent("+sn+wn+", "+O(fn)+")) :- "+En+"."}).join(`
`);return Tn.unpad(`
            dlaw(causal_law`+(T+1)+"("+Bn+")) :- "+En+`.
            action(causal_law`+(T+1)+"("+Bn+"), "+rn.value+") :- "+En+`.
            `+_+`

            `+Pn+`
            `)});return(A=I==null?void 0:I.join(`
`))!==null&&A!==void 0?A:""}p.printCausalLaws=q;function tn(l){var y,A;return(A=(y=l.axioms)===null||y===void 0?void 0:y.filter(function(R){return R.name==="Fact"&&R.value.value.negated===!1}).map(function(R){var I=R.value.value,B=I.fn,T=I.ret,V=I.args,M=(V==null?void 0:V.length)?"("+V.map(O).join(", ")+")":"";return"holds(static("+B+M+", "+O(T)+"))."}).join(`
`))!==null&&A!==void 0?A:""}p.printStaticAssignments=tn;function W(l){var y,A;return(A=(y=l.initially)===null||y===void 0?void 0:y.filter(function(R){return R.name==="Fact"&&R.value.value.negated===!1}).map(function(R){var I=R.value.value,B=I.fn,T=I.ret,V=I.args,M=(V==null?void 0:V.length)?"("+V.map(O).join(", ")+")":"";return"holds("+B+M+", "+O(T)+", 0)."}).join(`
`))!==null&&A!==void 0?A:""}p.printInitially=W;function Z(l){return Tn.unpad(`
    #defined occurs/2.
    #defined body/2.

    step(0..n).

    `+(l.sorts?x(l.sorts):"")+`
    
    `+(l.sorts?E(l.sorts):"")+`

    `+(l.statics?b(l.statics):"")+`

    `+(l.fluents?v(l.fluents):"")+`

    `+C(l)+`

    `+q(l)+`

    `+tn(l)+`

    `+W(l)+`

    body_satisfied(R, I) :-
        step(I),
        body(R, _),
        #count { F : body(R, pos_fluent(F,V)), fluent(_,F,V) } = FPB,
        #count { F : body(R, pos_fluent(F,V)), fluent(_,F,V), holds(F, V, I) } = FPB,
        #count { F : body(R,neg_fluent(F,V)), fluent(_,F,V) } = FNB,
        #count { F : body(R,neg_fluent(F,V)), fluent(_, F,V), not holds(F,V,I) } = FNB,
        #count { F : body(R, pos_static(F,V)) } = SPB,
        #count { F : body(R, pos_static(F,V)), holds(static(F,V)) } = SPB,
        #count { F : body(R,neg_static(F,V)) } = SNB,
        #count { F : body(R,neg_static(F,V)), not holds(static(F,V)) } = SNB,
        #count { (A, B) : body(R, gt(A, B)) } = GT,
        #count { (A, B) : body(R, gt(A, B)), A > B } = GT,
        #count { (A, B) : body(R, gte(A, B)) } = GTE,
        #count { (A, B) : body(R, gte(A, B)), A >= B } = GTE,
        #count { (A, B) : body(R, lt(A, B)) } = LT,
        #count { (A, B) : body(R, lt(A, B)), A < B } = LT,
        #count { (A, B) : body(R, lte(A, B)) } = LTE,
        #count { (A, B) : body(R, lte(A, B)), A <= B } = LTE,
        #count { (A, B) : body(R, eq(A, B)) } = EQ,
        #count { (A, B) : body(R, eq(A, B)), A = B  } = EQ,
        #count { (A, B) : body(R, neq(A, B)) } = NEQ,
        #count { (A, B) : body(R, neq(A, B)), A != B  } = NEQ.

    holds(causal_law, F, V, I + 1) :-
        step(I),
        dlaw(R),
        action(R, A),
        occurs(A, I),
        body_satisfied(R, I),
        head(R, pos_fluent(F,V)),
        1 < n.
    
    nholds(causal_law_flip, F, V, I + 1) :-
        step(I),
        dlaw(R),
        action(R, A),
        occurs(A, I),
        body_satisfied(R, I),
        head(R, pos_fluent(F,V')),
        holds(F, V, I),
        V != V',
        1 < n.
    
    nholds(causal_law_neg, F, V, I + 1) :-
        step(I),
        dlaw(R),
        action(R, X),
        occurs(X, T),
        body_satisfied(R, T),
        head(R, neg_fluent(F,V)),
        I < n.
    
    holds(sc, F, V, I) :-
        state_constraint(R),
        head(R, pos_fluent(F,V)),
        body_satisfied(R, I).
    
    nholds(sc_neg, F, V, I) :-
        state_constraint(R),
        head(R, neg_fluent(F, V)),
        body_satisfied(R, I).
    
    nholds(cwa, F, V, I) :-
        step(I),
        fluent(defined, F, V),
        not holds(F, V, I).
    
    holds(inertia, F, V, I + 1) :-
        step(I),
        fluent(basic, F, V),
        holds(F, V, I),
        not nholds(F, V, I + 1),
        I < n. 
    
    nholds(inertia_neg, F, V, I + 1) :-
        step(I),
        fluent(basic, F, V),
        nholds(F, V, I),
        not holds(F, V, I + 1),
        I < n. 
    
    holds(F, V, I) :- holds(_, F, V, I).
    nholds(F, V, I) :- nholds(_, F, V, I).
    

    dom(S1, X) :- holds(static(link(S2), S1)), dom(S2, X).

    holds(static(link(booleans), universe)).
    dom(booleans, true). dom(booleans, false).

    holds(static(link(actions), universe)).

    holds(static(instance(X, S), true)) :- dom(S, X).

    #show.

    #show ("Duplicate values found", F, V, V', "at_time", I) : holds(F, V, I), holds(F, V', I), V != V'.
    #show ("Conflict found", F, V, I, R, R) : holds(R, F, V, I), nholds(R, F, V, I).
    
    %#show (F, V) : holds(F, V, n).
    `)}p.printModule=Z;function K(l){var y=Wn.ALM.Query.tryParse(l),A=y.map(function(R){var I=R.value,B=I.fn,T=I.args,V=I.ret,M=(T==null?void 0:T.length)?"("+T.map(O).join(", ")+")":"";return"holds("+B+M+", "+O(V)+", n)"}).join(", ");return A+"."}p.printQuery=K;function U(l){return Tn.unpad(`
    #defined occurs/2.
    #defined body/2.

    step(0..n).

    `+(l.sorts?x(l.sorts):"")+`
    
    `+(l.sorts?E(l.sorts):"")+`

    `+(l.statics?b(l.statics):"")+`

    `+(l.fluents?v(l.fluents):"")+`

    `+C(l)+`

    `+q(l)+`

    `+tn(l)+`

    `+W(l)+`

    body_satisfied(R, I) :-
        step(I),
        body(R, _),
        #count { F : body(R, pos_fluent(F,V)), fluent(_,F,V) } = FPB,
        #count { F : body(R, pos_fluent(F,V)), fluent(_,F,V), holds(F, V, I) } = FPB,
        #count { F : body(R,neg_fluent(F,V)), fluent(_,F,V) } = FNB,
        #count { F : body(R,neg_fluent(F,V)), fluent(_, F,V), not holds(F,V,I) } = FNB,
        #count { F : body(R, pos_static(F,V)) } = SPB,
        #count { F : body(R, pos_static(F,V)), holds(static(F,V)) } = SPB,
        #count { F : body(R,neg_static(F,V)) } = SNB,
        #count { F : body(R,neg_static(F,V)), not holds(static(F,V)) } = SNB,
        #count { (A, B) : body(R, gt(A, B)) } = GT,
        #count { (A, B) : body(R, gt(A, B)), A > B } = GT,
        #count { (A, B) : body(R, gte(A, B)) } = GTE,
        #count { (A, B) : body(R, gte(A, B)), A >= B } = GTE,
        #count { (A, B) : body(R, lt(A, B)) } = LT,
        #count { (A, B) : body(R, lt(A, B)), A < B } = LT,
        #count { (A, B) : body(R, lte(A, B)) } = LTE,
        #count { (A, B) : body(R, lte(A, B)), A <= B } = LTE,
        #count { (A, B) : body(R, eq(A, B)) } = EQ,
        #count { (A, B) : body(R, eq(A, B)), A = B  } = EQ,
        #count { (A, B) : body(R, neq(A, B)) } = NEQ,
        #count { (A, B) : body(R, neq(A, B)), A != B  } = NEQ.

    holds(causal_law, F, V, I + 1) :-
        step(I),
        dlaw(R),
        action(R, A),
        occurs(A, I),
        body_satisfied(R, I),
        head(R, pos_fluent(F,V)),
        1 < n.
    
    nholds(causal_law_flip, F, V, I + 1) :-
        step(I),
        dlaw(R),
        action(R, A),
        occurs(A, I),
        body_satisfied(R, I),
        head(R, pos_fluent(F,V')),
        holds(F, V, I),
        V != V',
        1 < n.
    
    nholds(causal_law_neg, F, V, I + 1) :-
        step(I),
        dlaw(R),
        action(R, X),
        occurs(X, T),
        body_satisfied(R, T),
        head(R, neg_fluent(F,V)),
        I < n.
    
    holds(sc, F, V, I) :-
        state_constraint(R),
        head(R, pos_fluent(F,V)),
        body_satisfied(R, I).
    
    nholds(sc_neg, F, V, I) :-
        state_constraint(R),
        head(R, neg_fluent(F, V)),
        body_satisfied(R, I).
    
    nholds(cwa, F, V, I) :-
        step(I),
        fluent(defined, F, V),
        not holds(F, V, I).
    
    holds(inertia, F, V, I + 1) :-
        step(I),
        fluent(basic, F, V),
        holds(F, V, I),
        not nholds(F, V, I + 1),
        I < n. 
    
    nholds(inertia_neg, F, V, I + 1) :-
        step(I),
        fluent(basic, F, V),
        nholds(F, V, I),
        not holds(F, V, I + 1),
        I < n. 
    
    holds(F, V, I) :- holds(_, F, V, I).
    nholds(F, V, I) :- nholds(_, F, V, I).
    

    dom(S1, X) :- holds(static(link(S2), S1)), dom(S2, X).

    holds(static(link(booleans), universe)).
    dom(booleans, true). dom(booleans, false).

    holds(static(link(actions), universe)).

    holds(static(instance(X, S), true)) :- dom(S, X).

    #show.

    #show ("Duplicate values found", F, V, V', "at_time", I) : holds(F, V, I), holds(F, V', I), V != V'.
    #show ("Conflict found", F, V, I, R, R) : holds(R, F, V, I), nholds(R, F, V, I).
    
    %#show (F, V) : holds(F, V, n).
    `)}p.printReasoningModule=U}),$n=xn(function(Nn,p){var P=k&&k.__awaiter||function(E,b,v,e){function i(r){return r instanceof v?r:new v(function(c){c(r)})}return new(v||(v=Promise))(function(r,c){function m(S){try{f(e.next(S))}catch(O){c(O)}}function d(S){try{f(e.throw(S))}catch(O){c(O)}}function f(S){S.done?r(S.value):i(S.value).then(m,d)}f((e=e.apply(E,b||[])).next())})},L=k&&k.__generator||function(E,b){var v={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},e,i,r,c;return c={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function m(f){return function(S){return d([f,S])}}function d(f){if(e)throw new TypeError("Generator is already executing.");for(;v;)try{if(e=1,i&&(r=f[0]&2?i.return:f[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,f[1])).done)return r;(i=0,r)&&(f=[f[0]&2,r.value]);switch(f[0]){case 0:case 1:r=f;break;case 4:return v.label++,{value:f[1],done:!1};case 5:v.label++,i=f[1],f=[0];continue;case 7:f=v.ops.pop(),v.trys.pop();continue;default:if(!(r=v.trys,r=r.length>0&&r[r.length-1])&&(f[0]===6||f[0]===2)){v=0;continue}if(f[0]===3&&(!r||f[1]>r[0]&&f[1]<r[3])){v.label=f[1];break}if(f[0]===6&&v.label<r[1]){v.label=r[1],r=f;break}if(r&&v.label<r[2]){v.label=r[2],v.ops.push(f);break}r[2]&&v.ops.pop(),v.trys.pop();continue}f=b.call(E,v)}catch(S){f=[6,S],i=0}finally{e=r=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},j=k&&k.__read||function(E,b){var v=typeof Symbol=="function"&&E[Symbol.iterator];if(!v)return E;var e=v.call(E),i,r=[],c;try{for(;(b===void 0||b-- >0)&&!(i=e.next()).done;)r.push(i.value)}catch(m){c={error:m}}finally{try{i&&!i.done&&(v=e.return)&&v.call(e)}finally{if(c)throw c.error}}return r},u=k&&k.__spread||function(){for(var E=[],b=0;b<arguments.length;b++)E=E.concat(j(arguments[b]));return E},w=k&&k.__values||function(E){var b=typeof Symbol=="function"&&Symbol.iterator,v=b&&E[b],e=0;if(v)return v.call(E);if(E&&typeof E.length=="number")return{next:function(){return E&&e>=E.length&&(E=void 0),{value:E&&E[e++],done:!E}}};throw new TypeError(b?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(p,"__esModule",{value:!0}),p.makeSession=void 0;var x=Jn.pLimit(1);p.makeSession=function(E,b){var v=Yn.printModule(Wn.parseModule(b));return function(e,i){return x(function(){return P(void 0,void 0,void 0,function(){var r,c,m,d,f,S,O,C,q,tn,W,Z;return L(this,function(K){switch(K.label){case 0:return r=e.map(function(U){var l=Wn.ALM.Query.tryParse(U),y=l.flatMap(Yn.getVariablesFromFnLit).flatMap(function(A){var R,I=A.ret,B=A.args;return u(I??[],(R=B==null?void 0:B.flat(Infinity).filter(Yn.isVariable))!==null&&R!==void 0?R:[])}).map(function(A){return A.value}).join(",");return'#show ("'+U+'", "'+y+'",'+y+") : "+Yn.printQuery(U)}).join(`
`),c=i.map(function(U,l){var y=j(U,2),A=y[0],R=y[1],I=""+A+l,B=function(){var T=[];for(var V in R){var M=R[V];T.push("holds(static("+V+"("+I+"), "+M+")).")}return T.join(`
`)}();return`
      dom(`+A+", "+I+`).
      `+B+`
      occurs(`+I+", "+l+")."}).join(`
`),m=`
    #const n = `+(i.length+1)+`.
    `+v+`
    `+c+`
    `+r,[4,E(m,1)];case 1:d=K.sent(),f=d.Call[0].Witnesses[0].Value,S=new Map(),O=function(U){if(U.includes("Duplicate values found")||U.includes("Conflict found"))throw new Error(U);var l=j(Wn.ALM.QueryResult.tryParse(U),3),y=l[0],A=l[1],R=l[2],I=A.reduce(function(B,T,V){return B[T]=R[V],B},{});S.has(y)?S.set(y,u(S.get(y),[I])):S.set(y,[I])};try{for(C=w(f),q=C.next();!q.done;q=C.next())tn=q.value,O(tn)}catch(U){W={error:U}}finally{try{q&&!q.done&&(Z=C.return)&&Z.call(C)}finally{if(W)throw W.error}}return[2,S]}})})})}}}),_n=xn(function(Nn,p){Object.defineProperty(p,"__esModule",{value:!0}),Object.defineProperty(p,"makeSession",{enumerable:!0,get:function(){return $n.makeSession}})}),ne=Kn(_n);export default ne;
