(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});n(151);var a=n(0),r=n.n(a),i=n(149),s=n(154),o=n.n(s);t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(o.a,{fluid:t.file.childImageSharp.fixed,style:{position:"absolute",left:0,top:50,width:"100%",height:"100%"}},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Dattatraya's Blog")," "))))};var l="2274377041"},144:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(147)),i=a(n(148)),s=a(n(7)),o=a(n(52)),l=a(n(53)),c=a(n(4)),u=a(n(0)),d=n(23),f=n(145);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},g=function(e){function t(t){var n;n=e.call(this,t)||this,(0,l.default)((0,o.default)((0,o.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,s=void 0===a?this.defaultGetProps:a,o=t.onClick,l=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,g=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var b=p(n);return u.default.createElement(d.Link,(0,i.default)({to:b,state:c,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),m(n,{state:c,replace:h})),!0}},g))},t}(u.default.Component);g.propTypes=(0,i.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var b=u.default.forwardRef(function(e,t){return u.default.createElement(g,(0,i.default)({innerRef:t},e))});t.default=b;var m=function(e,t){window.___navigate(p(e),t)};t.navigate=m;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(144),l=n.n(o);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var c=n(146),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},146:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},147:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},148:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(145),s=function(e){return r.a.createElement("li",{className:"menuLink"},r.a.createElement(i.Link,{to:e.to},e.children),"  ")};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("ul",{className:"menu"},r.a.createElement(s,{to:"/"},"Home"),r.a.createElement(s,{to:"/post/"},"Posts"),r.a.createElement(s,{to:"/about/"},"About"))),r.a.createElement("div",{className:"content"},t),r.a.createElement("footer",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/dattatrayam"},r.a.createElement("span",null,"Github"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/dattatraya-mule-733033b/"},r.a.createElement("span",null,"Linkedin"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://eportfolio.greatlearning.in/dattatraya-mule"},r.a.createElement("span",null,"ePortfolio"))))))}},150:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(54),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,n){"use strict";n(152)("fixed",function(e){return function(){return e(this,"tt","","")}})},152:function(e,t,n){var a=n(11),r=n(16),i=n(17),s=/"/g,o=function(e,t,n,a){var r=String(i(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},154:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.default=t.createImageToLoad=void 0;var r=a(n(0)),i=a(n(4)),s=a(n(155));const o=e=>{let t=Object.assign({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},l=e=>{if("undefined"!=typeof window){const t=o(e),n=new Image;return n.complete||"function"!=typeof t.onLoad||n.addEventListener("load",t.onLoad),"function"==typeof t.onError&&n.addEventListener("error",t.onError),n.src=t.fluid?t.fluid.src:t.fixed.src,n}return null};t.createImageToLoad=l;const c={},u=e=>{const t=o(e),n=t.fluid?t.fluid.src:t.fixed.src;return c[n]||!1},d=e=>{const t=o(e),n=t.fluid?t.fluid.src:t.fixed.src;c[n]=!0};let f;const p=[];const h=(e,t)=>{(void 0===f&&"undefined"!=typeof window&&window.IntersectionObserver&&(f=new window.IntersectionObserver(e=>{e.forEach(e=>{p.forEach(t=>{t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),f).observe(e),p.push([e,t])},g=e=>{const t=e.src?`src="${e.src}" `:'src="" ',n=e.sizes?`sizes="${e.sizes}" `:"",a=e.srcSetWebp?`<source type='image/webp' srcSet="${e.srcSetWebp}" ${n}/>`:"",r=e.srcSet?`<source srcSet="${e.srcSet}" ${n}/>`:"",i=e.title?`title="${e.title}" `:"",s=e.alt?`alt="${e.alt}" `:'alt="" ',o=e.width?`width="${e.width}" `:"",l=e.height?`height="${e.height}" `:"",c=e.opacity?e.opacity:"1";return`<picture>${a}${r}<img ${o}${l}${t}${s}${i}style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:${e.transitionDelay?e.transitionDelay:"0.5s"};opacity:${c};width:100%;height:100%;object-fit:cover;object-position:center"/></picture>`},b=({classId:e,backgroundSize:t,backgroundRepeat:n,transitionDelay:a,bgImage:r,nextImage:i,afterOpacity:s,bgColor:o})=>`\n          .gatsby-background-image-${e}:before,\n          .gatsby-background-image-${e}:after {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            -webkit-background-size: ${t};\n            -moz-background-size: ${t};\n            -o-background-size: ${t};\n            background-size: ${t};\n            transition: opacity ${a} ease-in-out;\n            -webkit-transition: opacity ${a} ease-in-out;\n            -moz-transition: opacity ${a} ease-in-out;\n            -o-transition: opacity ${a} ease-in-out;\n          }\n          .gatsby-background-image-${e}:before {\n            z-index: -101;\n            background-color: ${o};\n            background-image: url(${r});\n            ${n}\n          }\n          .gatsby-background-image-${e}:after {\n            z-index: -100;\n            background-image: url(${i});\n            ${n}\n            opacity: ${s};\n          }\n        `;class m extends r.default.Component{constructor(e){super(e);let t=!0,n=!1,a=e.fadeIn;const r=u(e);!r&&"undefined"!=typeof window&&window.IntersectionObserver&&(t=!1,n=!0),"undefined"==typeof window&&(t=!1),e.critical&&(t=!0,n=!1);const i=!(this.props.critical&&!this.props.fadeIn);this.state={isVisible:t,imgLoaded:!1,IOSupported:n,fadeIn:a,hasNoScript:i,seenBefore:r},this.bgImage="",this.backgroundStyles=(0,s.default)(this.props.className),this.imageRef=l(this.props),this.handleImageLoaded=this.handleImageLoaded.bind(this),this.handleRef=this.handleRef.bind(this)}componentDidMount(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:u(this.props)}),this.props.critical){const e=this.imageRef;e&&e.complete&&this.handleImageLoaded()}}handleRef(e){this.state.IOSupported&&e&&h(e,()=>{this.state.isVisible||"function"!=typeof this.props.onStartLoad||this.props.onStartLoad({wasCached:u(this.props)}),this.setState({isVisible:!0,imgLoaded:!1})})}handleImageLoaded(){d(this.props),this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()}render(){const e=o(this.props),t=e.title,n=e.alt,a=e.className,i=e.style,s=void 0===i?{}:i,l=e.fluid,c=e.fixed,u=e.backgroundColor,d=e.Tag,f=e.classId,p=void 0===f?Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7):f,h=e.children,m="boolean"==typeof u?"lightgray":u,y=this.backgroundStyles.hasOwnProperty("backgroundSize")?this.backgroundStyles.backgroundSize:"cover",v=`background-repeat: ${this.backgroundStyles.hasOwnProperty("backgroundRepeat")?this.backgroundStyles.backgroundRepeat:"no-repeat"};`,w=this.state.imgLoaded?"0.5s":"0.25s";if(l){const e=l;let i=this.bgImage,o=null;e.tracedSVG&&(o=`"${e.tracedSVG}"`),e.base64&&!e.tracedSVG&&(o=e.base64),this.state.isVisible&&(o=e.src);const c=o!==(i=""===i?o:this.bgImage)||!1===this.state.fadeIn?1:0;this.bgImage=i;const u={classId:p,backgroundSize:y,backgroundRepeat:v,transitionDelay:w,bgImage:i,nextImage:o,afterOpacity:c,bgColor:m};return r.default.createElement(d,{className:`${a||""} gatsby-background-image-${p} gatsby-image-wrapper`,style:Object.assign({position:"relative",overflow:"hidden"},s,this.backgroundStyles),ref:this.handleRef,key:`fluid-${JSON.stringify(e.srcSet)}`},r.default.createElement("style",{dangerouslySetInnerHTML:{__html:b(u)}}),this.state.hasNoScript&&r.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g(Object.assign({alt:n,title:t},e))}}),h)}if(c){const e=c,i=Object.assign({position:"relative",overflow:"hidden",display:"inline-block",width:e.width,height:e.height},s);"inherit"===s.display&&delete i.display;let o=this.bgImage,l="";e.tracedSVG&&(l=`'${e.tracedSVG}'`),e.base64&&!e.tracedSVG&&(l=e.base64),this.state.isVisible&&(l=e.src);const u=l!==(o=""===o?l:"")?1:0;this.bgImage=o;const f={classId:p,backgroundSize:y,backgroundRepeat:v,transitionDelay:w,bgImage:o,nextImage:l,afterOpacity:u};return r.default.createElement(d,{className:`${a||""} gatsby-background-image-${p} gatsby-image-wrapper`,style:Object.assign({},i,this.backgroundStyles),ref:this.handleRef,key:`fixed-${JSON.stringify(e.srcSet)}`},r.default.createElement("style",{dangerouslySetInnerHTML:{__html:b(f)}}),this.state.hasNoScript&&r.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g(Object.assign({alt:n,title:t,width:e.width,height:e.height},e))}}),h)}return null}}m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};const y=i.default.shape({width:i.default.number.isRequired,height:i.default.number.isRequired,src:i.default.string.isRequired,srcSet:i.default.string.isRequired,base64:i.default.string,tracedSVG:i.default.string,srcWebp:i.default.string,srcSetWebp:i.default.string}),v=i.default.shape({aspectRatio:i.default.number.isRequired,src:i.default.string.isRequired,srcSet:i.default.string.isRequired,sizes:i.default.string.isRequired,base64:i.default.string,tracedSVG:i.default.string,srcWebp:i.default.string,srcSetWebp:i.default.string});m.propTypes={resolutions:y,sizes:v,fixed:y,fluid:v,fadeIn:i.default.bool,title:i.default.string,alt:i.default.string,className:i.default.oneOfType([i.default.string,i.default.object]),critical:i.default.bool,style:i.default.object,imgStyle:i.default.object,placeholderStyle:i.default.object,placeholderClassName:i.default.string,backgroundColor:i.default.oneOfType([i.default.string,i.default.bool]),onLoad:i.default.func,onError:i.default.func,onStartLoad:i.default.func,Tag:i.default.string,classId:i.default.string};var w=m;t.default=w},155:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;const a=e=>{const t=function(e){if("undefined"!=typeof document){const t=document.implementation.createHTMLDocument(""),n=document.createElement("style");return n.textContent=e,t.body.appendChild(n),n.sheet.cssRules}return{}}((e=>{const t="undefined"!=typeof window?window.document.styleSheets:[];for(let a=0;a<t.length;a++){let r;try{r=void 0!==t[a].rules?t[a].rules:void 0!==t[a].cssRules?t[a].cssRules:""}catch(n){console.debug(`Unable to read stylesheet rules for ${t[a].href}`,n)}if(r)for(let t=0;t<r.length;t++)if(r[t].selectorText===e){const e=r[t].cssText?r[t].cssText:r[t].style.cssText;return-1===e.indexOf(r[t].selectorText)?`${r[t].selectorText}{${e}}`:e}}})(`.${e}`));return t.length>0&&void 0!==t[0].style?Object.keys((e=>{let t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name){case"CSS2Properties":Object.values(e[0].style).forEach(n=>{t[(e=>e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(e,t)=>0===t?e.toLowerCase():e.toUpperCase()).replace(/\s|\W+/g,""))(n)]=e[0].style[n]});break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t})(t)).filter(e=>0===e.indexOf("background")&&""!==t[0].style[e]).reduce((e,n)=>(e[n]=t[0].style[n],e),{}):{}};var r=e=>{if("undefined"!=typeof window&&null!==e&&(e instanceof Object||e instanceof String||"string"==typeof e)&&!(e instanceof Array)){if(e.includes(" ")){const t=e.split(" ");let n=[];return t.forEach(e=>n.push(a(e))),Object.assign(...n)}return a(e)}return{}};t.default=r}}]);
//# sourceMappingURL=component---src-pages-index-js-eff99c306c0305d3f348.js.map