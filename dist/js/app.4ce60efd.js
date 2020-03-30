(function(t){function e(e){for(var n,a,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var l=o[r];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},"08da":function(t,e,o){"use strict";var n=o("2efa"),i=o.n(n);i.a},"2efa":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("NavBar"),o("TodoList")],1)},s=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-navbar",{attrs:{type:"dark",variant:"dark"}},[o("b-navbar-nav",[o("b-nav-item",{attrs:{href:"#"}},[t._v("Vue and Bootstrap Todo App")])],1)],1)],1)},r=[],l={name:"NavBar",props:{msg:String}},c=l,d=o("2877"),u=Object(d["a"])(c,a,r,!1,null,"66ff74f3",null),f=u.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-4"},[o("h3",[t._v(t._s(t.heading))])]),o("div",{staticClass:"col-md-4"}),o("div",{staticClass:"col-md-4"},[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[t._v("Create New Todo Item")])],1)]),o("hr"),o("div",[o("b-modal",{attrs:{id:"modal-1",title:"Create New Todo Item"}},[o("div",{staticClass:"my-4"},[o("label",[t._v("Enter Todo Content")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",class:{error:t.error},attrs:{type:"text"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.title=e.target.value)}}})])])],1),o("transition-group",{attrs:{name:"fade","enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},t._l(t.todosFiltered,(function(e,n){return o("div",{key:n,staticClass:"todo-items"},[o("div",{staticClass:"card card-body mb-2"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-2"},[o("span",{staticClass:"badge badge-secondary"},[t._v(" #"+t._s(n)+" ")])]),o("div",{staticClass:"col-md-6"},[e.edit?o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"todo.title"},{name:"focus",rawName:"v-focus"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.title},on:{blur:function(e){return t.doneEdit(n)},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEdit(n)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEdit(n)}],input:function(o){o.target.composing||t.$set(e,"title",o.target.value)}}}):o("div",{class:{completed:e.completed},on:{dblclick:function(e){return t.todoEdit(n)}}},[t._v(" "+t._s(e.title)+" ")])]),o("div",{staticClass:"col-md-2"},[e.edit?o("small",{staticClass:"hint"},[o("p",[t._v('"Esc" Key = cancel editing.'),o("br"),t._v(' "Enter" Key = update title.')])]):o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"todo.completed"}],staticClass:"form-check-input",class:{error:t.error},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(o){var n=e.completed,i=o.target,s=!!i.checked;if(Array.isArray(n)){var a=null,r=t._i(n,a);i.checked?r<0&&t.$set(e,"completed",n.concat([a])):r>-1&&t.$set(e,"completed",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(e,"completed",s)}}}),o("label",{staticClass:"form-check-label"},[t._v("Mark As Complete")])])]),o("div",{staticClass:"col-md-2"},[o("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(e){return t.removeItem(n)}}},[t._v("X")])])])])])})),0),o("div",{staticClass:"card card-footer"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-3"},[t._v(" "+t._s(t.remaining)+" todos left. ")]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:!t.anyRemaining},on:{change:t.checkAllTodos}}),o("label",{staticClass:"form-check-label"},[t._v("Check All")])])]),o("div",{staticClass:"col-md-3"},[o("button",{staticClass:"btn btn-sm btn-default",class:{active:"all"==t.filter},on:{click:function(e){t.filter="all"}}},[t._v("All")]),o("button",{staticClass:"btn btn-sm btn-default",class:{active:"active"==t.filter},on:{click:function(e){t.filter="active"}}},[t._v("Active")]),o("button",{staticClass:"btn btn-sm btn-default",class:{active:"completed"==t.filter},on:{click:function(e){t.filter="completed"}}},[t._v("Completed")])]),o("transition",{attrs:{name:"fade"}},[t.showClearCompletedButton?o("div",{staticClass:"col-md-3"},[o("button",{staticClass:"btn btn-sm btn-info",on:{click:t.clearCompleted}},[t._v("Clear Completed")])]):t._e()])],1)])],1)},m=[],v=(o("4de4"),o("4160"),o("a434"),o("159b"),{name:"TodoList",data:function(){return{heading:"Todo List",title:"",beforeEdit:"",error:!1,filter:"all",todos:[{title:"Learn Vue and Bootstrap",edit:!1,completed:!1}]}},computed:{remaining:function(){return this.todos.filter((function(t){return!t.completed})).length},anyRemaining:function(){return 0!==this.remaining},todosFiltered:function(){return"all"==this.filter?this.todos:"active"==this.filter?this.todos.filter((function(t){return 0==t.completed})):"completed"==this.filter?this.todos.filter((function(t){return 1==t.completed})):this.todos},showClearCompletedButton:function(){return this.todos.filter((function(t){return t.completed})).length>0}},directives:{focus:{inserted:function(t){t.focus()}}},methods:{addTodo:function(){if(this.title){var t={title:this.title,edit:!1,completed:!1};this.todos.push(t),this.title=""}else this.error=!0},todoEdit:function(t){this.beforeEdit=this.todos[t].title,this.todos[t].edit=!0},cancelEdit:function(t){this.todos[t].title=this.beforeEdit,this.todos[t].edit=!1},doneEdit:function(t){this.todos[t].title||(this.todos[t].title=this.beforeEdit),this.todos[t].edit=!1},checkAllTodos:function(){this.todos.forEach((function(t){return t.completed=event.target.checked}))},clearCompleted:function(){this.todos=this.todos.filter((function(t){return!t.completed}))},removeItem:function(t){this.todos.splice(t,1)}}}),h=v,b=(o("08da"),Object(d["a"])(h,p,m,!1,null,"773543f8",null)),C=b.exports,y={name:"App",components:{NavBar:f,TodoList:C}},k=y,_=(o("034f"),Object(d["a"])(k,i,s,!1,null,null,null)),g=_.exports,w=o("5f5b"),E=o("b1e0");o("f9e3"),o("2dd8");n["default"].use(w["a"]),n["default"].use(E["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(g)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.4ce60efd.js.map