"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9104],{9104:(G,g,t)=>{t.r(g),t.d(g,{MainPageModule:()=>E});var c=t(1368),M=t(4716),l=t(2112),u=t(4196),n=t(4496),h=t(9208),p=t(7284),f=t(5088);function P(o,a){if(1&o&&n.wR5(0,"img",11),2&o){const i=n.GaO();let e;n.E7m("src",null==(e=i.user())?null:e.image,n.K6U)}}function v(o,a){1&o&&n.wR5(0,"ion-icon",12)}const C=o=>({active:o});function y(o,a){if(1&o&&(n.I0R(0,"ion-menu-toggle",7)(1,"ion-item",13),n.wR5(2,"ion-icon",14),n.I0R(3,"ion-label"),n.OEk(4),n.C$Y()()()),2&o){const i=a.$implicit,e=n.GaO();n.yG2(),n.E7m("ngClass",n.S45(4,C,e.currentPath===i.url))("routerLink",i.url),n.yG2(),n.E7m("name",i.icon),n.yG2(2),n.cNF(i.title)}}const O=[{path:"",component:(()=>{var o;class a{constructor(){this.pages=[{title:"Start",url:"home",icon:"home-outline"},{title:"Profile",url:"/main/profile",icon:"person-outline"}],this.router=(0,n.uUt)(u.E5),this.firebaseSvc=(0,n.uUt)(h.C),this.utilSvc=(0,n.uUt)(p.e),this.currentPath=""}ngOnInit(){this.router.events.subscribe(e=>{null!=e&&e.url&&(this.currentPath=e.url)})}user(){return this.utilSvc.getFromLocalStorage("user")}signOut(){this.firebaseSvc.signOut()}}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.In1({type:o,selectors:[["app-main"]],decls:17,vars:4,consts:[["contentId","menu-content","menuId","menu-content","side","start"],["title","Menu"],[1,"ion-text-center"],[3,"src",4,"ngIf"],["class","empty-icon","name","person-circle-outline",4,"ngIf"],["auto-hide","false",4,"ngFor","ngForOf"],[1,"ion-no-border","safe-p-bottom"],["auto-hide","false"],["lines","none",3,"click"],["slot","start","name","log-out-outline"],["id","menu-content","main",""],[3,"src"],["name","person-circle-outline",1,"empty-icon"],["routerDirection","root","detail","",3,"ngClass","routerLink"],["slot","start",3,"name"]],template:function(e,r){if(1&e&&(n.I0R(0,"ion-menu",0)(1,"app-header",1),n.OEk(2,'"Menu"'),n.C$Y(),n.I0R(3,"ion-content",2)(4,"ion-avatar"),n.yuY(5,P,1,1,"img",3)(6,v,1,0,"ion-icon",4),n.C$Y(),n.I0R(7,"h4"),n.OEk(8),n.C$Y(),n.yuY(9,y,5,6,"ion-menu-toggle",5),n.C$Y(),n.I0R(10,"ion-footer",6)(11,"ion-menu-toggle",7)(12,"ion-item",8),n.qCj("click",function(){return r.signOut()}),n.wR5(13,"ion-icon",9),n.I0R(14,"ion-label"),n.OEk(15,"Log out"),n.C$Y()()()()(),n.wR5(16,"ion-router-outlet",10)),2&e){let s,m,d;n.yG2(5),n.E7m("ngIf",null==(s=r.user())?null:s.image),n.yG2(),n.E7m("ngIf",!(null!=(m=r.user())&&m.image)),n.yG2(2),n.cNF(null==(d=r.user())?null:d.name),n.yG2(),n.E7m("ngForOf",r.pages)}},dependencies:[c.QF,c.ay,c.u_,l.O7,l._i,l.eV,l.Ko,l.Yb,l.QR,l.$C,l.WY,l.Cg,l.mY,u.ER,f.k],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-primary);--color: var(--ion-color-primary-contrast);--padding-top: 20px}ion-item[_ngcontent-%COMP%]{font-size:14px;color:var(--ion-color-light);--background: var(--ion-color-primary)}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-light)}ion-item.active[_ngcontent-%COMP%]{color:var(--ion-color-warning)}ion-item.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-warning)}h4[_ngcontent-%COMP%]{margin-top:5px;font-weight:700}ion-avatar[_ngcontent-%COMP%]{width:120px;height:120px;margin:0 auto}.empty-icon[_ngcontent-%COMP%]{font-size:100px}ion-menu[_ngcontent-%COMP%]{--width: 254px;--min-width: 254px;outline:none}ion-footer[_ngcontent-%COMP%]{background:var(--ion-color-primary)}"]}),a})(),children:[{path:"home",loadChildren:()=>Promise.all([t.e(9312),t.e(3124)]).then(t.bind(t,3124)).then(o=>o.HomePageModule)},{path:"profile",loadChildren:()=>t.e(3444).then(t.bind(t,3444)).then(o=>o.ProfilePageModule)}]}];let R=(()=>{var o;class a{}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.a4G({type:o}),o.\u0275inj=n.s3X({imports:[u.qQ.forChild(O),u.qQ]}),a})();var I=t(1455);let E=(()=>{var o;class a{}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.a4G({type:o}),o.\u0275inj=n.s3X({imports:[c.MD,M.y,l.wZ,R,I.k]}),a})()}}]);