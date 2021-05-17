import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ticket-bcp',
  templateUrl: './ticket-bcp.component.html',
  styleUrls: ['./ticket-bcp.component.scss']
})
export class TicketBcpComponent implements OnInit {
  content = '';
  amount = 0;
  comission = 1.00;

  constructor(private titleService: Title) {
    this.titleService.setTitle("BCP | Agentes ADREP");
  }

  public parseAmount(event: string): void {
    this.content = event.trim();
    var words = this.content.split(/\s+/);
    this.amount = parseFloat(words[words.length-1].replace(/,/g, ''));
  }

  ngOnInit(): void {
  }
}
