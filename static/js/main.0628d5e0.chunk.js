(this["webpackJsonpgrid-sim"]=this["webpackJsonpgrid-sim"]||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},436:function(e,t,n){},442:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(7),c=n.n(a),s=(n(136),n(24)),o=n(25),u=n(27),d=n(26),l=(n.p,n(137),n(31)),j=n(132),b=n(58),p=n(59),g=(n(138),n(436),n(3)),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;Object(s.a)(this,n);(r=t.call(this,e)).props.x,r.props.y;return r.state={isStart:!1,isSelected:!1},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)("button",{className:"square "+this.props.typeOfSquare,children:Object(g.jsxs)("p",{children:[this.props.x," ",this.props.y]})})}}]),n}(i.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"renderGrid",value:function(e,t){for(var n=[],r=!0,i=0,a=t-1;a>-1;a--){var c=[],s=void 0;s=!!r;for(var o=0;o<2*e+1;o++){var u=Math.floor(o/2);s?c.push(Object(g.jsx)(h,{typeOfSquare:"dead",y:a})):(c.push(Object(g.jsx)(h,{typeOfSquare:"live",x:u,y:a},i)),i++),s=!s}r=!r,n.push(Object(g.jsx)("div",{children:c}))}return Object(g.jsx)("div",{className:"grid",children:n})}},{key:"render",value:function(){var e=this.renderGrid(5,15);return Object(g.jsx)("div",{className:"grid-container",children:e})}}]),n}(i.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;Object(s.a)(this,n),(r=t.call(this,e)).getItems=function(e){return Array.from({length:e},(function(e,t){return t})).map((function(e){return{id:"item-".concat(e),content:"item ".concat(e)}}))};return r.state={items:r.getItems(10)},r.onDragEnd=r.onDragEnd.bind(Object(b.a)(r)),r}return Object(o.a)(n,[{key:"reorder",value:function(e,t,n){var r=Array.from(e),i=r.splice(t,1),a=Object(j.a)(i,1)[0];return r.splice(n,0,a),r}},{key:"getItemStyle",value:function(e,t){var n=this.grid;return Object(l.a)({userSelect:"none",padding:2*n,margin:"0 0 ".concat(n,"px 0"),background:e?"lightgreen":"grey"},t)}},{key:"getListStyle",value:function(e){return{background:e?"lightblue":"lightgrey",padding:this.grid,width:250}}},{key:"onDragEnd",value:function(e){if(e.destination){var t=this.reorder(this.state.items,e.source.index,e.destination.index);this.setState({items:t})}}},{key:"render",value:function(){var e=this;return Object(g.jsx)(p.a,{onDragEnd:this.onDragEnd,children:Object(g.jsx)(p.c,{droppableId:"droppable",children:function(t,n){return Object(g.jsxs)("div",Object(l.a)(Object(l.a)({},t.droppableProps),{},{ref:t.innerRef,style:e.getListStyle(n.isDraggingOver),children:[e.state.items.map((function(t,n){return Object(g.jsx)(p.b,{draggableId:t.id,index:n,children:function(n,r){return Object(g.jsx)("div",Object(l.a)(Object(l.a)(Object(l.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{style:e.getItemStyle(r.isDragging,n.draggableProps.style),children:t.content}))}},t.id)})),t.placeholder]}))}})})}}]),n}(i.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(f,{}),Object(g.jsx)(O,{})]})})}}]),n}(r.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,443)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};c.a.render(Object(g.jsx)(v,{}),document.getElementById("root")),y()}},[[442,1,2]]]);
//# sourceMappingURL=main.0628d5e0.chunk.js.map