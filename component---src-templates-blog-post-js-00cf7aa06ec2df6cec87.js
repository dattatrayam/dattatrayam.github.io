(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(149),o=n(154),l=n.n(o),c=n(158),u=n.n(c);var m=function(e){return r.a.createElement(u.a,{title:e.title,meta:[{name:"title",content:e.title},{name:"description",content:e.description},{name:"keywords",content:e.keywords},{property:"og:title",content:e.title},{property:"og:url",content:e.pathname?e.url+e.pathname:e.url},{property:"og:keywords",content:e.keywords},{property:"og:image",content:e.thumbnail&&e.thumbnail},{property:"og:image:secure_url",content:e.thumbnail&&e.thumbnail},{property:"og:description",content:e.description},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:"en"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:e.title},{name:"twitter:description",content:e.description},{name:"twitter:image",content:e.thumbnail&&e.thumbnail},{property:"og:type",content:"website"},{name:"robots",content:"index, follow"},{name:"twitter:creator",content:"@saigowthamr"},{property:"og:site_name",content:"Reactgo"}]},r.a.createElement("html",{lang:"en"}))};n.d(t,"query",function(){return s});t.default=function(e){var t=e.data.markdownRemark,n=e.data.site.siteMetadata.siteUrl,a=t.frontmatter,o=a.title,c=a.description,u=a.keywords,s=t.frontmatter.image&&t.frontmatter.image.childImageSharp.resize.src;return r.a.createElement(i.a,null,r.a.createElement(m,{title:o,description:c,keywords:u,thumbnail:s?n+s:n,url:n,pathname:e.location.pathname}),r.a.createElement("div",null,r.a.createElement("h1",null,o),s&&r.a.createElement(l.a,{fluid:t.frontmatter.image.childImageSharp.fluid}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))};var s="487884817"},147:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(146),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(147),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var s=n(32);n.d(t,"parsePath",function(){return s.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(148),o=n(151);new(n.n(o).a)({baseFontSize:"18px",baseLineHeight:1.666,headerFontFamily:["Avenir Next","Helvetica Neue","Segoe UI","Helvetica","Arial","sans-serif"],bodyFontFamily:["Segoe UI","serif"]}).injectStyles();var l=function(e){return r.a.createElement("li",{className:"menuLink"},r.a.createElement(i.Link,{to:e.to},e.children),"  ")};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("ul",{className:"menu"},r.a.createElement(l,{to:"/"},"Home"),r.a.createElement(l,{to:"/post/"},"Posts"),r.a.createElement(l,{to:"/about/"},"About"))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t)),r.a.createElement("footer",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/dattatrayam"},r.a.createElement("span",null,"Github"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/dattatraya-mule-733033b/"},r.a.createElement("span",null,"Linkedin"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://eportfolio.greatlearning.in/dattatraya-mule"},r.a.createElement("span",null,"ePortfolio"))))))}},150:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(53),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-00cf7aa06ec2df6cec87.js.map