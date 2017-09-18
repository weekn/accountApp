import { Component } from '@angular/core';
import { IonicPage,NavController} from 'ionic-angular';
import { Location }                 from '@angular/common';
/**
 * Generated class for the RecordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordPage');
  }

  goBack(){
    this.navCtrl.pop();

  }
}
