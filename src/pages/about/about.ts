import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ResultPage } from '../result/result';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  data={keyword:""};
  constructor(public navCtrl: NavController) {

  }

  findCustomer(){
    console.log(this.data.keyword); //ฟังชั่นเช็คว่ามีการส่งค่าเข้ามาไหม 
    this.navCtrl.push(ResultPage,{key:this.data.keyword})
  }

}
