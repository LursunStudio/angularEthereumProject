import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClientService } from '../shared/httpclient.service';
import { AccountService } from '../shared/account.service';
import { ContractService } from '../shared/contract.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalService } from '../shared/modal.service';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewChecked {
  private getContractLoop = true;
  public accountID;
  constructor(public httpClient: HttpClientService, public modalService: ModalService,
    public accountService: AccountService, public contractService: ContractService) { }
  ngOnInit() {

  }
  ngAfterViewChecked() {

  }
  check(value) {
    return value;
  }
  async join(address) {
    if (this.contractService.contractsList[address].accountID !== this.accountService.accountID) {
      if (this.accountService.LoginCheck()) {
        this.modalService.data.accountID = this.contractService.contractsList[address].accountID;
        this.modalService.data.targetWeight = this.contractService.contractsList[address].targetWeight;
        this.modalService.data.lastWeight = this.contractService.contractsList[address].lastWeight;
        this.modalService.data.margin = parseFloat(this.contractService.contractsList[address].margin) / 1000000000000000000;
        const date = new Date(this.contractService.contractsList[address].expiryDate);
        this.modalService.data.expiryDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        this.modalService.data.description = this.contractService.contractsList[address].description;
        this.modalService.data.address = address;
        this.modalService.data.total = parseFloat(await this.contractService.getContractTotal(address)) / 1000000000000000000 || 'N/A';
        this.modalService.joinContract.show();
      } else {
        this.modalService.login.show();
      }
    }
  }
  ngOnDestroy() {
    this.getContractLoop = false;
  }
  async settleOrRecord(address) {
    if (this.contractService.contractsList[address].accountID === this.accountService.accountID) {
      if (this.accountService.LoginCheck()) {
        this.modalService.data.accountID = this.contractService.contractsList[address].accountID;
        this.modalService.data.targetWeight = this.contractService.contractsList[address].targetWeight;
        this.modalService.data.lastWeight = this.contractService.contractsList[address].lastWeight;
        this.modalService.data.margin = parseFloat(this.contractService.contractsList[address].margin) / 1000000000000000000;
        const date = new Date(this.contractService.contractsList[address].expiryDate);
        this.modalService.data.expiryDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        this.modalService.data.description = this.contractService.contractsList[address].description;
        this.modalService.data.address = address;
        this.modalService.data.total = parseFloat(await this.contractService.getContractTotal(address)) / 1000000000000000000 || 'N/A';
        this.modalService.settleOrRecord.show();
      } else {
        this.modalService.login.show();
      }
    }
  }
}
