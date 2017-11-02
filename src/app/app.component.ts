import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { ModalService } from './shared/modal.service';
import { HttpClientService } from './shared/httpclient.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('signupModal') public signupModal;
  @ViewChild('loginModal') public loginModal;
  @ViewChild('createContractModal') public createContractModal;
  @ViewChild('joinContractModal') public joinContractModal;
  @ViewChild('promptModal') public promptModal;
  @ViewChild('yesOrNoModal') public yesOrNoModal;
  @ViewChild('alertModal') public alertModal;
  @ViewChild('errorAlertModal') public errorAlertModal;
  @ViewChild('settleOrRecordModal') public settleOrRecordModal;
  constructor(private modalService: ModalService, public httpClientService: HttpClientService) {

  }
  ngOnInit() {
    this.httpClientService.get('').subscribe(
      next => {
        console.log('%cconnect to web server normal', 'color:#20C0ED');
      },
      error => {
        console.log(`%ccan't not connect to web server`, 'color:#DB4D3F');
      }
    );
    this.httpClientService.postJson('/ethereum/getCoinbase', {}).subscribe(
      next => {
        const data = next.json();
        if (data.success) {
          console.log(`%cconnect to geth server normal`, 'color:#20C0ED');
        } else {
          console.log(`%ccan't not connect to geth server`, 'color:#DB4D3F');
        }
      },
      error => {
        console.log(`%ccan't not connect to server`, 'color:#DB4D3F');
      }
    );
  }
  ngAfterViewInit() {
    this.modalService.setSingupModal(this.signupModal);
    this.modalService.setLoginModal(this.loginModal);
    this.modalService.setCreateContractModal(this.createContractModal);
    this.modalService.setJoinContractModal(this.joinContractModal);
    this.modalService.setPromptModal(this.promptModal);
    this.modalService.setYesOrNoModal(this.yesOrNoModal);
    this.modalService.setAlertModal(this.alertModal);
    this.modalService.setErrorAlertModal(this.errorAlertModal);
    this.modalService.setSettleOrRecord(this.settleOrRecordModal);
  }
}
