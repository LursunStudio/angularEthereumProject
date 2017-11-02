import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClientService } from '../../shared/httpclient.service';
import { AccountService } from '../../shared/account.service';
import { ModalService } from '../../shared/modal.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup;
  checkbool = null;
  constructor(private httpClient: HttpClientService,
    private accountService: AccountService,
    private modalService: ModalService,
    private router: Router) { }

  ngOnInit() {
    this.signupform = new FormGroup({
      name: new FormControl(''),
      accountID: new FormControl(''),
      password: new FormControl(''),
      checkpasswd: new FormControl(''),
    });
  }
  checkEq(signupform, event: Event) {
    if ((<HTMLInputElement>event.target).value.length === 0) {
      (<HTMLInputElement>event.target).classList.remove('text-security-disc');
    } else {
      (<HTMLInputElement>event.target).classList.add('text-security-disc');
    }
    const singupInfo = signupform.value;
    if (singupInfo.password === singupInfo.checkpasswd) {
      this.checkbool = false;
    } else {
      this.checkbool = true;
    }
  }

  onSubmit(signupform) {
    document.getElementById('signupBtn').classList.add('disabled');

    const singupInfo = signupform.value;
    for (const key of Object.keys(singupInfo)) {
      if (singupInfo[key] === '') {
        alert(`${key}尚未填寫`);
        document.getElementById('signupBtn').classList.remove('disabled');
        break;
      }
    }
    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (!emailRule.test(singupInfo.accountID)) {
      alert('並非email');
      document.getElementById('signupBtn').classList.remove('disabled');
      return;
    } else if (singupInfo.password.length < 8) {
      alert('密碼長度不足8');
      document.getElementById('signupBtn').classList.remove('disabled');
      return;
    }
    if (singupInfo.password === singupInfo.checkpasswd) {
      this.httpClient.postJson('/ethereum/newAccount', singupInfo).subscribe(
        (next) => {
          const body: any = next.json();
          if (body.success) {
            alert('成功註冊,請重新登入');
          } else {
            alert('註冊失敗');
          }
          this.closeModal();
        },
        (error) => {
          alert('註冊失敗');
          this.closeModal();
          console.log(error);
        }
      );
    } else {
      alert('password no pass check');
    }
  }
  closeModal() {
    document.getElementById('signupBtn').classList.remove('disabled');
    this.modalService.signup.hide();
  }

}
