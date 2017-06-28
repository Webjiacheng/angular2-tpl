import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
//您的组件,你的所有模块都需要在此导入，并在下面的declarations中声明
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
//可以根据您所匹配的path路径进行加载相应的组件
const appRoutes: Routes = [
  { path: '',   redirectTo: '/app1', pathMatch: 'full' },
  { path: 'app1', component: App1Component },
  { path: 'app2/:id', component: App2Component }
  ];
@NgModule({
  imports:[ 
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule.forRoot(appRoutes,{useHash:true}),
   ],
  declarations: [ 
  AppComponent,
  App1Component,
  App2Component
  ],
  bootstrap:[ AppComponent ]
})
export class AppModule { }
