(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"ala+":function(t,e,n){"use strict";n.r(e),n.d(e,"routes",function(){return u}),n.d(e,"RechargesModule",function(){return x});var i=n("ofXK"),c=n("tyNb"),o=n("YUcS"),a=n("3Pt+"),s=n("NFeN"),r=n("qFsG"),g=n("bTqV"),p=n("+0xr"),m=n("Wp6s"),h=n("kmnG"),b=n("fXoL"),l=n("XiUz"),d=n("ihCf");const C=function(){return{standalone:!0}},u=[{path:":company",component:(()=>{class t{constructor(t){this.route=t,this.myDate=new Date,this.company="Defecto",this.imgPath="default.png",this.imgHeight=50,this.content="",this.payment_type="",setInterval(()=>{this.myDate=new Date},1e3),this.route.params.subscribe(t=>{"pago-generico"==t.company?(this.company="Pago de servicio",this.imgPath="assets/img/logos/contenido-de-calidad.png",this.imgHeight=60,this.payment_type="CONSTANCIA DE PAGO"):"claro"==t.company?(this.company="Claro",this.imgPath="assets/img/moviles/claro.png",this.imgHeight=50,this.payment_type="RECARGA VIRTUAL"):"movistar"==t.company?(this.company="Movistar",this.imgPath="assets/img/moviles/movistar.png",this.imgHeight=50,this.payment_type="RECARGA VIRTUAL"):"entel"==t.company?(this.company="Entel",this.imgPath="assets/img/moviles/entel-2.png",this.imgHeight=50,this.payment_type="RECARGA VIRTUAL"):"bitel"==t.company?(this.company="Bitel",this.imgPath="assets/img/moviles/bitel.png",this.imgHeight=30,this.payment_type="RECARGA VIRTUAL"):"directv"==t.company?(this.company="DIRECTV",this.imgPath="assets/img/moviles/directv.png",this.imgHeight=30,this.payment_type="RECARGA VIRTUAL"):"flash-mobile"==t.company&&(this.company="Flash Mobile",this.imgPath="assets/img/moviles/flash-mobile.png",this.imgHeight=40,this.payment_type="RECARGA VIRTUAL")})}parseContent(t){this.content=t.trim()}printPage(){let t,e;t=document.getElementById("ticket").innerHTML,e=window.open("","_blank","top=0,left=0,height=100%,width=auto"),e.document.open(),e.document.write(`\n<html><head><title>Ticket</title><style>\n.ticket {\n  line-height: 1;\n  max-width: 180px;\n  width: 180px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.ticket pre {\n  font-size: 9px;\n}\n.ticket .ticket-top {\n  text-align: center;\n}\n.ticket .ticket-top img {\n  height: 50px;\n  margin-bottom: 9px;\n}\n.ticket .ticket-section {\n  margin: 11px 0 7px 0;\n}\n.ticket table.voucher {\n  font-size: 9px;\n  word-break: break-all;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\n.ticket table.voucher th.item, .ticket table.voucher td.item {\n  width: 75px;\n  font-weight: 600;\n}\n.ticket table.voucher th.sep, .ticket table.voucher td.sep {\n  width: 5px;\n  font-weight: 600;\n}\n.ticket table.voucher th.value, .ticket table.voucher td.value {\n  width: 100px;\n}\n.ticket .msg-1 {\n  font-size: 10px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 3px;\n}\n.ticket .msg-2 {\n  font-size: 9px;\n  text-align: center;\n  line-height: 1;\n  margin-bottom: 2px;\n}\n.ticket .msg-3 {\n  margin: 10px 0 4px 0;\n  font-size: 9px;\n  font-weight: 600;\n  text-align: center;\n}\n.ticket .msg-4 {\n  font-size: 9px;\n  text-align: justify;\n}     \n</style></head><body onload="window.print();window.close()"><div class="ticket">${t}</div></body></html>`),e.document.close()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(b.Nb(c.a))},t.\u0275cmp=b.Hb({type:t,selectors:[["app-recharges"]],decls:55,vars:17,consts:[["fxLayout","row","fxLayout.xs","column","fxLayoutGap","16px"],["fxFlex","60","fxLayoutAlign","center center",1,"ticket-data"],["fxFlex","400px","fxFlex.xs","100"],["fxLayout","column"],["appearance","outline"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","21","cdkAutosizeMaxRows","21","placeholder","Copie y pegue el contenido del correo.",3,"ngModelOptions","ngModel","ngModelChange"],["mat-raised-button","","color","primary","mat-button","",3,"click"],["fxLayoutAlign","center"],[1,"ticket-print"],["id","ticket",1,"ticket"],[1,"ticket-top"],["alt","",3,"src"],[1,"msg-1"],[1,"msg-2"],[1,"ticket-section"],[1,"msg-3"],[1,"msg-4"]],template:function(t,e){1&t&&(b.Tb(0,"div",0),b.Tb(1,"div",1),b.Tb(2,"mat-card",2),b.Tb(3,"mat-card-header"),b.Tb(4,"mat-card-title"),b.Ac(5),b.Sb(),b.Tb(6,"mat-card-subtitle"),b.Ac(7,"Introduce los datos para generar un voucher de pago"),b.Sb(),b.Sb(),b.Tb(8,"mat-card-content",3),b.Tb(9,"mat-form-field",4),b.Tb(10,"mat-label"),b.Ac(11,"Contenido"),b.Sb(),b.Tb(12,"textarea",5),b.bc("ngModelChange",function(t){return e.parseContent(t)}),b.Sb(),b.Sb(),b.Sb(),b.Tb(13,"mat-card-actions"),b.Tb(14,"button",6),b.bc("click",function(){return e.printPage()}),b.Ac(15,"IMPRIMIR"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(16,"div",7),b.Tb(17,"div",8),b.Tb(18,"h3"),b.Ac(19,"Vista preliminar"),b.Sb(),b.Tb(20,"div",9),b.Tb(21,"div",10),b.Ob(22,"img",11),b.Tb(23,"div",12),b.Ac(24,"Transacci\xf3n exitosa"),b.Sb(),b.Tb(25,"div",13),b.Ac(26),b.gc(27,"date"),b.Sb(),b.Sb(),b.Tb(28,"div",14),b.Tb(29,"div",12),b.Ac(30,"LIBRER\xcdA BAZAR LORENA"),b.Sb(),b.Tb(31,"div",13),b.Ac(32,"Calle Maximiliano Carranza 1177"),b.Sb(),b.Tb(33,"div",13),b.Ac(34,"San Juan de Miraflores, Lima"),b.Sb(),b.Sb(),b.Tb(35,"div",14),b.Tb(36,"div",12),b.Ac(37),b.Sb(),b.Tb(38,"div",13),b.Ac(39),b.gc(40,"uppercase"),b.Sb(),b.Sb(),b.Tb(41,"pre"),b.Ac(42),b.Sb(),b.Tb(43,"div",14),b.Tb(44,"div",15),b.Ac(45,"PAGO DE RECIBO SUJETO A COMISI\xd3N"),b.Sb(),b.Tb(46,"div",16),b.Ac(47,"Antes de retirarse de la ventanilla revise sus datos y verifique su vuelto. Conserve su Constancia de Pago, acredita la transacci\xf3n realizada."),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Ob(48,"br"),b.Ob(49,"br"),b.Ob(50,"br"),b.Ob(51,"br"),b.Ob(52,"br"),b.Ob(53,"br"),b.Ob(54,"br")),2&t&&(b.Cb(5),b.Bc(e.company),b.Cb(7),b.lc("ngModelOptions",b.nc(16,C))("ngModel",e.content),b.Cb(10),b.vc("height: ",e.imgHeight,"px"),b.lc("src",e.imgPath,b.tc),b.Cb(4),b.Bc(b.ic(27,11,e.myDate,"dd/MM/yyyy hh:mm:ss")),b.Cb(11),b.Bc(e.payment_type),b.Cb(2),b.Bc(b.hc(40,14,e.company)),b.Cb(3),b.Bc(e.content))},directives:[l.c,l.d,l.a,l.b,m.a,m.d,m.g,m.f,m.c,h.b,h.e,r.b,d.b,a.b,a.h,a.j,m.b,g.a],pipes:[i.d,i.t],styles:[".ticket[_ngcontent-%COMP%]{line-height:1;max-width:180px;width:180px;font-family:Arial,Helvetica,sans-serif}.ticket[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-size:9px}.ticket[_ngcontent-%COMP%]   .ticket-top[_ngcontent-%COMP%]{text-align:center}.ticket[_ngcontent-%COMP%]   .ticket-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;margin-bottom:9px}.ticket[_ngcontent-%COMP%]   .ticket-section[_ngcontent-%COMP%]{margin:11px 0 7px}.ticket[_ngcontent-%COMP%]   table.voucher[_ngcontent-%COMP%]{font-size:9px;word-break:break-all;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}.ticket[_ngcontent-%COMP%]   table.voucher[_ngcontent-%COMP%]   td.item[_ngcontent-%COMP%], .ticket[_ngcontent-%COMP%]   table.voucher[_ngcontent-%COMP%]   th.item[_ngcontent-%COMP%]{width:75px;font-weight:600}.ticket[_ngcontent-%COMP%]   table.voucher[_ngcontent-%COMP%]   td.sep[_ngcontent-%COMP%], .ticket[_ngcontent-%COMP%]   table.voucher[_ngcontent-%COMP%]   th.sep[_ngcontent-%COMP%]{width:5px;font-weight:600}.ticket[_ngcontent-%COMP%]   table.voucher[_ngcontent-%COMP%]   td.value[_ngcontent-%COMP%], .ticket[_ngcontent-%COMP%]   table.voucher[_ngcontent-%COMP%]   th.value[_ngcontent-%COMP%]{width:100px}.ticket[_ngcontent-%COMP%]   .msg-1[_ngcontent-%COMP%]{font-size:10px;font-weight:600;text-align:center;margin-bottom:3px}.ticket[_ngcontent-%COMP%]   .msg-2[_ngcontent-%COMP%]{line-height:1;margin-bottom:2px}.ticket[_ngcontent-%COMP%]   .msg-2[_ngcontent-%COMP%], .ticket[_ngcontent-%COMP%]   .msg-3[_ngcontent-%COMP%]{font-size:9px;text-align:center}.ticket[_ngcontent-%COMP%]   .msg-3[_ngcontent-%COMP%]{margin:10px 0 4px;font-weight:600}.ticket[_ngcontent-%COMP%]   .msg-4[_ngcontent-%COMP%]{font-size:9px;text-align:justify}.ticket-data[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .ticket-data[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{font-size:12px;font-family:Arial}.ticket-data[_ngcontent-%COMP%]   .amounts[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:30%}.ticket-data[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{margin-bottom:0}.ticket-data[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{text-align:center;margin-bottom:.5rem}.ticket-print[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font-weight:600;margin-top:.8rem}.ticket-print[_ngcontent-%COMP%]   .ticket[_ngcontent-%COMP%]{border:1px dashed #000}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({imports:[[i.b,o.a,s.b,r.c,g.b,m.e,h.d,p.k,a.l,a.d,c.f.forChild(u)]]}),t})()}}]);