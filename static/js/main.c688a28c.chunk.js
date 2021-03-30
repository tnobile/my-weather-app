(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={textInput:"Inputs_textInput__qeVoo",container:"Inputs_container__1kFh_",item:"Inputs_item__2Oy0C",Radio:"Inputs_Radio__2PRPz",Button:"Inputs_Button__3HfNQ"}},function(e,t,n){e.exports={circle:"Logo_circle__2RiV1",sky:"Logo_sky__23K2O",cloud1:"Logo_cloud1__1hNUH",cloud2:"Logo_cloud2__2rTBv",cloud3:"Logo_cloud3__2Vwp2"}},function(e,t,n){e.exports={item:"Main_item__ttD9I",mainContent:"Main_mainContent__1-zH-"}},,function(e,t,n){e.exports={Wrapper:"Conditions_Wrapper__ZCA7t",Small:"Conditions_Small__2vGVg",Loader:"Conditions_Loader__Nw5KN",spin:"Conditions_spin__3MyJr"}},function(e,t,n){e.exports={container:"Footer_container__3nxwr",item:"Footer_item__3Jhzf"}},,,function(e,t,n){e.exports={Button:"Forecast_Button__xX44_"}},,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(10),s=n.n(i),r=(n(20),n(2)),o=(n(21),n(4)),l=n.n(o),u=n(0),j=function(){return Object(u.jsxs)("div",{className:l.a.sky,children:[Object(u.jsx)("div",{className:l.a.circle}),Object(u.jsx)("div",{className:l.a.cloud1}),Object(u.jsx)("div",{className:l.a.cloud2}),Object(u.jsx)("div",{className:l.a.cloud3})]})},d=n(7),m=n.n(d),b=function(e){return Object(u.jsxs)("div",{className:m.a.Wrapper,children:[e.error&&Object(u.jsx)("small",{className:m.a.Small,children:"Please enter a valid city and key."}),e.loading&&Object(u.jsx)("div",{className:m.a.Loader}),200===e.responseObj.cod?Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.responseObj.name})}),Object(u.jsxs)("p",{children:["It is currently ",Math.round(e.responseObj.main.temp)," degrees out with ",e.responseObj.weather[0].description,"."]})]}):null]})},h=n(3),p=n.n(h),O=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Find Current Weather Conditions"}),Object(u.jsxs)("form",{onSubmit:e.getForecast,children:[Object(u.jsx)("input",{type:"text",placeholder:"Enter SleepTime",maxLength:"49",className:p.a.textInput,value:e.sleepTime,onChange:function(t){return e.handleSleepTime(t.target.value)}}),Object(u.jsxs)("div",{className:p.a.container,children:[Object(u.jsx)("input",{type:"text",placeholder:"Enter City",maxLength:"49",className:[p.a.textInput,p.a.item].join(" "),value:e.city,onChange:function(t){return e.handleCity(t.target.value)}}),Object(u.jsx)("button",{type:"button",className:p.a.Button,onClick:function(){return e.handleCity("")},children:"x"})]}),Object(u.jsxs)("label",{className:p.a.Radio,children:[Object(u.jsx)("input",{type:"radio",name:"units",checked:"imperial"===e.unit,value:"imperial",onChange:function(t){return e.handleUnit(t.target.value)}}),"Fahrenheit"]}),Object(u.jsxs)("label",{className:p.a.Radio,children:[Object(u.jsx)("input",{type:"radio",name:"units",checked:"metric"===e.unit,value:"metric",onChange:function(t){return e.handleUnit(t.target.value)}}),"Celcius"]}),Object(u.jsx)("button",{className:p.a.Button,type:"submit",children:"Get Forecast"})]})]})},x=n(11),f=n.n(x);function y(e){return 5*(e-32)/9}function _(e){return 9*e/5+32}function g(e,t){var n=parseFloat(e);if(Number.isNaN(n))return"";var a=t(n);return(Math.round(1e3*a)/1e3).toString()}var v=function(e){var t=Object(a.useState)({}),n=Object(r.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(""),o=Object(r.a)(s,2),l=o[0],j=o[1],d=Object(a.useState)("metric"),m=Object(r.a)(d,2),h=m[0],p=m[1],x=Object(a.useState)(!1),v=Object(r.a)(x,2),N=v[0],C=v[1],S=Object(a.useState)(!1),K=Object(r.a)(S,2),w=K[0],k=K[1],F=Object(a.useState)(1e3),I=Object(r.a)(F,2),L=I[0],B=I[1],T=Object(a.useState)(),P=Object(r.a)(T,2),R=P[0],J=P[1],M=Object(a.useState)(),E=Object(r.a)(M,2),U=E[0],W=E[1],A=Object(a.useState)([{scale:"c",temp:0},{scale:"f",temp:0}]),D=Object(r.a)(A,2),V=D[0],z=D[1];Object(a.useEffect)((function(){return console.log(JSON.stringify(V))}),[V]),Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){W(e.coords.latitude),J(e.coords.longitude)})),console.log("Latitude is:",U),console.log("Longitude is:",R)}),[U,R]);var H=encodeURIComponent(l);function q(e){j(e)}return Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:V[0].temp?JSON.stringify(V):""}),Object(u.jsx)(O,{getForecast:function(t){t.preventDefault();var n=e.myKey;if(n&&0!==n.length){C(!1),i({}),k(!0);var a=l?"https://api.openweathermap.org/data/2.5/weather?q=".concat(H,"&units=").concat(h,"&appid=").concat(n):"https://api.openweathermap.org/data/2.5/weather?lat=".concat(U,"&lon=").concat(R,"&units=").concat(h,"&appid=").concat(n);console.log(a),fetch(a).then((function(e){return function(e,t){return new Promise((function(n){return setTimeout(n,e,t)}))}(Math.random()*L,e)})).then((function(e){return e.json()})).then((function(e){if(200!==e.cod)throw new Error;q(e.name),i(e),function(e,t){z("metric"===t?[{scale:"c",temp:g(e,(function(e){return e}))},{scale:"f",temp:g(e,_)}]:[{scale:"f",temp:g(e,(function(e){return e}))},{scale:"c",temp:g(e,y)}]),console.log(JSON.stringify(V))}(e.main.temp,h),k(!1)})).catch((function(e){C(!0),k(!1),console.error(e.message)}))}else C(0)},city:l,mykey:e.myKey,unit:h,sleepTime:L,handleCity:q,handleUnit:function(e){p(e)},handleSleepTime:function(e){B(e)}}),Object(u.jsx)("button",{className:f.a.Button,onClick:function(){return q("")},children:"Clear City"}),Object(u.jsx)(b,{responseObj:c,error:N,loading:w})]})},N=n(5),C=n.n(N),S=function(e){return Object(u.jsxs)("div",{className:C.a.mainContent,children:[Object(u.jsx)("div",{className:C.a.item,children:Object(u.jsx)(v,{myKey:e.myKey})}),Object(u.jsx)("div",{className:C.a.item,children:Object(u.jsx)(v,{myKey:e.myKey})}),Object(u.jsx)("div",{className:C.a.item,children:Object(u.jsx)(v,{myKey:e.myKey})}),Object(u.jsx)("div",{className:C.a.item,children:Object(u.jsx)(v,{myKey:e.myKey})})]})},K=n(12),w=n(13),k=n(6),F=n(15),I=n(14),L=n(8),B=n.n(L),T=function(e){Object(F.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(K.a)(this,n),(a=t.call(this,e)).state={myKey:""},a.handleChange=a.handleChange.bind(Object(k.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(k.a)(a)),a}return Object(w.a)(n,[{key:"handleChange",value:function(e){this.setState({myKey:e.target.value})}},{key:"handleSubmit",value:function(e){alert("submitting:"+this.state.myKey),this.props.handleSubmit(this.state.myKey),e.preventDefault()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:B.a.container,children:[Object(u.jsx)("div",{className:B.a.item,children:"Page created by tnobile."}),Object(u.jsx)("div",{className:B.a.item,children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsxs)("label",{children:["Key:",Object(u.jsx)("input",{type:"text",value:this.state.myKey,onChange:this.handleChange})]}),Object(u.jsx)("input",{type:"submit",value:"sub"})]})})]})}}]),n}(c.a.Component);var P=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)(j,{}),Object(u.jsx)("h1",{children:" Reactive Weather App"})]}),Object(u.jsx)("main",{children:Object(u.jsx)(S,{myKey:n})}),Object(u.jsx)("footer",{children:Object(u.jsx)(T,{handleSubmit:function(e){c(e)}})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),R()}],[[23,1,2]]]);
//# sourceMappingURL=main.c688a28c.chunk.js.map