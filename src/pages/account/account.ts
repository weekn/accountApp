import { Component ,NgModule} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormsModule} from "@angular/forms";

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
@NgModule({
  // ...
  imports: [

    FormsModule
  ],
  // ...
})
export class AccountPage {
 a=1
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  name = 'Semlinker';
  address = {
    province: '福建',
    city: '厦门'
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  onClick(event,a){
      alert(a);
      a=22;
  }

}
