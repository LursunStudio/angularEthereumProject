import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ModalService } from '../shared/modal.service';
import { AccountService } from '../shared/account.service';
import { ContractService } from '../shared/contract.service';

@Component({
  selector: 'app-mycontract',
  templateUrl: './mycontract.component.html',
  styleUrls: ['./mycontract.component.css']
})
export class MycontractComponent implements OnInit, AfterViewChecked {
  public contractsAddress = [];
  constructor(private modalService: ModalService, public accountService: AccountService, public contractService: ContractService) { }

  ngOnInit() {
  }
  createContract() {
    this.modalService.createContract.show();
  }
  ngAfterViewChecked() {
    setTimeout(() => {
      this.contractsAddress = this.accountService.contractsAddress;
    }, 0);
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
}
