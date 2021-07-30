import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ticket-generator-cp',
  templateUrl: './ticket-generator-cp.component.html',
  styleUrls: ['./ticket-generator-cp.component.scss']
})
export class TicketGeneratorCpComponent implements OnInit {
  content = '';
  amount = 0;
  comission = 1.00;

  constructor(private titleService: Title) {
    this.titleService.setTitle("CELLPOWER | Agentes ADREP");
  }

  public parseAmount(event: string): void {
    this.content = event.trim();
    var words = this.content.split(/\s+/);
    this.amount = parseFloat(words[words.length-1].replace(/,/g, ''));
  }

  ngOnInit(): void {
  }

}
