
(function(){function p(a,b){var c=Array.from(a.querySelectorAll(b));a.matches&&a.matches(b)&&c.splice(0,0,a);return c}function u(a){a=a.getBoundingClientRect();return{top:a.top+document.body.scrollTop,left:a.left+document.body.scrollLeft}}function t(a){return parseFloat(getComputedStyle(a,null).height.replace("px",""))}function v(a){return parseFloat(getComputedStyle(a,null).width.replace("px",""))}function r(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",a)}function C(a){(function c(){0>
(a.style.opacity-=.1)?a.style.display="none":requestAnimationFrame(c)})()}function D(a){a.style.display="block";(function c(){var d=parseFloat(a.style.opacity);1<(d+=.1)||(a.style.opacity=d,requestAnimationFrame(c))})()}function q(a){var b=[],c={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};a="undefined"==typeof a?"*":a.toLowerCase();"*"===a?b=Object.values(c):a in c&&b.push(c[a]);return!(!b.length||!navigator.userAgent.match(new RegExp(b.join("|"),
"i")))}function E(a){var b=a.querySelector(".carousel-item");a=a.querySelector(".carousel-indicators > li");b.classList.add("active");a&&a.classList.add("active")}function y(a){var b=a.getAttribute("id")+"-carousel",c=a.getAttribute("data-bs-version")&&a.getAttribute("data-bs-version").startsWith("5");a.querySelectorAll(".carousel").forEach(function(a){a.setAttribute("id",b)});a.querySelector(".carousel-controls")&&a.querySelectorAll(".carousel-controls").forEach(function(a){a.querySelectorAll("a").forEach(function(a){a.setAttribute("href",
"#"+b);c?a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)})});a.querySelectorAll(".carousel-indicators > li").forEach(function(a){c?a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)});E(a)}function F(a){var b=a.querySelectorAll(".carousel-item").length,c=a.querySelector(".carousel-inner").getAttribute("data-visible");b<c&&(c=b);a.querySelectorAll(".carousel-inner").forEach(function(a){a.setAttribute("class","carousel-inner slides"+c)});a.querySelectorAll(".clonedCol").forEach(function(a){a.remove()});
a.querySelectorAll(".carousel-item .col-md-12").forEach(function(a){2>c?a.setAttribute("class","col-md-12"):"5"==c?a.setAttribute("class","col-md-12 col-lg-15"):a.setAttribute("class","col-md-12 col-lg-"+12/c)});a.querySelectorAll(".carousel-item .row").forEach(function(a){a.setAttribute("style","-webkit-flex-grow: 1; flex-grow: 1; margin: 0;")});a.querySelectorAll(".carousel-item").forEach(function(a){for(var b=a,l=1;l<c;l++){(b=b.nextElementSibling)||(b=a.parentNode.children[0]===a?a.nextElementSibling:
a.parentNode.children[0]);var g;if(g=b){var e=0;do e++;while(g=g.previousElementSibling);g=e}else g=-1;e=b.querySelector(".col-md-12").cloneNode(!0);e.classList.add("cloneditem-"+l);e.classList.add("clonedCol");e.setAttribute("data-cloned-index",g);a.children[0].appendChild(e)}})}function G(a){var b="",c=a.querySelector("svg linearGradient");if(c){for(var b=[],c=Array.from(c.children),d=0;d<c.length;d++)b.push('"'+c[d].getAttribute("stop-color")+'"');b='"lineargradient": ['+b+"],";Array.from(a.querySelectorAll("svg")).some(function(a){return a.classList.contains("svg-gradient")})||
a.querySelectorAll("svg").forEach(function(a){a.classList.add("svg-gradient")})}return b}function w(a,b,c){var d=a.closest(".card"),f=d.parentElement.classList;d.getAttribute("style")||d.setAttribute("style","-webkit-flex-basis: auto; flex-basis: auto;");f.contains("row")&&(f.remove("row"),f.add("media-container-row"));a.querySelectorAll(".svg-gradient > *").forEach(function(a){a.setAttribute("id",b)});d=a.cloneNode(!0);Array.from(a.children).forEach(function(a){if("SVG"!==a.tagName)return a.remove()});
a.setAttribute("data-pie","{ "+G(a.closest("section"))+' "percent": '+c+', "size": 150, "colorCircle": "#f1f1f1", "stroke": 5, "colorSlice": "url(#'+b+')", "fontSize": "1.3rem", "number": false }');Array.from(d.children).forEach(function(b){switch(!0){case b.matches("p"):b.innerText=c+"%";a.appendChild(b);break;case b.matches("svg"):break;default:a.appendChild(b)}})}function A(a){var b=a.closest("section").getAttribute("id")+"-svg-gradient",c=+a.getAttribute("data-goal");w(a,b,c)}function H(a,b){if(a.classList.contains("circle-progress-section")&&
b.includes("progress")&&"progressCount"!=b)if(b.includes("Color"))a.querySelectorAll(".pie_progress").forEach(function(b){var c=a.getAttribute("id")+"-svg-gradient",f=+b.getAttribute("data-goal");w(b,c,f)});else{var c=a.getAttribute("id")+"-svg-gradient",d=a.querySelector("."+b),f=+d.getAttribute("data-goal");w(d,c,f)}}var e,h,m="function"==typeof jQuery;m&&(e=jQuery);e?h=e("html").hasClass("is-builder"):h=document.querySelector("html").classList.contains("is-builder");Element.prototype.parents=function(a){for(var b=
[],c=this,d=void 0!==a;null!==(c=c.parentElement);)c.nodeType===Node.ELEMENT_NODE&&(d&&!c.matches(a)||b.push(c));return b};Element.prototype.footerReveal=function(){function a(){!c&&this.offsetHeight<=window.outerHeight?(this.style.zIndex="-999",this.style.position="fixed",this.style.bottom="0",this.style.width=b.offsetWidth,b.style.marginBottom=this.offsetHeight):(this.style.zIndex="",this.style.position="",this.style.bottom="",this.style.width="",b.style.marginBottom="")}var b=this.previousElementSibling,
c=!!document.documentMode;a();window.addEventListener("resize",function(){a()});window.addEventListener("load",function(){a()});return this};(function(a){var b=function(a,b,f){var e;return function(){var g=this,h=arguments;e?clearTimeout(e):f&&a.apply(g,h);e=setTimeout(function(){f||a.apply(g,h);e=null},b||100)}};window[a]=function(c){var d=new CustomEvent(a);return c?this.addEventListener("resize",b(c)):this.dispatchEvent(d)}})("smartresize");var I=function(){var a=document.createElement("div"),
b=document.querySelector("body");a.setAttribute("style","height: 50vh; position: absolute; top: -1000px; left: -1000px;");b.appendChild(a);var c=parseInt(window.innerHeight/2,10),d=parseInt((window.getComputedStyle?getComputedStyle(a,null):a.currentStyle).height,10);b.removeChild(a);return d==c}();r(function(){function a(a){a.style.height=9*v(a.parentNode)/16+"px"}function b(a){setTimeout(function(){p(a,".mbr-parallax-background").forEach(function(a){jarallax&&(jarallax(a,{speed:.6}),a.style.position=
"relative")})},0)}function c(a){p(a,"[data-bg-video]").forEach(function(a){var b=a.getAttribute("data-bg-video");if(b){var c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),f=a.querySelector(".mbr-background-video-preview")||document.createElement("div");f.classList.add("mbr-background-video-preview");f.style.display="none";f.style.backgroundSize="cover";f.style.backgroundPosition="center";
a.querySelector(".mbr-background-video-preview")||a.childNodes[0].before(f);if(c&&(/youtu\.?be/g.test(c[3])||/vimeo/g.test(c[3])))if(c&&/youtu\.?be/g.test(c[3])){var b="http"+("https:"===location.protocol?"s":"")+":",b=b+("//img.youtube.com/vi/"+c[6]+"/maxresdefault.jpg"),k=new Image;k.onload=function(){if(120===(k.naturalWidth||k.width)){var b=k.src.split("/").pop();switch(b){case "maxresdefault.jpg":k.src=k.src.replace(b,"sddefault.jpg");break;case "sddefault.jpg":k.src=k.src.replace(b,"hqdefault.jpg");
break;default:h&&(f.style.backgroundImage='url("images/no-video.jpg")',f.style.display="block")}}else f.style.backgroundImage='url("'+k.src+'")',f.style.display="block";a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();b=document.createElement("div");b.classList.add("mbr-background-video");a.childNodes[1].before(b);var d=k.naturalHeight,e=k.naturalWidth,g=k.naturalHeight/k.naturalWidth,B=b.parentNode.clientHeight,l=b.parentNode.clientWidth,d=d<B?d:B,e=e>l?
e:l;d/e!=g&&(d=e*g);g=new YouTubePlayer(b,{height:d,width:e,modestbranding:!0,autoplay:!0,controls:!1,origin:"*",iv_load_policy:!1,keyboard:!1,captions:!1,annotations:!1,related:!1});b.style.pointerEvents="none";b.style.width=e+"px";b.style.marginLeft="-"+(e-l)/2+"px";b.parentNode.style.overflow="hidden";b.style.minHeight="100vh";b.style.minWidth="177.77vh";g.load(c[6],!0);g.play();g.mute()};k.setAttribute("src",b)}else{if(c&&/vimeo/g.test(c[3])){var d=new XMLHttpRequest;d.open("GET","https://vimeo.com/api/v2/video/"+
c[6]+".json",!0);d.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&400>this.status){var a=JSON.parse(this.responseText);f.style.backgroundImage='url("'+a[0].thumbnail_large+'")';f.style.display="block"}else h&&(f.style.backgroundImage='url("images/no-video.jpg")',f.style.display="block")};d.send();d=null;a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();d=document.createElement("div");d.classList.add("mbr-background-video");a.childNodes[1].before(d);
b=new Vimeo.Player(d,{id:b,loop:!0,background:!0,responsive:!0,autoplay:!0,byline:!1,title:!1,muted:!0});d=b.element.parentNode;d.style.overflow="hidden";b.element.style.pointerEvents="none";b.element.style.marginLeft="-"+(b.element.scrollWidth-d.scrollWidth)/2+"px";b.element.style.minHeight="100vh";b.element.style.minWidth="177.77vh"}}else h&&(f.style.backgroundImage='url("images/video-placeholder.jpg")',f.style.display="block")}})}document.querySelector("html").classList.add(q()?"mobile":"desktop");
window.addEventListener("scroll",function(){document.querySelectorAll(".mbr-navbar--sticky").forEach(function(a){var b=10<window.scrollTop?"add":"remove";a.classList[b]("mbr-navbar--stuck");if(!a.classList.contains(".mbr-navbar--open"))a.classList[b]("mbr-navbar--short")})});q()&&navigator.userAgent.match(/Chrome/i)?function(a,b){var c=[a,a];c[b>a?0:1]=b;window.smartresize(function(){var a=window.innerHeight;0>c.indexOf(a)&&(a=c[window.innerWidth>a?1:0]);document.querySelector(".mbr-section--full-height").style.height=
a+"px"})}(window.innerWidth,window.innerHeight):I||(window.smartresize(function(){document.querySelector(".mbr-section--full-height").style.height=window.innerHeight+"px"}),e(document).on("add.cards",function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&p(a.target,".mbr-section--full-height").length&&window.dispatchEvent(new CustomEvent("resize"))}));window.addEventListener("smartresize",function(){document.querySelectorAll(".mbr-section--16by9").forEach(a)});if(m)e(document).on("add.cards changeParameter.cards",
function(b){var c=p(b.target,".mbr-section--16by9");c.length?c.forEach(function(b){b.setAttribute("data-16by9","true");a(b)}):p(b.target,"[data-16by9]").forEach(function(a){a.styles.height="";a.removeAttribute("data-16by9")})});if("undefined"!==typeof jarallax&&!q()){window.addEventListener("update.parallax",function(a){setTimeout(function(){if(a){var a=document.querySelector(".mbr-parallax-background");a.jarallax("coverImage");a.jarallax("clipContainer");a.jarallax("onScroll")}},0)});if(h){if(!m)return;
e(document).on("add.cards",function(a){b(a.target);e(window).trigger("update.parallax")});e(document).on("changeParameter.cards",function(a,c,f,d){if("bg"===c)switch(c=a.target,jarallax&&jarallax(c,"destroy"),c.style.position="",e(a.target).find(".mbr-background-video-preview").remove(),e(a.target).find(".mbr-background-video").remove(),d){case "type":!0===f.parallax&&b(a.target);break;case "value":"image"===f.type&&!0===f.parallax&&b(a.target);break;case "parallax":!0===f.parallax&&b(a.target)}e(window).trigger("update.parallax")})}else b(document.body);
window.addEventListener("shown.bs.tab",function(){window.dispatchEvent(new CustomEvent("update.parallax"))})}var d,f,l=0,g=null,z=!q();window.addEventListener("scroll",function(){f&&clearTimeout(f);var a=document.documentElement.scrollTop,b=a<=l||z;l=a;if(g){var c=a>g.breakPoint;b?c!=g.fixed&&(z?(g.fixed=c,g.elm.classList.toggle("is-fixed")):f=setTimeout(function(){g.fixed=c;g.elm.classList.toggle("is-fixed")},40)):(g.fixed=!1,g.elm.classList.remove("is-fixed"))}});if(m)e(document).on("add.cards delete.cards",
function(a){d&&clearTimeout(d);d=setTimeout(function(){g&&(g.fixed=!1,g.elm.classList.remove("is-fixed"));var a=document.querySelector(".mbr-fixed-top");a&&(g={breakPoint:u(a).top+3*t(a),fixed:!1,elm:a},a.dispatchEvent(new CustomEvent("scroll")))},650)});window.smartresize(function(){document.querySelectorAll(".mbr-embedded-video").forEach(function(a){a.style.height=(v(a)*parseInt(a.getAttribute("height")||315)/parseInt(a.getAttribute("width")||560)).toFixed()+"px"})});if(m)e(document).on("add.cards",
function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&p(a.target,"iframe").length&&window.dispatchEvent(new CustomEvent("resize"))});if(h){if(!m)return;e(document).on("add.cards",function(a){c(a.target)})}else c(document.body);if(h)e(document).on("changeParameter.cards",function(a,b,f,d){if("bg"===b)switch(d){case "type":"video"===f.type&&c(a.target);break;case "value":"video"===f.type&&c(a.target)}});h||Array.from(document.body.children).filter(function(a){return!a.matches("style, script")}).forEach(function(a){a.dispatchEvent(new CustomEvent("add.cards"));
m&&e(a).trigger("add.cards")});document.querySelector("html").classList.add("mbr-site-loaded");window.dispatchEvent(new CustomEvent("resize"));window.dispatchEvent(new CustomEvent("scroll"));h||document.addEventListener("click",function(a){try{var b=a.target;if(!b.parents().some(function(a){a.classList.contains("carousel")})){do if(b.hash){var c=/#bottom|#top/g.test(b.hash);document.querySelector(c?"body":b.hash).forEach(function(c){a.preventDefault();var f=b.parents().some(function(a){return a.classList.contains("navbar-fixed-top")})?
60:0,f="#bottom"==b.hash?t(c)-window.innerHeight:u(c).top-f;c.classList.contains("panel-collapse")||c.classList.contains("tab-pane")||window.scrollTo({top:f,left:0,behavior:"smooth"})});break}while(b=b.parentNode)}}catch(f){}});document.querySelectorAll(".cols-same-height .mbr-figure").forEach(function(a){function b(){c.style.width="";c.style.maxWidth="";c.style.marginLeft="";if(e&&d){var g=e/d;a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.right="0";a.style.bottom="0";var l=
t(f)/v(f);l>g&&(g=100*(l-g)/g,c.style.width=g+100+"%",c.style.maxWidth=g+100+"%",c.style.marginLeft=-g/2+"%")}}var c=a.querySelector("img"),f=a.parentNode,d=c.width,e=c.height;c.addEventListener("load",function(){d=c.width;e=c.height;b()},{once:!0});window.addEventListener("resize",b);b()})});if(!h){if(m&&e.fn.socialLikes)e(document).on("add.cards",function(a){p(a.target,".mbr-social-likes").forEach(function(a){a.addEventListener("counter.social-likes",function(a,b,f){999<f&&a.target.querySelectorAll(".social-likes__counter").forEach(function(a){a.innerHTML=
Math.floor(f/1E3)+"k"})});a.socialLikes({initHtml:!1})})});if(m)e(document).on("add.cards",function(a){a.target.classList.contains("mbr-reveal")&&a.target.footerReveal()});r(function(){if(!q()&&document.querySelectorAll("input[name=animation]").length){var a=function(){var a=document.documentElement.scrollTop||document.body.scrollTop,e=a+window.innerHeight-100;d.forEach(function(d){var h=d.offsetHeight,k=c(d);(k+h>=a&&k-50<=e||b(d))&&d.classList.contains("hidden")&&(d.classList.remove("hidden"),d.classList.add("animate__fadeInUp"),
d.classList.add("animate__delay-1s"),d.addEventListener("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.classList.remove("animate__animated animate__delay-1s animate__fadeInUp")},{once:!0}))})},b=function(a){if(a.parents(".carousel-item").some(function(a){return"none"!==getComputedStyle(a,null).display}))return!1;var b=a.parents(".carousel-item").parentNode;if(!b||b.querySelectorAll(".carousel-item.active .hidden.animate__animated").length)return!1;if(1<
b.getAttribute("data-visible")){var c=b.getAttribute("data-visible");if(a.parents().some(function(a){return a.matches(".cloneditem-"+(c-1))})&&a.parents(".cloneditem-"+(c-1)).some(function(a){return a.getAttribute("data-cloned-index")>=c}))return!0;a.classList.remove("animate__animated animate__delay-1s hidden");return!1}return!0},c=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};document.querySelectorAll("input[name=animation]").forEach(function(a){a.remove()});var d=
Array.from(document.querySelectorAll("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info")),d=d.filter(function(a){if(!a.parents().filter(function(a){if(a.matches("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop"))return!0}).length)return!0}),
d=d.filter(function(a){if(!a.parents().filter(function(b){return b.matches("form")&&!a.matches("li")}).length)return!0});d.forEach(function(a){a.classList.add("hidden");a.classList.add("animate__animated");a.classList.add("animate__delay-1s")});window.addEventListener("scroll",a);window.addEventListener("resize",a);window.dispatchEvent(new CustomEvent("scroll"))}})}r(function(){if(document.querySelectorAll(".mbr-arrow-up").length){var a=document.querySelector("#scrollToTop");a.style.display="none";
window.addEventListener("scroll",function(){window.scrollY>window.innerHeight?D(a):C(a)});a.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"});return!1})}});if(!h){var n=document.querySelector(".mbr-arrow");n&&n.addEventListener("click",function(a){a=a.target.closest("section").nextElementSibling;a.classList.contains("engine")&&(a=a.closest("section").nextElementSibling);window.scrollTo(0,u(a).top)})}document.querySelectorAll("nav.navbar").length&&(n=t(document.querySelector("nav.navbar")),
document.querySelector(".mbr-after-navbar.mbr-fullscreen")&&(document.querySelector(".mbr-after-navbar.mbr-fullscreen").style.paddingTop=n+"px"));if(!h&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)))e(document).on("add.cards",function(a){var b=a.target;b.classList.contains("mbr-fullscreen")&&(a=function(){b.style.height="auto";b.offsetHeight<=window.innerHeight&&(b.style.height="1px")},window.addEventListener("load",a),window.addEventListener("resize",
a));if(b.classList.contains("mbr-slider")||b.classList.contains("mbr-gallery"))b.querySelectorAll(".carousel-indicators").forEach(function(a){a.classList.add("ie-fix");a.querySelectorAll("li").forEach(function(a){a.style.display="inline-block";a.style.width="30px"})}),b.classList.contains("mbr-slider")&&b.querySelectorAll(".full-screen .slider-fullscreen-image").forEach(function(a){a.style.height="1px"})});r(function(){if(!h){var a=function(a){b(a.target)},b=function(b){var d=b.parents("section")[0].querySelector("iframe"),
f=d.getAttribute("src");b.parents("section").forEach(function(a){a.style.zIndex="5000"});-1!==f.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");if(-1!==f.indexOf("vimeo")){var e=new Vimeo.Player(d);e.play()}var g=b.parents("section")[0],h=g.querySelector(g.querySelector("[data-modal]").getAttribute("data-modal"));h.style.display="table";h.addEventListener("click",function(){-1!==f.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',
"*");-1!==f.indexOf("vimeo")&&e.pause();h.style.display="none";h.removeEventListener("click",a);g.style.zIndex="0"})};document.querySelectorAll(".modalWindow-video > iframe").forEach(function(a){var b=a.getAttribute("data-src");a.removeAttribute("data-src");var f=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);-1!==b.indexOf("youtu")?a.setAttribute("src","https://youtube.com/embed/"+f[6]+
"?rel=0&enablejsapi=1"):-1!==b.indexOf("vimeo")&&a.setAttribute("src","https://player.vimeo.com/video/"+f[6]+"?autoplay=0&loop=0")});document.querySelector("[data-modal]")&&document.querySelector("[data-modal]").addEventListener("click",a)}});if(!h){var n=document.querySelectorAll(".dropdown-toggle.show"),x=document.querySelectorAll(".dropdown-menu.show");n.forEach(function(a){a.classList.remove("show");a.ariaExpanded="false"});x.forEach(function(a){return a.classList.remove("show")});!q()&&(n=document.querySelector("section.menu"))&&
(x=window.innerWidth,!n.querySelector(".navbar").classList.contains("collapsed")&&991<x&&(n.querySelectorAll("ul.navbar-nav li.dropdown").forEach(function(a){a.addEventListener("mouseover",function(){a.classList.contains("open")&&a.querySelector("a").dispatchEvent(new CustomEvent("click"))});a.addEventListener("mouseout",function(){a.classList.contains("open")&&a.querySelector("a").dispatchEvent(new CustomEvent("click"))})}),n.querySelectorAll("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").forEach(function(a){a.addEventListener("mouseover",
function(){a.classList.contains("open")&&a.querySelector("a").dispatchEvent(new CustomEvent("click"))});a.addEventListener("mouseout",function(){a.classList.contains("open")&&a.querySelector("a").dispatchEvent(new CustomEvent("click"))})})))}h||("undefined"===typeof window.initClientPlugin&&0!=document.body.querySelectorAll(".clients").length&&(window.initClientPlugin=!0,document.body.querySelectorAll(".clients").forEach(function(a){a.getAttribute("data-isinit")||(y(a),F(a))})),"undefined"===typeof window.initPopupBtnPlugin&&
0!=document.body.querySelectorAll("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=!0,document.querySelectorAll("section.popup-btn-cards .card-wrapper").forEach(function(a){a.classList.add("popup-btn")})),"undefined"===typeof window.initTestimonialsPlugin&&0!=document.body.querySelectorAll(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,document.querySelectorAll(".testimonials-slider").forEach(function(a){y(a)})),"undefined"===typeof window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=
!0,r(function(){0!=document.querySelectorAll(".accordionStyles").length&&document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.classList.contains("collapsed")||a.classList.add("collapsed")})}),document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.addEventListener("click",function(){var b=a.closest(".accordionStyles").getAttribute("id"),c=a.closest(".card").querySelector(".panel-collapse"),
d=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");!c.classList.contains("collapsing")||-1==b.indexOf("toggle")&&-1==b.indexOf("accordion")||(a.classList.contains("collapsed")?(d.classList.remove("mbri-arrow-up"),d.classList.add("mbri-arrow-down")):(d.classList.remove("mbri-arrow-down"),d.classList.add("mbri-arrow-up")),-1!=b.indexOf("accordion")&&(b=a.closest(".accordionStyles"),Array.from(b.children).filter(function(a){return a.querySelector("span.sign")!==
d}).forEach(function(a){a=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");a.classList.remove("mbri-arrow-up");a.classList.add("mbri-arrow-down")})))})})),0!=document.querySelectorAll(".mbr-slider.carousel").length&&document.querySelectorAll(".mbr-slider.carousel").forEach(function(a){var b=a.querySelectorAll(".carousel-control"),c=a.querySelectorAll(".carousel-indicators li"),d=function(a){a.stopPropagation();a.preventDefault()};a.addEventListener("slide.bs.carousel",
function(){b.forEach(function(a){a.addEventListener("click",d)});c.forEach(function(a){a.addEventListener("click",d)});m&&e(a).carousel({keyboard:!1})});a.addEventListener("slid.bs.carousel",function(){b.forEach(function(a){a.removeEventListener("click",d)});c.forEach(function(a){a.removeEventListener("click",d)});m&&e(a).carousel({keyboard:!0});1<a.querySelectorAll(".carousel-item.active").length&&(a.querySelectorAll(".carousel-item.active")[1].classList.remove("active"),a.querySelectorAll(".carousel-control li.active")[1].classList.remove("active"))})}));
if(h){if(!m)return;e(document).on("add.cards",function(a){e(a.target).find(".form-with-styler").length&&(a=e(a.target).find(".form-with-styler"),e(a).find('select:not("[multiple]")').each(function(){e(this).styler&&e(this).styler()}),e(a).find("input[type=number]").each(function(){e(this).styler&&(e(this).styler(),e(this).parent().parent().removeClass("form-control"))}),e(a).find("input[type=date]").each(function(){e(this).datetimepicker&&e(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),e(a).find("input[type=time]").each(function(){e(this).datetimepicker&&
e(this).datetimepicker({format:"H:i",datepicker:!1})}))})}document.querySelectorAll('input[type="range"]').forEach(function(a){a.addEventListener("change",function(a){a.target.parents(".form-group").forEach(function(c){c.querySelector(".value").innerHTML=a.target.value})})});if(h)e(document).on("add.cards changeParameter.cards",function(a,b){"undefined"!==typeof CircularProgressBar&&new CircularProgressBar("pie_progress");b?H(a.target,b):a.target.querySelectorAll(".pie_progress").length&&a.target.querySelectorAll(".pie_progress").forEach(function(a){A(a)})});
else document.querySelectorAll(".pie_progress").length&&("undefined"!==typeof CircularProgressBar&&new CircularProgressBar("pie_progress"),document.querySelectorAll(".pie_progress").forEach(function(a){A(a)}))})();
