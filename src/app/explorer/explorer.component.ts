import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientService } from '../shared/httpclient.service';
import { environment } from '../../environments/environment';
declare var Stomp: any;
@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  // status
  public peerCount = 0;
  public latestBlock = 0;
  public txCount = 0;
  public chaincodeCount = 0;
  // block list
  public blockList: Array<any> = [];

  // blockInfo
  public blockInfo: any = { transactions: [] };
  public txInfo: any = { transactions: [] };

  // blockInfo
  public peerList: Array<any> = [];
  public chaincodeList: Array<any> = [];

  // modal
  @ViewChild('rawDataModal') public rawDataModal;
  public rawDateJson: any;

  // other
  public path: string;
  public stomp: any;

  constructor(private httpClientService: HttpClientService) {
  }
  getStatus = (next) => {
    const data = JSON.parse(next.body);
    this.chaincodeCount = data.chaincodeCount;
    this.latestBlock = data.latestBlock;
    this.txCount = data.txCount;
    this.peerCount = data.peerCount;
    for (let i = data.latestBlock; data.latestBlock < this.blockList.length - 1; i++) {
      this.httpClientService.postJson('/fabric/block/get', { number: this.latestBlock }).subscribe(
        (block) => {
          this.blockList = [block.json(), ...this.blockList];
        },
        err => {
          console.log('err', err);
        }
      );
    }
  }

  async ngOnInit() {
    const count: any = await new Promise((resolve, reject) => {
      // status
      this.httpClientService.get('/fabric/status/get').subscribe(
        (next) => {
          const data = next.json();
          this.chaincodeCount = data.chaincodeCount;
          this.latestBlock = data.latestBlock;
          this.txCount = data.txCount;
          this.peerCount = data.peerCount;
          resolve(data.latestBlock);
        },
        err => { }
      );
    });

    // block list
    const promiseList = [];
    for (let i = count; i >= 0; i--) {
      promiseList.push(
        new Promise((resolve, reject) => {
          this.httpClientService.postJson('/fabric/block/get', { number: i }).subscribe(
            (next) => {
              const data = next.json();
              resolve(data);
            },
            err => { }
          );
        }).then((result) => result)
      );
    }
    Promise.all(promiseList).then(results => {
      this.blockList = results;
    });

    // peer list
    this.httpClientService.get('/fabric/peerlist').subscribe(
      (next) => {
        const data = next.json();
        this.peerList = data;
      },
      err => { }
    );

    // chaincode list
    this.httpClientService.get('/fabric/chaincodelist').subscribe(
      (next) => {
        const data = next.json();
        this.chaincodeList = data;
      },
      err => { }
    );
    console.log('ws connect');
    const ws = location.protocol === 'http:' ? 'ws' : 'wss';
    this.stomp = Stomp.client(`${ws}://${environment[location.protocol]}/stomp`);
    this.stomp.connect({},
      (frame) => {
        this.stomp.subscribe('/topic/metrics/status', this.getStatus);
      },
      (err) => { console.log('err', err); }
    );

  }
  getBlockRawDate(num) {
    this.httpClientService.postJson('/fabric/block/json', { number: num }).subscribe(
      (next) => {
        const data = next.json();
        this.rawDateJson = JSON.stringify(data, null, 2);
        this.rawDataModal.show();
      },
      err => { }
    );
  }
  public getGetTxRawDate(txid) {
    this.httpClientService.postJson('/fabric/tx/json', { number: txid }).subscribe(
      (next) => {
        const data = next.json();
        this.rawDateJson = JSON.stringify(data, null, 2);
        this.rawDataModal.show();
      },
      err => { }
    );
  }
  blockGetInfo(num) {
    this.httpClientService.postJson('/fabric/block/getinfo', { number: num }).subscribe(
      (next) => {
        const data = next.json();
        this.blockInfo = data;
      },
      err => { }
    );
  }
  txGetInfo(txid) {
    this.httpClientService.postJson('/fabric/tx/getinfo', { txid: txid }).subscribe(
      (next) => {
        const data = next.json();
        this.txInfo = data;
      },
      err => { }
    );
  }
  setPath(path) {
    this.path = path;
  }
}
