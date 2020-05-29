import axios from 'axios';

export const httpClient = axios.create({
    baseURL: 'http://localhost:4000'
})

class ApiService {

    constructor(apiurl){
        this.apiurl = apiurl;
    }

    post(objeto){
        const requestUrl = `${this.apiurl}`;
        return httpClient.post(requestUrl, objeto);
    }

    put(url, objeto){
        const requestUrl = `${this.apiurl}${url}`;
        return httpClient.put(requestUrl, objeto);
    }

    get(){
        const requestUrl = `${this.apiurl}`;
        return httpClient.get(requestUrl);
    }

    getReservas(url){
        const requestUrl = `${this.apiurl}${url}`;
        return httpClient.get(requestUrl);
    }
}


export default ApiService;