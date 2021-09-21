(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(9),l=a.n(c),u=(a(15),Object(r.createContext)());a(16);var o=function(){var e=Object(r.useContext)(u),t=e.data,a=e.isLoading,c=e.filters,l=e.setData,o=e.copyResults,i=e.resetFilter,s=c.filterByNumericValues,m=c.filterByName.name;if(Object(r.useEffect)((function(){if(m.length<1)return l(o);var e=t.filter((function(e){return e.name.toLowerCase().includes(m)}));if(e.length<1)return l(o);l(e)}),[m]),Object(r.useEffect)((function(){if(s.length<1)return l(o);var e=s.reduce((function(e,a){return function(e){var a=e.column,r=e.comparison,n=Number(e.value);switch(r){case"maior que":return t.filter((function(e){return Number(e[a])>n}));case"menor que":return t.filter((function(e){return Number(e[a])<n}));case"igual a":return t.filter((function(e){return Number(e[a])===n}))}}(a)}),[]);if(e.length<1)return l("");l(e)}),[s]),a)return n.a.createElement("h2",null,"Loading...");if(t.length<1)return n.a.createElement("div",null,n.a.createElement("h2",null,"No have Planets with this filter"),n.a.createElement("button",{type:"button",onClick:function(){l(o),i()}},"Reset Planets"));var d=Object.keys(t[0]).filter((function(e){return"residents"!==e}));return n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"tr-thead"},d.map((function(e,t){return n.a.createElement("th",{key:t},e)})))),n.a.createElement("tbody",null,t.map((function(e){return n.a.createElement("tr",{key:e.name},n.a.createElement("td",{"data-testid":"planet-name"},e.name),n.a.createElement("td",null,e.rotation_period),n.a.createElement("td",null,e.orbital_period),n.a.createElement("td",null,e.diameter),n.a.createElement("td",null,e.climate),n.a.createElement("td",null,e.gravity),n.a.createElement("td",null,e.terrain),n.a.createElement("td",null,e.surface_water),n.a.createElement("td",null,e.population),n.a.createElement("td",{className:"td-films"},e.films.map((function(e){return" ".concat(e," ")}))),n.a.createElement("td",null,e.created),n.a.createElement("td",null,e.edited),n.a.createElement("td",{className:"td-url"},e.url))}))))},i=a(5),s=a(1);a(17);var m=function(){var e=Object(r.useContext)(u),t=e.filters,a=e.setFilterName,c=e.sendFilterNumeric,l=e.deleteFilter,o=e.allTypes,m=e.addType,d=t.filterByNumericValues,f=t.filterByName.name,p=Object(r.useState)(["population","orbital_period","diameter","rotation_period","surface_water"]),b=Object(s.a)(p,2),E=b[0],v=b[1],h=Object(r.useState)(E[0]),N=Object(s.a)(h,2),O=N[0],j=N[1],y=Object(r.useState)("maior que"),C=Object(s.a)(y,2),g=C[0],S=C[1],w=Object(r.useState)(0),k=Object(s.a)(w,2),x=k[0],B=k[1];Object(r.useEffect)((function(){return j(E[0])}),[E]);var _=E.length<1;return n.a.createElement("form",{className:"App"},n.a.createElement("h1",{className:"planetSearch"},"PLANET SEARCH"),n.a.createElement("input",{type:"text","data-testid":"name-filter",onChange:a,value:f,className:"name-filter",placeholder:"Enter the planet name"}),n.a.createElement("select",{onChange:function(e){var t=e.target.value;j(t)},disabled:_,value:O,"data-testid":"column-filter",className:"column-filter"},E.length>0?E.map((function(e){return n.a.createElement("option",{key:e},e)})):n.a.createElement("option",{disabled:!0},"Empty")),n.a.createElement("select",{disabled:_,onChange:function(e){var t=e.target.value;g.includes(t)||S(t)},value:g,"data-testid":"comparison-filter",className:"comparison-filter"},["maior que","menor que","igual a"].map((function(e){return n.a.createElement("option",{key:e,value:e},e)}))),n.a.createElement("input",{disabled:_,type:"number",value:x,onChange:function(e){var t=e.target.value;B(t)},"data-testid":"value-filter",className:"value-filter"}),n.a.createElement("button",{disabled:_||0===x,type:"button",onClick:function(){var e={column:O,comparison:g,value:x};m(O),c(e),v(E.filter((function(e){return e!==O})))},"data-testid":"button-filter",className:"button-filter"},"Filtrar"),d.map((function(e){return n.a.createElement("div",{key:e.column,"data-testid":"filter",className:"filter"},"".concat(e.column," ").concat(e.comparison," ").concat(e.value),n.a.createElement("button",{onClick:function(){return function(e){var t=d.filter((function(t){return t.column!==e})),a=o.find((function(t){return e===t}));v([].concat(Object(i.a)(E),[a])),l(t)}(e.column)},type:"button",className:"button"},"X"))})))},d=a(3),f=a.n(d),p=a(7),b=a(2),E=function(){var e=Object(p.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://swapi-trybe.herokuapp.com/api/planets/",e.prev=1,e.next=4,fetch("https://swapi-trybe.herokuapp.com/api/planets/");case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();var v=function(e){var t=e.children,a=Object(r.useState)([]),c=Object(s.a)(a,2),l=c[0],o=c[1],m=Object(r.useState)(!0),d=Object(s.a)(m,2),v=d[0],h=d[1],N=Object(r.useState)(!1),O=Object(s.a)(N,2),j=O[0],y=O[1],C=Object(r.useState)([]),g=Object(s.a)(C,2),S=g[0],w=g[1],k=Object(r.useState)([]),x=Object(s.a)(k,2),B=x[0],_=x[1],F=Object(r.useState)({filterByName:{name:""},filterByNumericValues:[],order:{column:"name",sort:"ASC"}}),A=Object(s.a)(F,2),D=A[0],P=A[1];Object(r.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),y(!1),e.next=5,E();case 5:t=e.sent,o(t.results),w(t.results),h(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),y(!0),h(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var V={data:l,isLoading:v,loadError:j,filters:D,setFilterName:function(e){var t=e.target.value;P(Object(b.a)(Object(b.a)({},D),{},{filterByName:{name:t.toLowerCase()}}))},setData:o,copyResults:S,sendFilterNumeric:function(e){var t=D.filterByNumericValues;P(Object(b.a)(Object(b.a)({},D),{},{filterByNumericValues:[].concat(Object(i.a)(t),[e])}))},deleteFilter:function(e){P(Object(b.a)(Object(b.a)({},D),{},{filterByNumericValues:e}))},resetFilter:function(){P(Object(b.a)(Object(b.a)({},D),{},{filterByNumericValues:[]}))},allTypes:B,addType:function(e){_([].concat(Object(i.a)(B),[e]))},setOrderSort:function(e,t){P(Object(b.a)(Object(b.a)({},D),{},{order:{column:e,sort:t}}))}};return n.a.createElement(u.Provider,{value:V},t)};function h(e,t){return e.name<t.name?-1:e.name>t.name?1:0}function N(e,t){return e.name>t.name?-1:e.name<t.name?1:0}function O(e,t){return Number(e.population)<Number(t.population)?-1:Number(e.population)>Number(t.population)?1:0}function j(e,t){return Number(e.population)>Number(t.population)?-1:Number(e.population)<Number(t.population)?1:0}function y(e,t){return Number(e.orbital_period)<Number(t.orbital_period)?-1:Number(e.orbital_period)>Number(t.orbital_period)?1:0}function C(e,t){return Number(e.orbital_period)>Number(t.orbital_period)?-1:Number(e.orbital_period)<Number(t.orbital_period)?1:0}a(19);var g=function(){var e=Object(r.useContext)(u),t=e.setOrderSort,a=e.data,c=e.setData,l=Object(r.useState)("name"),o=Object(s.a)(l,2),i=o[0],m=o[1],d=Object(r.useState)("ASC"),f=Object(s.a)(d,2),p=f[0],b=f[1],E=function(){!function(e,t){if("name"===e)switch(t){case"ASC":return c(a.sort(h));case"DESC":return c(a.sort(N))}if("population"===e)switch(t){case"ASC":return c(a.sort(O));case"DESC":return c(a.sort(j))}if("orbital_period"===e)switch(t){case"ASC":return c(a.sort(y));case"DESC":c(a.sort(C))}}(i,p)};return Object(r.useEffect)((function(){t(i,p),E()}),[a,i,p]),n.a.createElement("div",{className:"order-filter"},n.a.createElement("span",null,"Order By:"),n.a.createElement("select",{onChange:function(e){return m(e.target.value)},"data-testid":"column-sort",className:"column-sort"},n.a.createElement("option",{value:"name"},"Name"),n.a.createElement("option",{value:"population"},"Population"),n.a.createElement("option",{value:"orbital_period"},"Orbital Period")),n.a.createElement("span",null,"In a way: "),n.a.createElement("label",{htmlFor:"asc",className:"ascendant"},"ASC",n.a.createElement("input",{"data-testid":"column-sort-input-asc",type:"radio",onChange:function(e){return b(e.target.value)},id:"asc",defaultChecked:!0,name:"ordeBy",value:"ASC"})),n.a.createElement("label",{htmlFor:"desc",className:"downward"},"DESC",n.a.createElement("input",{"data-testid":"column-sort-input-desc",type:"radio",onChange:function(e){return b(e.target.value)},id:"desc",name:"ordeBy",value:"DESC"})),n.a.createElement("button",{type:"button",onClick:E,"data-testid":"column-sort-button",className:"column-sort-button"},"Order Columns"))};var S=function(){return n.a.createElement(v,null,n.a.createElement("header",{className:"background-starwars"},n.a.createElement("iframe",{src:"https://open.spotify.com/embed/track/2bw4WgXyXP90hIex7ur58y?theme=0",width:"100%",height:"380",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",title:"StarWars",className:"MarchImperial"},"Star Wars"),n.a.createElement(m,null),n.a.createElement(g,null)),n.a.createElement(o,null))};l.a.render(n.a.createElement(S,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.2720c1da.chunk.js.map