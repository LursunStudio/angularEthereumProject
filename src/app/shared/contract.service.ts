import { Injectable } from '@angular/core';
import { EthereumService } from './ethereum.service';
import { HttpClientService } from './httpclient.service';
import { reject } from 'q';
@Injectable()
export class ContractService {
    public contractsAddress = [];
    public contractsList = {};
    constructor(private ethereumService: EthereumService, private httpClientService: HttpClientService) {
        this.getContracts();
    }
    public getContracts() {
        const update = () => {
            this.httpClientService.postJson('/ethereum/getContracts', {}).subscribe(
                (next) => {
                    const data = next.json();
                    this.contractsAddress = data.contractsAddress;
                    this.contractsList = data.contractsList;
                    console.log(data);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    setTimeout.call(this, update, 10000);
                }
            );
        };
        update();
    }
    public getContractTotal(address): Promise<any> {
        // reject???
        return new Promise((resolve) => {
            this.httpClientService.postJson('/ethereum/getContractTotal', {address: address}).subscribe(
                (next) => {
                    const data = next.json();
                    if (data.success) {
                        resolve(data.total);
                    }
                },
                (error) => {
                    reject(error);
                },
            );
        });

    }
}
