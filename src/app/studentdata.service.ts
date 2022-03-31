import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  baseurl = "http://localhost:5000/api";
  constructor(private http:HttpClient, private auth:AuthService ) { }

  async getStudentData(roll:string){
    let url = this.baseurl.concat("/get-student-info/",roll);
    return new Promise((resolve, reject) => {
      this.http.get(url,{headers:{
        'x-access-token':this.auth.getToken(),    
      }}).subscribe((res:any)=>{
        resolve(res)
      },(e)=>{
        console.log(e)
        reject(e.error)
      })
    });
    
  }

  togglActive(roll:string){
    let url = this.baseurl.concat("/toggle-mess-allowed/",roll);
    return this.http.get(url,{headers:{
      'x-access-token':this.auth.getToken()
    }}).subscribe((res:any)=>{
      console.log(res.status)
      if(res.status==200){
        return true
      }else{
        return false
      }
    })
  }

  async getMonthlydata(roll:string,year:string,month:string){
    let url = this.baseurl.concat("/get-meal-info/",roll,'/',year,'/',month);
    return this.http.get(url,{headers:{
      'x-access-token':this.auth.getToken(),    
    }}).toPromise();
  }

  async getMonthlyMessdata(year:string,month:string){
    let url = this.baseurl.concat("/get-meal-info/",year,'/',month);
    return this.http.get(url,{headers:{
      'x-access-token':this.auth.getToken(),    
    }}).toPromise();
  }

  getImage(roll:string): Observable<Blob>{
    let url = this.baseurl.concat("/get_image/",roll);
    return this.http.get(url, { 
      responseType: 'blob',
      headers:{
        'x-access-token':this.auth.getToken(),    
      } 
    });
  }


}