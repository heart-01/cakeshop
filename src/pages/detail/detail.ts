import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import { Http } from '@angular/http';
 import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  customer:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    let cusID=this.navParams.get('ID_customer'); //สร้างตัวแปร cusID เก็บค่า ID_customer ที่ส่งเข้ามา
    let url="http://localhost:8080/customer/" + cusID; //สร้างตัวแปร url เก็บ http://localhost:8080/customer/ แล้วเชื่อมกับ cusID
    this.http.get(url)
      .map(res=>res.json())
      .subscribe(data=>{ 
        this.customer=data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
