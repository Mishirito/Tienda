"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1384],{1384:(C,d,t)=>{t.r(d),t.d(d,{ForgotPasswordPageModule:()=>G});var u=t(1368),i=t(4716),m=t(2112),c=t(4196),g=t(1528),o=t(4496),f=t(9208),v=t(7284),p=t(5088),P=t(9744),y=t(6507);function w(e,s){1&e&&(o.I0R(0,"div"),o.OEk(1,"Email is required"),o.C$Y())}function F(e,s){1&e&&(o.I0R(0,"div"),o.OEk(1,"Insert valid email"),o.C$Y())}function h(e,s){if(1&e&&(o.I0R(0,"div",8),o.yuY(1,w,2,0,"div",9)(2,F,2,0,"div",9),o.C$Y()),2&e){const a=o.GaO();o.yG2(),o.E7m("ngIf",null==a.form.controls.email.errors?null:a.form.controls.email.errors.required),o.yG2(),o.E7m("ngIf",null==a.form.controls.email.errors?null:a.form.controls.email.errors.email)}}const R=[{path:"",component:(()=>{var e;class s{constructor(){this.form=new i.WC({email:new i.Ku("",[i.AQ.required,i.AQ.email])}),this.firebaseSvc=(0,o.uUt)(f.C),this.utilsSvc=(0,o.uUt)(v.e)}ngOnInit(){}submit(){var r=this;return(0,g.c)(function*(){if(r.form.value){const n=yield r.utilsSvc.loading();yield n.present(),r.firebaseSvc.sendRecoveryEmail(r.form.value.email).then(l=>{r.utilsSvc.presentToast({message:"Email sent successfully",duration:1500,color:"primary",position:"middle",icon:"mail-outline"}),r.utilsSvc.routerLink("/auth"),r.form.reset()}).catch(l=>{console.log(l),r.utilsSvc.presentToast({message:l.message,duration:2500,color:"primary",position:"middle",icon:"alert-circle-outline"})}).finally(()=>{n.dismiss()})}})()}}return(e=s).\u0275fac=function(r){return new(r||e)},e.\u0275cmp=o.In1({type:e,selectors:[["app-forgot-password"]],decls:12,vars:4,consts:[["backButton","/auth","title","Recover account"],[1,"d-flex-center"],[1,"auth-form",3,"formGroup","ngSubmit","keypress.enter"],[1,"ion-text-center"],["autocomplete","email","icon","mail-outline","type","email","label","email",3,"control"],["class","validators",4,"ngIf"],["expand","block","mode","ios","type","submit",1,"submit",3,"disabled"],["slot","end","name","arrow-forward"],[1,"validators"],[4,"ngIf"]],template:function(r,n){1&r&&(o.wR5(0,"app-header",0),o.I0R(1,"ion-content")(2,"div",1)(3,"form",2),o.qCj("ngSubmit",function(){return n.submit()})("keypress.enter",function(){return n.submit()}),o.wR5(4,"app-logo"),o.I0R(5,"p",3),o.OEk(6,"We gonna send an email to recover your password"),o.C$Y(),o.wR5(7,"app-custom-input",4),o.yuY(8,h,3,2,"div",5),o.I0R(9,"ion-button",6),o.OEk(10," Recovery "),o.wR5(11,"ion-icon",7),o.C$Y()()()()),2&r&&(o.yG2(3),o.E7m("formGroup",n.form),o.yG2(4),o.E7m("control",n.form.controls.email),o.yG2(),o.E7m("ngIf",n.form.controls.email.errors&&n.form.controls.email.touched),o.yG2(),o.E7m("disabled",n.form.invalid))},dependencies:[u.u_,i.sz,i.u,m.sn,m._i,m.Ko,p.k,P.y,y.w,i.uW]}),s})()}];let I=(()=>{var e;class s{}return(e=s).\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.a4G({type:e}),e.\u0275inj=o.s3X({imports:[c.qQ.forChild(R),c.qQ]}),s})();var E=t(1455);let G=(()=>{var e;class s{}return(e=s).\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.a4G({type:e}),e.\u0275inj=o.s3X({imports:[u.MD,i.y,m.wZ,I,E.k]}),s})()}}]);