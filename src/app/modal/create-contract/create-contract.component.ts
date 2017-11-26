import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from '../../shared/modal.service';
import { HttpClientService } from '../../shared/httpclient.service';
import { AccountService } from '../../shared/account.service';
@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  public minDate: Date;
  public maxDate: Date;
  public createContractForm: FormGroup;
  constructor(
    private modalService: ModalService,
    private httpClientService: HttpClientService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.minDate.getFullYear() + 10);
    this.createContractForm = new FormGroup({
      targetWeight: new FormControl(''),
      lastWeight: new FormControl(''),
      margin: new FormControl(''),
      expiryDate: new FormControl(''),
      description: new FormControl('')
    });
  }
  onSubmit(createContractForm) {
    document.getElementById('createContractBtn').classList.add('disabled');
    const value: any = {};
    Object.assign(value, createContractForm.value);
    for (const key in createContractForm.value) {
      if (value[key] === undefined || value[key] === '') {
        alert('請填寫完整');
        document.getElementById('createContractBtn').classList.remove('disabled');
        return;
      }
    }
    if (parseFloat(value['targetWeight']) >= parseFloat(value['lastWeight'])) {
      alert('目標體重需比目前體重小');
      document.getElementById('createContractBtn').classList.remove('disabled');
      return;
    }
    // ToDo保證金驗證餘額;
    if (parseFloat(value['margin']) <= 0) {
      alert('保證金需大於0');
      document.getElementById('createContractBtn').classList.remove('disabled');
      return;
    }
    const password = prompt('please input password');
    value.password = password;
    value.expiryDate = (<Date>value.expiryDate).getTime();
    value.address = this.accountService.address;
    value.accountID = this.accountService.accountID;
    this.httpClientService.postJson('/ethereum/createContract', value).subscribe(
      (next) => {
        const data = next.json();
        if (data) {
          this.accountService.contractsAddress.push(...data.contractsAddress);
        } else {
          alert('建立失敗');
        }
        this.closeModal();
      },
      (error) => {
        console.log(error);
        document.getElementById('createContractBtn').classList.remove('disabled');
      }
    );
  }
  closeModal() {
    document.getElementById('createContractBtn').classList.remove('disabled');
    this.modalService.createContract.hide();
  }
  positiveCheck(event) {
    if ((<string>event.target.value).match(/^(-|\.)/)) {
      event.target.value = '';
    }
    if ((<string>event.target.value) === '') {
      event.target.value = '';
    }
  }
}
