(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142",count:0},{id:2,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/b/bd/House-Tully-Main-Shield.PNG/revision/latest?cb=20170523040648",count:0},{id:3,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest?cb=20170101095357",count:0},{id:4,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG/revision/latest?cb=20170108163035",count:0},{id:5,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20181113055101",count:0},{id:6,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/d/dd/House-Bolton-Main-Shield.PNG/revision/latest?cb=20161231131431",count:0},{id:7,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255",count:0},{id:8,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836",count:0},{id:9,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/House-Martell-Main-Shield.PNG/revision/latest?cb=20170523024859",count:0},{id:10,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153",count:0},{id:11,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG/revision/latest?cb=20170519002924",count:0},{id:12,image:"https://vignette.wikia.nocookie.net/gameofthrones/images/7/7b/House-Forrester-Main-Shield.PNG/revision/latest?cb=20161231145807",count:0}]},,,function(e,t,i){e.exports=i(20)},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a=i(2),c=i.n(a),s=(i(15),i(3)),r=i(4),u=i(7),l=i(5),m=i(8);i(16),i(17);var g=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{alt:e.id,src:e.image,onClick:function(){return e.clickCount(e.id)}})))};i(18);var h=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)};i(19);var d=function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"title"},e.children),o.a.createElement("div",{className:"scores"},"Score: ",e.score," High Score: ",e.highScore))},f=i(6),v=function(e){function t(){var e,i;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(i=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={cards:f,score:0,highScore:0},i.gameOver=function(){return i.state.score>i.state.highScore&&i.setState({highScore:i.state.score},function(){console.log(this.state.highScore)}),i.state.cards.forEach(function(e){e.count=0}),alert("Game Over! Score: ".concat(i.state.score)),i.setState({score:0}),!0},i.clickCount=function(e){i.state.cards.find(function(t,n,o){if(t.id===e){if(0===o[n].count)return o[n].count=o[n].count+1,i.setState({score:i.state.score+1},function(){}),i.state.cards.sort(function(){return Math.random()-.5}),!0;i.gameOver()}})},i}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(h,null,o.a.createElement(d,{score:this.state.score,highScore:this.state.highScore},"Memory Game"),this.state.cards.map(function(t){return o.a.createElement(g,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})}))}}]),t}(n.Component);c.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.907e16c9.chunk.js.map