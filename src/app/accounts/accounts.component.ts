import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  public accountData:any;
  public filterTerm: string="";
  constructor(public appService: MainService,) { }

  ngOnInit(): void {
    this.getData();
    this.appService.showLoadingScreen = true;
  }
  public async getData(){
    try{
        const accounts = await axios({
            url:'api/accounts',
            method: "GET",
        })
        console.log(accounts)
        this.accountData = accounts.data.map((e:any) => {
          return e;
        });
        this.appService.showLoadingScreen = false;
        } catch{
            console.log("API failed");
        }
      }

}
