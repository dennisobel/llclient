import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ProcessProvider } from '../../providers/process/process';
import { HomePage } from '../home/home'
import { ResultPage } from '../result/result'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
	private retailers:any;
	private retailers_filtered:any;

	constructor(
		private navCtrl: NavController, 
		private modalCtrl: ModalController,
		private navParams: NavParams,
		private processProvider: ProcessProvider){}

	ionViewDidLoad() {
		this.retailers = this.processProvider.emitdata().retailers_data
	}

	initializeAgents(){
		this.processProvider.emitdata().agents_data
	}

	getItems(searchbar){
		this.initializeAgents();
		var q = searchbar.srcElement.value;

		//if val empty dont filter
		if(!q){
			this.retailers_filtered = this.retailers
		}

		this.retailers_filtered = this.retailers.filter((data)=>{
			if(data.retailer){
				if(data.retailer.toLowerCase().indexOf(q.toLowerCase()) > -1){
					return true;
				}
				return false;
			}
		})
	}

	searchDetails(data){
		let _searchdetails = this.modalCtrl.create(ResultPage,{details:data})
		_searchdetails.present();
	}

	logout(){
		this.navCtrl.setRoot(HomePage)
	}


}
