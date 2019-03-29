import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  customers:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    let cusKey=this.navParams.get('key'); //สร้างตัวแปร cusKey เก็บค่า key ที่ส่งเข้ามา
    let url="http://localhost:8080/ShowCustomer/searching/" + cusKey; //สร้างตัวแปร url เก็บ http://localhost:8080/ShowCustomer/searching/ แล้วเชื่อมกับ cusKey
    this.http.get(url)
    .map(res=>res.json())
    .subscribe(data=>{ 
      this.customers=data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
