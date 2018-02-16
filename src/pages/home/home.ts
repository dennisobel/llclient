import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SearchPage } from '../search/search'
import { ProcessProvider } from '../../providers/process/process';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
	private username:any;
	private password:any;

	constructor(
		private navCtrl: NavController,
		private toastCtrl:ToastController,
		private processProvider: ProcessProvider
	){}

	ionViewDidLoad(){}
	onUsername(username:any){ this.username = username.srcElement.value; }
	onPassword(password:any){ this.password = password.srcElement.value; }

	login(){
		let agents = this.processProvider.emitdata().agents_data
		let credentials = { 
			username : this.username,
			password : this.password
		}
		
		agents.forEach((i)=>{
			if(!(credentials.username == i.username) || !(credentials.password == i.password)){
				// this.toast()
			}			
			else if((credentials.username == i.username) && (credentials.password == i.password)){
				this.navCtrl.push(SearchPage);
			}

		})
	}

	toast(){
		let badusr = this.toastCtrl.create({
			message:"Credentials Unknown.Rectify.",
			duration:2000,
			position:"middle"					
		})
		badusr.present()
	}
}
