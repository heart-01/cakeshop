import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { DetailPage } from '../detail/detail';
import { AddCustomerPage } from '../add-customer/add-customer';
import { AlertController } from 'ionic-angular'; //popup message ธรมดา ต้องกด ok ถึงจะหาย

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  customer : any=0;
  data:any;
  constructor(public navCtrl: NavController, public navParam : NavParams, public http: Http, private alertCtrl: AlertController) {   // constructor จะทำงานเมื่อมีการเปิดหน้านี้ครั้งแรก
    this.getData();
  }

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/ShowCustomer')
    .map(res=>res.json())
    .subscribe(data=>{
      this.customer=data;
    });
  }

  showDetail(id){ //เมธอทส่งค่า ID_customer ไปหน้า DetailPage
    this.navCtrl.push(DetailPage, { ID_customer : id });
  }

  showAddCustomer(){
    this.navCtrl.push(AddCustomerPage);
  }

  /*deleteData(id){
    let url ="http://localhost:8080/DelCustomer/" + id; //กำหนดตัวแปร url
    this.http.delete(url) //เรียกใช้ http api delete ที่ url
      .subscribe(res=>{ //subscribe เมื่อประมวลผล api เสร็จแล้วทำงาน
        this.data=res; //ให้ทำงานอะไรใส่เครื่องหมายของฟังชั่นเข้าไป res คือ api คืนค่าอะไรมาเราจะได้มาเช็คว่าถูกต้องหรือไม่
        console.log(this.data); //แสดง console data
          this.showAlert("Success", "Data delete"); //แสดง alert
          this.getData(); //เสร็จแล้วกลับไปใช้ method getData
      });
  }*/

  showAlert(id){ //method แสดง Alert อาจจะใช้สำหรับ กดตกลง หรือ ใช่ไม่ใช่
    const alert = this.alertCtrl.create({ //ได้กำหนดค่า alert ขึ้นมา 1 ตัว
      title: 'Confirm Delete', //กำหนด title บนหัวให้เป็นข้อมูล msgTitle
      message: 'Click Yes or No', //กำหนด subTitle ข้อมูลใน title
      buttons: [ //กำหนดปุ่มมา 2 ปุ่ม มี Yes กับ No
        {
          text:'Yes',
          handler:()=>{ //handler เป็นการทำงานหลังกดปุ่ม

            let url ="http://localhost:8080/DelCustomer/" + id; //กำหนดตัวแปร url
            this.http.delete(url) //เรียกใช้ http api delete ที่ url
              .subscribe(res=>{ //subscribe เมื่อประมวลผล api เสร็จแล้วทำงาน
                this.data=res; //ให้ทำงานอะไรใส่เครื่องหมายของฟังชั่นเข้าไป res คือ api คืนค่าอะไรมาเราจะได้มาเช็คว่าถูกต้องหรือไม่
                console.log(this.data); //แสดง console data
                  this.getData(); //เสร็จแล้วกลับไปใช้ method getData
              });
        
          }
        },
        {
          text:'No',
          handler:()=>{
            this.getData();
          }
        }
      ]
    });

    alert.present(); //แสดง alert
  }

}
