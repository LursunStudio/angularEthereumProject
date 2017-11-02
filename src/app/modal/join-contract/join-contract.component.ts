import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from '../../shared/modal.service';
import { HttpClientService } from '../../shared/httpclient.service';
import { ContractService } from '../../shared/contract.service';
import { AccountService } from '../../shared/account.service';
@Component({
  selector: 'app-join-contract',
  templateUrl: './join-contract.component.html',
  styleUrls: ['./join-contract.component.css']
})
export class JoinContractComponent implements OnInit {
  public data;
  public joinContractForm: FormGroup;
  public position;
  constructor(private modalService: ModalService, private httpClientService: HttpClientService,
    private accountService: AccountService, private contractService: ContractService) { }

  ngOnInit() {
    this.data = this.modalService.data;
    this.joinContractForm = new FormGroup({
      position: new FormControl(''),
      howEther: new FormControl('')
    });
  }

  changePosition(value) {
    this.position = { Support: '支持金', Oppose: '反對金' }[value];
  }

  closeModal() {
    this.modalService.joinContract.hide();
  }

  onSubmit(joinContractForm) {
    document.getElementById('joinContractBtn').classList.add('disabled');
    joinContractForm.value.address = this.modalService.data.address;
    const password = prompt('please input password');
    joinContractForm.value.howEther = parseFloat(joinContractForm.value.howEther) + '000000000000000000';
    joinContractForm.value.password = password;
    joinContractForm.value.accountID = this.accountService.accountID;
    this.httpClientService.postJson('/ethereum/joinContract', joinContractForm.value).subscribe(
      async (next) => {
        const data = next.json();
        if (data.success) {
          this.accountService.contractsAddress = data.contractsAddress;
        }
        this.closeModal();
        document.getElementById('joinContractBtn').classList.add('disabled');
      },
      error => {
        console.log(error);
        this.closeModal();
        document.getElementById('joinContractBtn').classList.add('disabled');
      },
    );
  }
}
