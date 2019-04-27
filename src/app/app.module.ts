import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DetailPage } from '../pages/detail/detail';
import { ResultPage } from '../pages/result/result';
import { AddCustomerPage } from '../pages/add-customer/add-customer';

//import { HTTP } from '@ionic-native/http'; //plugin HTTP Native เพื่อใช้งาน Http จากภายนอก
import { HttpModule } from '@angular/http'; // เรียกใช้ HttpModule สำหรับ get ค่าจาก Http
import { HttpClientModule } from '@angular/common/http'; // import เพื่อใช้งาน Http บนเครื่อง Client


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DetailPage,
    ResultPage,
    AddCustomerPage,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DetailPage,
    ResultPage,
    AddCustomerPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
