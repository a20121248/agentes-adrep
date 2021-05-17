import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ticket-scotia',
  templateUrl: './ticket-scotia.component.html',
  styleUrls: ['./ticket-scotia.component.scss']
})
export class TicketScotiaComponent implements OnInit {
  content = '';
  amount = 0;
  comission = 1.00;

  constructor(private titleService: Title) {
    this.titleService.setTitle("SCOTIA | Agentes ADREP");
  }

  public parseAmount(event: string): void {
    this.content = event.trim();
    var words = this.content.split(/\s+/);
    this.amount = parseFloat(words[words.length-1].replace(/,/g, ''));
  }

  ngOnInit(): void {
  }
}
