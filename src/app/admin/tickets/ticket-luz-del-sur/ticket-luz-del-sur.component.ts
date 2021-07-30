import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ticket-luz-del-sur',
  templateUrl: './ticket-luz-del-sur.component.html',
  styleUrls: ['./ticket-luz-del-sur.component.scss']
})
export class TicketLuzDelSurComponent implements OnInit {
  content = '';
  supply = '303341';
  operation = '1077621';
  authorization = '16932532'
  name = 'Javier Monzon';
  payment_type = 'Pago a cuenta';
  amount = 97.70;
  comission = 1.00;
  myDate = new Date();  

  constructor(private titleService: Title) {
    this.titleService.setTitle("LUZ DEL SUR | Agentes ADREP");
    setInterval(() => {
      this.myDate = new Date();
    }, 1000);
  }

  public parseAmount(event: string): void {
    this.content = event.trim();
    var suministro_str = new String(this.content); 
    var index = suministro_str.indexOf("SUMINISTRO:"); 
    var resto = this.content.substring(index);
    var lines = resto.split(/\r?\n/);
    // SUMINISTRO:                    1307726
    this.supply = lines[0].split(':')[1].trim();
    this.name = lines[1].split(':')[1].trim();
    this.operation = lines[2].split(':')[1].trim();
    this.authorization = lines[3].split(':')[1].trim();
    this.payment_type = lines[4].split(':')[1].trim();
    this.amount = parseFloat(lines[5].split('S/ ')[1].replace(/,/g, ''));
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
