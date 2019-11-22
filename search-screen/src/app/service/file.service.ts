import { HttpClient, HttpParams, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



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
 
  }
