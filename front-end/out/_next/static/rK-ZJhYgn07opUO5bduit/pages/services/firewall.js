(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"6HKF":function(e,t,i){"use strict";var a=i("q1tI"),r=i.n(a),o=i("BMxC"),n=i("bQFp"),s=i("eJLp"),l=i("YFqc"),c=i.n(l),d=r.a.createElement;t.a=function(e){var t=d(o.a,{className:"text-white d-flex justify-content-center shadow-lg align-items-center",rounded:"12px",w:"128px",h:"128px",bg:e.iconBg||"Blue"},d(n.a,{src:e.icon,size:"40px"}));return e.fullIcon&&(t=d(o.a,{className:"text-white",rounded:"12px",w:"48px",h:"48px"},e.fullIcon)),d(o.a,{pt:"64px",h:"100%"},d(o.a,{h:"100%",className:"card-with-icon shadow-lg align-items-center d-flex flex-column bg-white rounded p-3"},d("div",{className:"row iconbox mb-3"},t),d("div",{className:"row display6 py-3 text-center mx-2"},e.title),d("div",{className:"row cardContent flex-fill py-2 mx-3 text-center"},e.children),d("div",{className:"row mx-3 my-3"},d(c.a,{href:"".concat(e.link)},d(s.a,{py:8,px:12,bg:"dark.500",color:"white",_hover:{color:"white",bg:"dark.400"},borderRadius:"0px 12px",rightIcon:"arrow-forward"},"Learn More")))))}},Lf4u:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/firewall",function(){return i("ynAv")}])},wCB1:function(e,t,i){"use strict";i.d(t,"b",(function(){return F})),i.d(t,"c",(function(){return A})),i.d(t,"a",(function(){return j})),i.d(t,"d",(function(){return O})),i.d(t,"e",(function(){return k}));var a=i("pVnL"),r=i.n(a),o=i("8OQS"),n=i.n(o),s=i("qKvR"),l=i("iUFP"),c=i("q1tI"),d=i("BMxC"),u=i("Weur"),m=i("+Cyc"),v=i("D7Da"),f=i("lSNA"),p=i.n(f),b=i("mf32"),h=i("CjxU");function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(i,!0).forEach((function(t){p()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var w={display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",transition:"all 0.2s",_focus:{zIndex:"1",boxShadow:"outline"}},x={_disabled:{opacity:.4,cursor:"not-allowed"}},N=function(e){switch(e.variant){case"line":return function(e){var t=e.color;return{tabList:{borderBottom:"2px",borderColor:"inherit"},tab:{borderBottom:"2px",borderColor:"transparent",mb:"-2px",_selected:{color:{light:t+".600",dark:t+".300"}[e.colorMode],borderColor:"currentColor"},_active:{bg:"gray.200"},_disabled:{opacity:.4,cursor:"not-allowed"}}}}(e);case"enclosed":return function(e){var t=e.color,i=e.colorMode,a={light:t+".600",dark:t+".300"},r={light:"#fff",dark:e.theme.colors.gray[800]};return{tab:{roundedTop:"md",border:"1px",borderColor:"transparent",mb:"-1px",_selected:{color:a[i],borderColor:"inherit",borderBottomColor:r[i]}},tabList:{mb:"-1px",borderBottom:"1px",borderColor:"inherit"}}}(e);case"enclosed-colored":return function(e){var t=e.color,i=e.colorMode;return{tab:{border:"1px",borderColor:"inherit",bg:{light:"gray.50",dark:"whiteAlpha.50"}[i],mb:"-1px",_notLast:{mr:"-1px"},_selected:{bg:{light:"#fff",dark:"gray.800"}[i],color:{light:t+".600",dark:t+".300"}[i],borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"}},tabList:{mb:"-1px",borderBottom:"1px",borderColor:"inherit"}}}(e);case"soft-rounded":return function(e){var t=e.color;return{tab:{rounded:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:t+".700",bg:t+".100"}},tabList:{}}}(e);case"solid-rounded":return function(e){var t=e.color,i=e.colorMode;return{tab:{rounded:"full",fontWeight:"semibold",color:{light:"gray.600",dark:"inherit"}[i],_selected:{color:{light:"#fff",dark:"gray.800"}[i],bg:{light:t+".600",dark:t+".300"}[i]}},tabList:{}}}(e);case"unstyled":return{}}},S=function(e){var t,i,a=e.align,r=e.orientation;return"horizontal"===r&&(t={alignItems:"center",justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[a],maxWidth:"full"},i={height:"100%"}),"vertical"===r&&(t={flexDirection:"column"},i={width:"100%"}),{tabList:t,tab:i}},C={sm:{padding:"0.25rem 1rem",fontSize:"0.85rem"},md:{fontSize:"1rem",padding:"0.5rem 1rem"},lg:{fontSize:"1.15rem",padding:"0.75rem 1rem"}},j=Object(c.forwardRef)((function(e,t){var i=e.isSelected,a=e.isDisabled,o=e.id,l=(e.size,n()(e,["isSelected","isDisabled","id","size"])),d=function(){var e=Object(h.b)(),t=Object(c.useContext)(F),i=t.variant,a=t.color,r=t.size,o=t.isFitted,n=t.orientation,s=Object(b.a)().colorMode,l=N({variant:i,color:a,theme:e,colorMode:s}),d=S({orientation:n});return y({},w,{},x,{},C[r],{},l&&l.tab,{},d&&d.tab,{},o&&{flex:1})}();return Object(s.d)(m.a,r()({ref:t,role:"tab",tabIndex:i?0:-1,id:"tab:"+o,outline:"none",as:"button",type:"button",disabled:a,"aria-selected":i,"aria-disabled":a,"aria-controls":"panel:"+o},d,l))}));j.displayName="Tab";var A=Object(c.forwardRef)((function(e,t){var i=e.children,a=e.onKeyDown,o=(e.onClick,n()(e,["children","onKeyDown","onClick"])),l=Object(c.useContext)(F),d=l.id,m=l.index,f=l.manualIndex,p=l.onManualTabChange,b=l.isManual,g=l.onChangeTab,w=l.onFocusPanel,x=l.orientation,C=function(){var e=Object(h.b)(),t=Object(c.useContext)(F),i=t.variant,a=t.align,r=t.orientation,o=N({variant:i,theme:e}),n=S({align:a,orientation:r});return y({},o&&o.tabList,{},n&&n.tabList)}(),j=Object(c.useRef)([]),A=Object(v.b)(i),O=A.map((function(e,t){return!0===e.props.isDisabled?null:t})).filter((function(e){return null!=e})),k=O.indexOf(m),P=O.length,D=function(e){var t=O[e];j.current[t].focus(),g&&g(t)},L=A.map((function(e,t){var i=b?t===f:t===m;return Object(c.cloneElement)(e,{ref:function(e){return j.current[t]=e},isSelected:i,onClick:function(i){j.current[t].focus(),p(t),g(t),e.props.onClick&&e.props.onClick(i)},id:d+"-"+t})}));return Object(s.d)(u.a,r()({onKeyDown:function(e){"ArrowRight"===e.key&&(e.preventDefault(),D((k+1)%P));"ArrowLeft"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),D((k-1+P)%P));"Home"===e.key&&(e.preventDefault(),D(0)),"End"===e.key&&(e.preventDefault(),D(P-1)),"ArrowDown"===e.key&&(e.preventDefault(),w&&w()),a&&a(e)},ref:t,role:"tablist","aria-orientation":x},C,o),L)}));A.displayName="TabList";var O=Object(c.forwardRef)((function(e,t){var i=e.children,a=e.isSelected,o=e.selectedPanelRef,l=e.id,c=n()(e,["children","isSelected","selectedPanelRef","id"]);return Object(s.d)(d.a,r()({ref:function(e){a&&Object(v.a)(o,e),Object(v.a)(t,e)},role:"tabpanel",tabIndex:-1,"aria-labelledby":"tab:"+l,hidden:!a,id:"panel:"+l,outline:0},c),i)}));O.displayName="TabPanel";var k=Object(c.forwardRef)((function(e,t){var i=e.children,a=n()(e,["children"]),o=Object(c.useContext)(F),l=o.index,u=o.selectedPanelRef,m=o.id,f=o.isManual,p=o.manualIndex,b=Object(v.b)(i).map((function(e,t){return Object(c.cloneElement)(e,{isSelected:f?t===p:t===l,selectedPanelRef:u,id:m+"-"+t})}));return Object(s.d)(d.a,r()({tabIndex:"-1",ref:t},a),b)}));k.displayName="TabPanels";var F=Object(c.createContext)(),P=Object(c.forwardRef)((function(e,t){var i=e.children,a=e.onChange,o=e.index,u=e.defaultIndex,m=e.isManual,f=e.variant,p=void 0===f?"line":f,b=e.variantColor,h=void 0===b?"blue":b,g=e.align,y=void 0===g?"start":g,w=e.size,x=void 0===w?"md":w,N=e.orientation,S=void 0===N?"horizontal":N,C=e.isFitted,j=n()(e,["children","onChange","index","defaultIndex","isManual","variant","variantColor","align","size","orientation","isFitted"]);Object(v.h)("Tabs",h);var A=Object(c.useRef)(null!=o).current,O=Object(c.useRef)(),k=Object(c.useState)((function(){return m?o||u||0:u||0})),P=k[0],D=k[1],L=Object(c.useState)(o||u||0),M=L[0],B=L[1],T=m?P:A?o:P,R=A?o:M,_={id:Object(l.a)(),index:T,manualIndex:R,onManualTabChange:function(e){A||B(e),m&&a&&a(e)},isManual:m,onChangeTab:function(e){A||D(e),A&&m&&D(e),m||a&&a(e)},selectedPanelRef:O,onFocusPanel:function(){O.current&&O.current.focus()},color:h,size:x,align:y,variant:p,isFitted:C,orientation:S};return Object(s.d)(F.Provider,{value:_},Object(s.d)(d.a,r()({ref:t},j),i))}));P.displayName="Tabs";t.f=P},ynAv:function(e,t,i){"use strict";i.r(t);var a=i("q1tI"),r=i.n(a),o=i("wCB1"),n=i("bQFp"),s=i("/eHF"),l=i.n(s),c=i("6HKF"),d=i("r/2C"),u=i("8Kt/"),m=i.n(u),v=i("YFqc"),f=i.n(v),p=r.a.createElement;t.default=function(e){return p(r.a.Fragment,null,p(m.a,null,p("title",null,"To prevent a drastic fall, Install a Firewall | Firewalls As A Service - BG Unified Solutions")),p("div",{className:"position-absolute w-100 overflow-hidden background-svg-dns"},p("div",{className:"w-100 image"},p("img",{className:"w-100 dns",src:"/assets/images/backgrounds/domainhosting.jpg",alt:"A firewall in the background"})),p("div",{className:"w-100 divider"})),p("div",{className:"page-header"},p("div",{className:"container"},p("div",{className:"row"},p("div",{className:"col-lg-8 offset-lg-2 text-center justify-content-center"},p(l.a,{duration:700,delay:300,bottom:!0},p("h1",{className:"display3 text-white"},"Firewall As A Service"),p("h1",{className:"display3 text-white"},"(FwaaS)")),p(l.a,{duration:700,delay:500,bottom:!0},p("p",{className:"h6 mt-3 text-white",style:{opacity:".7"}},"Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA.")))))),p("div",{className:"section"},p("div",{className:"container mt-3"},p("div",{className:"row"},p("div",{className:"col-lg-10 offset-lg-1"},p(o.f,{align:"center"},p(o.c,{style:{borderBottomColor:"#ffffff22"}},p(o.a,{className:"p-3 px-4 text-white display6"},"Physical"),p(o.a,{className:"p-3 px-4 text-white display6"},"Virtual")),p(o.e,null,p(o.d,{className:"py-2"},p(l.a,{duration:500,distance:"30%",bottom:!0},p("div",{className:"row justify-content-center"},p("div",{className:"col-lg-5 my-3"},p(d.a,{icon:"/assets/images/icons/theme/firewall_physical.svg",title:"Physical 1G"},p(d.b,{title:"Single Location",serviceName:"Firewall As A Service",serviceDescription:"Physical 1G, Single Location"}),p(d.b,{title:"Multihomed",serviceName:"Firewall As A Service",serviceDescription:"Physical 1G, Multihomed"}))),p("div",{className:"col-lg-5 my-3"},p(d.a,{icon:"/assets/images/icons/theme/physical_cluster.svg",title:"Physical Cluster 1G"},p(d.b,{title:"Single Location",serviceName:"Firewall As A Service",serviceDescription:"Physical Cluster 1G, Single Location"}),p(d.b,{title:"Multihomed",serviceName:"Firewall As A Service",serviceDescription:"Physical Cluster 1G, Multihomed"})))))),p(o.d,{className:"py-2"},p(l.a,{duration:500,distance:"30%",bottom:!0},p("div",{className:"row justify-content-center"},p("div",{className:"col-lg-5 my-3"},p(d.a,{icon:"/assets/images/icons/theme/firewall_virtual.svg",title:"Virtual 1G"},p(d.b,{title:"Single Location",serviceName:"Firewall As A Service",serviceDescription:"Virtual 1G, Single Location"}),p(d.b,{title:"Multihomed",serviceName:"Firewall As A Service",serviceDescription:"Virtual 1G, Multihomed"}))),p("div",{className:"col-lg-5 my-3"},p(d.a,{icon:"/assets/images/icons/theme/virtual_cluster.svg",title:"Virtual Cluster 1G"},p(d.b,{title:"Single Location",serviceName:"Firewall As A Service",serviceDescription:"Virtual Cluster 1G, Single Location"}),p(d.b,{title:"Multihomed",serviceName:"Firewall As A Service",serviceDescription:"Virtual Cluster 1G, Multihomed"})))),p("div",{className:"row justify-content-center"},p("div",{className:"col-lg-5 my-3"},p(d.a,{icon:"/assets/images/icons/theme/firewall_virtual.svg",title:"Virtual 10G"},p(d.b,{title:"Single Location",serviceName:"Firewall As A Service",serviceDescription:"Virtual 10G, Single Location"}),p(d.b,{title:"Multihomed",serviceName:"Firewall As A Service",serviceDescription:"Virtual 10G, Multihomed"}))),p("div",{className:"col-lg-5 my-3"},p(d.a,{icon:"/assets/images/icons/theme/virtual_cluster.svg",title:"Virtual Cluster 10G"},p(d.b,{title:"Single Location",serviceName:"Firewall As A Service",serviceDescription:"Virtual Cluster 10G, Single Location"}),p(d.b,{title:"Multihomed",serviceName:"Firewall As A Service",serviceDescription:"Virtual Cluster 10G, Multihomed"})))))))))))),p("div",{className:"section py-0"},p("div",{className:"container"},p("div",{className:"row"},p("div",{className:"col-lg-10 text-center offset-lg-1"},p("div",{className:"h4 NunitoSans-ExtraBold"},"To prevent a drastic fall, install a Firewall"),p("div",{className:"h6 mt-4 text-secondary text-justify text-dark"},"In this digital era, when technology has proved to be a boon, small, medium and large-sized businesses are majorly dependent upon networking,connections and interactions. To help these operations get performed smoothly and efficiently, with full security, to eradicate security breach in your network. Firewalls block malicious connections being established inside a network and keeps data and information safe within a network."))))),p("div",{className:"section py-5"},p("div",{className:"container"},p("div",{className:"row service-benefits"},p("div",{className:"col-lg-4 px-1"},p(l.a,{duration:500,distance:"30%",bottom:!0},p("div",{className:"card h-100 rounded-8"},p("div",{className:"card-body d-flex flex-column align-items-center"},p("div",{className:"h5 w-100 px-4 pt-4 my-0 my-lg-2 NunitoSans-Bold text-dark"},"Platform Diversity"),p("div",{className:"text-secondary px-4 text-justify NunitoSans-Regular"},"On-premise or cloud-based, that helps secure your IT environment quickly.The mainstay of Enterprise Security. Blocks malicious traffic and allows legitimate traffic to flow without any hindrance."),p(n.a,{className:"mt-auto",height:"250px",src:"/assets/images/illustrations/PlatformDiversity_Firewall.svg"}))))),p("div",{className:"col-lg-4 px-1"},p(l.a,{duration:500,distance:"30%",bottom:!0},p("div",{className:"card h-100 rounded-8"},p("div",{className:"card-body d-flex flex-column align-items-center"},p("div",{className:"h5 w-100 px-4 pt-4 my-0 my-lg-2 NunitoSans-Bold text-dark"},"Fast and easy Deployment"),p("div",{className:"text-secondary px-4 text-justify NunitoSans-Regular"},"Rapid evolvement, easily deployable with tremendous speed. Proven deployment methodology that integrates and extends your existing security infrastructure without capex."),p(n.a,{className:"mt-auto",height:"250px",src:"/assets/images/illustrations/FastAndEasyDevelopment_Firewall.svg"}))))),p("div",{className:"col-lg-4 px-1"},p(l.a,{duration:500,distance:"30%",bottom:!0},p("div",{className:"card h-100 rounded-8"},p("div",{className:"card-body d-flex flex-column align-items-center"},p("div",{className:"h5 w-100 px-4 pt-4 my-0 my-lg-2 NunitoSans-Bold text-dark"},"Advance Technology Stack"),p("div",{className:"text-secondary px-4 text-justify NunitoSans-Regular"},"Advanced Malware Protection, Anti-Virus Detection, Uniform resource Locator Filtering, User-Based Policy and Advanced Logging facilities, SSL Virtual Private Network\u2019s included"),p(n.a,{src:"/assets/images/illustrations/assets.svg",className:"mt-auto",height:"250px"})))))))),p(l.a,{duration:500,distance:"30%",bottom:!0},p("div",{className:"section py-0"},p("div",{className:"container"},p("div",{className:"row"},p("div",{className:"col-12 p-5 rounded-8 bg-light"},p("h4",{className:"display5 py-2 mb-2 text-center"},"Why BG-Unified Solutions?"),p("p",{className:"lead text-justify"},"We, at BG Unified Solutions, tend to offer the best in class Security for your business around the globe. With our team of experts, the experience we\u2019ve gained, ensures you to provide customizable security to your network, prevent any security breach, secure data flowing through your network. We offer you solutions that especially suit your business model, whether small, medium or large, we\u2019ve got it covered. We provide Rapid evolvement, easily deployable with tremendous speed. Proven deployment methodology that integrates and extends your existing security infrastructure. BG Unified solutions provide you firewalls for a single location system, or a multi-homed network, as per your needs and requirements. We have On-premise or cloud-based, that helps secure your IT environment quickly. The mainstay of Enterprise Security. Blocks malicious traffic and allows legitimate traffic to flow without any hindrance. Customer satisfaction and quality is our motto. Maintaining our service is our duty. Any customer support, regarding installation, usage or fault management, consultancy services for your business, we provide extremely satisfying service, and that\u2019s the word for us. We promise you to provide affordable, transparent and cost-efficient service fulfilling your needs. Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA. Centralized Policy Management using Panorama, Sourcefire DC. Cloud-Based or on-premise, URL filtering, SSL VPN\u2019s inclusion.")))))),p(l.a,{duration:500,distance:"30%",bottom:!0},p("div",{className:"section pt-0"},p("div",{className:"container"},p("div",{className:"row"},p("div",{className:"col-12 p-4 mb-4"},p("h4",{className:"display5 py-3 text-center"},"Related Services")),p("div",{className:"col-xl-4 col-sm-6 my-2"},p(f.a,{href:"/services/infra"},p("a",{className:"no-red"},p(c.a,{icon:"/assets/images/icons/monotone/server.svg",title:p("div",null,"Infrastructure ",p("br",null)," as a service"," "),children:"Server consolidation and virtualization, Geographical Redundant Storage, more than 10000 Cores CPU, 10TB RAM"})))),p("div",{className:"col-xl-4 col-sm-6 my-2"},p(f.a,{href:"/services/contact-center"},p("a",{className:"no-red"},p(c.a,{icon:"/assets/images/icons/monotone/server.svg",title:p("div",null,"Contact Center ",p("br",null)," as a service"," "),iconBg:"#0D5EA5",children:"BG Unified Solution\u2019s CCaaS helps you provide a positive customer experience through a suite of advanced contact center tools and we have deep contracts with all major Telcos including AAPT, Telstra and Optus."})))),p("div",{className:"col-xl-4 col-sm-6 my-2"},p(f.a,{href:"/services/backup"},p("a",{className:"no-red"},p(c.a,{icon:"/assets/images/icons/monotone/disk.svg",title:p("div",null,"Backup ",p("br",null)," As A service"," "),iconBg:"#F33022",children:"Clustering of Devices, Wireless Solution with Cisco 5508 WLC in Cluster and 4404 WLC in Cluster, Cisco Wi-Fi and Aruba Wi-Fi."})))))))))}}},[["Lf4u",0,1,2,3,4,5,6,7]]]);