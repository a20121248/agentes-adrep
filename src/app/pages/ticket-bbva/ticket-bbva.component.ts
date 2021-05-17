import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ticket-bbva',
  templateUrl: './ticket-bbva.component.html',
  styleUrls: ['./ticket-bbva.component.scss']
})
export class TicketBbvaComponent implements OnInit {

  constructor(private titleService: Title) {
  	this.titleService.setTitle("BBVA | Agentes ADREP");
  }

  ngOnInit(): void {
  }

}
