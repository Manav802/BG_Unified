(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"+5P8":function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),a=n("Weur"),r=n("bQFp"),s=n("YFqc"),l=n.n(s),c=i.a.createElement;t.a=function(e){return c(l.a,{href:"/newsroom/[bid]",as:e.link},c(a.a,{className:"hover-effect",p:3,mt:1,borderRadius:"lg",maxWidth:"400px"},c(r.a,{objectFit:"cover",src:e.image,className:"rounded-8 mt-1",height:"56px",width:"80px"}),c("div",{className:"col"},c("div",{className:"NunitoSans-Bold py-2"},e.heading))))}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=r,t.useAmp=function(){return r(i.default.useContext(a.AmpStateContext))};var o,i=(o=n("q1tI"))&&o.__esModule?o:{default:o},a=n("lwAK");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,i=void 0!==o&&o,a=e.hasQuery;return n||i&&(void 0!==a&&a)}},"5fIB":function(e,t,n){var o=n("7eYB");e.exports=function(e){if(Array.isArray(e))return o(e)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var o=l(n("q1tI")),i=l(n("Xuae")),a=n("lwAK"),r=n("FYa8"),s=n("/0+H");function l(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var r=i.key.slice(i.key.indexOf("$")+1);e.has(r)?a=!1:e.add(r)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var s=0,l=d.length;s<l;s++){var c=d[s];if(i.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var u=i.props[c],f=o[c]||new Set;f.has(u)?a=!1:(f.add(u),o[c]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var h=(0,i.default)();function p(e){var t=e.children;return(o.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(r.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(h,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,s.isInAmpMode)(e)},t)}))})))}p.rewind=h.rewind;var m=p;t.default=m},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var i=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext(null);t.HeadManagerContext=i},OFkv:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/[bid]",function(){return n("wXlI")}])},Weur:function(e,t,n){"use strict";var o=n("pVnL"),i=n.n(o),a=n("8OQS"),r=n.n(a),s=n("q1tI"),l=n.n(s),c=n("BMxC"),u=Object(s.forwardRef)((function(e,t){var n=e.align,o=e.justify,a=e.wrap,s=e.direction,u=r()(e,["align","justify","wrap","direction"]);return l.a.createElement(c.a,i()({ref:t,display:"flex",flexDirection:s,alignItems:n,justifyContent:o,flexWrap:a},u))}));u.displayName="Flex",t.a=u},Xuae:function(e,t,n){"use strict";var o=n("/GRZ"),i=n("qXWd"),a=n("i2R6"),r=n("48fX"),s=n("tCBg"),l=n("T0f4"),c=n("mPvQ");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(s){r(c,s);var l=u(c);function c(e){var a;return o(this,c),a=l.call(this,e),f&&(t.add(i(a)),n(i(a))),a}return a(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(d.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},bQFp:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var o=n("pVnL"),i=n.n(o),a=n("8OQS"),r=n.n(a),s=n("qKvR"),l=n("q1tI"),c=n("BMxC");function u(e){var t=e.src,n=e.onLoad,o=e.onError,i=e.enabled,a=void 0===i||i,r=Object(l.useRef)(!0),s=Object(l.useState)(!1),c=s[0],u=s[1];return Object(l.useEffect)((function(){if(t&&a){var e=new window.Image;e.src=t,e.onload=function(e){r.current&&(u(!0),n&&n(e))},e.onerror=function(e){r.current&&(u(!1),o&&o(e))}}}),[t,n,o,a]),Object(l.useEffect)((function(){return function(){r.current=!1}}),[]),c}var d=Object(l.forwardRef)((function(e,t){var n=e.htmlWidth,o=e.htmlHeight,a=e.alt,l=r()(e,["htmlWidth","htmlHeight","alt"]);return Object(s.d)("img",i()({width:n,height:o,ref:t,alt:a},l))})),f=Object(l.forwardRef)((function(e,t){var n=e.src,o=e.fallbackSrc,a=e.onError,l=e.onLoad,f=e.ignoreFallback,h=r()(e,["src","fallbackSrc","onError","onLoad","ignoreFallback"]),p=u({src:n,onLoad:l,onError:a,enabled:!Boolean(f)}),m=f?{src:n,onLoad:l,onError:a}:{src:p?n:o};return Object(s.d)(c.a,i()({as:d,ref:t},m,h))}));f.displayName="Image",t.a=f},cTJO:function(e,t,n){"use strict";var o=n("/GRZ"),i=n("i2R6"),a=n("48fX"),r=n("tCBg"),s=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return r(this,n)}}var c=n("AroE"),u=n("7KCV");t.__esModule=!0,t.default=void 0;var d,f=u(n("q1tI")),h=n("QmWs"),p=n("g/15"),m=c(n("nOHt")),g=n("elyg");function v(e){return e&&"object"===typeof e?(0,p.formatWithValidation)(e):e}var w=new Map,y=window.IntersectionObserver,C={};function S(){return d||(y?d=new y((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var b=function(e){a(n,e);var t=l(n);function n(e){var i;return o(this,n),(i=t.call(this,e)).p=void 0,i.cleanUpListeners=function(){},i.formatUrls=function(e){var t=null,n=null,o=null;return function(i,a){if(o&&i===t&&a===n)return o;var r=e(i,a);return t=i,n=a,o=r,r}}((function(e,t){return{href:(0,g.addBasePath)(v(e)),as:t?(0,g.addBasePath)(v(t)):t}})),i.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,o=t.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=i.formatUrls(i.props.href,i.props.as),r=a.href,s=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,p.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(r)){var l=window.location.pathname;r=(0,h.resolve)(l,r),s=s?(0,h.resolve)(l,s):r,e.preventDefault();var c=i.props.scroll;null==c&&(c=s.indexOf("#")<0),m.default[i.props.replace?"replace":"push"](r,s,{shallow:i.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},i.p=!1!==e.prefetch,i}return i(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,o=t.as,i=(0,h.resolve)(e,n);return[i,o?(0,h.resolve)(e,o):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),C[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=S();return n?(n.observe(e),w.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),C[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),o=n.href,i=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var a=f.Children.only(t),r={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(r.href=i||o),f.default.cloneElement(a,r)}}]),n}(f.Component);t.default=b},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var i=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=i},mPvQ:function(e,t,n){var o=n("5fIB"),i=n("rlHP"),a=n("KckH"),r=n("kG2m");e.exports=function(e){return o(e)||i(e)||a(e)||r()}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},wXlI:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return h}));var o=n("q1tI"),i=n.n(o),a=n("bQFp"),r=(n("+5P8"),n("nOHt")),s=[{id:"covid-19",title:"COVID-19",content:"COVID-19 working from home taught us more lessons and even let us able to figure it out how we can be exponentially productive than just enjoying the comfort of staying at home. How is it possible for us to streamline everything and hit our goals. Working on bringing more clients on board, what investments are aligned with the business goals, what\u2019s the company vision, where we want to take this company, what we can do better for our clients, give them more love. Technology has given us enough opportunity to make time out of time and make BG more profitable. B2B calls or working on highly sensitive projects - this technology just made it easy for us to make the company\u2019s profits exponential and we surely hope to learn more with this opportunity to work from home.\n\n        BG Unified Solutions have now upgraded all of the VPNHEADEND firewalls, where all of the remote users / remote phones / any other secure remote connectivity terminates into 10G Firewalls with each firewall having a capacity of 2 million concurrent connections.\n        \n        We have noticed a big jump in the number of remote users from 20 or 30 on average to 275 as per the latest reports.\n        \n        We have increased our firewalls capacity to 10G firewalls in all DC locations. Now we have PaloAlto 5K, Fortinet 3700D\u2019s and ASA 5585X with full UTM capabilities to provide you with a secure internet access.\n        \n        We have increased our core capacity in all DC locations to 40G devices with ALLFLASH storage for VDI/RDSaaS. We have added 150 TB of ALLFLASH Storage into our DC locations to support VDIaaS, WorkstationAAS and RDSaaS.\n        \n        All of the firewalls in production are now 10G firewalls.\n        \n        We have added 150 TB of ALLFLASH Storage into our DC locations to support VDIaaS, WorkstationAAS and RDSaaS. We will compile the golden image for you and get all the necessary software for you to work remotely. We can provide you with UCaaS using CISCO or Avaya.\n        \n        We can make Contact Center scripts for you without any professional services costs.\n        \n        \n        The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and Huawei Australia have been working collaboratively to provide all Australians with solid and comprehensive IT solutions, keeping business operations running efficiently during the most challenging times.\n        \n        We are here to help in this tough time. Please do not hesitate to ask for help, whether you need VDI, UC, Storage, Managed Firewall or anything that will help you to keep carrying on your work remotely and keep you & your family safe in this time! ! !\n        Anything you need starting from storage, DR, Contact Center, Compute, VDI, RDS, DNS, SIP, Email Filtering or DB, don\u2019t hesitate to contact us!!.\n        \n        WE ARE HERE TO HELP!!!\n        ",date:"21st March 2020",image:"/assets/images/newsroom/coronavirus.jpg"},{id:"1-bg-unified-solutions-have-added-7-cisco-blade-chassis",title:"BG Unified Solutions have added 7 Cisco Blade Chassis",content:"BG Unified Solutions have added 7 Cisco Blade Chassis with fully populated B230 Blades with 40 Cores CPU and 256GB RAM along with a brand new Hitachi T1 Storage in Equinix Melbourne. We are now in the process of procuring 16 racks cage in Equinix SY3 and ME1 to become a storage hub for all of the existing BGUS members of the family and new members. These two cages will be purely assigned to storage. We have more than 16 NETAPP racks ready to go in these cages. BGUS Cloud Services will be launched very soon with the collaboration of Redhat and Cumulus Networks",image:"/assets/images/newsroom/1. cisco blade chasis.png"},{id:"2-successfull-up-gradation-of-mega-cisco-call-manager-cluster-from-version-10.5.1-to-12.0.1.su1",title:"Successfull up gradation of Mega Cisco Call Manager cluster from version 10.5.1 to 12.0.1.SU1",content:"BG Unified Solutions team have successfully upgraded its mega Cisco Call Manager cluster from version 10.5.1 to 12.0.1.SU1. This was not an easy job. With so many dependencies/clients, making it happen without any downtime to any of the end users. All UCCX applications, CUC and CUPS integrations tested. CDR reporting is working absolutely normal. Informacast is working perfectly fine. Such an amazing job. The whole solution got backed up before and after upgrade to handle any catastrophic issues after the upgrade. Well done team ! ! ! !",image:"/assets/images/newsroom/2. Call manager.png"},{id:"3-bg-unified-solutions-got-nominated-for-two-awards-under-service-and-collaboration-within-revenue-nsw",title:"BG Unified Solutions got nominated for two awards under Service and Collaboration within Revenue NSW",content:"BG Unified Solutions got nominated for two awards under Service and Collaboration within Revenue NSW in the annual excellence awards. We are proud in getting recognized. We deliver what we promised to our customers. BGUS team have also successfully upgrade a cluster of SBC in IBMDC Auckland without any downtime. It\u2019s amazing to see team\u2019s enthusiasm\u2026",image:"/assets/images/newsroom/3. Award Nomination.png"},{id:"5-cisco-asa-5520-to-5525x-with-firepower-services",title:"Cisco ASA 5520 to 5525X with FirePower Services",content:"Project description \n\n        Migrating and merging of two Cisco ASA 5520 & 5505 into a new Cisco ASA 5525X with FirePower Services. Upgraded the configuration from 8.2.5 to 9.2.2(4) with FirePower Module running 6.0. Implemented the Device Center and all policies to block the Malwares, Adult Contents, Gambling and Online Gaming.\n        \n        Total downtime was less than 10 minutes with all remote VPN sites migrated in max 20 minutes.\n        \n        Client filled up the Referee Report for BG Unified Solutions to get Federal Government Clearance.",date:"Nov 2015",image:"/assets/images/newsroom/5. ASA 5520.jpg"},{id:"6-cisco-wlc-5508-ha-deloyment",title:"Cisco WLC 5508 HA Deloyment",content:"Project description\n\n        Deployment of Cisco WLC 5508 for -\n        1. Recommended Configuration.\n        2. HA Configuration and Deployment.\n        3. Recommend Configuration for FlexConnect.\n        \n        More than 200 Access Points were upgraded as a part of the HA Implementation. Firmware including FUS was upgraded. Application visibility profiles were created with proper QoS marking for certain traffic types.\n        \n        Working on rolling out the FlexConnect configuration to all the LAP's.\n        ",date:"Feb 2014",image:"/assets/images/newsroom/6. Cisco WLC 5508.png"},{id:"7-first-bg-unified-solutions-hosted-uc-solution",title:"First 'BG Unified Solutions' Hosted UC Solution",content:"Project description\n\n        Designed and Implemented a UCCX/CUPS Solution for more that 10 Voice CSQ's / EMAIL CSQ / CHAT CSQ's. Solution also offering a full redundancy in every single component of a Unified Communication Solution.\n        - Cisco CUCM Cluster.\n        - Cisco UCCX Cluster: Written multiple complex scripts for CSQ's.\n        - Cisco WFM fully integrated with UCCX.\n        - Cisco QM doing Network Monitoring.\n        - Cisco Unity Connection Cluster.\n        - Cisco Unified Presence Cluster.\n        - Desktop Sharing using Jabber.\n        - UCCX Scripts for Service Desk / Meet Me / Remote Monitoring\n        - Unity Connection / Exchange Integration\n        - Unified Presence / Exchange Integration\n        - CUPC/CIPC/Jabber on iPAD, Jabber on iPHONE\n        - Social Miner\n\n        More work is in progress to roll out this solution to clients in multiple countries. Configured Cisco ASA 5510 HA Cluster as a UC Proxy. Configured Cisco 7925 Wireless handsets with a complete configuration for WLC 2504 & 1262 LAP's for the first client.\n\n        ",date:"Jan 2014",image:"/assets/images/newsroom/7. Unified Solutions.png"},{id:"8-bgus-service-portfolio-update",title:"BGUS Service Portfolio Update",content:"We have added few more services in our portfolio recently.\n\n        3CXaaS - **3cx.bgunifiedsolutions.net** : Another UCaaS platform in addition to Cisco and Avaya - which offers all advantages of 3CX platform to the BGUS end customers. The team is working with the 3CX Gold Partners to containerize the 3CXaaS offering to make it highly scalable. We are offering Fanvil C400/C600 video handsets as a standard offering to the end customer. The solution provides all collaboration functionalities as offered by Cisco and Avaya.\n        \n        ARCaaS - Logging Cloud Connect : A remote logging facility to the BGUS end customers to save their logs over the internet to the highly secured storage platform within the BGUS data centers. The solution is offered using MicroFocus ArcSight and is the first step towards offering SOCaaS. A highly available solution to the end customers and taking their pain away for storing their critical logs.\n        \n        ",image:"/assets/images/newsroom/8. Portfolio Update.png"},{id:"9-business-operations-during-covid-19",title:" Business Operations during COVID-19 ",content:"The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and Huawei Australia have been working collaboratively to provide all Australians with solid and comprehensive IT solutions, keeping business operations running efficiently during the most challenging times.\n\n        We are here to help in this tough time. Please do not hesitate to ask for help, whether you need VDI, UC, Storage, Managed Firewall or anything that will help you to keep carrying on your work remotely and keep you & your family safe in this time! ! !\n        \n        ",image:"/assets/images/newsroom/coronavirus.jpg"},{id:"10-remote-working-in-covid-19",title:"Remote Working in COVID-19",content:"We have added 150 TB of ALLFLASH Storage into our DC locations to support VDIaaS, WorkstationAAS and RDSaaS. We will compile the golden image for you and get all necessary softwares for you to work remotely. We can provide you with UCaaS using CISCO or Avaya.\n\n        We can make Contact Center scripts for you without any professional services costs.\n        \n        We are here to help!!!\n        Once again for any organizations related to Healthcare & Public Health & Safety, these offerings are FREE OF COST.\n        \n        ",image:"/assets/images/newsroom/10. Remote working in covid 19.png"},{id:"11-complete-vdi-rds-as-a-service",title:"Complete VDI/RDS As A Service",content:"We feel proud in announcing ConstantVDI service offering, which will offer you a complete VDI/RDS As A Service Solution using VMWARE, Parallels and Acronis Cyber Infrastructure.\n\n        The solution will be tailored to your requirements. We have done an extensive POC using Parallels and VMWARE using different clients including Windows 10, iPhone, iPAD and Android from different locations in Australia, NZ, UAE and China.\n        \n        SOE engineers will work with you to create a golden image for VDI deployment. Session based RDS will be deployed using high performance RDS servers (24vCPU's / 128GB RAM / 10G Network Connectivity).\n        \n        Daily / Hourly backups using Acronis will give you a peace of mind.\n        \n        Solution is fully integrated with other Microsoft Office products like teams and office 365.        \n        \n        ",image:"/assets/images/newsroom/11. Complete VDI.png"},{id:"12-bg-unified-solutions-is-announcing-bundled-solution",title:"BG Unified Solutions is announcing bundled solution",content:"Solution1010C-ENT - an enterprise grade complete IT Solution for any organization.\n        This solution includes:\n        A Cisco ASA / PaloAlto Firewall Cluster fully managed by 24x7 NOC. 36 months warranty support. Upgrade options available for 10G firewalls.\n        \n        Cisco 3700/3800 Access Points (15) managed centrally by a highly redundant Cisco WLC Infrastructure.\n        \n        4 x Cisco Switch Stack fully managed by the 24x7 NOC.\n        \n        100 Cisco 7965G handsets for 100 users. 36 months warranty support.\n        \n        Unlimited calls including local, national, mobile, 13, 1300 and 1800.\n        \n        DID for 100 users.\n        \n        Free porting for existing 1300 numbers.\n        \n        5 x Hosted File Server / Application Server / Standard VM's with 8 vCPU's, 8GB RAM and 1TB T1 Storage with Daily Backups. Licenses included.\n        \n        5 x Hosted SQL Server / Premium VM's with 12 vCPU's, 16GB RAM and 1TB T1 Storage with Daily Backups. Licenses included.\n        \n        10TB T3 Backup Storage.\n        \n        Email Filtering for 5 Domains using highly redundant Email Filtering Gateways.              \n        \n        ",image:"/assets/images/newsroom/12. Bundled Solutions.png"},{id:"13-a-complete-office-it-infrastructure-for-small-to-medium-size-organizations",title:"A complete Office IT Infrastructure for small to medium size organizations.",content:"An enterprise level solution for any small to medium size organization with single or multiple sites.\n\n        This solution includes:\n\n        A Cisco ASA / PaloAlto Firewall (5512X / 220PA) fully managed by 24x7 NOC. 36 months warranty support.\n        Cisco 3700/3800 Access Points (5) managed centrally by a highly redundant Cisco WLC Infrastructure hosted in multiple DC locations. Corporate wireless included.\n        Cisco Switch Stack fully managed by the 24x7 NOC. 36 months warranty support.\n        20 Cisco 7965G handsets for 20 users. 36 months warranty support.\n        Unlimited calls including local, national, mobile, 13, 1300 and 1800.\n        DID for 20 users.\n        1 x Hosted File Server / Application Server with 8 vCPU's, 8GB RAM and 1TB T1 Storage with Daily Backups. Windows Licenses included.\n        1 x Hosted SQL Server with 12 vCPU's, 16GB RAM and 1TB T1 Storage with Daily Backups. Windows Licenses included.\n        5TB T3 Backup Storage.\n        Email Filtering for 5 Domains using highly redundant Email Filtering Gateways for unlimited users.\n                    \n        ",image:"/assets/images/newsroom/13. IT infrastructure.png"},{id:"14-constant-uplink",title:"Constant Uplink",content:"Another service offered by BG Unified Solutions, is providing a multi home Internet bandwidth through multiple DC locations with a fully managed UTM enabled multiple layers firewall topology at $6/Mbps without a dedicated virtual firewall and $15/Mbps with a dedicated virtual firewall (100M/100M minimum order). A ConstantUplink - a complete redundant and monitored solution. Firewall will be of your choice - PaloAlto, Cisco or Fortinet.\n\n        ConstantEFG - another service offered by BG Unified Solutions, is providing Email Filtering for Unlimited Domains and Unlimited users under less than $3k. A highly redundant solution across multiple DC locations with fully managed by 24x7 NOC.         \n        "}],l=n("8Kt/"),c=n.n(l),u=n("YFqc"),d=n.n(u),f=i.a.createElement;var h=!0;t.default=function(){var e=Object(r.useRouter)().query.bid,t=s.filter((function(t){if(t.id==e)return t}))[0]||{content:""},n=t.content.split("\n").map((function(e,t){return f("p",{key:t},e," ",f("br",null))}));return f("div",{className:"article"},f(c.a,null,f("title",null,t.title||""),f("link",{rel:"shortcut icon",href:"../assets/images/icons/favicon/bg.ico",type:"image/x-icon"})),f("div",{className:"container-fluid p-0 overflow-hidden position-absolute"},f("img",{src:"/assets/images/backgrounds/top_red_triangle.svg",className:"divider-topred-with-margin w-100 layer-2",alt:""})),f("div",{className:"layer-2"},f("div",{className:"section"},f("div",{className:"container p-0"},f("div",{className:"py-5 mt-5 row"},f("div",{className:"col-12"},f("div",{className:"rounded-8 cover-image shadow-lg"},f(a.a,{className:"w-100",src:t.image||"https://source.unsplash.com/1600x900/?IT,technology"}))),f("div",{className:"col-12 mt-5 pb-3 border-bottom"},f("div",{className:"display4"},t.title),f("div",{className:"NunitoSans-Regular text-secondary"},t.date?f(i.a.Fragment,null,"Last Updated ",f("b",null,t.date)," "):"")),f("div",{className:"col-lg-8 mt-3"},f("div",{className:"content-lead"},n)),f("div",{className:"col-lg-4 px-4 mt-3"},f("div",{className:"h6 mb-2 text-secondary"},"Recent Posts"),f("div",{className:"py-2"},f(d.a,{href:"/blogs/3-bg-unified-solutions-got-nominated-for-two-awards-under-service-and-collaboration-within-revenue-nsw"},f("a",null,"BG Unified Solutions got nominated for two awards under Service and Collaboration within Revenue NSW"))),f("div",{className:"py-2"},f(d.a,{href:"/blogs/5-cisco-asa-5520-to-5525x-with-firepower-services"},f("a",null,"Cisco ASA 5520 to 5525X with FirePower Services")))))))))}}},[["OFkv",0,1,2,3]]]);