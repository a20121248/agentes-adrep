import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ticket-luz-del-sur-cell-power',
  templateUrl: './ticket-luz-del-sur-cell-power.component.html',
  styleUrls: ['./ticket-luz-del-sur-cell-power.component.scss']
})
export class TicketLuzDelSurCellPowerComponent implements OnInit {
  content = '';
  supply = '303341';
  operation = '1077621';
  authorization = '16932532'
  name = 'JAVIER MONZON';
  payment_type = 'Pago a cuenta';
  amount = 97.70;
  comission = 1.00;
  myDate = new Date();

  constructor(private titleService: Title) {
    this.titleService.setTitle("LUZ DEL SUR | Librería Bazar LORENA");
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
<html><head><title>Ticket</title><style>
.ticket {
  line-height: 1;
  max-width: 180px;
  width: 180px;
  font-family: Arial, Helvetica, sans-serif;
}
.ticket .ticket-top {
  text-align: center;
}
.ticket .ticket-top img {
  height: 50px;
  margin-bottom: 9px;
}
.ticket .ticket-section {
  margin: 11px 0 7px 0;
}
.ticket table.voucher {
  font-size: 9px;
  word-break: break-all;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
.ticket table.voucher th.item, .ticket table.voucher td.item {
  width: 75px;
  font-weight: 600;
}
.ticket table.voucher th.sep, .ticket table.voucher td.sep {
  width: 5px;
  font-weight: 600;
}
.ticket table.voucher th.value, .ticket table.voucher td.value {
  width: 100px;
}
.ticket .msg-1 {
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3px;
}
.ticket .msg-2 {
  font-size: 9px;
  text-align: center;
  line-height: 1;
  margin-bottom: 2px;
}
.ticket .msg-3 {
  margin: 10px 0 4px 0;
  font-size: 9px;
  font-weight: 600;
  text-align: center;
}
.ticket .msg-4 {
  font-size: 9px;
  text-align: justify;
}
</style></head><body onload="window.print();window.close()"><div class="ticket">${printContents}</div></body></html>`
    );
    popupWin.document.close();
  }

  ngOnInit(): void {
  }
}
