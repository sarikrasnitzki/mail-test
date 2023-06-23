import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mail, MailRequest } from '../models/mail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:5189/Mail/SendEmail';

  constructor(private http: HttpClient) { }

  sendMail(mailRequest: MailRequest): Observable<Mail> {

    return this.http.post<Mail>(`${this.baseUrl}`,mailRequest);
  }
}
