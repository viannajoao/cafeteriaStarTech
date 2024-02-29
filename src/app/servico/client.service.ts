import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url:string = 'http://localhost:8085';

  constructor(private http:HttpClient) { }

  selecionar():Observable<Client[]>{
      return this.http.get<Client[]>(this.url)
  }
}
