//引入angular核心模块
import { Component, OnInit, Input } from '@angular/core';
//引入自定义服务
import { App2Service } from './services/app2.service';
//引入App2数据类
import { App2 } from './model/app2-model';

@Component({
	selector:"app-root",
	templateUrl:"./app2.component.html",
	styleUrls:["./app2.component.css"],
	providers:[ App2Service ]
})
export class App2Component implements OnInit{ 
	public app2List:Array<App2>=[];//定义数据类型
  public path:any[]=[];
  public params:any;//获取地址栏的参数

	constructor(public app2Service: App2Service){};
	ngOnInit(){
    this.path=window.location.hash.split("/");
    this.params=this.path[this.path.length-1];

		//初始化完成前，需要发送请求，将数据拿回来
	  this.getapp2List(this.params);
	}
	public getapp2List(id:any){
    this.app2Service.getApp2List()
      .subscribe(
      	data => {
          for(var i=0;i<data.length;i++){
            if(data[i].id==id){
              this.app2List.push(data[i]);
              console.log(data[i]);
            }
          }
      	},
        error => console.log(error)
      );
  	}

  public goBack(){
    window.location.href="#app1";
  }  

}