import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/helpers/auth.guards';

const routes: Routes = [
  //{ path: '**', redirectTo: '' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account-list',component: AccountsComponent },
  { 
    path: "accounts",
    loadChildren: () => import("./accounts/accounts.module").then((m)=> m.AccountsModule),
  },
  { path: '', pathMatch: 'full', component: AccountsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
