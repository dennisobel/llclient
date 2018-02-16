import { Injectable } from '@angular/core';
import agents from "../../offline/agents";
import retailers from "../../offline/retailers";


@Injectable()
export class ProcessProvider{
	private agents_data = agents;
	private retailers_data = retailers;
	private all_data = { agents_data:this.agents_data,retailers_data:this.retailers_data	}

	constructor(){

	}

	emitdata(){
		return this.all_data;
	}
}
