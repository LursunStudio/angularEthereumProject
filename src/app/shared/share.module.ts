import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';

// service
import { HttpClientService } from './httpclient.service';
import { AccountService } from './account.service';
import { ContractService } from './contract.service';
import { ModalService } from './modal.service';
import { EthereumService } from './ethereum.service';

@NgModule({
  declarations: [
  ],
  exports: [
    ModalModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
  ],
})
export class SharedModule {
  constructor() { }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        // service
        HttpClientService,
        AccountService,
        ModalService,
        EthereumService,
        ContractService
      ]
    };
  }
}
