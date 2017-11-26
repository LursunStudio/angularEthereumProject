import { Injectable } from '@angular/core';
import { EthereumService } from './ethereum.service';
import { HttpClientService } from './httpclient.service';
@Injectable()
export class AccountService {
    public name;
    public accountID;
    public address;
    public contractsAddress: Array<string> = [];
    public balance;
    constructor(private ethereumService: EthereumService, private httpClientService: HttpClientService) {
        if (localStorage.getItem('account') === null) {
            localStorage.setItem('account', '{}');
        }
        if (this.LoginCheck()) {
            this.getBalance();
        }
    }
    public Login(loginData) {
        return new Promise((resolve, reject) => {
            this.httpClientService.postJson('/ethereum/login', loginData).subscribe(
                (next) => {
                    const data = next.json();
                    console.log(data);
                    if (data.success) {
                        delete data.success;
                        this.save(data);
                        this.getBalance();
                        resolve(true);
                    } else {
                        alert('登入失敗');
                        resolve(false);
                    }
                },
                (error) => {
                    console.log('error', error);
                    resolve(false);
                }
            );
        });
    }
    public LoginCheck() {
        const account = JSON.parse(localStorage.getItem('account'));
        if (account.contractsAddress && account.contractsAddress.length < this.contractsAddress.length) {
            account.contractsAddress = this.contractsAddress;
            this.save(account);
        }
        this.name = account.name;
        this.accountID = account.accountID;
        this.address = account.address;
        this.contractsAddress = account.contractsAddress;
        return !(account.address === undefined);
    }
    private save(info) {
        this.name = info.name;
        this.accountID = info.accountID;
        this.address = info.address;
        this.contractsAddress = info.contractsAddress;
        localStorage.setItem('account', JSON.stringify(info));
    }
    public logout() {
        localStorage.setItem('account', '{}');
    }
    public getBalance() {
        this.ethereumService.getBalance(this.address).subscribe(
            (next) => {
                const data = next.json();
                if (data.success) {
                    this.balance = parseFloat(data.message) / 1000000000000000000;
                }
            }
        );
    }
    public getContracts() {
        const data = [];
        for (const address of this.contractsAddress) {
            data.splice(0, 0, this.ethereumService.contractsList[address]);
        }
        return data;
    }
}
