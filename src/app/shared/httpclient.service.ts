import { Injectable } from '@angular/core';
import { Http, Headers, RequestMethod, Response, Request, RequestOptions, URLSearchParams, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';


@Injectable()
export class HttpClientService {
  constructor(public http: Http) {
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers();
    return this.requestHelper({ method: RequestMethod.Get, headers: headers, body: '', url: url }, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.requestHelper({ method: RequestMethod.Post, headers: headers, body: body, url: url }, options);
  }

  postJson(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const jsonBody = JSON.stringify(body);
    return this.requestHelper({ method: RequestMethod.Post, headers: headers, body: jsonBody, url: url }, options);
  }

  postForm(url: string, data: any, options?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers({ 'Content-Disposition': 'form-data; name="file"' });
    const body = this.appendFormData(data);
    return this.requestHelper({ method: RequestMethod.Post, headers: headers, body: body, url: url }, options);
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.requestHelper({ method: RequestMethod.Put, headers: headers, body: body, url: url }, options);
  }

  putJson(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const jsonBody = JSON.stringify(body);
    return this.requestHelper({ method: RequestMethod.Put, headers: headers, body: jsonBody, url: url }, options);
  }

  putForm(url: string, data: any, options?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers({ 'Content-Disposition': 'form-data; name="file"' });
    const body = this.appendFormData(data);
    return this.requestHelper({ method: RequestMethod.Put, headers: headers, body: body, url: url }, options);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.requestHelper({ method: RequestMethod.Delete, headers: headers, body: '', url: url }, options);
  }


  /**
   * call by get post put delete ...
   * reference to: https://github.com/auth0/angular2-jwt/blob/master/angular2-jwt.ts
   */
  private requestHelper(requestArgs: RequestOptionsArgs, additionalOptions?: RequestOptionsArgs): Observable<Response> {
    let options = new RequestOptions(requestArgs);
    // update url, auth header and withCredentials
    const url = RegExp(/^http/).test(requestArgs.url) ? requestArgs.url :
    `${location.protocol}//${environment[location.protocol]}${environment.apis}${requestArgs.url}`;
    options = options.merge({
      url: url,
      // httpOnly cookie uplod
      withCredentials: true
    });
    // optional args
    if (additionalOptions) {
      options = options.merge(additionalOptions);
    }
    return this.http.request(new Request(options));
  }

  /**
     * for post and put form data and files
     * append all to form data
     */
  private appendFormData(data: any): FormData {
    const formData: FormData = new FormData();
    for (const key of Object.keys(data)) {
      const value: any = data[key];
      // assume that array is file
      if (value instanceof FileList) {
        // append mutiple files
        for (let i = 0; i < value.length; i++) {
          formData.append(key, value[i], value[i].name);
        }
      } else {
        // normal form data
        formData.append(key, value);
      }
    }
    return formData;
  }
  /**
  * Handle HTTP error
  */
  private handleError(error: any) {
    const statusTextDict = {
      400: 'Bad Request',
      401: 'Unauthorized',
      402: 'Payment Required',
      403: 'Forbidden',
      404: 'Not Found',
      405: 'Method Not Allowed',
      406: 'Not Acceptable',
      407: 'Proxy Authentication Required',
      408: 'Request Time-out',
      409: 'Conflict',
      410: 'Gone',
      411: 'Length Required',
      412: 'Precondition Failed',
      413: 'Request Entity Too Large',
      414: 'Request-URI Too Large',
      415: 'Unsupported Media Type',
      416: 'Requested range not satisfiable',
      417: 'Expectation Failed',
      500: 'Internal Server Error',
      501: 'Not Implemented',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Gateway Time-out',
      505: 'HTTP Version not supported'
    };

    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      // below with error
      let body: any = '';
      try {
        // error is not json throw
        body = error.json() || '';
      } catch (e) {
        //
      }
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${statusTextDict[error.status]} ${err}`;
      // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg); // log to console instead

    // return Observable.throw(errMsg);
    return errMsg;
  }

}


