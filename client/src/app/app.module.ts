import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/user/home/home.component';
import { NewFundriserComponent } from './components/user/new-fundriser/new-fundriser.component';
import { UpdateFundriserComponent } from './components/user/update-fundriser/update-fundriser.component';
import { MyFundrisersComponent } from './components/user/my-fundrisers/my-fundrisers.component';
import { FundriserDetailsComponent } from './components/fundriser-details/fundriser-details.component';
import { AllUsersComponent } from './components/admin/all-users/all-users.component';
import { AllDonationsComponent } from './components/admin/all-donations/all-donations.component';
import { AllFundrisersComponent } from './components/admin/all-fundrisers/all-fundrisers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    LandingComponent,
    HomeComponent,
    NewFundriserComponent,
    UpdateFundriserComponent,
    MyFundrisersComponent,
    FundriserDetailsComponent,
    AllUsersComponent,
    AllDonationsComponent,
    AllFundrisersComponent,
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
