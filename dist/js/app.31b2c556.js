(function(t){function e(e){for(var n,c,l=e[0],r=e[1],s=e[2],u=0,f=[];u<l.length;u++)c=l[u],a[c]&&f.push(a[c][0]),a[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,l=1;l<i.length;l++){var r=i[l];0!==a[r]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=i[0]))}return t}var n={},a={app:0},o=[];function c(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=n,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(i,n,function(e){return t[e]}.bind(null,n));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var d=r;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("744f"),i("6c7b"),i("7514"),i("20d6"),i("1c4c"),i("6762"),i("cadf"),i("e804"),i("55dd"),i("d04f"),i("c8ce"),i("217b"),i("7f7f"),i("f400"),i("7f25"),i("536b"),i("d9ab"),i("f9ab"),i("32d7"),i("25c9"),i("9f3c"),i("042e"),i("c7c6"),i("f4ff"),i("049f"),i("7872"),i("a69f"),i("0b21"),i("6c1a"),i("c7c62"),i("84b4"),i("c5f6"),i("2e37"),i("fca0"),i("7cdf"),i("ee1d"),i("b1b1"),i("87f3"),i("9278"),i("5df2"),i("04ff"),i("f751"),i("4504"),i("fee7"),i("ffc1"),i("0d6d"),i("9986"),i("8e6e"),i("25db"),i("e4f7"),i("b9a1"),i("64d5"),i("9aea"),i("db97"),i("66c8"),i("57f0"),i("165b"),i("456d"),i("cf6a"),i("fd24"),i("8615"),i("551c"),i("097d"),i("df1b"),i("2397"),i("88ca"),i("ba16"),i("d185"),i("ebde"),i("2d34"),i("f6b3"),i("2251"),i("c698"),i("a19f"),i("9253"),i("9275"),i("3b2b"),i("3846"),i("4917"),i("a481"),i("28a5"),i("386d"),i("6b54"),i("4f7f"),i("8a81"),i("ac4d"),i("8449"),i("9c86"),i("fa83"),i("48c0"),i("a032"),i("aef6"),i("d263"),i("6c37"),i("9ec8"),i("5695"),i("2fdb"),i("d0b0"),i("5df3"),i("b54a"),i("f576"),i("ed50"),i("788d"),i("14b9"),i("f386"),i("f559"),i("1448"),i("673e"),i("242a"),i("c66f"),i("b05c"),i("34ef"),i("6aa2"),i("15ac"),i("af56"),i("b6e4"),i("9c29"),i("63d9"),i("4dda"),i("10ad"),i("c02b"),i("4795"),i("130f"),i("ac6a"),i("96cf");var n=i("2b0e"),a=i("ce5b"),o=i.n(a),c=(i("bf40"),i("fdc8")),l=i.n(c);n["default"].use(o.a,{options:{customProperties:!0},iconfont:"mdi",lang:{locales:{uk:l.a},current:"uk"}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-toolbar",{attrs:{app:"",dark:"","clipped-left":"",color:"#34403A"}},[i("v-toolbar-side-icon",{on:{click:t.showSideBar}}),i("span",{staticClass:"title"},[t._v("Школа номер один")]),i("v-spacer"),i("v-btn",[i("v-badge",{attrs:{color:"#138a36"},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("\n          0\n        ")]},proxy:!0}])},[i("span",[t._v("Повідомлення")])])],1),i("v-btn",[t._v("\n      Посібник адміністратора\n      "),i("v-icon",{attrs:{right:""}},[t._v("mdi-file-pdf")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-exit-to-app")])],1)],1),i("v-navigation-drawer",{attrs:{"mini-variant":t.mini,absolute:"",temporary:""},model:{value:t.sideBar,callback:function(e){t.sideBar=e},expression:"sideBar"}},[i("v-list",{staticClass:"pa-1"},[t.mini?i("v-list-tile",{on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[i("v-list-tile-action",[i("v-icon",[t._v("mdi-chevron-right")])],1)],1):t._e(),i("v-list-tile",{attrs:{avatar:"",tag:"div"}},[i("v-list-tile-avatar",[i("img",{attrs:{src:"https://randomuser.me/api/portraits/men/33.jpg"}})]),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Mikola Kalinenko")])],1),i("v-list-tile-action",[i("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[i("v-icon",[t._v("mdi-chevron-left")])],1)],1)],1)],1),i("v-list",t._l(t.items,function(e){return i("v-list-group",{key:e.title,attrs:{"prepend-icon":e.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-tile",[i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item.active"}},t._l(e.items,function(e){return i("v-list-tile",{key:e.title,on:{click:function(i){return t.redirectTo(e.title)}}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),1)}),1)],1),i("v-content",[i("router-view")],1)],1)},s=[],d={name:"app",data:function(){return{sideBar:!1,items:[{icon:"mdi-view-headline",title:"Списки Школи",items:[{title:"Керівництво й фахівці",icon:"mdi-incognito"},{title:"Вчителі",icon:"mdi-flask-outline"},{title:"Класи",icon:"mdi-square-root"},{title:"Групи",icon:"mdi-source-fork"},{title:"Учні",icon:"mdi-human-child"},{title:"Батьки учнів",icon:"mdi-human-male-female"}]},{icon:"mdi-book-open-page-variant",title:"Дані Щоденника",items:[{title:"Щоденник",icon:"mdi-book-open-variant"},{title:"Проведені уроки",icon:"mdi-flask-empty-outline"},{title:"Заміна вчителів",icon:"mdi-rotate-3d"},{title:"Тематичні плани вчителів",icon:"mdi-sort-ascending"},{title:"Пояснення пропусків",icon:"mdi-clock-in"},{title:"Документи про звільнення",icon:"mdi-file-excel"},{title:"Документи учнів",icon:"mdi-file-account"},{title:"Звітні роботи",icon:"mdi-file-document-box"},{title:"Інтегровані уроки",icon:"mdi-call-merge"}]},{icon:"mdi-settings",title:"Налаштування",items:[{title:"Системи оцінювання",icon:"mdi-signal"},{title:"Стани оцінювання",icon:"mdi-chart-line"},{title:"Предмети",icon:"mdi-format-pilcrow"},{title:"Дати канікул",icon:"mdi-beach"},{title:"Періоди",icon:"mdi-clock-end"},{title:"Години уроків",icon:"mdi-clock"}]},{icon:"mdi-information-variant",title:"Додаткові дані",items:[{title:"Похвали/зауваження",icon:"mdi-contrast"},{title:"Сховище документів",icon:"mdi-database"},{title:"Дані про стан здоров’я",icon:"mdi-pill"},{title:"Категорії фізичних показників",icon:"mdi-format-list-numbers"},{title:"Фізичні показники груп",icon:"mdi-heart-pulse"},{title:"Батьківські збори",icon:"mdi-emoticon-sad"}]},{icon:"mdi-reorder-horizontal",title:"Розклади",items:[{title:"Графіки вчителів",icon:"mdi-calendar-multiple"},{title:"Розклади класів",icon:"mdi-file-document"},{title:"Зміни розкладу",icon:"mdi-history"}]},{icon:"mdi-file-chart",title:"Звітна діяльність",items:[{title:"Звіти",icon:"mdi-file"},{title:"Перегляд місяців",icon:"mdi-calendar"},{title:"Триместри/півріччя",icon:"mdi-calendar-clock"}]},{icon:"mdi-clipboard-alert",title:"Інше",items:[{title:"Повідомлення",icon:"mdi-message-reply"},{title:"Особисті дані",icon:"mdi-account-card-details"},{title:"Додати дитину",icon:"mdi-account-multiple-plus"},{title:"Документи",icon:"mdi-file-document"},{title:"Реквізити",icon:"mdi-coin"}]}],mini:!1}},methods:{showSideBar:function(){this.sideBar=!0},redirectTo:function(t){console.log(t)}}},u=d,f=(i("5c0b"),i("2877")),m=Object(f["a"])(u,r,s,!1,null,null,null),v=m.exports,p=i("8c4f"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("subheader",{attrs:{text:t.text}}),i("v-container",[i("v-tabs",{attrs:{centered:"",color:"#138a36",dark:""}},[i("v-tabs-slider",{attrs:{color:"yellow"}}),t._l(t.tabsNav,function(e,n){return i("v-tab",{key:n,on:{change:function(i){return t.changeTab(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])}),t._l(t.tabsNav.length,function(e){return i("v-tab-item",{key:e},[i("v-card",{attrs:{flat:""}},[i("v-tabs",{attrs:{centered:""}},[i("v-tabs-slider",{attrs:{color:"#04e824"}}),i("v-tab",[t._v("Контактні дані")]),i("v-tab",[t._v("Реєстраційні дані")]),i("v-tab-item",[i("v-data-table",{attrs:{headers:t.tableHeader,items:t.tableItems},scopedSlots:t._u([{key:"items",fn:function(e){return[i("td",[t._v(t._s(e.item.name))]),i("td",{staticClass:"text-xs-center"},t._l(e.item.contact,function(e,n){return i("p",{key:n},[t._v(t._s(e))])}),0),i("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.position))]),i("td",{staticClass:"text-xs-center"},[i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-account-remove")])],1)],1)]}}],null,!0)})],1),i("v-tab-item",[i("v-data-table",{attrs:{headers:t.tableHeader,items:t.tableItems},scopedSlots:t._u([{key:"items",fn:function(e){return[i("td",[t._v(t._s(e.item.name))]),i("td",{staticClass:"text-xs-center"},t._l(e.item.contact,function(e,n){return i("p",{key:n},[t._v(t._s(e))])}),0),i("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.position))]),i("td",{staticClass:"text-xs-center"},[i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-account-remove")])],1)],1)]}}],null,!0)})],1)],1)],1)],1)})],2)],1)],1)},_=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("div",{staticClass:"subheader title"},[i("span",[t._v(t._s(t.text))]),i("v-btn",{attrs:{color:"#138a36",dark:"",small:""}},[t._v("Завантажити працівників із Excel")]),i("v-btn",{attrs:{color:"#138a36",dark:"",small:""}},[t._v("Новий працівник")])],1):t._e()},x=[],g={name:"subheader",props:{text:String}},k=g,y=(i("b624"),Object(f["a"])(k,h,x,!1,null,"350f0ace",null)),w=y.exports,S={name:"home",components:{subheader:w},data:function(){return{text:"",tabsNav:["Працівники","Працівники, що вибули"],tableHeader:[{text:"Прізвище, ім'я",value:"name"},{text:"Контактні дані",align:"center",value:"contact"},{text:"Посада",align:"center",value:"position"},{text:"",align:"center",sortable:!1,value:"removeItem"}],tableItems:[{name:"Siryk Vladyslav",contact:"",position:"Керівництво школи"},{name:"Антипов Олег",contact:"",position:"Керівництво школи"},{name:"Бабич Ольга",contact:"",position:"Спеціаліст з питань догляду за здоров'ям громадськості"},{name:"Зорич Максим",contact:"",position:"Соціальний педагог"},{name:"Калиненко Анна",contact:"",position:"Спеціаліст з питань догляду за здоров'ям громадськості"},{name:"Луценко Михайло",contact:["+380456789112","+380658321478","adasadas@adas.ua"],position:"Працівник бібліотеки школи"},{name:"Науменко Марина",contact:"",position:"Керівництво школи"}]}},created:function(){this.text=this.tabsNav[0]},methods:{changeTab:function(t){this.text=t}}},j=S,O=Object(f["a"])(j,b,_,!1,null,null,null),C=O.exports;n["default"].use(p["a"]);var P=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:C}]}),B=i("2f62");n["default"].use(B["a"]);var T=new B["a"].Store({state:{},mutations:{},actions:{}});i("d5e8"),i("5363");n["default"].config.productionTip=!1,new n["default"]({router:P,store:T,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("5e27"),a=i.n(n);a.a},"5e27":function(t,e,i){},"9f78":function(t,e,i){},b624:function(t,e,i){"use strict";var n=i("9f78"),a=i.n(n);a.a}});
//# sourceMappingURL=app.31b2c556.js.map