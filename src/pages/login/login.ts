import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  logIn(username,password) {
    if (username.value.length == 0) {
       alert("请输入账号");
     } else if (password.value.length == 0) {
         alert("请输入密码");
       } else {
          let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
          alert(userinfo);
          let modal = this.modalCtrl.create(TabsPage);
          modal.present();
        }

  }

}
