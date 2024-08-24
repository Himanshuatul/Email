import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseurl: string = "https://emailapi-production-b6c7.up.railway.app";

  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    return this.http.post(`${this.baseurl}/sendemail`,data);
  }
}
