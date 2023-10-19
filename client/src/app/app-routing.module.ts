import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/user/home/home.component';
import { NewFundriserComponent } from './components/user/new-fundriser/new-fundriser.component';
import { MyFundrisersComponent } from './components/user/my-fundrisers/my-fundrisers.component';
import { FundriserDetailsComponent } from './components/fundriser-details/fundriser-details.component';
import { UpdateFundriserComponent } from './components/user/update-fundriser/update-fundriser.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AllUsersComponent } from './components/admin/all-users/all-users.component';
import { AllFundrisersComponent } from './components/admin/all-fundrisers/all-fundrisers.component';
import { AllDonationsComponent } from './components/admin/all-donations/all-donations.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'authenticate', component: AuthenticateComponent},

  {path: '', component: HomeComponent},
  {path: 'new-fundriser', component: NewFundriserComponent},
  {path: 'my-fundrisers', component: MyFundrisersComponent},
  {path: 'fundriser/:id', component: FundriserDetailsComponent},
  {path: 'update-fundriser/:id', component: UpdateFundriserComponent},

  {path: 'admin', component: AdminComponent},
  {path: 'all-users', component: AllUsersComponent},
  {path: 'fundrisers', component: AllFundrisersComponent},
  {path: 'donations', component: AllDonationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
