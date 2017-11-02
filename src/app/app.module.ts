import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';

// global module
import { SharedModule } from './shared/share.module';

// temp
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule, DataTableModule } from 'primeng/primeng';

// modal
import { LoginComponent } from './modal/login/login.component';
import { AlertComponent } from './modal/alert/alert.component';
import { PromptComponent } from './modal/prompt/prompt.component';
import { YesOrNoComponent } from './modal/yes-or-no/yes-or-no.component';
import { SignupComponent } from './modal/signup/signup.component';
import { CreateContractComponent } from './modal/create-contract/create-contract.component';

// pages
import { MainComponent } from './main/main.component';
import { MycontractComponent } from './mycontract/mycontract.component';
import { ProfileComponent } from './profile/profile.component';
import { JoinContractComponent } from './modal/join-contract/join-contract.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { SettleOrRecordComponent } from './modal/settle-or-record/settle-or-record.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MycontractComponent,
    SignupComponent,
    ProfileComponent,
    CreateContractComponent,
    JoinContractComponent,
    LoginComponent,
    AlertComponent,
    PromptComponent,
    YesOrNoComponent,
    ExplorerComponent,
    SettleOrRecordComponent,
  ],
  imports: [
    // perimeng
    CalendarModule,
    DataTableModule,
    // angular
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    ModalModule.forRoot(),
    // route
    RouterModule.forRoot(AppRoutes),
    // shareModule
    LayoutModule,
    SharedModule.forRoot()
  ],
  providers: [
    CalendarModule,
    DataTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
