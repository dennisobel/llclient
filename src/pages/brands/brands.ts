import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html',
})
export class BrandsPage{
	private brands:any;

	constructor(
		private navCtrl: NavController, 
		private viewCtrl: ViewController,
		private navParams: NavParams
	){}

	ionViewDidLoad(){
		this.brands = this.navParams.get("brands")
		console.log(this.brands)
	}

	onClose(remove = false){
	    this.viewCtrl.dismiss(remove);
	}	

}
