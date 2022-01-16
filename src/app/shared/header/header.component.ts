import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = "Vasa";
  navStatus:boolean = true;
  constructor(
    private appService: MainService,
  ) { }

  ngOnInit(): void {
  }
  onClose(){
    this.navStatus=!this.navStatus;
    this.appService.toggleSidebar.next(this.navStatus);
  }

}
