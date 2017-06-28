import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { App2 } from '../model/app2-model';

@Injectable()
export class App2Service {
    public app2ListURL = "./assets/mock-data/app2-mock.json";

    constructor(public http: Http) { }

    public getApp2List():Observable<App2[]>{
        return this.http.get(this.app2ListURL)
            .map((res: Response) => res.json().app2Lists)
    }

}