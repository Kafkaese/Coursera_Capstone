(function(g){var window=this;var Q5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.Y?{F:"div",X:["ytp-icon","ytp-icon-expand-watch-page"]}:{F:"svg",N:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{F:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{F:"g",N:{transform:"translate(-1.000000, -3.000000)"},K:[{F:"polygon",N:{points:"0 0 24 0 24 24 0 24"}},{F:"path",N:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";g.S(a.O().experiments,"kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.Y?{F:"div",X:["ytp-icon","ytp-icon-expand-miniplayer"]}:{F:"svg",N:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{F:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{F:"g",N:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{F:"path",N:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.X.call(this,{F:"button",X:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],N:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.w=a;this.ha("click",this.A,this);this.updateValue("title",g.LN(a,e,"i"));g.ce(this,g.gO(b.Va(),this.element))},R5=function(a){g.X.call(this,{F:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.J=!1;this.H=this.C=this.w=void 0;this.M(a,"minimized",this.qG);this.M(a,"onStateChange",this.uN)},S5=function(a){g.EQ.call(this,a);
this.o=new R5(this.player);this.o.hide();g.oL(this.player,this.o.element,4);a.app.H.o&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.r(Q5,g.X);Q5.prototype.A=function(){this.w.ma("onExpandMiniplayer")};g.r(R5,g.X);g.h=R5.prototype;
g.h.show=function(){this.w=new g.Qm(this.pG,null,this);this.w.start();if(!this.J){this.D=new g.bS(this.player,this);g.B(this,this.D);g.oL(this.player,this.D.element,4);this.D.C=.6;this.U=new g.YQ(this.player);g.B(this,this.U);this.A=new g.X({F:"div",I:"ytp-miniplayer-scrim"});g.B(this,this.A);this.A.o(this.element);this.M(this.A.element,"click",this.lz);var a=new g.X({F:"button",X:["ytp-miniplayer-close-button","ytp-button"],N:{"aria-label":"Close"},K:[g.aN()]});g.B(this,a);a.o(this.A.element);this.M(a.element,
"click",this.Gx);a=new Q5(this.player,this);g.B(this,a);a.o(this.A.element);this.B=new g.X({F:"div",I:"ytp-miniplayer-controls"});g.B(this,this.B);this.B.o(this.A.element);this.M(this.B.element,"click",this.lz);var b=new g.X({F:"div",I:"ytp-miniplayer-button-container"});g.B(this,b);b.o(this.B.element);a=new g.X({F:"div",I:"ytp-miniplayer-play-button-container"});g.B(this,a);a.o(this.B.element);var c=new g.X({F:"div",I:"ytp-miniplayer-button-container"});g.B(this,c);c.o(this.B.element);this.P=new g.NO(this.player,
this,!1);g.B(this,this.P);this.P.o(b.element);b=new g.KO(this.player,this);g.B(this,b);b.o(a.element);this.L=new g.NO(this.player,this,!0);g.B(this,this.L);this.L.o(c.element);this.H=new g.kQ(this.player,this);g.B(this,this.H);this.H.o(this.A.element);this.C=new g.WO(this.player,this);g.B(this,this.C);g.oL(this.player,this.C.element,4);this.G=new g.X({F:"div",I:"ytp-miniplayer-buttons"});g.B(this,this.G);g.oL(this.player,this.G.element,4);a=new g.X({F:"button",X:["ytp-miniplayer-close-button","ytp-button"],
N:{"aria-label":"Close"},K:[g.aN()]});g.B(this,a);a.o(this.G.element);this.M(a.element,"click",this.Gx);a=new g.X({F:"button",X:["ytp-miniplayer-replay-button","ytp-button"],N:{"aria-label":"Close"},K:[g.nN()]});g.B(this,a);a.o(this.G.element);this.M(a.element,"click",this.lL);this.M(this.player,"presentingplayerstatechange",this.rG);this.M(this.player,"appresize",this.lr);this.M(this.player,"fullscreentoggled",this.lr);this.lr();this.J=!0}0!=this.player.getPlayerState()&&g.X.prototype.show.call(this);
this.C.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.w&&(this.w.dispose(),this.w=void 0);g.X.prototype.hide.call(this);this.player.app.H.o||(this.J&&this.C.hide(),this.player.loadModule("annotations_module"))};
g.h.Y=function(){this.w&&(this.w.dispose(),this.w=void 0);g.X.prototype.Y.call(this)};
g.h.Gx=function(){this.player.stopVideo();this.player.ma("onCloseMiniplayer")};
g.h.lL=function(){this.player.playVideo()};
g.h.lz=function(a){if(a.target==this.A.element||a.target==this.B.element)g.S(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.wF(g.WK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ma("onExpandMiniplayer")};
g.h.qG=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.app.H.o)};
g.h.pG=function(){g.YO(this.C);this.H.w();this.w&&this.w.start()};
g.h.rG=function(a){g.V(a.state,32)&&this.D.hide()};
g.h.lr=function(){var a=this.C,b=g.XK(this.player).getPlayerSize().width;a.Aa=0;a.C=b;a.G=!1;g.$O(a)};
g.h.uN=function(a){this.player.app.H.o&&(0==a?this.hide():this.show())};
g.h.Va=function(){return this.D};
g.h.Ub=function(){return!1};
g.h.Od=function(){return!1};
g.h.ti=function(){return!1};
g.h.Os=function(){};
g.h.Wg=function(){};
g.h.yj=function(){};
g.h.mk=function(){return null};
g.h.kr=function(){return new g.hh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Mi=function(a,b,c,d,e){var f=0,k=d=0,l=g.Eh(a);if(b){c=g.bn(b,"ytp-prev-button")||g.bn(b,"ytp-next-button");var m=g.bn(b,"ytp-play-button"),n=g.bn(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Bh(b,this.element),k=b.x,f=b.y-12):n&&(k=g.bn(b,"ytp-miniplayer-button-top-left"),f=g.Bh(b,this.element),b=g.Eh(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.XK(this.player).getPlayerSize().width;e=f+(e||0);l=g.kd(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.mr=function(){};
g.h.vf=function(){};g.r(S5,g.EQ);S5.prototype.create=function(){};
S5.prototype.Ze=function(){return!1};
S5.prototype.load=function(){this.player.hideControls();this.o.show()};
S5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.UQ.miniplayer=S5;})(_yt_player);
