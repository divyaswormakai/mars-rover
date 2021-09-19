(this["webpackJsonpmars-rover"]=this["webpackJsonpmars-rover"]||[]).push([[0],{31:function(n,e,r){},32:function(n,e,r){"use strict";r.r(e);var t=r(1),i=r(0),c=r.n(i),a=r(10),o=r.n(a),s=r(5),u=r(2),d=r(3),l="ROVER@CLEAR",b="ROVER@NEW_INSTRUCTIONS",j="ROVER@NEW_MOVE",v="ROVER@SET_POSITION",p="ROVER@CLEAR_POSITION_LOG",x="KeyA",f="KeyD",O="KeyW",h="north",g="south",m="east",w="west",y={F:"front",L:"left",R:"right"},N=r(6),k=function(n){switch(n){case w:return Object(t.jsx)(t.Fragment,{children:"\u2190"});case m:return Object(t.jsx)(t.Fragment,{children:"\u2192"});case g:return Object(t.jsx)(t.Fragment,{children:"\u2193"});case h:default:return Object(t.jsx)(t.Fragment,{children:"\u2191"})}},R=function(n){return function(){var n=[];return n.push({x:0,y:0}),Object(N.a)(new Set(n))}()[0]},E=function(n){switch(n){case x:return y.L;case f:return y.R;case O:return y.F;default:return null}},C=r(7),L={x:9,y:9},S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return L;default:return n}},M=r(4),I=function(n){var e=n.current,r=n.direction,t=n.grid,i=n.roverMovement,c=n.state,a=Object(M.a)({},e),o=null;switch(i){case y.F:switch(r){case h:a.y=a.y+1,o=h;break;case g:a.y=a.y-1,o=g;break;case w:a.x=a.x-1,o=w;break;case m:a.x=a.x+1,o=m;break;default:return c}break;case y.L:switch(r){case h:o=w;break;case g:o=m;break;case w:o=g;break;case m:o=h;break;default:return c}break;case y.R:switch(r){case h:o=m;break;case g:o=w;break;case w:o=h;break;case m:o=g;break;default:return c}break;default:return c}return function(n){var e=n.grid,r=n.newDirection,t=n.newPosition,i=n.state;return function(n){var e=n.newPosition;return function(n,e){return e.x>=0&&e.x<=n.x&&e.y>=0&&e.y<=n.y}(n.grid,e)}({grid:e,newPosition:t})?{current:t,direction:r,log:[i.current].concat(Object(N.a)(i.log))}:Object(M.a)(Object(M.a)({},i),{},{log:["Outside boundary"].concat(Object(N.a)(i.log))})}({grid:t,newDirection:o,newPosition:a,state:c})},_={current:null,direction:h,log:[]},F={grid:S,rover:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return _;case p:return Object(M.a)(Object(M.a)({},n),{},{log:[]});case b:var r=e.payload,t=r.instructions,i=r.grid,c=Object(N.a)(t),a=Object(M.a)({},n);return c.forEach((function(n){var e=y[n.toUpperCase()],r=a,t=r.current,c=r.direction;e&&(a=I({current:t,direction:c,grid:i,roverMovement:e,state:a}))})),a;case j:var o=e.payload,s=o.code,u=o.grid,d=E(s),x=n.current,f=n.direction;return I({current:x,direction:f,grid:u,roverMovement:d,state:n});case v:var O=e.payload.position,h=n.current?[].concat(Object(N.a)(n.log),[n.current,O]):Object(N.a)(n.log);return Object(M.a)(Object(M.a)({},n),{},{current:O,log:h});default:return n}}},P=function(n){return n.grid},T=function(n){return n.rover},V=Object(C.c)(F);function q(){var n=Object(u.a)(["\n  ","\n"]);return q=function(){return n},n}var D=c.a.forwardRef((function(n,e){return Object(t.jsx)("input",Object(M.a)(Object(M.a)({},n),{},{ref:e}))})),U=Object(d.a)(D)(q(),(function(n){return function(n){switch(n){case"submit":case"reset":return"cursor: pointer;";default:return""}}(n.type)}));function K(){var n=Object(u.a)(["\n  .label {\n    display: block;\n    margin: 0 0 5px;\n  }\n\n  .instructions-reset {\n    background-color: #fd335a;\n    border: none;\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n  }\n\n  .instructions-send {\n    margin-left: 15px;\n    background-color: #44b881;\n    border: none;\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n  }\n\n  .instructions {\n    text-align: left;\n  }\n"]);return K=function(){return n},n}var X=Object(d.a)((function(n){var e=n.className,r=n.roverNewInstructionsMove,c=n.grid,a=Object(i.useRef)(null),o=Object(i.useCallback)((function(n){var e,t;n.preventDefault();var i=function(n){var e,r;return null!==(e=null===n||void 0===n||null===(r=n.toUpperCase)||void 0===r?void 0:r.call(n).split("").filter((function(n){return Object.keys(y).includes(n)})).join(""))&&void 0!==e?e:""}(null===n||void 0===n||null===(e=n.target)||void 0===e||null===(t=e.instructions)||void 0===t?void 0:t.value);a.current.value=i,r({grid:c,instructions:i}),a.current.value=""}),[c,r]);return Object(t.jsxs)("form",{className:e,onSubmit:o,children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("label",{className:"label",htmlFor:"instructions",children:"Rover Instructions:"}),Object(t.jsx)(U,{type:"text",name:"instructions",id:"instructions",placeholder:"Type Rover instructions",ref:a})]}),Object(t.jsxs)("p",{children:[Object(t.jsx)(U,{type:"reset",value:"Reset",className:"instructions-reset"}),Object(t.jsx)(U,{className:"instructions-send",type:"submit",value:"Send"})]}),Object(t.jsxs)("div",{className:"instructions",children:[Object(t.jsxs)("p",{children:[Object(t.jsx)("b",{children:"f:"}),Object(t.jsx)("i",{children:" Move Forward"})]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("b",{children:"r:"}),Object(t.jsx)("i",{children:" Turn Right"})]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("b",{children:"l:"}),Object(t.jsx)("i",{children:" Turn Left"})]})]})]})}))(K()),A=Object(s.b)((function(n){return{grid:P(n)}}),{roverNewInstructionsMove:function(n){var e=n.instructions,r=n.grid;return{type:b,payload:{instructions:e,grid:r}}}})(X);function z(){var n=Object(u.a)(["\n  display: inline-block;\n  overflow: hidden;\n  border: 1px solid black;\n  padding: 20px;\n  width: 200px;\n  border-radius: 10px;\n\n  @media (max-width: 900px) {\n    margin-top: 15px;\n  }\n"]);return z=function(){return n},n}var W=Object(d.a)((function(n){var e=n.className;return Object(t.jsx)("div",{className:e,children:Object(t.jsx)(A,{})})}))(z());function J(){var n=Object(u.a)(["\n  display: inline-block;\n  margin-bottom: 15px;\n  vertical-align: top;\n\n  .grid-rows {\n    line-height: 0;\n    margin: 0;\n\n    .grid-square {\n      border-top: 1px solid #24292e;\n      border-right: 1px solid #24292e;\n      display: inline-block;\n      height: 2rem;\n      position: relative;\n      width: 2rem;\n\n      &:first-child {\n        border-left: 1px solid #24292e;\n      }\n      \n\n      &-rover {\n        background-color: #44b881;\n      }\n\n      .grid-arrow {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%);\n        font-size: 1.5rem;\n        color: white;\n      }\n    }\n  }\n\n  div:last-of-type .grid-square {\n    border-bottom: 1px solid #24292e;\n  }\n\n  @media (max-width: 500px) {\n    .grid-rows {\n      .grid-square {\n        width: 1.25rem;\n        height: 1.25rem;\n      }\n      .grid-arrow {\n        font-size: 1rem;\n      }\n    }\n  }\n\n  @media (max-width: 350px) {\n    .grid-rows {\n      .grid-square {\n        width: 0.75rem;\n        height: 0.75rem;\n      }\n      .grid-arrow {\n        font-size: 0.5rem;\n      }\n    }\n  }\n"]);return J=function(){return n},n}var Y=Object(d.a)((function(n){var e=n.className,r=n.grid,i=r.x,c=r.y,a=n.rover,o=a.current,s=a.direction;return Object(t.jsx)("div",{className:e,children:function(){for(var n=[],e=i,r=c,a=0;a<=r;a++){for(var u=0,d=[];u<=e;u++){var l=u,b=r-a,j="".concat(l,"-").concat(b),v=!1;l===(null===o||void 0===o?void 0:o.x)&&b===(null===o||void 0===o?void 0:o.y)&&(v=!0),d.push(Object(t.jsx)("div",{className:"grid-square ".concat(v?"grid-square-rover":""),id:j,children:v?Object(t.jsx)("span",{className:"grid-arrow",children:k(s)}):""},j))}n.push(Object(t.jsx)("div",{className:"grid-rows",children:d},a))}return n}().map((function(n){return n}))})}))(J()),B=Object(s.b)((function(n){return{grid:P(n),rover:T(n)}}),{})(Y);function G(){var n=Object(u.a)(["\n  display: inline-block;\n  height: 376px;\n  overflow: hidden;\n  border: 1px solid black;\n  padding: 10px;\n  min-width: 225px;\n  border-radius: 10px;\n\n  .current {\n    display: block;\n    margin: 0 0 5px;\n  }\n\n  .direction {\n    margin: 20px 0 18px;\n  }\n\n  .delete-button {\n    float: right;\n    margin-right: 30px;\n  }\n\n  .title {\n    margin: 23px 0 0 0;\n  }\n\n  .positions-container {\n    height: 225px;\n    overflow: auto;\n  }\n\n  .clear-log {\n    border: none;\n    background-color: #fd335a;\n    color: white;\n    padding: 10px;\n    border-radius: 10px;\n  }\n  .clear-log:hover {\n    cursor: pointer;\n  }\n"]);return G=function(){return n},n}var H=function(n){return"string"===typeof n?n:"X".concat(n.x,", Y").concat(n.y)},Q=Object(d.a)((function(n){var e=n.className,r=n.rover,c=r.current,a=r.direction,o=r.log,s=n.roverClearPositionLog,u=Object(i.useCallback)(s,[s]);return Object(t.jsxs)("div",{className:e,children:[c&&Object(t.jsxs)("div",{children:[Object(t.jsx)("span",{className:"current",children:"Current position:"}),Object(t.jsxs)("strong",{children:["X",c.x,", Y",c.y]})]}),Object(t.jsxs)("p",{className:"direction",children:["Current direction:",Object(t.jsx)("br",{}),Object(t.jsx)("b",{children:a.toUpperCase()})]}),Object(t.jsx)("button",{onClick:u,className:"clear-log",children:"Clear Log"}),!!o.length&&Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h5",{className:"title",children:"Last positions: "}),Object(t.jsx)("div",{className:"positions-container",children:o.map((function(n,e){return Object(t.jsx)("p",{children:H(n)},e)}))})]})]})}))(G()),Z=Object(s.b)((function(n){return{rover:T(n)}}),{roverClearPositionLog:function(){return{type:p}}})(Q);function $(){var n=Object(u.a)(["\n  margin: 0 0 30px;\n"]);return $=function(){return n},n}var nn=Object(d.a)((function(n){var e=n.className;return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{className:e,children:"Mars Rover Mission"}),Object(t.jsx)("h4",{children:"10 * 10 in UI"})]})}))($());function en(){var n=Object(u.a)(["\n  padding: 50px;\n  text-align: center;\n\n  .main-container {\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: 100%;\n  }\n\n  .main-container-text {\n    width: 50%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  @media (max-width: 900px) {\n    padding: 25px;\n    .main-container {\n      flex-direction: column;\n    }\n    .main-container-text {\n      width: 100%;\n      flex-direction: column;\n    }\n  }\n"]);return en=function(){return n},n}var rn=Object(d.a)((function(n){var e=n.className,r=n.grid,c=n.roverClear,a=n.roverNewKeyboardMove,o=n.roverSetPosition;return Object(i.useEffect)((function(){var n=R();o(n)}),[r,o]),Object(i.useEffect)((function(){var n=function(n){var e=n.code;switch(e){case x:case f:case O:return a({code:e,grid:r});default:return null}};return document.addEventListener("keydown",n),function(){return document.removeEventListener("keydown",n)}}),[r,a]),Object(i.useEffect)((function(){return function(){c()}}),[c]),Object(t.jsxs)("div",{className:e,children:[Object(t.jsx)("header",{children:Object(t.jsx)(nn,{})}),Object(t.jsxs)("main",{className:"main-container",children:[Object(t.jsx)(B,{}),Object(t.jsxs)("div",{className:"main-container-text",children:[Object(t.jsx)(W,{}),Object(t.jsx)(Z,{})]})]})]})}))(en()),tn=Object(s.b)((function(n){return{grid:P(n)}}),{roverClear:function(){return{type:l}},roverNewKeyboardMove:function(n){var e=n.code,r=n.grid;return{type:j,payload:{code:e,grid:r}}},roverSetPosition:function(n){return{type:v,payload:{position:n}}}})(rn),cn=r(18),an=function(){var n=[],e=window.__REDUX_DEVTOOLS_EXTENSION__;"function"===typeof e&&n.push(e({name:"- ROVER MARS -"}));var r=C.d.apply(void 0,[Object(C.a)(cn.a)].concat(n));return{store:Object(C.e)(V,{},r)}},on=(r(31),an().store);o.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(s.a,{store:on,children:Object(t.jsx)(tn,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.08a504dc.chunk.js.map