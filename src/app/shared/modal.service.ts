import { Injectable } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Injectable()
export class ModalService {
    public login: ModalDirective;
    public signup: ModalDirective;
    public createContract: ModalDirective;
    public joinContract: ModalDirective;
    public prompt: ModalDirective;
    public yesOrNo: ModalDirective;
    public alert: ModalDirective;
    public errorAlert: ModalDirective;
    public settleOrRecord: ModalDirective;
    public data: any = {};

    constructor() {
    }
    public setLoginModal(modal: ModalDirective) {
        this.login = modal;
    }
    public setSingupModal(signup: ModalDirective) {
        this.signup = signup;
    }
    public setCreateContractModal(createContract: ModalDirective) {
        this.createContract = createContract;
    }
    public setPromptModal(prompt: ModalDirective) {
        this.prompt = prompt;
    }
    public setYesOrNoModal(yesOrNo: ModalDirective) {
        this.yesOrNo = yesOrNo;
    }
    public setAlertModal(alert: ModalDirective) {
        this.alert = alert;
    }
    public setErrorAlertModal(errorAlert: ModalDirective) {
        this.errorAlert = errorAlert;
    }
    public setJoinContractModal(joinContract: ModalDirective) {
        this.joinContract = joinContract;
    }
    public setSettleOrRecord(settleOrRecord: ModalDirective) {
        this.settleOrRecord = settleOrRecord;
    }
}
