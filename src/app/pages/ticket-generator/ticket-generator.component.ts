import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ticket-generator',
  templateUrl: './ticket-generator.component.html',
  styleUrls: ['./ticket-generator.component.scss']
})
export class TicketGeneratorComponent implements OnInit {

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
