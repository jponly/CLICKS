(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Ultimate Warrior",image:"images/ultwar.png",occupation:"",location:""},{id:2,name:"Becky Lynch",image:"images/becklynch.png",occupation:"",location:""},{id:3,name:"Koko B Ware",image:"images/koko.png",occupation:"",location:""},{id:4,name:"Undertaker",image:"images/undert.png",occupation:"",location:""},{id:5,name:"Hulk Hogan",image:"/images/hulk.jpg",occupation:"",location:""},{id:6,name:"The Rock",image:"images/rock.png",occupation:"",location:""},{id:7,name:"Mankind",image:"images/mankind.png",occupation:"",location:""},{id:8,name:"Triple H",image:"images/hhh.png",occupation:"",location:""},{id:9,name:"Rhonda Rousey",image:"images/rhonda.png",occupation:"",location:""},{id:10,name:"Brett Hart",image:"images/bretthart.png",occupation:"",location:""},{id:11,name:"Razor Ramon",image:"images/razor.png",occupation:"",location:""},{id:12,name:"Sting",image:"images/sting.png",occupation:"",location:""}]},,,,,,,,,function(e,n,a){e.exports=a(27)},,,,,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){"use strict";a.r(n);var t=a(0),i=a.n(t),o=a(3),c=a.n(o),r=a(7),m=a(4),s=a(5),l=a(8),d=a(6),u=a(9),g=(a(15),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.chooseFriend(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"}))}),p=(a(17),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(a(19),function(e){return i.a.createElement("h1",{className:"title"},e.children)}),f=(a(21),{card:{margin:20,background:"#e8eaf6"},heading:{background:"#9a74db",minHeight:50,lineHeight:3.5,fontSize:"1.2rem",color:"white",padding:"0 20px"}}),k=function(e){return i.a.createElement("div",{style:f.card},i.a.createElement("div",{style:f.heading},"Score: ",e.children),i.a.createElement("div",{style:f.heading},e.winLose))},E=a(1),v=(a(23),function(e){function n(){var e,a;Object(m.a)(this,n);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(i)))).state={friends:E,picked:[],score:0,winLose:""},a.chooseFriend=function(e){console.log(a.state.picked);var n=a.state.picked;n.indexOf(e)>=0?(alert("GAME OVER!"),a.setState({picked:n=[]}),a.setState(function(e){return{score:0}})):(n.push(e),a.setState(function(e){return{score:e.score+1}})),a.setState({picked:n});for(var t=Object(r.a)(E),i=t.length-1;i>0;i--){var o=Math.floor(Math.random()*(i+1)),c=[t[o],t[i]];t[i]=c[0],t[o]=c[1]}a.setState({friends:t})},a}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(k,null,this.state.score,this.state.winLose),i.a.createElement(h,null,"CLICKY"),this.state.friends.map(function(n){return i.a.createElement(g,{chooseFriend:e.chooseFriend,id:n.id,key:n.id,name:n.name,image:n.image})}))}}]),n}(t.Component));a(25);c.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.71f5618c.chunk.js.map