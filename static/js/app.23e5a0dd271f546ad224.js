webpackJsonp([0],{"+pgU":function(t,e){},"5F9p":function(t,e){},DO62:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=n.a.observable({isNavOpen:!1}),s={toggleNav:function(){i.isNavOpen=!i.isNavOpen}},o={computed:{isBurgerActive:function(){return i.isNavOpen}},methods:{toggle:function(){s.toggleNav()}}},r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:{active:t.isBurgerActive},attrs:{id:"burger"},on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("default",[t._m(0)])],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"burger-button",attrs:{type:"button",title:"Menu"}},[e("span",{staticClass:"burger-bar burger-bar--1"}),this._v(" "),e("span",{staticClass:"burger-bar burger-bar--2"}),this._v(" "),e("span",{staticClass:"burger-bar burger-bar--3"})])}]};var c={components:{Burger:a("VU/8")(o,r,!1,function(t){a("Rn5E")},null,null).exports},data:function(){return{profiles:[{id:0,link:"https://github.com/azadnalbandian",icon:"header-icon fab fa-github fa-2x"},{id:1,link:"https://www.linkedin.com/in/azad-nalbandian-057a4b149/",icon:"header-icon fab fa-linkedin fa-2x"},{id:2,link:"mailto:azadnalbandian@gmail.com",icon:"header-icon fas fa-at fa-2x"}]}},computed:{currentRouteName:function(){return this.$route.name}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topbar row justify-content-center"},[e("Burger")],1)},staticRenderFns:[]};var d=a("VU/8")(c,l,!1,function(t){a("DO62")},"data-v-0559e7fd",null).exports,m={methods:{closeSidebarPanel:s.toggleNav,redirect:function(t){this.$router.push(t)}},computed:{isPanelOpen:function(){return i.isNavOpen}},data:function(){return{links:[{id:0,text:"Home",page:"/",icon:"fas fa-home d-inline"},{id:1,text:"About",page:"/About",icon:"fas fa-address-card"},{id:2,text:"Projects",page:"/projects",icon:"fas fa-project-diagram"},{id:3,text:"Blog",page:"/blog",icon:"fas fa-blog"}],profiles:[{id:0,link:"https://github.com/azadnalbandian",icon:"header-icon fab fa-github fa-2x"},{id:1,link:"https://www.linkedin.com/in/azad-nalbandian-057a4b149/",icon:"header-icon fab fa-linkedin fa-2x"},{id:2,link:"https://www.instagram.com/azadnalbandian/",icon:"header-icon fab fa-instagram fa-2x"},{id:3,link:"mailto:azadnalbandian@gmail.com",icon:"header-icon fas fa-at fa-2x"}]}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[t.isPanelOpen?a("div",{staticClass:"sidebar-backdrop",on:{click:t.closeSidebarPanel}}):t._e(),t._v(" "),a("transition",{attrs:{name:"slide"}},[t.isPanelOpen?a("nav",{staticClass:"sidebar-panel col-lg-2 col-md-2 col-sm-2"},[a("div",{staticClass:"grid sidebar-inner-container"},[a("div",{staticClass:"row sidebar-links-container"},t._l(t.links,function(e){return a("button",{key:e.id,staticClass:"sidebar-links col-12 text-left",on:{click:function(a){return t.redirect(e.page)}}},[a("a",[t._v(t._s(e.text))])])}),0)]),t._v(" "),a("div",{staticClass:"profiles-container"},[a("ul",{staticClass:"header-nav row justify-content-left"},t._l(t.profiles,function(t){return a("li",{key:t.id},[a("a",{attrs:{href:""+t.link,target:"_blank"}},[a("i",{class:t.icon})])])}),0),t._v(" "),a("p",{staticClass:"copy"},[t._v("© 2020 Azad Nalbandian")])])]):t._e()])],1)},staticRenderFns:[]};var f={name:"App",components:{NavigationBar:d,Sidebar:a("VU/8")(m,u,!1,function(t){a("5F9p")},null,null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid container-head",attrs:{id:"app"}},["Home"!=this.$route.name?e("NavigationBar"):this._e(),this._v(" "),e("Sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var v=a("VU/8")(f,p,!1,function(t){a("TyyR")},null,null).exports,h=a("/ocq"),g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row align-items-center justify-content-center master-row"},[e("div",{staticClass:"col-12 col-sm-6 col-md-6 col-lg-6 entry-element",on:{click:this.redirect}},[e("h1",{staticClass:"animated"},[this._v("A | N")])])])},staticRenderFns:[]};var _=a("VU/8")({name:"Home",methods:{redirect:function(){this.$router.push("About")}}},g,!1,function(t){a("o3Kt")},"data-v-27631abd",null).exports,b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-lg-4 col-md-4 col-sm-4 box-content"},[a("div",{staticClass:"row"},t._l(t.projects,function(e){return a("div",{key:e.id,staticClass:"card col-md-3 mb-1",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top img-fluid",attrs:{src:e.image,alt:"Card image cap"}}),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(e.text))]),t._v(" "),a("a",{staticClass:"btn btn-primary",attrs:{href:"//"+e.link}},[t._v("Link")])])])}),0)])])},staticRenderFns:[]};var w=a("VU/8")({components:{},name:"Projects",data:function(){return{projects:[{id:0,name:"Project A",link:"www.google.com",text:"This is some accompaniment text",image:"https://icons-for-free.com/iconfiles/png/512/mario+mario+bros+mario+world+mushroom+toad+videogame+icon-1320196400529338074.png"},{id:1,name:"Project B",link:"www.google.com",text:"This is some accompaniment text",image:"https://icons-for-free.com/iconfiles/png/512/mario+mario+bros+mario+world+mushroom+toad+videogame+icon-1320196400529338074.png"},{id:2,name:"Project C",link:"www.google.com",text:"This is some accompaniment text",image:"https://icons-for-free.com/iconfiles/png/512/mario+mario+bros+mario+world+mushroom+toad+videogame+icon-1320196400529338074.png"},{id:3,name:"Project D",link:"www.google.com",text:"This is some accompaniment text",image:"https://icons-for-free.com/iconfiles/png/512/mario+mario+bros+mario+world+mushroom+toad+videogame+icon-1320196400529338074.png"}]}}},b,!1,function(t){a("okY9")},"data-v-fb425ef4",null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lgl-10 col-md-10 offset-md-1"},[a("ul",{staticClass:"timeline"},[a("li",{staticClass:"mt-5 mb-5"},[a("a",{attrs:{target:"_blank",href:"https://www.jatech.co.uk/"}},[t._v("Jatech Ltd., 08/20 - Present")]),t._v(" "),a("h4",{staticClass:"mt-2"},[t._v("Software Engineer")]),t._v(" "),a("p",[t._v("Currently, I continue to provide web development and system architecture services for our clients, as well as offer Azure support.")])]),t._v(" "),a("li",{staticClass:"mt-5 mb-5"},[a("a",{attrs:{target:"_blank",href:"https://www.jatech.co.uk/"}},[t._v("Jatech Ltd., 04/20 - 08/20")]),t._v(" "),a("h4",{staticClass:"mt-2"},[t._v("Junior Software Engineer")]),t._v(" "),a("p",[t._v("After moving to Jatech, I began working as a full software engineer, developing new products and maintaining existing products for clients. I led and completed a project to port a deprecated AngularJS system to our custom framework as my first major project, as well as implementing several entirely new features.")])]),t._v(" "),a("li",{staticClass:"mt-5 mb-5"},[a("a",{attrs:{target:"_blank",href:"https://www.pagesuite.com/"}},[t._v("PageSuite Ltd., 06/19 - 04/20")]),t._v(" "),a("h4",{staticClass:"mt-2"},[t._v("Support Developer")]),t._v(" "),a("p",[t._v("As Support Developer, my job was to provide support for our main development team as bugmaster and third-line support lead. I dealt with system-critical backend issues, wrote C# APIs and programs for .NET Framework to automate regular tasks and fulfil client requests using AWS, performed SQL atabase reporting and administration, and maintained existing WinForms projects for internal usage.")])]),t._v(" "),a("li",{staticClass:"mt-5 mb-5"},[a("a",{attrs:{target:"_blank",href:"https://www.pagesuite.com/"}},[t._v("PageSuite Ltd., 04/18 - 06/19")]),t._v(" "),a("h4",{staticClass:"mt-2"},[t._v("Second-line Support Technician")]),t._v(" "),a("p",[t._v("In this role, I was tasked with handling client support and escalation requests, including web debugging (primarily using Charles), IIS server administration, QA, and scripting.")])]),t._v(" "),a("li",{staticClass:"mt-5 mb-5"},[a("a",{attrs:{target:"_blank",href:"https://www.pagesuite.com/"}},[t._v("PageSuite Ltd., 06/17 - 04/18")]),t._v(" "),a("h4",{staticClass:"mt-2"},[t._v("First-line Support Technician")]),t._v(" "),a("p",[t._v("My first position in the IT industry. In this role, my main duties were to provide end-user technical support for a bespoke PDF rendering project, on iOS, Android and PC devices.")])])])])])])}]};var y={name:"About",components:{Timeline:a("VU/8")({name:"Timeline"},C,!1,function(t){a("x/KA")},"data-v-91039174",null).exports},data:function(){return{image:"https://scontent.flhr2-1.fna.fbcdn.net/v/t1.0-9/76958203_10156817183253576_8163110629138235392_o.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_ohc=ywGgfnFTF0sAX8QK0O-&_nc_ht=scontent.flhr2-1.fna&oh=b5cc8c0307166b95fe8142e0dbb4d9af&oe=5F8B9B80"}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-lg-4 col-md-4 col-sm-4 box-content"},[a("h2",[t._v("Who am I?")]),t._v(" "),a("hr"),t._v(" "),a("img",{staticClass:"img-fluid",attrs:{src:t.image}}),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("My skills")]),t._v(" "),a("hr"),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("My career so far")]),t._v(" "),a("hr"),t._v(" "),a("Timeline")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n            Welcome to my personal portfolio site. I'm a full-stack software engineer whose primary passions are backend and API development, mainly using C# and .NET Core (although this site was produced with Vue, my favourite JS framework). I'm also highly experienced in SQL and database administration."),e("br"),e("br"),this._v("\n            I'm currently an employee at a software development house, and was previously employed at a digital media company. I started working in software largely by accident; I'd been coasting from job to job, not really knowing what I wanted to do with myself, when I fell into a position as a first line support technician. My experience there inspired my ongoing passion for programming and web development. Since then, I've been fully committed to learning and improving my skillset, in order to attain further success within the industry."),e("br"),e("br"),this._v("\n            I met my wonderful wife, Stacey, in 2016, and we were married in 2018. Right now, our family is just us and our pets (Pumpkin the cat and Luna the dog), but we're hoping to grow it in future."),e("br"),e("br"),this._v("\n            Beyond programming, my interests are many, but I'm especially dedicated to powerlifting. Currently, I hold a PR total of 1300lbs (420/355/525 S/B/D)."),e("br"),e("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid"},[a("div",{staticClass:"row justify-content-center"},[a("i",{staticClass:"col-6 col-md-2 icon-container mt-5 mb-5 fas fa-hashtag fa-5x"},[a("span",[t._v("C# (.NET Core)")])]),t._v(" "),a("i",{staticClass:"col-6 col-md-2 icon-container mt-5 mb-5 fab fa-js-square fa-5x"},[a("span",[t._v("JavaScript")])]),t._v(" "),a("i",{staticClass:"col-6 col-md-2 icon-container mt-5 mb-5 fab fa-python fa-5x"},[a("span",[t._v("Python")])]),t._v(" "),a("i",{staticClass:"col-6 col-md-2 icon-container mt-5 mb-5 fas fa-database fa-5x"},[a("span",[t._v("MSSQL")])]),t._v(" "),a("i",{staticClass:"col-6 col-md-2 icon-container mt-5 mb-5 fab fa-vuejs fa-5x"},[a("span",[t._v("Vue")])]),t._v(" "),a("i",{staticClass:"col-6 col-md-2 icon-container mt-5 mb-5 fab fa-git-alt fa-5x"},[a("span",[t._v("Git")])]),t._v(" "),a("i",{staticClass:"col-6 col-md-2 icon-container mt-5 mb-5 fab fa-html5 fa-5x"},[a("span",[t._v("HTML5")])]),t._v(" "),a("i",{staticClass:"col-6 col-md-2 icon-container mt-5 mb-5 fab fa-css3-alt fa-5x"},[a("span",[t._v("CSS3")])])])])}]};var x=a("VU/8")(y,k,!1,function(t){a("+pgU")},"data-v-87a8b8f8",null).exports,j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12 col-lg-4 col-md-4 col-sm-4 box-content"},[e("h1",[this._v("Blog")]),this._v(" "),e("br"),this._v(" "),e("h2",[this._v("2020")])])])}]};var S=a("VU/8")({name:"Blog",components:{}},j,!1,function(t){a("c1cl")},"data-v-4c652985",null).exports;n.a.use(h.a);var A=new h.a({routes:[{path:"/",name:"Home",component:_},{path:"/projects",name:"Projects",component:w},{path:"/about",name:"About",component:x},{path:"/blog",name:"Blog",component:S}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:A,components:{App:v},template:"<App/>"})},Rn5E:function(t,e){},TyyR:function(t,e){},c1cl:function(t,e){},o3Kt:function(t,e){},okY9:function(t,e){},"x/KA":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.23e5a0dd271f546ad224.js.map