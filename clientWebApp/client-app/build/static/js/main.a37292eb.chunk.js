(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(t,e,a){t.exports=a(326)},109:function(t,e,a){},150:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},151:function(t,e,a){},323:function(t,e){},326:function(t,e,a){"use strict";a.r(e);var o=a(0),r=a.n(o),n=a(63),i=a.n(n),l=(a(109),a(7)),s=a(6),c=a(9),d=a(8),u=a(10),p=a(5),b=(a(150),a(151),a(13)),m=a(18),f=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={x:0,y:0,z:0,XPoints:Array(1).fill(null),YPoints:Array(1).fill(null),ZPoints:Array(1).fill(null),data:[]},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({data:h([])})}},{key:"componentWillMount",value:function(){var t=this;this.props.socket.on("BNOA",function(e){var a=e.x,o=e.y,r=e.z;t.setState({x:a,y:o,z:r,XPoints:[].concat(Object(b.a)(t.state.XPoints.slice(-10)),[a]),YPoints:[].concat(Object(b.a)(t.state.YPoints.slice(-10)),[o]),ZPoints:[].concat(Object(b.a)(t.state.ZPoints.slice(-10)),[r]),data:h(t.state.XPoints,t.state.YPoints,t.state.ZPoints)})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"component"},r.a.createElement(p.Card,{className:"grey lighten-3",textClassName:"grey-text",title:"BNO A"},r.a.createElement(m.a,{data:this.state.data}),r.a.createElement("p",{className:"center"},this.state.x,", ",this.state.y,",",this.state.z)))}}]),e}(o.Component),h=function(t,e,a){return{labels:Array(t.length).fill(""),datasets:[{label:"BNOA x",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t},{label:"BNOA y",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e},{label:"BNOA z",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a}]}},g=f,v=a(103),C=a.n(v),y=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={speed:0},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){var t=this;this.props.socket.on("PITOT",function(e){var a=e.x;t.setState({speed:a})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"component"},r.a.createElement(p.Card,{className:"grey lighten-3",textClassName:"grey-text",title:"SPEED PITOT"},r.a.createElement(C.a,{maxValue:80,value:this.state.speed,needleColor:"steelblue",startColor:"green",segments:20,endColor:"red"}),r.a.createElement("p",{className:"center"},this.state.speed," km/h")))}}]),e}(o.Component),O=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={temp:0,tempPoints:Array(1).fill(null),data:[]},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"component"},r.a.createElement(p.Card,{className:"grey lighten-3",textClassName:"grey-text",title:"Temperature"},r.a.createElement(m.a,{data:this.state.data}),r.a.createElement("p",{className:"center"},this.state.temp)))}}]),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({data:k([])})}},{key:"componentWillMount",value:function(){var t=this;this.props.socket.on("BMP",function(e){var a=e.temp;t.setState({temp:a,tempPoints:[].concat(Object(b.a)(t.state.tempPoints.slice(-10)),[a]),data:k(t.state.tempPoints)})})}}]),e}(o.Component),k=function(t){return{labels:Array(t.length).fill(""),datasets:[{label:"temperature",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]}},B=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={alt:0,altPoints:Array(1).fill(null),data:[]},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"component"},r.a.createElement(p.Card,{className:"grey lighten-3",textClassName:"grey-text",title:"Altitude"},r.a.createElement(m.a,{data:this.state.data}),r.a.createElement("p",{className:"center"},this.state.alt)))}}]),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({data:j([])})}},{key:"componentWillMount",value:function(){var t=this;this.props.socket.on("BMP",function(e){var a=e.alt;t.setState({alt:a,altPoints:[].concat(Object(b.a)(t.state.altPoints.slice(-10)),[a]),data:j(t.state.altPoints)})})}}]),e}(o.Component),j=function(t){return{labels:Array(t.length).fill(""),datasets:[{label:"altitude",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]}},E=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={pres:0,presPoints:Array(1).fill(null),data:[]},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"component"},r.a.createElement(p.Card,{className:"grey lighten-3",textClassName:"grey-text",title:"Pression"},r.a.createElement(m.a,{data:this.state.data}),r.a.createElement("p",{className:"center"},this.state.pres)))}}]),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({data:P([])})}},{key:"componentWillMount",value:function(){var t=this;this.props.socket.on("BMP",function(e){var a=e.pres;t.setState({pres:a,presPoints:[].concat(Object(b.a)(t.state.presPoints.slice(-10)),[a]),data:P(t.state.presPoints)})})}}]),e}(o.Component),P=function(t){return{labels:Array(t.length).fill(""),datasets:[{label:"Pressure",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]}},H=a(300).connect("http://localhost:3000",{reconnect:!0}),N=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.Navbar,{className:"teal accent-3",brand:"Velocity",right:!0}),r.a.createElement(p.Row,null,r.a.createElement(p.Col,{s:12,m:6},r.a.createElement(g,{socket:H})),r.a.createElement(p.Col,{s:12,m:6},r.a.createElement(y,{socket:H})),r.a.createElement(p.Col,{s:12,m:6},r.a.createElement(O,{socket:H})),r.a.createElement(p.Col,{s:12,m:6},r.a.createElement(E,{socket:H})),r.a.createElement(p.Col,{s:12,m:6},r.a.createElement(B,{socket:H}))))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[104,1,2]]]);
//# sourceMappingURL=main.a37292eb.chunk.js.map