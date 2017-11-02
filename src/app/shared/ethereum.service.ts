import { Injectable } from '@angular/core';
import { HttpClientService } from './httpclient.service';
@Injectable()
export class EthereumService {
    public contractsAddress: Array<string>;
    public contractsList: Array<any>;
    constructor(private httpClientService: HttpClientService) {
    }
    public getBalance(account) {
        return this.httpClientService.postJson('/ethereum/getBalance', { account: account });
    }
    public getContracts(account) {
        this.httpClientService.post('/ethereum/getContracts', {}).subscribe(
            next => {
                const data = next.json();
                this.contractsAddress = data.contractsAddress;
                this.contractsList = data.contractsList;
            },
            error => {
                console.log(error);
            },
        );
    }
}
