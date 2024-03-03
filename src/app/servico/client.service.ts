import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url:string = 'http://localhost:8080';
  private urlPost:string = 'http://localhost:8080/cadastrar';

  constructor(private http:HttpClient) { }

  selecionar():Observable<Client[]>{
      return this.http.get<Client[]>(this.url)
  }

  cadastrar(obj:Client):Observable<Client>{
    return this.http.post<Client>(this.urlPost, obj)
  }
}
