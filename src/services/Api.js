
import axios from 'axios';


const apiService = axios.create({
    //  baseURL: 'http://192.168.1.135:3000',  //bureau
  // baseURL: 'http://192.168.8.168:3000', //maison 
  baseURL: 'http://172.20.10.4:3000', // Iphone Xs
  // baseURL: "http://192.168.103.12:3000",   //joyce
  // baseURL: "http://192.168.43.236:3000", //emulateur
  
  headers: {
    'Content-Type': 'application/json', 
  },
  responseType: 'json',
  withCredentials: true,
});


export default apiService;