(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),o=a.n(r),c=a(3),u=a(4),i=a(5),s=a(7),m=a(6),g=function(e){var t=e.getValue;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:t,name:"good",type:"button"},"Good"),l.a.createElement("button",{onClick:t,name:"neutral",type:"button"},"Neutral "),l.a.createElement("button",{onClick:t,name:"bad",type:"button"},"Bad"))},b=function(e){var t=e.positive,a=e.total,n=e.good,r=e.neutral,o=e.bad;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Good: ",n),l.a.createElement("p",null,"Neutral: ",r),l.a.createElement("p",null,"Bad: ",o),l.a.createElement("p",null,"Total: ",a," "),l.a.createElement("p",null,"Positive feedback: ",t,"%"))},d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={good:0,neutral:0,bad:0},e.getValue=function(t){var a=t.target.name;e.setState((function(e){return Object(c.a)({},a,e[a]+1)}))},e.getTotal=function(){var t=e.state;return t.good+t.neutral+t.bad},e.getPositive=function(){var t=e.state.good;return e.getTotal()?Math.round(100*t/e.getTotal()):0},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Please Leave feedback"),l.a.createElement(g,{getValue:this.getValue}),l.a.createElement("h2",null,"Statistics"),this.getTotal()?l.a.createElement(b,Object.assign({},this.state,{total:this.getTotal(),positive:this.getPositive()})):l.a.createElement("p",null,"No feedback given"))}}]),a}(n.Component);o.a.render(l.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.3a3c14cd.chunk.js.map