(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"listQuery",function(){return c});var n=a(0),r=a.n(n),l=a(149),i=a(148);t.default=function(e){var t=e.data.allMarkdownRemark;return r.a.createElement(l.a,null,r.a.createElement("div",null,t.edges.map(function(e,t){var a=e.node;return r.a.createElement("div",{className:"post-list"},r.a.createElement(i.Link,{to:a.fields.slug,className:"link"},"  ",r.a.createElement("div",{className:"title"},a.frontmatter.title),"  "),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,a.frontmatter.description)),r.a.createElement("div",{className:"date"},r.a.createElement("p",null," ",a.frontmatter.date," | ",r.a.createElement("span",{className:"keyword"},a.frontmatter.keywords," "))))})))};var c="2670556187"},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(146),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(147),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(148),i=a(151);new(a.n(i).a)({baseFontSize:"18px",baseLineHeight:1.666,headerFontFamily:["Avenir Next","Helvetica Neue","Segoe UI","Helvetica","Arial","sans-serif"],bodyFontFamily:["Segoe UI","serif"]}).injectStyles();var c=function(e){return r.a.createElement("li",{className:"menuLink"},r.a.createElement(l.Link,{to:e.to},e.children),"  ")};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("ul",{className:"menu"},r.a.createElement(c,{to:"/"},"Home"),r.a.createElement(c,{to:"/post/"},"Posts"),r.a.createElement(c,{to:"/about/"},"About"))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t)),r.a.createElement("footer",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/dattatrayam"},r.a.createElement("span",null,"Github"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/dattatraya-mule-733033b/"},r.a.createElement("span",null,"Linkedin"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://eportfolio.greatlearning.in/dattatraya-mule"},r.a.createElement("span",null,"ePortfolio"))))))}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(53),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u}}]);
//# sourceMappingURL=component---src-pages-post-js-88aca9ca408a3a9cb221.js.map