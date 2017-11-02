import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/modal.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClientService } from '../../shared/httpclient.service';
import { AccountService } from '../../shared/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(
    private accountService: AccountService,
    private httpClientService: HttpClientService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      accountID: new FormControl(''),
      password: new FormControl('')
    });
  }

  closeModal() {
    this.modalService.login.hide();
  }

  check(event: Event) {
    if ((<HTMLInputElement>event.target).value.length === 0) {
      (<HTMLInputElement>event.target).classList.remove('text-security-disc');
    } else {
      (<HTMLInputElement>event.target).classList.add('text-security-disc');
    }
  }

  signup() {
    this.modalService.signup.show();
  }

  onSubmit(loginform) {
    this.accountService.Login(loginform.value).then(result => {
      if (result) {
        this.modalService.login.hide();
      }
    });
  }
}
