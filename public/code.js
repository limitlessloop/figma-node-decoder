"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/*! 
 * Voca string library 1.4.0
 * https://vocajs.com
 *
 * Copyright Dmitri Pavlutin and other contributors
 * Released under the MIT license
 */
var t,n=(function(t,n){t.exports=function(){function t(e){return null==e}function n(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t(e)?n:Boolean(e)}function r(e){return"string"==typeof e}function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t(e)?n:r(e)?e:String(e)}function u(e,t){var r=i(e),u=n(t);return""===r?"":(u&&(r=r.toLowerCase()),r.substr(0,1).toUpperCase()+r.substr(1))}function a(e){return i(e,"").toLowerCase()}var o="\\d",s="\\s\\uFEFF\\xA0",c="\\uD800-\\uDBFF",f="\\uDC00-\\uDFFF",l="\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F",g="\\0-\\u02FF\\u0370-\\u1AAF\\u1B00-\\u1DBF\\u1E00-\\u20CF\\u2100-\\uD7FF\\uE000-\\uFE1F\\uFE30-\\uFFFF",p=new RegExp("(["+g+"]|["+c+"]["+f+"]|["+c+"](?!["+f+"])|(?:[^"+c+"]|^)["+f+"])(["+l+"]+)","g"),d=new RegExp("(["+c+"])(["+f+"])","g"),h=new RegExp("((?:["+g+"]|["+c+"]["+f+"]|["+c+"](?!["+f+"])|(?:[^"+c+"]|^)["+f+"])(?:["+l+"]+))|(["+c+"]["+f+"])|([\\n\\r\\u2028\\u2029])|(.)","g"),v=new RegExp("["+s+"]"),O=new RegExp("^["+s+"]+"),b=new RegExp("["+s+"]+$"),y=new RegExp("^"+o+"+$"),x=/[-[\]{}()*+!<=:?./\\^$|#,]/g,m=/[^A-Za-z0-9]/g,E=/[<>&"'`]/g,A=/(%{1,2})(?:(\d+)\$)?(\+)?([ 0]|'.{1})?(-)?(\d+)?(?:\.(\d+))?([bcdiouxXeEfgGs])?/g,N=/\.?0+$/g,j=/[gimuy]*$/,C=/<([A-Za-z0-9]+)>/g,S="a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F",F="\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e",w=new RegExp("(?:["+F+"]["+l+"]*)?(?:["+S+"]["+l+"]*)+|(?:["+F+"]["+l+"]*)+(?!["+S+"])|["+o+"]+|[\\u2700-\\u27BF]|[^\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7\\u2000-\\u206F"+s+"]+","g"),P=/[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g,R=new RegExp("^(?:["+S+F+"]["+l+"]*)+$"),T=new RegExp("^((?:["+S+F+"]["+l+"]*)|["+o+"])+$"),$=/^[\x01-\xFF]*$/;function I(e,t){return null==e?t:e}function D(e){return t(e)?null:r(e)?e:String(e)}function k(e,n,r){var u=i(e),a=void 0;if(t(n))a=$.test(u)?P:w;else if(n instanceof RegExp)a=n;else{var o=D(I(r,""));a=new RegExp(D(n),o)}return I(u.match(a),[])}function B(e,t){return 0===t?a(e):u(e,!0)}function L(e){var t=i(e);return""===t?"":k(t).map(B).join("")}function M(e){var t=i(e);return""===t?"":t.substr(0,1).toLowerCase()+t.substr(1)}function _(e){var t=i(e);return""===t?"":k(t).map(a).join("-")}function z(e){var t=i(e);return""===t?"":k(t).map(a).join("_")}function U(e){return i(e).toUpperCase()}function G(e){return i(e).split("").reduce(J,"")}function J(e,t){var n=t.toLowerCase(),r=t.toUpperCase();return e+(t===n?r:n)}function H(e,t){var n=i(e),r=Array.isArray(t)?t:[],a=$.test(n)?P:w;return n.replace(a,(function(e,t){return t>0&&r.indexOf(n[t-1])>=0?e.toLowerCase():u(e,!0)}))}function V(e,t,n){return e<=t?t:e>=n?n:e}var W=9007199254740991;function Y(e){return e===1/0?W:e===-1/0?-W:~~e}function Z(e,n,r){var u=i(e),a=t(n)?u.length:V(Y(n),0,W),o=i(r,"...");return a>=u.length?u:u.substr(0,n-o.length)+o}function X(e,t){return i(e).charAt(t)}var q=55296,K=56319,Q=56320,ee=57343;function te(e){return e>=q&&e<=K}function ne(e){return e>=Q&&e<=ee}function re(e,t){return 1024*(e-q)+t-Q+65536}function ie(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t(e)?n:"number"==typeof e?e:Number(e)}function ue(e,t){return e!=e?t:e}function ae(e,t){var n=i(e),r=n.length,u=ie(t);if(!((u=ue(u,0))<0||u>=r)){var a=n.charCodeAt(u),o=void 0;return te(a)&&r>u+1&&ne(o=n.charCodeAt(u+1))?re(a,o):a}}function oe(e,n){var r=i(e),u=t(n)?1:V(Y(n),0,W);return r.length<=u?r:r.substr(0,u)}function se(e,t){var n=i(e),r=ie(t),u=void 0,a=0;for(r=ue(r,0);null!==(u=h.exec(n));){if(a===r)return h.lastIndex=0,u[0];a++}return""}function ce(e,n){var r=i(e),u=t(n)?1:V(Y(n),0,W);return r.length<=u?r:r.substr(r.length-u,u)}function fe(e,n,r){var u=i(e),a=t(n)?u.length:V(Y(n),0,W),o=i(r,"...");if(a>=u.length)return u;var s=$.test(u)?P:w,c=0;return u.replace(s,(function(e,t){var n=t+e.length;n<=a-o.length&&(c=n)})),u.substr(0,c)+o}function le(e,t,n){return i(e).slice(t,n)}function ge(e,t,n){return i(e).substr(t,n)}function pe(e,t,n){return i(e).substring(t,n)}function de(e){return i(e).length}function he(e){return i(e).replace(p,"*").replace(d,"*").length}function ve(e,t){var n=i(e),r=i(t),u=r.length,a=0,o=0;if(""===n||""===r)return a;do{-1!==(o=n.indexOf(r,o))&&(a++,o+=u)}while(-1!==o);return a}var Oe=Array.prototype.reduce;function be(e,t,n){var r=i(e);if(""===r||"function"!=typeof t)return 0;var u=t.bind(n);return Oe.call(r,(function(e,t,n){return u(t,n,r)?e+1:e}),0)}function ye(e,t,n){return k(e,t,n).length}function xe(){this.index=0}xe.prototype.increment=function(){this.index++},xe.prototype.incrementOnEmptyPosition=function(e){t(e)&&this.increment()},xe.prototype.getIndexByPosition=function(e){return t(e)?this.index:e-1};var me="i",Ee="b",Ae="c",Ne="d",je="o",Ce="u",Se="x",Fe="X",we="e",Pe="E",Re="f",Te="g",$e="G",Ie="s",De="'",ke="+",Be="-",Le="%%",Me=2,_e=8,ze=16;function Ue(e,n){for(var r=i(e),u=t(n)?1:V(Y(n),0,W),a="";u;)1&u&&(a+=r),u>1&&(r+=r),u>>=1;return a}function Ge(e,t){return Ue(e,Y(t/e.length)+t%e.length).substr(0,t)}function Je(e,n,r){var u=i(e),a=t(n)?0:V(Y(n),0,W),o=i(r," ");return a<=u.length?u:Ge(o,a-u.length)+u}function He(e,n,r){var u=i(e),a=t(n)?0:V(Y(n),0,W),o=i(r," ");return a<=u.length?u:u+Ge(o,a-u.length)}function Ve(e,n){var r=n.width;return t(r)||e.length>=r?e:(n.alignmentSpecifier===Be?He:Je)(e,r,n.getPaddingCharacter())}function We(e,t,n){return n.signSpecifier===ke&&e>=0&&(t=ke+t),t}function Ye(e,t){var n=parseFloat(e),r=void 0;isNaN(n)&&(n=0);var u=ie(t.precision,6);switch(t.typeSpecifier){case Re:r=n.toFixed(u);break;case we:r=n.toExponential(u);break;case Pe:r=n.toExponential(u).toUpperCase();break;case Te:case $e:r=Ze(n,u,t)}return i(r=We(n,r,t))}function Ze(e,t,n){if(0===e)return"0";var r=0===t?1:t,i=e.toPrecision(r).replace(N,"");return n.typeSpecifier===$e&&(i=i.toUpperCase()),i}function Xe(e,t){var n=parseInt(e);switch(isNaN(n)&&(n=0),n>>>=0,t.typeSpecifier){case Ae:n=String.fromCharCode(n);break;case Ee:n=n.toString(Me);break;case je:n=n.toString(_e);break;case Se:n=n.toString(ze);break;case Fe:n=n.toString(ze).toUpperCase()}return i(n)}function qe(e,t){var n=parseInt(e);return isNaN(n)&&(n=0),We(n,D(n),t)}function Ke(e,n){var r=e,i=n.precision;return!t(i)&&r.length>i&&(r=Z(r,i,"")),r}function Qe(e,t){var n=void 0;switch(t.typeSpecifier){case Ie:n=Ke;break;case Ne:case me:n=qe;break;case Ae:case Ee:case je:case Se:case Fe:case Ce:n=Xe;break;case Re:case we:case Pe:case Te:case $e:n=Ye}return Ve(n(e,t),t)}function et(e){this.percent=e.percent,this.signSpecifier=e.signSpecifier,this.paddingSpecifier=e.paddingSpecifier,this.alignmentSpecifier=e.alignmentSpecifier,this.width=e.width,this.precision=e.precision,this.typeSpecifier=e.typeSpecifier}function tt(e,n,r){if(t(r.typeSpecifier))throw new Error("sprintf(): Unknown type specifier");if(e>n-1)throw new Error("sprintf(): Too few arguments");if(e<0)throw new Error("sprintf(): Argument number must be greater than zero")}function nt(e,t,n,r,i,u,a,o,s,c,f){var l=new et({percent:r,signSpecifier:u,paddingSpecifier:a,alignmentSpecifier:o,width:ie(s,null),precision:ie(c,null),typeSpecifier:f});if(l.isPercentLiteral())return n.slice(1);var g=e.getIndexByPosition(i);return e.incrementOnEmptyPosition(i),tt(g,t.length,l),Qe(t[g],l)}function rt(e){var t=i(e);if(""===t)return t;for(var n=arguments.length,r=Array(n>1?n-1:0),u=1;u<n;u++)r[u-1]=arguments[u];var a=nt.bind(void 0,new xe,r);return t.replace(A,a)}function it(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function ut(e,t){return rt.apply(void 0,[e].concat(it(I(t,[]))))}et.prototype.isPercentLiteral=function(){return Le===this.percent},et.prototype.getPaddingCharacter=function(){var e=I(this.paddingSpecifier," ");return 2===e.length&&e[0]===De&&(e=e[1]),e};var at={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};function ot(e){return at[e]}function st(e){return i(e).replace(E,ot)}function ct(e){return i(e).replace(x,"\\$&")}var ft={"<":/(&lt;)|(&#x0*3c;)|(&#0*60;)/gi,">":/(&gt;)|(&#x0*3e;)|(&#0*62;)/gi,"&":/(&amp;)|(&#x0*26;)|(&#0*38;)/gi,'"':/(&quot;)|(&#x0*22;)|(&#0*34;)/gi,"'":/(&#x0*27;)|(&#0*39;)/gi,"`":/(&#x0*60;)|(&#0*96;)/gi},lt=Object.keys(ft);function gt(e,t){return e.replace(ft[t],t)}function pt(e){var t=i(e);return lt.reduce(gt,t)}function dt(e,t,n){return i(e).indexOf(t,n)}function ht(e,t,n){return i(e).lastIndexOf(t,n)}function vt(e,n,r){var u=i(e),a=t(r)?0:V(Y(r),0,u.length),o=u.substr(a).search(n);return-1===o||isNaN(a)||(o+=a),o}function Ot(e,t,n){var r=i(e),u=i(t),a=ie(n);return a<0||a>r.length||""===u?r:r.slice(0,a)+u+r.slice(a)}var bt={3:"Ξξ",8:"Θθ",A:"AÀÁÂÃÄÅĀĂĄǍǞǠǺȀȂȦȺḀẠẢẤẦẨẪẬẮẰẲẴẶⒶⱯＡΆΑА",B:"BƁƂɃḂḄḆⒷＢΒБ",C:"CÇĆĈĊČƇȻḈⒸꜾＣЦ",D:"DĎĐƉƊƋḊḌḎḐḒⒹꝹＤÐΔД",E:"EÈÉÊËĒĔĖĘĚƎƐȄȆȨḔḖḘḚḜẸẺẼẾỀỂỄỆⒺＥΈΕЕЭ",F:"FƑḞⒻꝻＦΦФ",G:"GĜĞĠĢƓǤǦǴḠⒼꝽꝾꞠＧΓГҐ",H:"HĤĦȞḢḤḦḨḪⒽⱧⱵꞍＨΉΗХ",I:"IÌÍÎÏĨĪĬĮİƗǏȈȊḬḮỈỊⒾＩΊΙΪІИ",J:"JĴɈⒿＪЙ",K:"KĶƘǨḰḲḴⓀⱩꝀꝂꝄꞢＫΚК",L:"LĹĻĽĿŁȽḶḸḺḼⓁⱠⱢꝆꝈꞀＬΛЛ",M:"MƜḾṀṂⓂⱮＭΜМ",N:"NÑŃŅŇƝǸȠṄṆṈṊⓃꞐꞤＮΝН",O:"OÒÓÔÕÖØŌŎŐƆƟƠǑǪǬǾȌȎȪȬȮȰṌṎṐṒỌỎỐỒỔỖỘỚỜỞỠỢⓄꝊꝌＯΌΟО",P:"PƤṔṖⓅⱣꝐꝒꝔＰΠП",Q:"QɊⓆꝖꝘＱ",R:"RŔŖŘȐȒɌṘṚṜṞⓇⱤꝚꞂꞦＲΡР",S:"SŚŜŞŠȘṠṢṤṦṨẞⓈⱾꞄꞨＳΣС",T:"TŢŤŦƬƮȚȾṪṬṮṰⓉꞆＴΤТ",U:"UÙÚÛÜŨŪŬŮŰŲƯǓǕǗǙǛȔȖɄṲṴṶṸṺỤỦỨỪỬỮỰⓊＵУЪ",V:"VƲɅṼṾⓋꝞＶВ",W:"WŴẀẂẄẆẈⓌⱲＷΏΩ",X:"XẊẌⓍＸΧ",Y:"YÝŶŸƳȲɎẎỲỴỶỸỾⓎＹΎΥΫЫ",Z:"ZŹŻŽƵȤẐẒẔⓏⱫⱿꝢＺΖЗ",a:"aàáâãäåāăąǎǟǡǻȁȃȧɐḁẚạảấầẩẫậắằẳẵặⓐⱥａάαа",b:"bƀƃɓḃḅḇⓑｂβб",c:"cçćĉċčƈȼḉↄⓒꜿｃц",d:"dďđƌɖɗḋḍḏḑḓⓓꝺｄðδд",e:"eèéêëēĕėęěǝȅȇȩɇɛḕḗḙḛḝẹẻẽếềểễệⓔｅέεеэ",f:"fƒḟⓕꝼｆφф",g:"gĝğġģǥǧǵɠᵹḡⓖꝿꞡｇγгґ",h:"hĥħȟɥḣḥḧḩḫẖⓗⱨⱶｈήηх",i:"iìíîïĩīĭįıǐȉȋɨḭḯỉịⓘｉΐίιϊиі",j:"jĵǰɉⓙｊй",k:"kķƙǩḱḳḵⓚⱪꝁꝃꝅꞣｋκк",l:"lĺļľŀłſƚɫḷḹḻḽⓛⱡꝇꝉꞁｌλл",m:"mɯɱḿṁṃⓜｍμм",n:"nñńņňŉƞǹɲṅṇṉṋⓝꞑꞥｎνн",o:"oòóôõöøōŏőơǒǫǭǿȍȏȫȭȯȱɔɵṍṏṑṓọỏốồổỗộớờởỡợⓞꝋꝍｏοόо",p:"pƥᵽṕṗⓟꝑꝓꝕｐπп",q:"qɋⓠꝗꝙｑ",r:"rŕŗřȑȓɍɽṙṛṝṟⓡꝛꞃꞧｒρр",s:"sßśŝşšșȿṡṣṥṧṩẛⓢꞅꞩｓςσс",t:"tţťŧƭțʈṫṭṯṱẗⓣⱦꞇｔτт",u:"uùúûüũūŭůűųưǔǖǘǚǜȕȗʉṳṵṷṹṻụủứừửữựⓤｕуъ",v:"vʋʌṽṿⓥꝟｖв",w:"wŵẁẃẅẇẉẘⓦⱳｗωώ",x:"xẋẍⓧｘχ",y:"yýÿŷƴȳɏẏẙỳỵỷỹỿⓨｙΰυϋύы",z:"zźżžƶȥɀẑẓẕⓩⱬꝣｚζз",OE:"Œ",oe:"œ",AE:"ÆǢǼ",ae:"æǣǽ",hv:"ƕ",OI:"Ƣ",oi:"ƣ",DZ:"ǄǱ",Dz:"ǅǲ",dz:"ǆǳ",LJ:"Ǉ",Lj:"ǈ",lj:"ǉ",NJ:"Ǌ",Nj:"ǋ",nj:"ǌ",OU:"Ȣ",ou:"ȣ",TZ:"Ꜩ",tz:"ꜩ",AA:"Ꜳ",aa:"ꜳ",AO:"Ꜵ",ao:"ꜵ",AU:"Ꜷ",au:"ꜷ",AV:"ꜸꜺ",av:"ꜹꜻ",AY:"Ꜽ",ay:"ꜽ",OO:"Ꝏ",oo:"ꝏ",VY:"Ꝡ",vy:"ꝡ",TH:"Þ",th:"þ",PS:"Ψ",ps:"ψ",Yo:"Ё",Ye:"Є",Yi:"Ї",Zh:"Ж",Ch:"Ч",Sh:"ШЩ","":"Ьь",Yu:"Ю",Ya:"Я",zh:"ж",ch:"ч",sh:"шщ",yu:"ю",ya:"я",yo:"ё",ye:"є",yi:"ї"},yt=null;function xt(){return null!==yt||(yt={},Object.keys(bt).forEach((function(e){for(var t=bt[e],n=0;n<t.length;n++){var r=t[n];yt[r]=e}}))),yt}function mt(e){var t=xt()[e];return t||e}function Et(e,t){return t}function At(e){var t=i(e);return""===t?"":t.replace(m,mt).replace(p,Et)}function Nt(e,n,r){var u=i(e),a=t(n)?0:V(Y(n),0,W),o=i(r," ");if(a<=u.length)return u;var s=a-u.length,c=Y(s/2),f=s%2;return Ge(o,c)+u+Ge(o,c+f)}function jt(e,t,n){return i(e).replace(t,n)}function Ct(e){return e.toString().match(j)[0]}function St(e,n,r){var u=i(e),a=D(n);return null!==a&&(""===a||(r=t(r)?0:V(Y(r),0,u.length),-1!==u.indexOf(a,r)))}function Ft(e,t){var n=Ct(e);return St(n,t)?e:new RegExp(e.source,n+t)}function wt(e,t,n){var r=i(e),u=t;return t instanceof RegExp?t.global||(u=Ft(t,"g")):u=new RegExp(ct(t),"g"),r.replace(u,n)}function Pt(e){return i(e).split("").reverse().join("")}function Rt(e){for(var t=i(e),n="",r=(t=t.replace(p,(function(e,t,n){return Rt(n)+t})).replace(d,"$2$1")).length;r--;)n+=t.charAt(r);return n}function Tt(e){var t=i(e);return""===t?"":_(At(t).replace(m,"-"))}function $t(e,t,n,r){var u=i(e),a=i(r),o=ie(t);o<0?(o=u.length+o)<0&&(o=0):o>u.length&&(o=u.length);var s=ie(n,u.length-o);return s<0&&(s=0),u.slice(0,o)+a+u.slice(o+s)}var It=function(){function e(e,t){var n=[],r=!0,i=!1,u=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,u=e}finally{try{!r&&o.return&&o.return()}finally{if(i)throw u}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function Dt(e,t,n){var u=i(e),a=void 0,o=void 0;if(r(t)&&r(n))a=t.split(""),o=n.split("");else{var s=kt(I(t,{})),c=It(s,2);a=c[0],o=c[1]}var f=a.length;if(0===f)return u;for(var l="",g=o.length,p=0;p<u.length;p++){for(var d=!1,h=void 0,v=0;v<f&&v<g;v++){var O=a[v];if(u.substr(p,O.length)===O){d=!0,h=o[v],p=p+O.length-1;break}}l+=d?h:u[p]}return l}function kt(e){var t=Object.keys(e),n=t.sort(Bt).map((function(t){return e[t]}));return[t,n]}function Bt(e,t){return e.length===t.length?0:e.length<t.length?1:-1}var Lt=Array.prototype.reduce;function Mt(e,n){var r=i(e);if(""===n||""===r)return r;var u=D(n);if(t(u))return r.replace(O,"");var a=!0;return Lt.call(r,(function(e,t){return a&&St(u,t)?e:(a=!1,e+t)}),"")}var _t=Array.prototype.reduceRight;function zt(e,n){var r=i(e);if(""===n||""===r)return r;var u=D(n);if(t(u))return r.replace(b,"");var a=!0;return _t.call(r,(function(e,t){return a&&St(u,t)?e:(a=!1,t+e)}),"")}function Ut(e,n){var r=i(e);if(""===n||""===r)return r;var u=D(n);return t(u)?r.trim():zt(Mt(r,u),u)}var Gt="width",Jt="newLine",Ht="indent",Vt="cut";function Wt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i(e),r=Yt(t),u=r.width,a=r.newLine,o=r.indent,s=r.cut;if(""===n||u<=0)return o;for(var c=n.length,f=n.substring.bind(n),l=0,g="";c-l>u;)if(" "!==n[l]){var p=n.lastIndexOf(" ",u+l);p>=l?(g+=o+f(l,p)+a,l=p+1):s?(g+=o+f(l,u+l)+a,l+=u):(p=n.indexOf(" ",u+l))>=0?(g+=o+f(l,p)+a,l=p+1):(g+=o+f(l),l=c)}else l++;return l<c&&(g+=o+f(l)),g}function Yt(e){return{width:ie(e[Gt],75),newLine:i(e[Jt],"\n"),indent:i(e[Ht],""),cut:n(e[Vt],!1)}}function Zt(e,n,r){if(t(n))return!1;var u=i(e),a=i(n);if(""===a)return!0;r=t(r)?u.length:V(Y(r),0,u.length),r-=a.length;var o=u.indexOf(a,r);return-1!==o&&o===r}function Xt(e){var t=i(e);return R.test(t)}function qt(e){var t=i(e);return T.test(t)}function Kt(e){return 0===i(e).trim().length}function Qt(e){var t=i(e);return y.test(t)}function en(e){return 0===i(e).length}function tn(e){var t=i(e);return Xt(t)&&t.toLowerCase()===t}function nn(e){var n="object"!=typeof e||t(e)?e:Number(e);return("number"==typeof n||"string"==typeof n)&&!isNaN(n-parseFloat(n))}function rn(e){var t=i(e);return Xt(t)&&t.toUpperCase()===t}function un(e,t,n){var r=i(e),u=i(n),a=void 0;if(!(t instanceof RegExp)){if(null===(a=D(t)))return!1;t=new RegExp(a,u)}return t.test(r)}function an(e,n,r){var u=i(e),a=D(n);return null!==a&&(""===a||(r=t(r)?0:V(Y(r),0,u.length),u.substr(r,a.length)===a))}function on(e){return i(e).split("")}function sn(e){for(var t=i(e),n=t.length,r=[],u=0,a=void 0;u<n;)a=ae(t,u),r.push(a),u+=a>65535?2:1;return r}function cn(e){return I(i(e).match(h),[])}function fn(e,t,n){return i(e).split(t,n)}var ln="\ufeff";function gn(e){var t=i(e);return""===t?"":t[0]===ln?t.substring(1):t}function pn(e,t,n){var r=0;return(!(arguments.length>3&&void 0!==arguments[3])||arguments[3])&&(r=1-t.length),e.substr(n+r,t.length).toLowerCase()===t}function dn(e){for(var t=[],n=void 0;null!==(n=C.exec(e));)t.push(n[1]);return t}var hn=0,vn=1,On=2;function bn(e){for(var t=hn,n="",r=0;t!==On;){var i=e[r++].toLowerCase();switch(i){case"<":break;case">":t=On;break;default:v.test(i)?t===vn&&(t=On):(t===hn&&(t=vn),"/"!==i&&(n+=i))}}return n}var yn=0,xn=1,mn=2,En=3;function An(e,t,n){if(""===(e=i(e)))return"";if(!Array.isArray(t)){var r=i(t);t=""===r?[]:dn(r)}for(var u=i(n),a=e.length,o=t.length>0,s=pn.bind(null,e),c=yn,f=0,l="",g="",p=null,d=0;d<a;d++){var h=e[d],v=!1;switch(h){case"<":if(p)break;if(s("< ",d,!1)){v=!0;break}if(c===yn){v=!0,c=xn;break}if(c===xn){f++;break}v=!0;break;case"!":if(c===xn&&s("<!",d)){c=mn;break}v=!0;break;case"-":if(c===mn&&s("!--",d)){c=En;break}v=!0;break;case'"':case"'":c===xn&&(p===h?p=null:p||(p=h)),v=!0;break;case"E":case"e":if(c===mn&&s("doctype",d)){c=xn;break}v=!0;break;case">":if(f>0){f--;break}if(p)break;if(c===xn){if(p=null,c=yn,o){var O=bn(g+=">");-1!==t.indexOf(O.toLowerCase())?l+=g:l+=u,g=""}else l+=u;break}if(c===mn||c===En&&s("--\x3e",d)){p=null,c=yn,g="";break}v=!0;break;default:v=!0}if(v)switch(c){case yn:l+=h;break;case xn:o&&(g+=h)}}return l}var Nn=null;function jn(){return null!==Nn?Nn:Nn="object"==typeof e&&e.Object===Object?e:"object"==typeof self&&self.Object===Object?self:new Function("return this")()}var Cn=jn(),Sn=Cn.v;function Fn(){return this===Cn.v&&(Cn.v=Sn),this}var wn={camelCase:L,capitalize:u,decapitalize:M,kebabCase:_,lowerCase:a,snakeCase:z,swapCase:G,titleCase:H,upperCase:U,count:de,countGraphemes:he,countSubstrings:ve,countWhere:be,countWords:ye,escapeHtml:st,escapeRegExp:ct,unescapeHtml:pt,sprintf:rt,vprintf:ut,indexOf:dt,lastIndexOf:ht,search:vt,charAt:X,codePointAt:ae,first:oe,graphemeAt:se,last:ce,prune:fe,slice:le,substr:ge,substring:pe,truncate:Z,insert:Ot,latinise:At,pad:Nt,padLeft:Je,padRight:He,repeat:Ue,replace:jt,replaceAll:wt,reverse:Pt,reverseGrapheme:Rt,slugify:Tt,splice:$t,tr:Dt,trim:Ut,trimLeft:Mt,trimRight:zt,wordWrap:Wt,endsWith:Zt,includes:St,isAlpha:Xt,isAlphaDigit:qt,isBlank:Kt,isDigit:Qt,isEmpty:en,isLowerCase:tn,isNumeric:nn,isString:r,isUpperCase:rn,matches:un,startsWith:an,chars:on,codePoints:sn,graphemes:cn,split:fn,words:k,stripBom:gn,stripTags:An,noConflict:Fn,version:"1.4.0"};function Pn(e,t){this._wrappedValue=e,this._explicitChain=t}function Rn(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=e.apply(void 0,[this._wrappedValue].concat(n));return this._explicitChain||"string"==typeof i?new Pn(i,this._explicitChain):i}}function Tn(e){return new Pn(e,!0)}function $n(e){return new Pn(e,!1)}return Pn.prototype.value=function(){return this._wrappedValue},Pn.prototype.valueOf=function(){return this.value()},Pn.prototype.toJSON=function(){return this.value()},Pn.prototype.toString=function(){return String(this.value())},Pn.prototype.chain=function(){return new Pn(this._wrappedValue,!0)},Pn.prototype.thru=function(e){return"function"==typeof e?new Pn(e(this._wrappedValue),this._explicitChain):this},Pn.prototype._explicitChain=!0,Object.keys(wn).forEach((function(e){Pn.prototype[e]=Rn(wn[e])})),(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e})($n,wn,{chain:Tn}),$n}()}(t={exports:{}},t.exports),t.exports);function r(e){var t=/\s*\n(\s+)/.exec(e);if(t){var n=t[1];e=e.replace(new RegExp("^"+n,"mg"),"")}return e=e.replace(/^\n/,"")}var i="";const u=new class{constructor(){function e(e,...t){if(Array.isArray(e)){let n="";e.forEach(((e,r)=>{0===t[r]&&(t[r]=t[r].toString()),n+=e+(t[r]||"")})),i+=r(n)}if(!e)return i}return e.prepend=function(e,...t){if(Array.isArray(e)){let n="";e.forEach(((e,r)=>{0===t[r]&&(t[r]=t[r].toString()),n+=e+(t[r]||"")})),i=r(n)+i}},e}};function a(e){var t;return"PAGE"!==e.type&&("INSTANCE"===(null===(t=e.parent)||void 0===t?void 0:t.type)||a(e.parent))}function o(e){return Array.isArray(e)?e:[e]}const s={exportSettings:[]},c={overflowDirection:"NONE",numberOfFixedChildren:0},f={visible:!0,locked:!1},l={expanded:!0,backgrounds:[{type:"SOLID",visible:!0,opacity:1,blendMode:"NORMAL",color:{r:1,g:1,b:1}}]},g={cornerRadius:0,cornerSmoothing:0,topLeftRadius:0,topRightRadius:0,bottomLeftRadius:0,bottomRightRadius:0},p={absoluteTransform:[],relativeTransform:[],x:0,y:0,rotation:0,width:0,height:0,constrainProportions:!1,constraints:{horizontal:"MIN",vertical:"MIN"},layoutAlign:"INHERIT",layoutGrow:0},d={fills:[{type:"SOLID",visible:!0,opacity:1,blendMode:"NORMAL",color:{r:1,g:1,b:1}}],strokeWeight:1,strokeMiterLimit:4,strokeAlign:"INSIDE",strokeCap:"NONE",strokeJoin:"MITER",dashPattern:[],fillStyleId:"",strokeStyleId:""},h=Object.assign(Object.assign(Object.assign({},l),p),{layoutMode:"NONE",primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"FIXED",primaryAxisAlignItems:"MIN",counterAxisAlignItems:"MIN",paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0,itemSpacing:0,verticalPadding:0,horizontalPadding:0,layoutGrids:[],gridStyleId:"",clipsContent:!0,guides:[]}),v={opacity:1,blendMode:"PASS_THROUGH",isMask:!1,effects:[]},O={FRAME:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),h),v),g),f),c),s),l),GROUP:Object.assign(Object.assign(Object.assign({},l),f),s),SLICE:Object.assign(Object.assign({},f),s),BOOLEAN_OPERATION:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},f),v),l),g),p),RECTANGLE:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),v),g),f),s),p),LINE:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),v),f),s),g),p),ELLIPSE:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),v),f),s),g),p),POLYGON:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),v),f),s),g),p),STAR:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),v),f),s),g),p),VECTOR:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),v),f),s),g),p),TEXT:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),v),f),s),g),p),{fontSize:12,hasMissingFont:!1,paragraphIndent:0,paragraphSpacing:0,textAlignHorizontal:"LEFT",textAlignVertical:"TOP",textAutoResize:"WIDTH_AND_HEIGHT",textCase:"ORIGINAL",textDecoration:"NONE",textStyleId:"",letterSpacing:{unit:"PERCENT",value:0},characters:"",autoRename:!0}),COMPONENT:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),h),v),f),c),s),g),COMPONENT_SET:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),h),v),g),f),c),s),INSTANCE:{}},b=["id","parent","removed","children","width","height","overlayPositionType","overlayBackground","overlayBackgroundInteraction","reactions","remote","key","type","defaultVariant","hasMissingFont","characters","relativeTransform","absoluteTransform","horizontalPadding","verticalPadding"],y=["characters","fontSize","fontName","textCase","textDecoration","letterSpacing","lineHeight","textAlignVertical","textAlignHorizontal","textAutoResize"],x=["fillStyleId","strokeStyleId","textStyleId","effectStyleId","gridStyleId","backgroundStyleId"];var m,E,A=["width","height"],N=[],j=[];function C(e){var t=[];if(null!==i){e=o(e);for(var r=0;r<e.length;r++){var i=e[r];"PAGE"===i.type?t.push("figma.currentPage"):t.push(n.camelCase(i.type)+i.id.replace(/\:|\;/g,"_"))}1===t.length&&(t=t[0])}return t}function S(e,t,n,r,i){var u;let a;for(var o=0;o<e.length;o++){n||(r=o,i=0),a=e[o],"COMPONENT"===a.type&&null==a.parent&&(a=a.clone(),j.push(a));let f=r,l=(null===(u=a.type)||void 0===u?void 0:u.toLowerCase())+(o+1+i-f);n||(n="figma.currentPage");var s={ref:l,level:i,sel:f,parent:n},c=!1;t.during&&(c=t.during(a,s)),a.children&&(++i,c&&e[o+1]?S([e[++o]],t,l,r,i):S(a.children,t,l,r,i),t.after&&t.after(a,s))}}function F(e,t){u`${function(e,t){var n,r="",i="",u="",a="";for(const c in e){let f=e[c];if(A.includes(c)&&!1!==(null==t?void 0:t.resize)&&"width"===c){var o=e.width,s=e.height;"FRAME"===e.type&&e.width<.01&&(o=.01),"FRAME"===e.type&&e.height<.01&&(s=.01),"FRAME"===e.type&&e.width<.01||e.height<.01?r+=`${C(e)}.resizeWithoutConstraints(${o}, ${s}) \n`:r+=`${C(e)}.resize(${o}, ${s}) \n`}y.includes(c)&&(u+=`\t\t${C(e)}.${c} = ${JSON.stringify(f)}\n`),"characters"===c&&(n=!0,(m=m||[]).some((t=>JSON.stringify(t)===JSON.stringify(e.fontName)))||m.push(e.fontName),a+=`${C(e)}.fontName = {\n\t\t\t\t\t\t\tfamily: ${JSON.stringify(e.fontName.family)},\n\t\t\t\t\t\t\tstyle: ${JSON.stringify(e.fontName.style)}\n\t\t\t\t\t\t}`),""===f||JSON.stringify(f)===JSON.stringify(O[e.type][c])||b.includes(c)||y.includes(c)||x.includes(c)||f===figma.mixed||("strokes"===c&&console.log(f),i+=`${C(e)}.${c} = ${JSON.stringify(f)}\n`)}var c="";return n&&(c=`loadFonts().then(\n\t(res) => {\n\t\t${a}\n${u}\n\t}\n)\n`),r+=`\n${i}`,r+`${c}`}(e,t)}`}function w(e){var t,n,r;"BOOLEAN_OPERATION"!==(null===(t=e.parent)||void 0===t?void 0:t.type)&&"COMPONENT_SET"!==(null===(n=e.parent)||void 0===n?void 0:n.type)&&"GROUP"!==(null===(r=e.parent)||void 0===r?void 0:r.type)&&u`${C(e.parent)}.appendChild(${C(e)})\n`}function P(e){S(e=o(e),{during:(e,{ref:t,level:r,sel:i,parent:o})=>(function(e){"INSTANCE"!==e.type||a(e)||(N.includes(e.mainComponent)||P(e.mainComponent),u`


// Create INSTANCE
var ${C(e)} = ${C(e.mainComponent)}.createInstance()\n`,w(e),u`${C(e)}.x = ${e.x}
		${C(e)}.y = ${e.y}`),"INSTANCE"===e.type&&(N.some((t=>JSON.stringify(t)===JSON.stringify(e.mainComponent)))||N.push(e.mainComponent))}(e),function(e){if("COMPONENT"===e.type&&N.some((t=>JSON.stringify(t)===JSON.stringify(e))))return!0;"GROUP"===e.type||"INSTANCE"===e.type||"COMPONENT_SET"===e.type||"BOOLEAN_OPERATION"===e.type||a(e)||("COMPONENT"!==e.type&&(u`
			
			// Create ${e.type}
var ${C(e)} = figma.create${n.titleCase(e.type)}()\n`,F(e),w(e)),"COMPONENT"===e.type&&(N.some((t=>JSON.stringify(t)===JSON.stringify(e)))||(u`
				
				// Create ${e.type}
var ${C(e)} = figma.create${n.titleCase(e.type)}()\n`,F(e),w(e),N.push(e))))}(e)),after(e,{ref:t,level:r,sel:i,parent:o}){!function(e){var t,n,r;if("GROUP"===e.type){var i,a=C(e.children);Array.isArray(a)&&(a=C(e.children).join(", ")),i="GROUP"===(null===(t=e.parent)||void 0===t?void 0:t.type)||"COMPONENT_SET"===(null===(n=e.parent)||void 0===n?void 0:n.type)||"BOOLEAN_OPERATION"===(null===(r=e.parent)||void 0===r?void 0:r.type)?"figma.currentPage":`${C(e.parent)}`,u`
		
		// Create GROUP
		var ${C(e)} = figma.group([${a}], ${i})\n`}}(e),function(e){var t,r,i;if("BOOLEAN_OPERATION"===e.type&&!a(e)){var o,s=C(e.children);Array.isArray(s)&&(s=C(e.children).join(", ")),o="GROUP"===(null===(t=e.parent)||void 0===t?void 0:t.type)||"COMPONENT_SET"===(null===(r=e.parent)||void 0===r?void 0:r.type)||"BOOLEAN_OPERATION"===(null===(i=e.parent)||void 0===i?void 0:i.type)?"figma.currentPage":`${C(e.parent)}`,u`
		
		// Create BOOLEAN_OPERATION
		var ${C(e)} = figma.${n.lowerCase(e.booleanOperation)}([${s}], ${o})\n`,e.parent.x,e.x,e.parent.y,e.y,F(e,{resize:!1})}}(e),function(e,t){var n,r,i,a;"COMPONENT_SET"===e.type&&(a="GROUP"===(null===(n=e.parent)||void 0===n?void 0:n.type)||"COMPONENT_SET"===(null===(r=e.parent)||void 0===r?void 0:r.type)||"BOOLEAN_OPERATION"===(null===(i=e.parent)||void 0===i?void 0:i.type)?"figma.currentPage":`${C(e.parent)}`,u`var ${C(e)} = figma.combineAsVariants([${C(e.children).join(", ")}], ${a})\n`,F(e))}(e)}})}figma.ui.onmessage=e=>{"code-rendered"===e.type&&(E=!0),"code-copied"===e.type&&figma.notify("Copied to clipboard")},figma.currentPage.selection.length>0?(!function(){figma.showUI(__html__,{width:320,height:480}),P(figma.currentPage.selection),m&&u.prepend`
		async function loadFonts() {
			await Promise.all([
				${m.map((e=>`figma.loadFontAsync({\n\t\t\t\t\tfamily: ${JSON.stringify(e.family)},\n\t\t\t\t\tstyle: ${JSON.stringify(e.style)}\n\t\t\t\t\t})`))}
			])
		}\n`;for(var e=0;e<j.length;e++)j[e].remove();var t,n=u().match(/(?=[\s\S])(?:.*\n?){1,8}/g);t={type:"string-received",value:n},figma.ui.postMessage(t)}(),setTimeout((function(){E||(figma.notify("Plugin timed out"),figma.closePlugin())}),6e3)):(figma.notify("Select nodes to decode"),figma.closePlugin());