import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  exports:[
    AccountsComponent,
    
  ]
})
export class AccountsModule { }
