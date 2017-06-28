import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//导入App1数据类型
import { App1 } from '../model/app1-model';

@Injectable()
export class App1Service {
	//声明获取数据的接口
    public app1ListURL = "./assets/mock-data/app1-mock.json";
    public testUrl="http://www.hujaicheng.top/myshowapp/index.php/home/llbl/check";
    public postUrl="http://www.hujaicheng.top/myshowapp/index.php/home/llbl/setfail";

    constructor(public http: Http) { }
    //Angular 的http.get返回一个 RxJS 的Observable对象。
    //Observable（可观察对象）是一个管理异步数据流的强力方式。
    public getApp1List():Observable<App1[]>{
        return this.http.get(this.app1ListURL)
            .map((res: Response) => res.json().app1Lists)
    }
    //测试get传参
    public getTest(tel:string):Observable<any[]>{
    	let params = new URLSearchParams();
    	params.set('tel',String(tel));
        return this.http.get(this.testUrl,{search:params})
            .map((res: Response) => res.json())
    }
    //测试post传参
    public post(info:any):Observable<any[]>{
    	let params = new URLSearchParams();
    	params.append('tel', info.tel);
        params.append('time', info.time);
        return this.http.post(this.postUrl,params)
            .map((res: Response) => res.json())
    }
}
