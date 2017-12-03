import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from '../../shared/modal.service';
import { HttpClientService } from '../../shared/httpclient.service';
import { ContractService } from '../../shared/contract.service';
import { AccountService } from '../../shared/account.service';
@Component({
  selector: 'app-settle-or-record',
  templateUrl: './settle-or-record.component.html',
  styleUrls: ['./settle-or-record.component.css']
})
export class SettleOrRecordComponent implements OnInit {
  public data: any;
  public weight = '';
  public settleOrRecordForm: FormGroup;
  constructor(private modalService: ModalService, private httpClientService: HttpClientService,
    private accountService: AccountService, private contractService: ContractService) { }

  ngOnInit() {
    this.data = this.modalService.data;
    this.settleOrRecordForm = new FormGroup({
      recordWeight: new FormControl(''),
    });
  }
  closeModal() {
    this.modalService.settleOrRecord.hide();
  }

  onSubmit(form) {
    const password = prompt('please input password');
    form.value.password = password;
    form.value.accountID = this.accountService.accountID;
    form.value.contractAddress = this.modalService.data.address;
    if (this.weight) {
      this.httpClientService.postJson('/ethereum/recordWeight', form.value).subscribe(
        async (next) => {
          const data = next.json();
          if (data.success) {
            this.accountService.contractsAddress = data.contractsAddress;
          }
        },
        (error) => {
          console.log(error);
        }, () => {
          this.closeModal();
          this.accountService.getBalance();
          document.getElementById('settleOrRecordBtn').classList.remove('disabled');
        }
      );
    } else {
      this.httpClientService.postJson('/ethereum/settle', form.value).subscribe(
        async (next) => {
          const data = next.json();
          if (data.success) {}
        },
        (error) => {
          console.log(error);
        }, () => {
          this.closeModal();
          document.getElementById('settleOrRecordBtn').classList.remove('disabled');
          this.accountService.getBalance();
        }
      );
    }
  }
}
