import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
	private searchdetails:any;

	constructor(
		private navCtrl: NavController, 
		private viewCtrl: ViewController,
		private navParams: NavParams
	){}

	ionViewDidLoad(){
		this.searchdetails = this.navParams.get("searchdetails")
	}

	onClose(remove = false){
	    this.viewCtrl.dismiss(remove);
	}	

}
