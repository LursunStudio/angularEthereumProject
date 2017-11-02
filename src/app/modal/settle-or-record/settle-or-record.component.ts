import { Component, OnInit } from '@angular/core';
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
  constructor(private modalService: ModalService, private httpClientService: HttpClientService,
    private accountService: AccountService, private contractService: ContractService) { }

  ngOnInit() {
    this.data = this.modalService.data;
  }
  closeModal() {
    this.modalService.settleOrRecord.hide();
  }
}
