/*! For license information please see 94-6e732577284f48edef00-27.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{t55B:function(e,t,r){"use strict";r.r(t),r.d(t,"TYPE",(function(){return a})),r.d(t,"SKELETON_TYPE",(function(){return n})),r.d(t,"isLiteralElement",(function(){return isLiteralElement})),r.d(t,"isArgumentElement",(function(){return isArgumentElement})),r.d(t,"isNumberElement",(function(){return isNumberElement})),r.d(t,"isDateElement",(function(){return isDateElement})),r.d(t,"isTimeElement",(function(){return isTimeElement})),r.d(t,"isSelectElement",(function(){return isSelectElement})),r.d(t,"isPluralElement",(function(){return isPluralElement})),r.d(t,"isPoundElement",(function(){return isPoundElement})),r.d(t,"isTagElement",(function(){return isTagElement})),r.d(t,"isNumberSkeleton",(function(){return isNumberSkeleton})),r.d(t,"isDateTimeSkeleton",(function(){return isDateTimeSkeleton})),r.d(t,"createLiteralElement",(function(){return createLiteralElement})),r.d(t,"createNumberElement",(function(){return createNumberElement})),r.d(t,"SyntaxError",(function(){return s})),r.d(t,"pegParse",(function(){return u})),r.d(t,"parse",(function(){return parse}));var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};var __assign=function(){return(__assign=Object.assign||function __assign(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.create;var a,n;Object.create;function isLiteralElement(e){return e.type===a.literal}function isArgumentElement(e){return e.type===a.argument}function isNumberElement(e){return e.type===a.number}function isDateElement(e){return e.type===a.date}function isTimeElement(e){return e.type===a.time}function isSelectElement(e){return e.type===a.select}function isPluralElement(e){return e.type===a.plural}function isPoundElement(e){return e.type===a.pound}function isTagElement(e){return e.type===a.tag}function isNumberSkeleton(e){return!(!e||"object"!=typeof e||0!==e.type)}function isDateTimeSkeleton(e){return!(!e||"object"!=typeof e||1!==e.type)}function createLiteralElement(e){return{type:a.literal,value:e}}function createNumberElement(e,t){return{type:a.number,value:e,style:t}}!function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(a||(a={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(n||(n={}));var i=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;var p=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,o=/^(@+)?(\+|#+)?$/g;function parseSignificantPrecision(e){var t={};return e.replace(o,(function(e,r,a){return"string"!=typeof a?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===a?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof a?a.length:0)),""})),t}function parseSign(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":return{currencySign:"accounting"};case"sign-always":return{signDisplay:"always"};case"sign-accounting-always":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":return{signDisplay:"never"}}}function parseNotationOptions(e){var t=parseSign(e);return t||{}}function parseNumberSkeleton(e){for(var t={},r=0,a=e;r<a.length;r++){var n=a[r];switch(n.stem){case"percent":t.style="percent";continue;case"currency":t.style="currency",t.currency=n.options[0];continue;case"group-off":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":t.style="unit",t.unit=n.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=__assign(__assign(__assign({},t),{notation:"scientific"}),n.options.reduce((function(e,t){return __assign(__assign({},e),parseNotationOptions(t))}),{}));continue;case"engineering":t=__assign(__assign(__assign({},t),{notation:"engineering"}),n.options.reduce((function(e,t){return __assign(__assign({},e),parseNotationOptions(t))}),{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(n.options[0]);continue}if(p.test(n.stem)){if(n.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");n.stem.replace(p,(function(e,r,a,n,i,p){return"*"===a?t.minimumFractionDigits=r.length:n&&"#"===n[0]?t.maximumFractionDigits=n.length:i&&p?(t.minimumFractionDigits=i.length,t.maximumFractionDigits=i.length+p.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""})),n.options.length&&(t=__assign(__assign({},t),parseSignificantPrecision(n.options[0])))}else if(o.test(n.stem))t=__assign(__assign({},t),parseSignificantPrecision(n.stem));else{var i=parseSign(n.stem);i&&(t=__assign(__assign({},t),i))}}return t}var s=function(e){function SyntaxError(t,r,a,n){var i=e.call(this)||this;return i.message=t,i.expected=r,i.found=a,i.location=n,i.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(i,SyntaxError),i}return function __extends(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}(SyntaxError,e),SyntaxError.buildMessage=function(e,t){function hex(e){return e.charCodeAt(0).toString(16).toUpperCase()}function literalEscape(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+hex(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+hex(e)}))}function classEscape(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+hex(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+hex(e)}))}function describeExpectation(e){switch(e.type){case"literal":return'"'+literalEscape(e.text)+'"';case"class":var t=e.parts.map((function(e){return Array.isArray(e)?classEscape(e[0])+"-"+classEscape(e[1]):classEscape(e)}));return"["+(e.inverted?"^":"")+t+"]";case"any":return"any character";case"end":return"end of input";case"other":return e.description}}return"Expected "+function describeExpected(e){var t,r,a=e.map(describeExpectation);if(a.sort(),a.length>0){for(t=1,r=1;t<a.length;t++)a[t-1]!==a[t]&&(a[r]=a[t],r++);a.length=r}switch(a.length){case 1:return a[0];case 2:return a[0]+" or "+a[1];default:return a.slice(0,-1).join(", ")+", or "+a[a.length-1]}}(e)+" but "+function describeFound(e){return e?'"'+literalEscape(e)+'"':"end of input"}(t)+" found."},SyntaxError}(Error);var u=function peg$parse(e,t){t=void 0!==t?t:{};var r,n={},p={start:peg$parsestart},o=peg$parsestart,u=peg$literalExpectation("<",!1),peg$c5=function(e){return e.join("")},c=peg$literalExpectation("#",!1),l=peg$otherExpectation("tagElement"),g=peg$literalExpectation("/>",!1),f=peg$literalExpectation(">",!1),$=peg$literalExpectation("</",!1),m=peg$otherExpectation("argumentElement"),h=peg$literalExpectation("{",!1),d=peg$literalExpectation("}",!1),E=peg$otherExpectation("numberSkeletonId"),b=/^['\/{}]/,v=peg$classExpectation(["'","/","{","}"],!1,!1),x={type:"any"},y=peg$otherExpectation("numberSkeletonTokenOption"),A=peg$literalExpectation("/",!1),S=peg$otherExpectation("numberSkeletonToken"),w=peg$literalExpectation("::",!1),peg$c42=function(e){return he.pop(),e.replace(/\s*$/,"")},k=peg$literalExpectation(",",!1),C=peg$literalExpectation("number",!1),peg$c47=function(e,t,r){return __assign({type:"number"===t?a.number:"date"===t?a.date:a.time,style:r&&r[2],value:e},insertLocation())},T=peg$literalExpectation("'",!1),_=/^[^']/,D=peg$classExpectation(["'"],!0,!1),N=/^[^a-zA-Z'{}]/,O=peg$classExpectation([["a","z"],["A","Z"],"'","{","}"],!0,!1),F=/^[a-zA-Z]/,L=peg$classExpectation([["a","z"],["A","Z"]],!1,!1),P=peg$literalExpectation("date",!1),j=peg$literalExpectation("time",!1),R=peg$literalExpectation("plural",!1),B=peg$literalExpectation("selectordinal",!1),q=peg$literalExpectation("offset:",!1),z=peg$literalExpectation("select",!1),I=peg$literalExpectation("=",!1),Z=peg$otherExpectation("whitespace"),H=/^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,M=peg$classExpectation([["\t","\r"]," ",""," "," ",[" "," "],"\u2028","\u2029"," "," ","　"],!1,!1),Y=peg$otherExpectation("syntax pattern"),J=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,K=peg$classExpectation([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),U=peg$otherExpectation("optional whitespace"),V=peg$otherExpectation("number"),G=peg$literalExpectation("-",!1),Q=(peg$otherExpectation("apostrophe"),peg$otherExpectation("double apostrophes")),W=peg$literalExpectation("''",!1),peg$c95=function(e){return!("<"===e||"{"===e||isInPluralOption()&&"#"===e||function isNestedMessageText(){return he.length>1}()&&"}"===e)},X=peg$literalExpectation("\n",!1),ee=peg$otherExpectation("argNameOrNumber"),te=peg$otherExpectation("validTag"),re=peg$otherExpectation("argNumber"),ae=peg$literalExpectation("0",!1),ne=/^[1-9]/,ie=peg$classExpectation([["1","9"]],!1,!1),pe=/^[0-9]/,oe=peg$classExpectation([["0","9"]],!1,!1),se=peg$otherExpectation("argName"),ue=peg$otherExpectation("tagName"),ce=0,le=0,ge=[{line:1,column:1}],fe=0,$e=[],me=0;if(void 0!==t.startRule){if(!(t.startRule in p))throw new Error("Can't start parsing from rule \""+t.startRule+'".');o=p[t.startRule]}function text(){return e.substring(le,ce)}function location(){return peg$computeLocation(le,ce)}function error(e,t){throw function peg$buildSimpleError(e,t){return new s(e,[],"",t)}(e,t=void 0!==t?t:peg$computeLocation(le,ce))}function peg$literalExpectation(e,t){return{type:"literal",text:e,ignoreCase:t}}function peg$classExpectation(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function peg$otherExpectation(e){return{type:"other",description:e}}function peg$computePosDetails(t){var r,a=ge[t];if(a)return a;for(r=t-1;!ge[r];)r--;for(a={line:(a=ge[r]).line,column:a.column};r<t;)10===e.charCodeAt(r)?(a.line++,a.column=1):a.column++,r++;return ge[t]=a,a}function peg$computeLocation(e,t){var r=peg$computePosDetails(e),a=peg$computePosDetails(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:a.line,column:a.column}}}function peg$fail(e){ce<fe||(ce>fe&&(fe=ce,$e=[]),$e.push(e))}function peg$buildStructuredError(e,t,r){return new s(s.buildMessage(e,t),e,t,r)}function peg$parsestart(){return peg$parsemessage()}function peg$parsemessage(){var e,t;for(e=[],t=peg$parsemessageElement();t!==n;)e.push(t),t=peg$parsemessageElement();return e}function peg$parsemessageElement(){var t,r;return t=ce,le=ce,(!de?void 0:n)!==n&&(r=function peg$parsetagElement(){var e,t,r,i;me++,(e=peg$parseselfClosingTag())===n&&(e=ce,(t=peg$parseopeningTag())!==n&&(r=peg$parsemessage())!==n&&(i=peg$parseclosingTag())!==n?(le=e,o=r,(p=t)!==(s=i)&&error('Mismatch tag "'+p+'" !== "'+s+'"',location()),t=__assign({type:a.tag,value:p,children:o},insertLocation()),e=t):(ce=e,e=n));var p,o,s;me--,e===n&&(t=n,0===me&&peg$fail(l));return e}())!==n?(le=t,t=r):(ce=t,t=n),t===n&&(t=function peg$parseliteralElement(){var e,t;e=ce,(t=peg$parsemessageText())!==n&&(le=e,r=t,t=__assign({type:a.literal,value:r},insertLocation()));var r;return e=t}())===n&&(t=function peg$parseargumentElement(){var t,r,i,p;me++,t=ce,123===e.charCodeAt(ce)?(r="{",ce++):(r=n,0===me&&peg$fail(h));r!==n&&peg$parse_()!==n&&(i=peg$parseargNameOrNumber())!==n&&peg$parse_()!==n?(125===e.charCodeAt(ce)?(p="}",ce++):(p=n,0===me&&peg$fail(d)),p!==n?(le=t,o=i,r=__assign({type:a.argument,value:o},insertLocation()),t=r):(ce=t,t=n)):(ce=t,t=n);var o;me--,t===n&&(r=n,0===me&&peg$fail(m));return t}())===n&&(t=function peg$parsesimpleFormatElement(){var t;(t=function peg$parsenumberFormatElement(){var t,r,a,i,p,o,s,u,c;t=ce,123===e.charCodeAt(ce)?(r="{",ce++):(r=n,0===me&&peg$fail(h));r!==n&&peg$parse_()!==n&&(a=peg$parseargNameOrNumber())!==n&&peg$parse_()!==n?(44===e.charCodeAt(ce)?(i=",",ce++):(i=n,0===me&&peg$fail(k)),i!==n&&peg$parse_()!==n?("number"===e.substr(ce,6)?(p="number",ce+=6):(p=n,0===me&&peg$fail(C)),p!==n&&peg$parse_()!==n?(o=ce,44===e.charCodeAt(ce)?(s=",",ce++):(s=n,0===me&&peg$fail(k)),s!==n&&(u=peg$parse_())!==n&&(c=function peg$parsenumberArgStyle(){var t,r,a;t=ce,"::"===e.substr(ce,2)?(r="::",ce+=2):(r=n,0===me&&peg$fail(w));r!==n&&(a=function peg$parsenumberSkeleton(){var e,t,r;if(e=ce,t=[],(r=peg$parsenumberSkeletonToken())!==n)for(;r!==n;)t.push(r),r=peg$parsenumberSkeletonToken();else t=n;t!==n&&(le=e,t=__assign({type:0,tokens:a=t,parsedOptions:Ee?parseNumberSkeleton(a):{}},insertLocation()));var a;return e=t}())!==n?(le=t,t=r=a):(ce=t,t=n);t===n&&(t=ce,le=ce,he.push("numberArgStyle"),(r=(r=!0)?void 0:n)!==n&&(a=peg$parsemessageText())!==n?(le=t,r=peg$c42(a),t=r):(ce=t,t=n));return t}())!==n?o=s=[s,u,c]:(ce=o,o=n),o===n&&(o=null),o!==n&&(s=peg$parse_())!==n?(125===e.charCodeAt(ce)?(u="}",ce++):(u=n,0===me&&peg$fail(d)),u!==n?(le=t,r=peg$c47(a,p,o),t=r):(ce=t,t=n)):(ce=t,t=n)):(ce=t,t=n)):(ce=t,t=n)):(ce=t,t=n);return t}())===n&&(t=function peg$parsedateOrTimeFormatElement(){var t,r,a,p,o,s,u,c,l;t=ce,123===e.charCodeAt(ce)?(r="{",ce++):(r=n,0===me&&peg$fail(h));r!==n&&peg$parse_()!==n&&(a=peg$parseargNameOrNumber())!==n&&peg$parse_()!==n?(44===e.charCodeAt(ce)?(p=",",ce++):(p=n,0===me&&peg$fail(k)),p!==n&&peg$parse_()!==n?("date"===e.substr(ce,4)?(o="date",ce+=4):(o=n,0===me&&peg$fail(P)),o===n&&("time"===e.substr(ce,4)?(o="time",ce+=4):(o=n,0===me&&peg$fail(j))),o!==n&&peg$parse_()!==n?(s=ce,44===e.charCodeAt(ce)?(u=",",ce++):(u=n,0===me&&peg$fail(k)),u!==n&&(c=peg$parse_())!==n&&(l=function peg$parsedateOrTimeArgStyle(){var t,r,a;t=ce,"::"===e.substr(ce,2)?(r="::",ce+=2):(r=n,0===me&&peg$fail(w));r!==n&&(a=function peg$parsedateTimeSkeleton(){var t,r,a,p;t=ce,r=ce,a=[],(p=peg$parsedateTimeSkeletonLiteral())===n&&(p=peg$parsedateTimeSkeletonPattern());if(p!==n)for(;p!==n;)a.push(p),(p=peg$parsedateTimeSkeletonLiteral())===n&&(p=peg$parsedateTimeSkeletonPattern());else a=n;r=a!==n?e.substring(r,ce):a;r!==n&&(le=t,r=__assign({type:1,pattern:o=r,parsedOptions:Ee?(s=o,u={},s.replace(i,(function(e){var t=e.length;switch(e[0]){case"G":u.era=4===t?"long":5===t?"narrow":"short";break;case"y":u.year=2===t?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":u.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":u.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":u.weekday=4===t?"short":5===t?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");u.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");u.weekday=["short","long","narrow","short"][t-4];break;case"a":u.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":u.hourCycle="h12",u.hour=["numeric","2-digit"][t-1];break;case"H":u.hourCycle="h23",u.hour=["numeric","2-digit"][t-1];break;case"K":u.hourCycle="h11",u.hour=["numeric","2-digit"][t-1];break;case"k":u.hourCycle="h24",u.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":u.minute=["numeric","2-digit"][t-1];break;case"s":u.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":u.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),u):{}},insertLocation()));var o,s,u;return t=r}())!==n?(le=t,t=r=a):(ce=t,t=n);t===n&&(t=ce,le=ce,he.push("dateOrTimeArgStyle"),(r=(r=!0)?void 0:n)!==n&&(a=peg$parsemessageText())!==n?(le=t,r=peg$c42(a),t=r):(ce=t,t=n));return t}())!==n?s=u=[u,c,l]:(ce=s,s=n),s===n&&(s=null),s!==n&&(u=peg$parse_())!==n?(125===e.charCodeAt(ce)?(c="}",ce++):(c=n,0===me&&peg$fail(d)),c!==n?(le=t,r=peg$c47(a,o,s),t=r):(ce=t,t=n)):(ce=t,t=n)):(ce=t,t=n)):(ce=t,t=n)):(ce=t,t=n);return t}());return t}())===n&&(t=function peg$parsepluralElement(){var t,r,i,p,o,s,u,c,l,g,f;t=ce,123===e.charCodeAt(ce)?(r="{",ce++):(r=n,0===me&&peg$fail(h));if(r!==n)if(peg$parse_()!==n)if((i=peg$parseargNameOrNumber())!==n)if(peg$parse_()!==n)if(44===e.charCodeAt(ce)?(p=",",ce++):(p=n,0===me&&peg$fail(k)),p!==n)if(peg$parse_()!==n)if("plural"===e.substr(ce,6)?(o="plural",ce+=6):(o=n,0===me&&peg$fail(R)),o===n&&("selectordinal"===e.substr(ce,13)?(o="selectordinal",ce+=13):(o=n,0===me&&peg$fail(B))),o!==n)if(peg$parse_()!==n)if(44===e.charCodeAt(ce)?(s=",",ce++):(s=n,0===me&&peg$fail(k)),s!==n)if(peg$parse_()!==n)if(u=ce,"offset:"===e.substr(ce,7)?(c="offset:",ce+=7):(c=n,0===me&&peg$fail(q)),c!==n&&(l=peg$parse_())!==n&&(g=peg$parsenumber())!==n?u=c=[c,l,g]:(ce=u,u=n),u===n&&(u=null),u!==n)if((c=peg$parse_())!==n){if(l=[],(g=peg$parsepluralOption())!==n)for(;g!==n;)l.push(g),g=peg$parsepluralOption();else l=n;l!==n&&(g=peg$parse_())!==n?(125===e.charCodeAt(ce)?(f="}",ce++):(f=n,0===me&&peg$fail(d)),f!==n?(le=t,r=function(e,t,r,n){return __assign({type:a.plural,pluralType:"plural"===t?"cardinal":"ordinal",value:e,offset:r?r[2]:0,options:n.reduce((function(e,t){var r=t.id,a=t.value,n=t.location;return r in e&&error('Duplicate option "'+r+'" in plural element: "'+text()+'"',location()),e[r]={value:a,location:n},e}),{})},insertLocation())}(i,o,u,l),t=r):(ce=t,t=n)):(ce=t,t=n)}else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;return t}())===n&&(t=function peg$parseselectElement(){var t,r,i,p,o,s,u,c,l;t=ce,123===e.charCodeAt(ce)?(r="{",ce++):(r=n,0===me&&peg$fail(h));if(r!==n)if(peg$parse_()!==n)if((i=peg$parseargNameOrNumber())!==n)if(peg$parse_()!==n)if(44===e.charCodeAt(ce)?(p=",",ce++):(p=n,0===me&&peg$fail(k)),p!==n)if(peg$parse_()!==n)if("select"===e.substr(ce,6)?(o="select",ce+=6):(o=n,0===me&&peg$fail(z)),o!==n)if(peg$parse_()!==n)if(44===e.charCodeAt(ce)?(s=",",ce++):(s=n,0===me&&peg$fail(k)),s!==n)if(peg$parse_()!==n){if(u=[],(c=peg$parseselectOption())!==n)for(;c!==n;)u.push(c),c=peg$parseselectOption();else u=n;u!==n&&(c=peg$parse_())!==n?(125===e.charCodeAt(ce)?(l="}",ce++):(l=n,0===me&&peg$fail(d)),l!==n?(le=t,r=function(e,t){return __assign({type:a.select,value:e,options:t.reduce((function(e,t){var r=t.id,a=t.value,n=t.location;return r in e&&error('Duplicate option "'+r+'" in select element: "'+text()+'"',location()),e[r]={value:a,location:n},e}),{})},insertLocation())}(i,u),t=r):(ce=t,t=n)):(ce=t,t=n)}else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;else ce=t,t=n;return t}())===n&&(t=function peg$parsepoundElement(){var t,r;t=ce,35===e.charCodeAt(ce)?(r="#",ce++):(r=n,0===me&&peg$fail(c));r!==n&&(le=t,r=__assign({type:a.pound},insertLocation()));return t=r}()),t}function peg$parsemessageText(){var t,r,a,i;if(t=ce,le=ce,(r=(r=de)?void 0:n)!==n){if(a=[],(i=peg$parsedoubleApostrophes())===n&&(i=peg$parsequotedString())===n&&(i=peg$parseunquotedString())===n&&(60===e.charCodeAt(ce)?(i="<",ce++):(i=n,0===me&&peg$fail(u))),i!==n)for(;i!==n;)a.push(i),(i=peg$parsedoubleApostrophes())===n&&(i=peg$parsequotedString())===n&&(i=peg$parseunquotedString())===n&&(60===e.charCodeAt(ce)?(i="<",ce++):(i=n,0===me&&peg$fail(u)));else a=n;a!==n?(le=t,t=r=peg$c5(a)):(ce=t,t=n)}else ce=t,t=n;if(t===n){if(t=ce,r=[],(a=peg$parsedoubleApostrophes())===n&&(a=peg$parsequotedString())===n&&(a=peg$parseunquotedString())===n&&(a=peg$parsenonTagStartingAngleBracket()),a!==n)for(;a!==n;)r.push(a),(a=peg$parsedoubleApostrophes())===n&&(a=peg$parsequotedString())===n&&(a=peg$parseunquotedString())===n&&(a=peg$parsenonTagStartingAngleBracket());else r=n;r!==n&&(le=t,r=peg$c5(r)),t=r}return t}function peg$parsenonTagStartingAngleBracket(){var t,r,a;return t=ce,r=ce,me++,(a=peg$parseopeningTag())===n&&(a=peg$parseclosingTag())===n&&(a=peg$parseselfClosingTag()),me--,a===n?r=void 0:(ce=r,r=n),r!==n?(60===e.charCodeAt(ce)?(a="<",ce++):(a=n,0===me&&peg$fail(u)),a!==n?(le=t,t=r="<"):(ce=t,t=n)):(ce=t,t=n),t}function peg$parseselfClosingTag(){var t,r,i,p,o,s,c;return t=ce,r=ce,60===e.charCodeAt(ce)?(i="<",ce++):(i=n,0===me&&peg$fail(u)),i!==n&&(p=peg$parsevalidTag())!==n&&(o=peg$parse_())!==n?("/>"===e.substr(ce,2)?(s="/>",ce+=2):(s=n,0===me&&peg$fail(g)),s!==n?r=i=[i,p,o,s]:(ce=r,r=n)):(ce=r,r=n),r!==n&&(le=t,c=r,r=__assign({type:a.literal,value:c.join("")},insertLocation())),t=r}function peg$parseopeningTag(){var t,r,a,i;return t=ce,60===e.charCodeAt(ce)?(r="<",ce++):(r=n,0===me&&peg$fail(u)),r!==n&&(a=peg$parsevalidTag())!==n?(62===e.charCodeAt(ce)?(i=">",ce++):(i=n,0===me&&peg$fail(f)),i!==n?(le=t,t=r=a):(ce=t,t=n)):(ce=t,t=n),t}function peg$parseclosingTag(){var t,r,a,i;return t=ce,"</"===e.substr(ce,2)?(r="</",ce+=2):(r=n,0===me&&peg$fail($)),r!==n&&(a=peg$parsevalidTag())!==n?(62===e.charCodeAt(ce)?(i=">",ce++):(i=n,0===me&&peg$fail(f)),i!==n?(le=t,t=r=a):(ce=t,t=n)):(ce=t,t=n),t}function peg$parsenumberSkeletonId(){var t,r,a,i,p;if(me++,t=ce,r=[],a=ce,i=ce,me++,(p=peg$parsewhiteSpace())===n&&(b.test(e.charAt(ce))?(p=e.charAt(ce),ce++):(p=n,0===me&&peg$fail(v))),me--,p===n?i=void 0:(ce=i,i=n),i!==n?(e.length>ce?(p=e.charAt(ce),ce++):(p=n,0===me&&peg$fail(x)),p!==n?a=i=[i,p]:(ce=a,a=n)):(ce=a,a=n),a!==n)for(;a!==n;)r.push(a),a=ce,i=ce,me++,(p=peg$parsewhiteSpace())===n&&(b.test(e.charAt(ce))?(p=e.charAt(ce),ce++):(p=n,0===me&&peg$fail(v))),me--,p===n?i=void 0:(ce=i,i=n),i!==n?(e.length>ce?(p=e.charAt(ce),ce++):(p=n,0===me&&peg$fail(x)),p!==n?a=i=[i,p]:(ce=a,a=n)):(ce=a,a=n);else r=n;return t=r!==n?e.substring(t,ce):r,me--,t===n&&(r=n,0===me&&peg$fail(E)),t}function peg$parsenumberSkeletonTokenOption(){var t,r,a;return me++,t=ce,47===e.charCodeAt(ce)?(r="/",ce++):(r=n,0===me&&peg$fail(A)),r!==n&&(a=peg$parsenumberSkeletonId())!==n?(le=t,t=r=a):(ce=t,t=n),me--,t===n&&(r=n,0===me&&peg$fail(y)),t}function peg$parsenumberSkeletonToken(){var e,t,r,a;if(me++,e=ce,peg$parse_()!==n)if((t=peg$parsenumberSkeletonId())!==n){for(r=[],a=peg$parsenumberSkeletonTokenOption();a!==n;)r.push(a),a=peg$parsenumberSkeletonTokenOption();r!==n?(le=e,e=function(e,t){return{stem:e,options:t}}(t,r)):(ce=e,e=n)}else ce=e,e=n;else ce=e,e=n;return me--,e===n&&(n,0===me&&peg$fail(S)),e}function peg$parsedateTimeSkeletonLiteral(){var t,r,a,i;if(t=ce,39===e.charCodeAt(ce)?(r="'",ce++):(r=n,0===me&&peg$fail(T)),r!==n){if(a=[],(i=peg$parsedoubleApostrophes())===n&&(_.test(e.charAt(ce))?(i=e.charAt(ce),ce++):(i=n,0===me&&peg$fail(D))),i!==n)for(;i!==n;)a.push(i),(i=peg$parsedoubleApostrophes())===n&&(_.test(e.charAt(ce))?(i=e.charAt(ce),ce++):(i=n,0===me&&peg$fail(D)));else a=n;a!==n?(39===e.charCodeAt(ce)?(i="'",ce++):(i=n,0===me&&peg$fail(T)),i!==n?t=r=[r,a,i]:(ce=t,t=n)):(ce=t,t=n)}else ce=t,t=n;if(t===n)if(t=[],(r=peg$parsedoubleApostrophes())===n&&(N.test(e.charAt(ce))?(r=e.charAt(ce),ce++):(r=n,0===me&&peg$fail(O))),r!==n)for(;r!==n;)t.push(r),(r=peg$parsedoubleApostrophes())===n&&(N.test(e.charAt(ce))?(r=e.charAt(ce),ce++):(r=n,0===me&&peg$fail(O)));else t=n;return t}function peg$parsedateTimeSkeletonPattern(){var t,r;if(t=[],F.test(e.charAt(ce))?(r=e.charAt(ce),ce++):(r=n,0===me&&peg$fail(L)),r!==n)for(;r!==n;)t.push(r),F.test(e.charAt(ce))?(r=e.charAt(ce),ce++):(r=n,0===me&&peg$fail(L));else t=n;return t}function peg$parseselectOption(){var t,r,a,i,p,o,s;return t=ce,peg$parse_()!==n&&(r=peg$parseargName())!==n&&peg$parse_()!==n?(123===e.charCodeAt(ce)?(a="{",ce++):(a=n,0===me&&peg$fail(h)),a!==n?(le=ce,he.push("select"),(!0?void 0:n)!==n&&(i=peg$parsemessage())!==n?(125===e.charCodeAt(ce)?(p="}",ce++):(p=n,0===me&&peg$fail(d)),p!==n?(le=t,o=r,s=i,he.pop(),t=__assign({id:o,value:s},insertLocation())):(ce=t,t=n)):(ce=t,t=n)):(ce=t,t=n)):(ce=t,t=n),t}function peg$parsepluralOption(){var t,r,a,i,p,o,s;return t=ce,peg$parse_()!==n&&(r=function peg$parsepluralRuleSelectValue(){var t,r,a,i;return t=ce,r=ce,61===e.charCodeAt(ce)?(a="=",ce++):(a=n,0===me&&peg$fail(I)),a!==n&&(i=peg$parsenumber())!==n?r=a=[a,i]:(ce=r,r=n),(t=r!==n?e.substring(t,ce):r)===n&&(t=peg$parseargName()),t}())!==n&&peg$parse_()!==n?(123===e.charCodeAt(ce)?(a="{",ce++):(a=n,0===me&&peg$fail(h)),a!==n?(le=ce,he.push("plural"),(!0?void 0:n)!==n&&(i=peg$parsemessage())!==n?(125===e.charCodeAt(ce)?(p="}",ce++):(p=n,0===me&&peg$fail(d)),p!==n?(le=t,o=r,s=i,he.pop(),t=__assign({id:o,value:s},insertLocation())):(ce=t,t=n)):(ce=t,t=n)):(ce=t,t=n)):(ce=t,t=n),t}function peg$parsewhiteSpace(){var t;return me++,H.test(e.charAt(ce))?(t=e.charAt(ce),ce++):(t=n,0===me&&peg$fail(M)),me--,t===n&&(n,0===me&&peg$fail(Z)),t}function peg$parsepatternSyntax(){var t;return me++,J.test(e.charAt(ce))?(t=e.charAt(ce),ce++):(t=n,0===me&&peg$fail(K)),me--,t===n&&(n,0===me&&peg$fail(Y)),t}function peg$parse_(){var t,r,a;for(me++,t=ce,r=[],a=peg$parsewhiteSpace();a!==n;)r.push(a),a=peg$parsewhiteSpace();return t=r!==n?e.substring(t,ce):r,me--,t===n&&(r=n,0===me&&peg$fail(U)),t}function peg$parsenumber(){var t,r,a,i,p;return me++,t=ce,45===e.charCodeAt(ce)?(r="-",ce++):(r=n,0===me&&peg$fail(G)),r===n&&(r=null),r!==n&&(a=peg$parseargNumber())!==n?(le=t,i=r,t=r=(p=a)?i?-p:p:0):(ce=t,t=n),me--,t===n&&(r=n,0===me&&peg$fail(V)),t}function peg$parsedoubleApostrophes(){var t,r;return me++,t=ce,"''"===e.substr(ce,2)?(r="''",ce+=2):(r=n,0===me&&peg$fail(W)),r!==n&&(le=t,r="'"),me--,(t=r)===n&&(r=n,0===me&&peg$fail(Q)),t}function peg$parsequotedString(){var t,r,a,i,p,o;if(t=ce,39===e.charCodeAt(ce)?(r="'",ce++):(r=n,0===me&&peg$fail(T)),r!==n)if((a=function peg$parseescapedChar(){var t,r,a,i;t=ce,r=ce,e.length>ce?(a=e.charAt(ce),ce++):(a=n,0===me&&peg$fail(x));a!==n?(le=ce,(i=(i="<"===(p=a)||">"===p||"{"===p||"}"===p||isInPluralOption()&&"#"===p)?void 0:n)!==n?r=a=[a,i]:(ce=r,r=n)):(ce=r,r=n);var p;t=r!==n?e.substring(t,ce):r;return t}())!==n){for(i=ce,p=[],"''"===e.substr(ce,2)?(o="''",ce+=2):(o=n,0===me&&peg$fail(W)),o===n&&(_.test(e.charAt(ce))?(o=e.charAt(ce),ce++):(o=n,0===me&&peg$fail(D)));o!==n;)p.push(o),"''"===e.substr(ce,2)?(o="''",ce+=2):(o=n,0===me&&peg$fail(W)),o===n&&(_.test(e.charAt(ce))?(o=e.charAt(ce),ce++):(o=n,0===me&&peg$fail(D)));(i=p!==n?e.substring(i,ce):p)!==n?(39===e.charCodeAt(ce)?(p="'",ce++):(p=n,0===me&&peg$fail(T)),p===n&&(p=null),p!==n?(le=t,t=r=a+i.replace("''","'")):(ce=t,t=n)):(ce=t,t=n)}else ce=t,t=n;else ce=t,t=n;return t}function peg$parseunquotedString(){var t,r,a,i;return t=ce,r=ce,e.length>ce?(a=e.charAt(ce),ce++):(a=n,0===me&&peg$fail(x)),a!==n?(le=ce,(i=(i=peg$c95(a))?void 0:n)!==n?r=a=[a,i]:(ce=r,r=n)):(ce=r,r=n),r===n&&(10===e.charCodeAt(ce)?(r="\n",ce++):(r=n,0===me&&peg$fail(X))),t=r!==n?e.substring(t,ce):r}function peg$parseargNameOrNumber(){var t,r;return me++,t=ce,(r=peg$parseargNumber())===n&&(r=peg$parseargName()),t=r!==n?e.substring(t,ce):r,me--,t===n&&(r=n,0===me&&peg$fail(ee)),t}function peg$parsevalidTag(){var t,r;return me++,t=ce,(r=peg$parseargNumber())===n&&(r=function peg$parsetagName(){var t,r,a,i,p;me++,t=ce,r=[],45===e.charCodeAt(ce)?(a="-",ce++):(a=n,0===me&&peg$fail(G));a===n&&(a=ce,i=ce,me++,(p=peg$parsewhiteSpace())===n&&(p=peg$parsepatternSyntax()),me--,p===n?i=void 0:(ce=i,i=n),i!==n?(e.length>ce?(p=e.charAt(ce),ce++):(p=n,0===me&&peg$fail(x)),p!==n?a=i=[i,p]:(ce=a,a=n)):(ce=a,a=n));if(a!==n)for(;a!==n;)r.push(a),45===e.charCodeAt(ce)?(a="-",ce++):(a=n,0===me&&peg$fail(G)),a===n&&(a=ce,i=ce,me++,(p=peg$parsewhiteSpace())===n&&(p=peg$parsepatternSyntax()),me--,p===n?i=void 0:(ce=i,i=n),i!==n?(e.length>ce?(p=e.charAt(ce),ce++):(p=n,0===me&&peg$fail(x)),p!==n?a=i=[i,p]:(ce=a,a=n)):(ce=a,a=n));else r=n;t=r!==n?e.substring(t,ce):r;me--,t===n&&(r=n,0===me&&peg$fail(ue));return t}()),t=r!==n?e.substring(t,ce):r,me--,t===n&&(r=n,0===me&&peg$fail(te)),t}function peg$parseargNumber(){var t,r,a,i,p;if(me++,t=ce,48===e.charCodeAt(ce)?(r="0",ce++):(r=n,0===me&&peg$fail(ae)),r!==n&&(le=t,r=0),(t=r)===n){if(t=ce,r=ce,ne.test(e.charAt(ce))?(a=e.charAt(ce),ce++):(a=n,0===me&&peg$fail(ie)),a!==n){for(i=[],pe.test(e.charAt(ce))?(p=e.charAt(ce),ce++):(p=n,0===me&&peg$fail(oe));p!==n;)i.push(p),pe.test(e.charAt(ce))?(p=e.charAt(ce),ce++):(p=n,0===me&&peg$fail(oe));i!==n?r=a=[a,i]:(ce=r,r=n)}else ce=r,r=n;r!==n&&(le=t,r=parseInt(r.join(""),10)),t=r}return me--,t===n&&(r=n,0===me&&peg$fail(re)),t}function peg$parseargName(){var t,r,a,i,p;if(me++,t=ce,r=[],a=ce,i=ce,me++,(p=peg$parsewhiteSpace())===n&&(p=peg$parsepatternSyntax()),me--,p===n?i=void 0:(ce=i,i=n),i!==n?(e.length>ce?(p=e.charAt(ce),ce++):(p=n,0===me&&peg$fail(x)),p!==n?a=i=[i,p]:(ce=a,a=n)):(ce=a,a=n),a!==n)for(;a!==n;)r.push(a),a=ce,i=ce,me++,(p=peg$parsewhiteSpace())===n&&(p=peg$parsepatternSyntax()),me--,p===n?i=void 0:(ce=i,i=n),i!==n?(e.length>ce?(p=e.charAt(ce),ce++):(p=n,0===me&&peg$fail(x)),p!==n?a=i=[i,p]:(ce=a,a=n)):(ce=a,a=n);else r=n;return t=r!==n?e.substring(t,ce):r,me--,t===n&&(r=n,0===me&&peg$fail(se)),t}var he=["root"];function isInPluralOption(){return"plural"===he[he.length-1]}function insertLocation(){return t&&t.captureLocation?{location:location()}:{}}var de=t&&t.ignoreTag,Ee=t&&t.shouldParseSkeleton;if((r=o())!==n&&ce===e.length)return r;throw r!==n&&ce<e.length&&peg$fail({type:"end"}),peg$buildStructuredError($e,fe<e.length?e.charAt(fe):null,fe<e.length?peg$computeLocation(fe,fe+1):peg$computeLocation(fe,fe))},c=/(^|[^\\])#/g;function normalizeHashtagInPlural(e){e.forEach((function(e){(isPluralElement(e)||isSelectElement(e))&&Object.keys(e.options).forEach((function(t){for(var r,a=e.options[t],n=-1,i=void 0,p=0;p<a.value.length;p++){var o=a.value[p];if(isLiteralElement(o)&&c.test(o.value)){n=p,i=o;break}}if(i){var s=i.value.replace(c,"$1{"+e.value+", number}"),l=u(s);(r=a.value).splice.apply(r,function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var a=Array(e),n=0;for(t=0;t<r;t++)for(var i=arguments[t],p=0,o=i.length;p<o;p++,n++)a[n]=i[p];return a}([n,1],l))}normalizeHashtagInPlural(a.value)}))}))}function parse(e,t){t=__assign({normalizeHashtagInPlural:!0,shouldParseSkeleton:!0},t||{});var r=u(e,t);return t.normalizeHashtagInPlural&&normalizeHashtagInPlural(r),r}}}]);