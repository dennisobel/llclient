import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, ToastController, NavParams } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { BrandsPage } from '../brands/brands';
import moment from 'moment';


@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
	private searchdetails:any;
	private retailer:any;
	private retailer_id:any;
	private licence_id:any;
	private licence_acquired:any;
	private licence_expires:any;
	private allowed_drinks:any;
	private date:any = new Date(Date.now());


	constructor(
		private navCtrl: NavController, 
		private viewCtrl: ViewController,
		private modalCtrl: ModalController,
		private toastCtrl: ToastController,
		private navParams: NavParams
	){}

	ionViewDidLoad(){
		this.searchdetails = this.navParams.get("details");
		this.retailer = this.searchdetails.retailer;
		this.retailer_id = this.searchdetails.retailer_id;
		this.licence_id = this.searchdetails.licence_id;
		this.licence_acquired = this.searchdetails.licence_acquired;
		this.licence_expires = this.searchdetails.licence_expires;
		this.allowed_drinks = this.searchdetails.allowed_drinks;

		let one_day=1000*60*60*24;

		let date_difference = (this.date-this.licence_expires)/one_day;

		if(date_difference > 0){
			this.toast(`Licence expired on ${this.licence_expires}.`,true,"middle")
		}else{
			this.toast(`${Math.abs(Math.floor(date_difference))} days to expiry`,true,"middle")
		}

	}

	onClose(remove = false){
	    this.viewCtrl.dismiss(remove);
	}	

	onReport(){
		let _report = this.modalCtrl.create(ReportPage,{searchdetails:this.searchdetails});
		_report.present();
	}

	onBrands(){
		let _brands = this.modalCtrl.create(BrandsPage,{brands:this.allowed_drinks})
		_brands.present()
	}

	toast(message,showCloseButton,position){
		let _toast = this.toastCtrl.create({
			message:message,
			showCloseButton:showCloseButton,
			position:position
		})
		_toast.present()
	}
}