import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-generator-cp',
  templateUrl: './ticket-generator-cp.component.html',
  styleUrls: ['./ticket-generator-cp.component.scss']
})
export class TicketGeneratorCpComponent implements OnInit {

  content = '';
  supply = '303341';
  operation = '1077621';
  name = 'Javier Monzon';
  amount = 97.70;
  comission = 1.00;
  myDate = new Date();  

  constructor() {
    setInterval(() => {
      this.myDate = new Date();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
