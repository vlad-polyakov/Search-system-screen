import { HttpClient, HttpParams, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../model/SearchResult';
import { Metric } from '../model/Metric';



@Injectable({
  providedIn: 'root'
})
export class FileService {
  SERVER_URL = "http://localhost:8080/"
  constructor(
    private httpClient: HttpClient) {
  }
  sendFiles(files: File[]) : Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    for (let file of files) {
    formdata.append('files', file);
    }
    const req = new HttpRequest('POST', 'http://localhost:8080/fakeDocuments', formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    );
    return this.httpClient.request(req); 
    };  
    getResult(query: any): Observable<Map<Metric,SearchResult[]>> {
      let params = new HttpParams().set("query",query);
      return this.httpClient.get<Map<Metric,SearchResult[]>>(this.SERVER_URL+"search", {params: params});
    }
  }
  

