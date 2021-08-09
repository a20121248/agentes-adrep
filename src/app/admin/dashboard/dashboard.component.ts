import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Payment } from '../models/payment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  content = "LUZ DEL SUR: 121.21\nSEDAPAL: 19.80\nCELULAR CLARO: 29.90";
  total: number = 0;
  name = 'JAVIER MONZON';
  myDate = new Date();
  payments: Payment[] = [];

  constructor(private titleService: Title) {
    this.titleService.setTitle("Dashboard | Librería Bazar LORENA");
    setInterval(() => {
      this.myDate = new Date();
    }, 1000);
  }

  ngOnInit(): void {
    this.parseClientPayments(this.content);
  }

  public parseClientPaymentsEvent(event: string): void {
    this.content = event.trim();
    this.parseClientPayments(this.content);
  }

  public parseClientPayments(cont: string): void {
    this.payments = [];
    var lines = cont.split('\n');
    for (let index = 0; index < lines.length; index++) {
      let payments_lst = lines[index].split(':');
      if (payments_lst.length == 2) {
        let payment = {
          service: payments_lst[0],
          amount: parseFloat(payments_lst[1])
        };
        this.payments.push(payment)
      }
    }
    this.total = this.payments.reduce((acc, curr) => (acc + curr.amount), 0);
  }
  
  public printClientPayments(): void {
      let printContents, popupWin;
      printContents = document.getElementById('ticket')!.innerHTML;
      popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto')!;
      popupWin.document.open();
      popupWin.document.write(`
<html><head><title>Ticket</title><style>
.ticket {
  line-height: 1.5;
  max-width: 180px;
  width: 180px;
  font-family: Arial, Helvetica, sans-serif;
}
.ticket table.voucher {
  font-size: 10px;
  word-break: break-all;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  border-collapse: collapse;
}
.ticket table.voucher th.item, .ticket table.voucher td.item {
  width: 120px;
  font-weight: 600;
}
.ticket table.voucher th.sep, .ticket table.voucher td.sep {
  width: 5px;
  font-weight: 600;
}
.ticket table.voucher th.value, .ticket table.voucher td.value {
  width: 55px;
}
.ticket table.voucher tfoot {
  border-top: 1px solid black;
}
.ticket .msg-1 {
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  line-height: 1;
  margin-bottom: 2px;
}
.ticket .msg-2 {
  font-size: 9px;
  text-align: center;
  line-height: 1;
  margin-bottom: 2px;
}
.ticket .ticket-section {
  margin-bottom: 10px;
}
</style></head><body onload="window.print();window.close()"><div class="ticket">${printContents}</div></body></html>`
  );
  popupWin.document.close();
}
}
