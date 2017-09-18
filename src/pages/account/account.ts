import { Component ,NgModule,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {FormsModule} from "@angular/forms";
import {Platform} from 'ionic-angular';
import { RecordPage } from '../record/record';
/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  //styleUrls: ['account.scss'],
})

export class AccountPage implements AfterViewInit{
  @ViewChild("label")
  private el:ElementRef;

  @ViewChild("headerV")
  private el_header:ElementRef;

  go_account_src="../assets/images/go_record_acticve.gif";
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }
  name = 'Semlinker';
  address = {
    province: '福建',
    city: '厦门'
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  ngAfterViewInit():void{
    // console.log('ngAfterViewInit');
    // console.log('-------------------AccountPage-----------------------------');
    // console.log('AccountPage-Width: ' + screen.height);
    // console.log('AccountPage-Height: ' + screen.width);
    // console.log(this.el['_elementRef'].nativeElement);
    // console.log('clientWidth: ' +this.el['_elementRef'].nativeElement.clientWidth);
    // console.log('clientheight: ' +this.el['_elementRef'].nativeElement.clientHeight);
    // console.log('-------------------el_header-----------------------------');
    // console.log(this.el_header);
    // console.log('headWidth: ' +this.el_header['_elementRef'].nativeElement.clientWidth);
    // console.log('headWidth: ' +this.el_header['_elementRef'].nativeElement.clientHeight);
  }
  doRecord(){
      let profileModal = this.modalCtrl.create(RecordPage, { userId: 8675309 });
      profileModal.present();
  }


}
