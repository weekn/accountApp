import { Component ,NgModule,ViewChild,AfterViewInit,DoCheck,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {FormsModule} from "@angular/forms";
import {Platform} from 'ionic-angular';
import { RecordPage } from '../record/record';
//------------------------native---------------------
import { FileOpener } from '@ionic-native/file-opener';
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

 export class AccountPage implements AfterViewInit,DoCheck{
   @ViewChild("label")
   private el:ElementRef;

   @ViewChild("headerV")
   private el_header:ElementRef;

   // go_account_src="../assets/images/go_record_acticve.gif";
   // go_account_inactive_src="../assets/images/go_record.gif";
   go_record_isactive=false;
   refresher:any;
   debug='haha';
   entry_c={type:'餐饮',cost:'10.00',describe:'真的好贵啊',ifincome:false};
   entry_i={type:'红包',cost:'10.00',describe:'真的好爽啊啊',ifincome:true};
   record={
     mouth:'8',
     total_mouth:'1000.00',
     info:{
     '1':{total_day:'20.00',detail:[this.entry_c,this.entry_c]},
     '2':{total_daty:'100.00',detail:[this.entry_c]},
     '3':{total_daty:'100.00',detail:[this.entry_c]},
     '4':{total_daty:'100.00',detail:[this.entry_c,this.entry_i,this.entry_c,this.entry_c]},
     }
   };
   info_key=['4','3','2','1'];
   constructor(public navCtrl: NavController, 
     public navParams: NavParams,
     public modalCtrl: ModalController,
     private fileOpener: FileOpener) {

     this.fileOpener.open('/assets/images/go_record_acticve.gif', 'application/gif')
     .then(() => console.log('File is opened'))
     .catch(e => console.log('Error openening file', e));
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
   ngDoCheck() {
     if(this.refresher){

       if(this.refresher.progress==0){
         this.go_record_isactive=false;

       }
     }

   }

   doRecord(){
     let profileModal = this.modalCtrl.create(RecordPage, { userId: 8675309 });
     profileModal.present();
   }
   items = [];
   doRefresh(refresher) {
     console.log('Begin async operation', refresher);
     let profileModal = this.modalCtrl.create(RecordPage, { userId: 8675309 });
     profileModal.present();
     refresher.complete();
   }

   doRefreshStart(refresher) {
     this.refresher=refresher;
     this.go_record_isactive=true;
   }


 }
