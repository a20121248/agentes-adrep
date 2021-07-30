import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ticket-ibk',
  templateUrl: './ticket-ibk.component.html',
  styleUrls: ['./ticket-ibk.component.scss']
})
export class TicketIbkComponent implements OnInit {
    content = '';
    amount = 97.70;
    comission = 1.00;
    myDate = new Date();  

    constructor(private titleService: Title) {
        this.titleService.setTitle("Luz del Sur | Agentes ADREP");
    }

    public parseAmount(event: string): void {
        this.content = event.trim();
        var words = this.content.split(/\s+/);
        this.amount = parseFloat(words[words.length-1].replace(/,/g, ''));
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
            .voucher-content {
                font-size: 9px;
                font-family: 'Arial';
                line-height: 1;
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
            .msg-1 {
                font-size: 12px;
                font-weight: 600;
                text-align: center;
            }
            .msg-2 {
                font-size: 10px;
                text-align: center;
                line-height: 1.5;
            }
            .msg-3 {
                margin-top: 10px;
                font-size: 9px;
                font-weight: 600;
                text-align: center;
            }
            .msg-4 {
                font-size: 9px;
                text-align: justify;
                line-height: 1.3;
            }
            .company {
                text-align: center;
            }
            .company img {
                height: 20px;
            }
            .ticket-company {
                margin: 6px 0 7px 0;
            }
            .ticket {
                width: 180px;
                max-width: 180px;
            }
            .data-card {
                max-width: 400px;
            }
            .data-form {
                min-width: 150px;
                max-width: 500px;
                width: 100%;
            }
            .data-full-width {
                width: 100%;
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
