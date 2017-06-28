//引入angular核心模块
import { Component, OnInit, Input } from '@angular/core';
//引入自定义服务
import { App1Service } from './services/app1.service';
//引入数据类
import { App1 } from './model/app1-model';

@Component({
	selector:"app-root", //关联父标签，会插入到父标签
	templateUrl:"./app1.component.html", //引入模板文件
	styleUrls:["./app1.component.css"], //引入样式文件
	providers:[ App1Service ] //注入我们的自定义服务
})
export class App1Component implements OnInit{ 
	public app1List: Array<App1>;//定义数据类型
  public active_index:number=1;//激活状态

  public phone:string="";//手机号码
  public pwd:string="";//时间

	constructor(public app1Service: App1Service){};
	ngOnInit(){
		//初始化完成前，需要发送请求，将数据拿回来
	    this.getapp1List();
	}
	public getapp1List(){
    //调用服务中的getApp1List方法
    this.app1Service.getApp1List()
      .subscribe(
      	data => {
      		this.app1List = data;
      	},
        error => console.log(error)
      );
  	}
    //onClick函数
  	public onClick(id:number){
      this.active_index=id;
  	}
    //toDetail函数
    public toDetail(id:number){
      window.location.href="#app2/"+id;
    }

    //测试get传参
    public getTest(tel:string){
    //调用服务中的getApp1List方法
    this.app1Service.getTest(tel)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
    }

    //测试post方式传递参数
    public add(){
      //console.log(this.phone+"----"+this.pwd);
      this.app1Service.post({tel:this.phone,time:this.pwd})
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
    }

}