import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private accountService: AccountService) { }
  ngOnInit() {
  }
  public loginCheck() {
    return this.accountService.LoginCheck();
  }
}
