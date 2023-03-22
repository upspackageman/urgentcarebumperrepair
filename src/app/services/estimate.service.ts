import axios from 'axios';
import { Model } from '../models/model';
const apiUrl = '192.168.86.182:80/bumperrepair/API/';
export class EstimateService {
    
    public async sendMessage(message: any) {
        const response = await axios.post(apiUrl+'email.php', message);
        return response.data;
    }
    public async getModels(message?: any){
        let make ='';
        if(typeof message  === 'string'){
            make  = message;
        }
        else{
            make = message.target.value;
        }


        console.log(make);
        let url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`;
        console.log(url);
        const response = await axios.get(url);
        console.log(response);
        return response.data;
    }


}