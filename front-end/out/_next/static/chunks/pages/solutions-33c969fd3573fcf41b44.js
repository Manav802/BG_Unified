_N_E=(window.jpgackJsonp_N_E=window.jpgackJsonp_N_E||[]).push([[26],{"2UJ4":function(e,t,n){"use strict";var r=n("ODXe"),i=n("q1tI"),a=n.n(i),o=n("CjxU"),l=n("y6dH"),c=a.a.createElement;t.a=function(e){var t=e.color,n=e.hex,i=void 0===n?"#fff":n,s=e.size,u=void 0===s?12:s,f=e.src,d=Object(o.b)(),p=d.colors,h=d.sizes,m=a.a.useState(p.black[500]),b=Object(r.a)(m,2),g=b[0],v=b[1];return a.a.useEffect((function(){if(t){var e=p[t.split(".")[0]][t.split(".")[1]]||p.black[500];v(e)}else v(i)}),[t]),c(l.a,{src:f,beforeInjection:function(e){e.setAttribute("style","fill: ".concat(g,";width: ").concat(h[u]||u,";height:").concat(h[u]||u,";"))}})}},"9yP4":function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("BMxC"),o=n("eJLp"),l=n("YFqc"),c=n.n(l),s=n("2UJ4"),u=i.a.createElement;var f=function(e){var t=u(a.a,{className:"text-white d-flex justify-content-center shadow-lg align-items-center",rounded:"12px",w:"128px",h:"128px",bg:e.iconBg||"Blue"},u(s.a,{size:"40px",color:"light.500",src:e.icon}));return e.fullIcon&&(t=u(a.a,{className:"text-white",rounded:"12px",w:"48px",h:"48px"},e.fullIcon)),u(a.a,{pt:"64px",h:"100%"},u(a.a,{h:"100%",className:"card-with-icon shadow-lg align-items-center d-flex flex-column bg-white rounded p-3"},u("div",{className:"row iconbox mb-3"},t),u("div",{className:"row display6 py-3 text-center mx-2"},e.title),u("div",{className:"row cardContent flex-fill py-2 mx-3 text-center"},e.children),u("div",{className:"row mx-3 my-3"},u(c.a,{href:"/solutions/[name]",as:"".concat(e.link)},u(o.a,{py:8,px:12,bg:"dark.500",color:"white",_hover:{color:"white",bg:"dark.400"},borderRadius:"0px 12px",rightIcon:"arrow-forward"},"Learn More")))))},d=n("sdzU"),p=i.a.createElement;t.a=function(e){var t=Object.entries(d.a).filter((function(t){return t[1].title===e.service}))[0];return p(i.a.Fragment,null,t&&p(f,{title:t[1].title,iconBg:t[1].color,link:"/solutions/"+t[0],icon:t[1].icon},t[1].description))}},J595:function(e,t,n){"use strict";var r=n("wx14"),i=n("Ff2n"),a=n("q1tI"),o=n.n(a),l=n("qWyU"),c=o.a.createElement;t.a=function(e){var t=e.fontSize,n=void 0===t?["3xl","32px","34px","4xl"]:t,a=e.px,o=void 0===a?"5px":a,s=e.children,u=void 0===s?"Lorem Ipsum":s,f=Object(i.a)(e,["fontSize","px","children"]);return c(l.a,Object(r.a)({textAlign:"center",fontFamily:"Nexa Bold",fontSize:n,px:o},f),u)}},QGqZ:function(e,t,n){"use strict";n.r(t);var r=n("ODXe"),i=n("q1tI"),a=n.n(i),o=(n("0vCa"),n("sdzU")),l=n("8Kt/"),c=n.n(l),s=n("YFqc"),u=n.n(s),f=n("TJ6B"),d=n("J595"),p=n("XZ7F"),h=n("bQFp"),m=n("qWyU"),b=n("sK1y"),g=n("eJLp"),v=n("BMxC"),x=n("y7Su"),w=n("IDkF"),y=n("wCB1"),j=n("Weur"),S=(n("9yP4"),n("WqJp")),I=n("2UJ4"),E=a.a.createElement,k=[{index:0,title:"IT & Infrastructure"},{index:1,title:"Network"},{index:2,title:"Cyber Security"},{index:3,title:"Collaborative"},{index:4,title:"Development"}];t.default=function(){var e=Object(p.a)(),t=e.isOpen,n=e.onOpen,i=e.onClose,l=a.a.useState(0),s=Object(r.a)(l,2),A=s[0],O=s[1];return E(a.a.Fragment,null,E(c.a,null,E("title",null,"Our Solutions")),E(f.a,{position:"relative",textAlign:"center",bg:["gray.200","#ffffff00"],py:[16,32],my:0},E(h.a,{alt:"",zIndex:"-100",mt:"-128px",style:{mixBlendMode:"darken"},minH:"448px",width:"100%",objectFit:"cover",left:0,position:"absolute",top:0,src:"/assets/images/backgrounds/dots_circle.jpg"}),E(m.a,{zIndex:"100",size:"xs",letterSpacing:1.8,textAlign:"center",color:"primary.500",mb:4,textTransform:"uppercase"},"What we deliver"),E(d.a,{zIndex:"100",fontSize:["44px","64px"]},"Our Solutions"),E(b.a,{zIndex:"100",fontSize:"xl",mt:2},"Choose your requirments. We provide you with the solution, needed for your Enterprise")),E(f.a,{mt:0,pt:0},E("div",{className:"d-flex mt-3 justify-content-center"},E(g.a,{onClick:n,className:"tab-dropdown",size:"lg",py:"32px",mb:"12px",px:"48px",rightIcon:"chevron-down"},E(v.a,{as:k[A].icon,size:"32px",mr:"12px"}),k[A].title),E(x.a,{placement:"bottom",size:"lg",onClose:i,isOpen:t},E(x.c,null),E(x.b,null,E(w.f,{borderBottomWidth:"1px"},"Choose an Operating System"),E(w.b,null,k.map((function(e){return E(a.a.Fragment,null,E(g.a,{key:e.index,onClick:function(){O(e.index),i()},variantColor:"white",py:"32px",className:"box-none text-dark justify-content-start hover-effect w-100 display6"},E(v.a,{as:e.icon,size:"32px",mr:"12px"})," ",e.title))})))))),E(y.f,{index:A,align:"center",onChange:function(e){O(e)},variantColor:"red.500"},E(y.c,{fontFamily:"Nexa Bold"},E(y.a,{className:"box-none tab",p:6},"IT & Infrastructure"),E(y.a,{className:"box-none tab",p:6},"Network"),E(y.a,{className:"box-none tab",p:6},"Cyber Security"),E(y.a,{className:"box-none tab",p:6},"Collaborative"),E(y.a,{className:"box-none tab",p:6},"Development")),E(y.e,null,E(y.d,null,E(S.a,null,Object.entries(o.a).filter((function(e){return"IT Infrastructural Services"===e[1].category})).map((function(e){return E(v.a,{width:["100%","100%","50%"],p:5},E(j.a,{my:5,bg:"white",boxShadow:"lg",height:"100%",direction:["column","row"],rounded:8,overflow:"hidden"},E(j.a,{minH:"100px",minW:"160px",justify:"center",align:"center",bg:e[1].color},E(I.a,{src:e[1].icon,size:"48px"})),E(v.a,{p:8},E(m.a,{size:"lg",fontFamily:"Nexa Bold"},e[1].title),E(b.a,{mt:2},e[1].description),E(u.a,{href:"/solutions/[name]",as:"/solutions/"+e[0]},E(g.a,{as:"a",mt:3,px:0,bg:"white",className:"link",_hover:{color:"primary.500",bg:"white"},rightIcon:"arrow-forward"},"Learn More")))))})))),E(y.d,null,E(S.a,null,Object.entries(o.a).filter((function(e){return"Network Services"===e[1].category})).map((function(e){return E(v.a,{width:["100%","100%","50%"],p:5},E(j.a,{my:5,bg:"white",boxShadow:"lg",height:"100%",direction:["column","row"],rounded:8,overflow:"hidden"},E(j.a,{minH:"100px",minW:"160px",justify:"center",align:"center",bg:e[1].color},E(I.a,{src:e[1].icon,size:"48px"})),E(v.a,{p:8},E(m.a,{size:"lg",fontFamily:"Nexa Bold"},e[1].title),E(b.a,{mt:2},e[1].description),E(u.a,{href:"/solutions/[name]",as:"/solutions/"+e[0]},E(g.a,{as:"a",mt:3,px:0,bg:"white",className:"link",_hover:{color:"primary.500",bg:"white"},rightIcon:"arrow-forward"},"Learn More")))))})))),E(y.d,null,E(S.a,null,Object.entries(o.a).filter((function(e){return"Cyber Security Services"===e[1].category})).map((function(e){return E(v.a,{width:["100%","100%","50%"],p:5},E(j.a,{my:5,bg:"white",boxShadow:"lg",height:"100%",direction:["column","row"],rounded:8,overflow:"hidden"},E(j.a,{minH:"100px",minW:"160px",justify:"center",align:"center",bg:e[1].color},E(I.a,{src:e[1].icon,size:"48px"})),E(v.a,{p:8},E(m.a,{size:"lg",fontFamily:"Nexa Bold"},e[1].title),E(b.a,{mt:2},e[1].description),E(u.a,{href:"/solutions/[name]",as:"/solutions/"+e[0]},E(g.a,{as:"a",mt:3,px:0,bg:"white",className:"link",_hover:{color:"primary.500",bg:"white"},rightIcon:"arrow-forward"},"Learn More")))))})))),E(y.d,null,E(S.a,null,Object.entries(o.a).filter((function(e){return"Collaborative Services"===e[1].category})).map((function(e){return E(v.a,{width:["100%","100%","50%"],p:5},E(j.a,{my:5,bg:"white",boxShadow:"lg",height:"100%",direction:["column","row"],rounded:8,overflow:"hidden"},E(j.a,{minH:"100px",minW:"160px",justify:"center",align:"center",bg:e[1].color},E(I.a,{src:e[1].icon,size:"48px"})),E(v.a,{p:8},E(m.a,{size:"lg",fontFamily:"Nexa Bold"},e[1].title),E(b.a,{mt:2},e[1].description),E(u.a,{href:"/solutions/[name]",as:"/solutions/"+e[0]},E(g.a,{as:"a",mt:3,px:0,bg:"white",className:"link",_hover:{color:"primary.500",bg:"white"},rightIcon:"arrow-forward"},"Learn More")))))})))),E(y.d,null,E(S.a,null,Object.entries(o.a).filter((function(e){return"Professional Services"===e[1].category})).map((function(e){return E(v.a,{width:["100%","100%","50%"],p:5},E(j.a,{my:5,bg:"white",boxShadow:"lg",height:"100%",direction:["column","row"],rounded:8,overflow:"hidden"},E(j.a,{minH:"100px",minW:"160px",justify:"center",align:"center",bg:e[1].color},E(I.a,{src:e[1].icon,size:"48px"})),E(v.a,{p:8},E(m.a,{size:"lg",fontFamily:"Nexa Bold"},e[1].title),E(b.a,{mt:2},e[1].description),E(u.a,{href:"/solutions/[name]",as:"/solutions/"+e[0]},E(g.a,{as:"a",mt:3,px:0,bg:"white",className:"link",_hover:{color:"primary.500",bg:"white"},rightIcon:"arrow-forward"},"Learn More")))))}))))))))}},SiTN:function(e,t,n){"use strict";var r=n("wx14"),i=n("Ff2n"),a=n("q1tI"),o=n.n(a),l=n("BMxC"),c=o.a.createElement;t.a=function(e){var t=e.width,n=void 0===t?["100%","100%","720px","960px","1140px"]:t,a=e.children,o=Object(i.a)(e,["width","children"]);return c(l.a,Object(r.a)({px:4,mx:"auto",width:n},o),a)}},TJ6B:function(e,t,n){"use strict";var r=n("wx14"),i=n("Ff2n"),a=n("q1tI"),o=n.n(a),l=n("Weur"),c=n("SiTN"),s=o.a.createElement;t.a=function(e){var t=e.my,n=void 0===t?8:t,a=e.py,o=void 0===a?8:a,u=e.blend,f=e.align,d=void 0===f?"center":f,p=e.bgAttachment,h=e.containerWidth,m=e.children,b=void 0===m?"Section":m,g=Object(i.a)(e,["my","py","blend","align","bgAttachment","containerWidth","children"]);return s(l.a,Object(r.a)({my:n,py:o,width:"100%",justify:d,direction:"column",backgroundPosition:"center",backgroundAttachment:p,backgroundSize:"cover",style:{backgroundBlendMode:u}},g),s(c.a,{width:h},b))}},WqJp:function(e,t,n){"use strict";var r=n("wx14"),i=n("Ff2n"),a=n("q1tI"),o=n.n(a),l=n("Weur"),c=o.a.createElement;t.a=function(e){var t=e.justify,n=e.flexWrap,a=void 0===n?"wrap":n,o=e.rowDistance,s=Object(i.a)(e,["justify","flexWrap","rowDistance"]);return c(l.a,Object(r.a)({display:"inline-flex",w:"100%",mt:o,flexWrap:a,direction:s.direction,justify:t||"center"},s))}},dJsE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solutions",function(){return n("QGqZ")}])},y6dH:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n("8OQS"),i=n.n(r),a=n("VbXa"),o=n.n(a),l=function(e){return e.cloneNode(!0)},c=function(){return"file:"===window.location.protocol},s=new Map,u={},f=function(e,t){u[e]=u[e]||[],u[e].push(t)},d=function(e){for(var t=function(t,n){setTimeout((function(){if(Array.isArray(u[e])){var n=s.get(e),r=u[e][t];n instanceof SVGElement&&r(null,l(n)),n instanceof Error&&r(n),t===u[e].length-1&&delete u[e]}}),0)},n=0,r=u[e].length;n<r;n++)t(n)},p=0,h=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var a=arguments[t],o=0,l=a.length;o<l;o++,i++)r[i]=a[o];return r},m=[],b={},g="http://www.w3.org/1999/xlink",v=function(e,t,n,r,i){var a=e.getAttribute("data-src")||e.getAttribute("src");if(a&&/\.svg/i.test(a)){if(-1!==m.indexOf(e))return m.splice(m.indexOf(e),1),void(e=null);m.push(e),e.setAttribute("src",""),function(e,t){if(s.has(e)){var n=s.get(e);return n instanceof SVGElement?void t(null,l(n)):n instanceof Error?void t(n):void f(e,t)}s.set(e,void 0),f(e,t);var r=new XMLHttpRequest;r.onreadystatechange=function(){try{if(4===r.readyState){if(404===r.status||null===r.responseXML)throw new Error(c()?"Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(!(200===r.status||c()&&0===r.status))throw new Error("There was a problem injecting the SVG: "+r.status+" "+r.statusText);r.responseXML instanceof Document&&r.responseXML.documentElement&&s.set(e,r.responseXML.documentElement),d(e)}}catch(t){s.set(e,t),d(e)}},r.open("GET",e),r.overrideMimeType&&r.overrideMimeType("text/xml"),r.send()}(a,(function(o,l){if(!l)return m.splice(m.indexOf(e),1),e=null,void i(o);var c=e.getAttribute("id");c&&l.setAttribute("id",c);var s=e.getAttribute("title");s&&l.setAttribute("title",s);var u=e.getAttribute("width");u&&l.setAttribute("width",u);var f=e.getAttribute("height");f&&l.setAttribute("height",f);var d=Array.from(new Set(h((l.getAttribute("class")||"").split(" "),["injected-svg"],(e.getAttribute("class")||"").split(" ")))).join(" ").trim();l.setAttribute("class",d);var v=e.getAttribute("style");v&&l.setAttribute("style",v),l.setAttribute("data-src",a);var x=[].filter.call(e.attributes,(function(e){return/^data-\w[\w-]*$/.test(e.name)}));if(Array.prototype.forEach.call(x,(function(e){e.name&&e.value&&l.setAttribute(e.name,e.value)})),n){var w,y,j,S,I,E={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(E).forEach((function(e){w=e,j=E[e];for(var t=function(e,t){var n;S=y[e].id,I=S+"-"+ ++p,Array.prototype.forEach.call(j,(function(e){for(var t=0,r=(n=l.querySelectorAll("["+e+'*="'+S+'"]')).length;t<r;t++){var i=n[t].getAttribute(e);i&&!i.match(new RegExp("url\\(#"+S+"\\)"))||n[t].setAttribute(e,"url(#"+I+")")}}));for(var r=l.querySelectorAll("[*|href]"),i=[],a=0,o=r.length;a<o;a++){var c=r[a].getAttributeNS(g,"href");c&&c.toString()==="#"+y[e].id&&i.push(r[a])}for(var s=0,u=i.length;s<u;s++)i[s].setAttributeNS(g,"href","#"+I);y[e].id=I},n=0,r=(y=l.querySelectorAll(w+"[id]")).length;n<r;n++)t(n)}))}l.removeAttribute("xmlns:a");for(var k,A,O=l.querySelectorAll("script"),N=[],C=0,z=O.length;C<z;C++)(A=O[C].getAttribute("type"))&&"application/ecmascript"!==A&&"application/javascript"!==A&&"text/javascript"!==A||((k=O[C].innerText||O[C].textContent)&&N.push(k),l.removeChild(O[C]));if(N.length>0&&("always"===t||"once"===t&&!b[a])){for(var M=0,W=N.length;M<W;M++)new Function(N[M])(window);b[a]=!0}var q=l.querySelectorAll("style");Array.prototype.forEach.call(q,(function(e){e.textContent+=""})),l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("xmlns:xlink",g),r(l),e.parentNode&&e.parentNode.replaceChild(l,e),m.splice(m.indexOf(e),1),e=null,i(null,l)}))}else i(new Error("Attempted to inject a file with a non-svg extension: "+a))},x=n("17x9"),w=n("q1tI"),y=n("KAy6"),j=n.n(y),S=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).initialState={hasError:!1,isLoading:!0},t.state=t.initialState,t._isMounted=!1,t.refCallback=function(e){t.container=e},t}o()(t,e);var n=t.prototype;return n.renderSVG=function(){var e=this;if(this.container instanceof Node){var t=this.props,n=t.beforeInjection,r=t.evalScripts,i=t.renumerateIRIElements,a=t.src,o=this.props.afterInjection,l=this.props.wrapper,c=document.createElement(l);c.innerHTML=j.a.renderToStaticMarkup(Object(w.createElement)(l,null,Object(w.createElement)(l,{"data-src":a}))),this.svgWrapper=this.container.appendChild(c.firstChild);!function(e,t){var n=void 0===t?{}:t,r=n.afterAll,i=void 0===r?function(){}:r,a=n.afterEach,o=void 0===a?function(){}:a,l=n.beforeEach,c=void 0===l?function(){}:l,s=n.evalScripts,u=void 0===s?"never":s,f=n.renumerateIRIElements,d=void 0===f||f;if(e&&"length"in e)for(var p=0,h=0,m=e.length;h<m;h++)v(e[h],u,d,c,(function(t,n){o(t,n),e&&"length"in e&&e.length===++p&&i(p)}));else e?v(e,u,d,c,(function(t,n){o(t,n),i(1),e=null})):i(0)}(this.svgWrapper.firstChild,{afterEach:function(t,n){t&&e.removeSVG(),e._isMounted&&e.setState((function(){return{hasError:!!t,isLoading:!1}}),(function(){o(t,n)}))},beforeEach:n,evalScripts:r,renumerateIRIElements:i})}},n.removeSVG=function(){this.container instanceof Node&&this.svgWrapper instanceof Node&&(this.container.removeChild(this.svgWrapper),this.svgWrapper=null)},n.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},n.componentDidUpdate=function(e){var t=this;(function(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1})(e,this.props)&&this.setState((function(){return t.initialState}),(function(){t.removeSVG(),t.renderSVG()}))},n.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},n.render=function(){var e=this.props,t=(e.afterInjection,e.beforeInjection,e.evalScripts,e.fallback),n=e.loading,r=(e.renumerateIRIElements,e.src,e.wrapper),a=i()(e,["afterInjection","beforeInjection","evalScripts","fallback","loading","renumerateIRIElements","src","wrapper"]),o=r;return Object(w.createElement)(o,Object.assign({},a,{ref:this.refCallback}),this.state.isLoading&&n&&Object(w.createElement)(n,null),this.state.hasError&&t&&Object(w.createElement)(t,null))},t}(w.Component);S.defaultProps={afterInjection:function(){},beforeInjection:function(){},evalScripts:"never",fallback:null,loading:null,renumerateIRIElements:!0,wrapper:"div"},S.propTypes={afterInjection:x.func,beforeInjection:x.func,evalScripts:Object(x.oneOf)(["always","once","never"]),fallback:Object(x.oneOfType)([x.func,x.object,x.string]),loading:Object(x.oneOfType)([x.func,x.object,x.string]),renumerateIRIElements:x.bool,src:x.string.isRequired,wrapper:Object(x.oneOf)(["div","span"])}}},[["dJsE",0,1,6,2,4,3,5,7]]]);