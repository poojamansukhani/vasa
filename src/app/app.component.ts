import { Component } from '@angular/core';
import { MainService } from './shared/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acc-imp';
  public navNew:any;
  constructor(private appService: MainService,){}
  ngOnInit(){
    this.appService.toggleSidebar.subscribe((navData)=>{
      this.navNew = navData;
    })
  }
  
}
