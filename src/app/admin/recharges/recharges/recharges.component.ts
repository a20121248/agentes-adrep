import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recharges',
  templateUrl: './recharges.component.html',
  styleUrls: ['./recharges.component.scss']
})
export class RechargesComponent implements OnInit {
  myDate: Date = new Date();
  company: string = 'Defecto';
  imgPath: string = 'default.png';
  imgHeight: number = 50;
  content: string = '';
  payment_type: string = '';
  
  constructor(private route: ActivatedRoute) {
    setInterval(() => {
      this.myDate = new Date();
    }, 1000);

    this.route.params.subscribe( params => {
      if (params.company == 'pago-generico') {
        this.company = 'Pago de servicio';
        this.imgPath = 'assets/img/logos/contenido-de-calidad.png';
        this.imgHeight = 60;
        this.payment_type = 'CONSTANCIA DE PAGO';
      } else if (params.company == 'claro') {
        this.company = 'Claro';
        this.imgPath = 'assets/img/moviles/claro.png';
        this.imgHeight = 50;
        this.payment_type = 'RECARGA VIRTUAL';
      } else if (params.company == 'movistar') {
        this.company = 'Movistar';
        this.imgPath = 'assets/img/moviles/movistar.png';
        this.imgHeight = 50;
        this.payment_type = 'RECARGA VIRTUAL';
      } else if (params.company == 'entel') {
        this.company = 'Entel';
        this.imgPath = 'assets/img/moviles/entel-2.png';
        this.imgHeight = 50;
        this.payment_type = 'RECARGA VIRTUAL';
      } else if (params.company == 'bitel') {
        this.company = 'Bitel';
        this.imgPath = 'assets/img/moviles/bitel.png';
        this.imgHeight = 30;
        this.payment_type = 'RECARGA VIRTUAL';
      } else if (params.company == 'directv') {
        this.company = 'DIRECTV';
        this.imgPath = 'assets/img/moviles/directv.png';
        this.imgHeight = 30;
        this.payment_type = 'RECARGA VIRTUAL';
      } else if (params.company == 'flash-mobile') {
        this.company = 'Flash Mobile';
        this.imgPath = 'assets/img/moviles/flash-mobile.png';
        this.imgHeight = 40;
        this.payment_type = 'RECARGA VIRTUAL';
      }
    });
  }

  public parseContent(event: string): void {
    this.content = event.trim();
  }

  public printPage(): void {
    let printContents, popupWin;
    printContents = document.getElementById('ticket')!.innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto')!;
    popupWin.document.open();
    popupWin.document.write(`
<html>
<head>
    <title>Ticket</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }
        .company {
          text-align: center;
          margin-bottom: 9px;
       }
        .company img {
          height: 50px;
       }
        .ticket {
          line-height: 1;
          max-width: 180px;
          width: 180px;
       }
        .voucher {
          font-size: 9px;
          font-family: 'Arial';
       }
        .msg-1 {
          font-size: 10px;
          font-weight: 600;
          text-align: center;
       }
        .msg-2 {
          font-size: 9px;
          text-align: center;
          line-height: 1.7;
       }
        .msg-3 {
          margin: 10px 0 4px 0;
          font-size: 9px;
          font-weight: 600;
          text-align: center;
       }
        .msg-4 {
          font-size: 9px;
          text-align: justify;
       }
        td.voucher, th.voucher, tr.voucher, table.voucher {
          padding: 0 !important;
          word-break: break-all;
          white-space: pre-wrap;
         /* Since CSS 2.1 */
          white-space: -moz-pre-wrap;
         /* Mozilla, since 1999 */
          white-space: -pre-wrap;
         /* Opera 4-6 */
          white-space: -o-pre-wrap;
         /* Opera 7 */
          word-wrap: break-word;
         /* Internet Explorer 5.5+ */
       }
        .ticket-top h1 {
          font-size: 13px;
          line-height: 1;
          font-weight: 600;
          text-align: center;
          margin: 0;
       }
        .ticket-company {
          margin: 6px 0 7px 0;
       }
        .title-2 {
          font-size: 12px;
          font-weight: 600;
          text-align: center;
       }
        .title-3 {
          font-size: 12px;
          text-align: center;
       }
        th.item, td.item {
          width: 75px;
          font-weight: 600;
       }
        th.sep, td.sep {
          width: 5px;
          font-weight: 600;
       }
        th.value, td.value {
          width: 100px;
       }
        .centrado {
          text-align: center;
          align-content: center;
       }
        img {
          max-width: inherit;
          width: inherit;
       }       
    </style>
</head>
<body onload="window.print();window.close()"><div class="ticket">${printContents}</div></body>
</html>`
    );
    popupWin.document.close();
  }

  ngOnInit(): void {
  }
}