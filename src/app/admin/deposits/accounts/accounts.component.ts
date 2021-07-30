import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { deposits, PersonAccountsElement } from '../../models/deposits';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  public deposits: PersonAccountsElement[] = deposits;

  displayedColumns: string[] = ['holder', 'number', 'ammount'];
  dataSource: any;
  personAccounts: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      if (params.person == 'familia') {
        this.personAccounts = deposits[0];
      } else if (params.person == 'roberto') {
        this.personAccounts = deposits[1];
      } else if (params.person == 'artur') {
        this.personAccounts = deposits[2];
      } else if (params.person == 'mirian-jenny') {
        this.personAccounts = deposits[3];
      } else if (params.person == 'luis') {
        this.personAccounts = deposits[4];
      } else if (params.person == 'nelson') {
        this.personAccounts = deposits[5];
      }
    });
  }

  ngOnInit(): void {
  }

}
