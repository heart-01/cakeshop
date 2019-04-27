import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { HttpClient } from '@angular/common/http'; // import เพื่อใช้งาน Http บนเครื่อง Client
import { AlertController } from 'ionic-angular'; //popup message ธรมดา ต้องกด ok ถึงจะหาย

@IonicPage()
@Component({
  selector: 'page-add-customer',
  templateUrl: 'add-customer.html',
})
export class AddCustomerPage {
  customers={
    ID_customer:"",
    ID_status:"",
    name_customer:"",
    tel_customer:"",
    username_customer:"",
    password_customer:""
  };
  data : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCustomerPage');
  }

  AddCustomer(){
    let url= "http://localhost:8080/AddCustomer";  //กำหนด url ที่ใช้ api
    this.http.post(url,this.customers) //เรียกใช้ http api post ที่ url ตัวที่ 2 เป็น body เป็น ข้อมูลที่ต้องการประมวลผล
      .subscribe( //subscribe เมื่อประมวลผล api เสร็จแล้วทำงาน
        res=>{ //ให้ทำงานอะไรใส่เครื่องหมายของฟังชั่นเข้าไป res คือ api คืนค่าอะไรมาเราจะได้มาเช็คว่าถูกต้องหรือไม่
          this.data = res; //กำหนดให้ตัวแปรให้ data เก็บข้อมูลของ res
          if(this.data.msg==true){ //เช็คข้อมูลว่า msg ที่ api ส่งเข้ามาให้เป็นข้อมูลอะไร ในที่นี้ได้กำหนดว่า true
            this.showAlert("Success","Data added"); //แสดง alert
            this.navCtrl.popToRoot();
          }else{ //ถ้า เพิ่มข้อมูลไม่ได้
            this.showAlert("Faill","Data Faill"); //แสดง alert
          }
        }  
      ); 
  }

  showAlert(msgTitle:string, message:string){ //method แสดง Alert อาจจะใช้สำหรับ กดตกลง หรือ ใช่ไม่ใช่
    const alert = this.alertCtrl.create({ //ได้กำหนดค่า alert ขึ้นมา 1 ตัว
      title: msgTitle, //กำหนด title บนหัวให้เป็นข้อมูล msgTitle
      subTitle: message, //กำหนด subTitle ข้อมูลใน title
      buttons: ["OK"]  // ปุ่มใน alert
    });

    alert.present(); //แสดง alert
  }



}
