parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"g4tf":[function(require,module,exports) {
var e="May 23, 2020 12:16 pm",n=new Date(e).getTime();document.getElementById("countdown-date").innerHTML=e;var t,r=function(e,n){return 1===n?e:e+"s"},a=function(){var e=(new Date).getTime(),a=n-e,d=Math.floor(a/864e5),o=Math.floor(a%864e5/36e5),i=Math.floor(a%36e5/6e4),m=document.getElementById("days");m.innerHTML="";var c=document.createElement("div");c.innerHTML=d+" "+r("day",d),m.append(c);var l=document.createElement("div");l.innerHTML=o+" "+r("hour",o),m.append(l);var u=document.createElement("div");u.innerHTML=i+" "+r("minute",i),m.append(u),a<0&&(clearInterval(t),m.innerHTML="It's here!")};t=setInterval(a,1e3),a();
},{}]},{},["g4tf"], null)
//# sourceMappingURL=script.6e6d2151.js.map