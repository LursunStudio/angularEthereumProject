import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';
import { HttpClientService } from '../../httpclient.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loginform: FormGroup;
  constructor(
    public accountService: AccountService,
    private httpClientService: HttpClientService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      accountID: new FormControl(''),
      password: new FormControl(''),
    });
  }
  loginCheck() {
    return this.accountService.LoginCheck();
  }
  logout() {
    this.accountService.logout();
  }
  onSubmit(loginform) {
    this.accountService.Login(loginform.value);
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
}
