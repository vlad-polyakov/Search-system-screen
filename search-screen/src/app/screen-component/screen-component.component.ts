import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FileService } from '../service/file.service';
import { SearchResult } from '../model/SearchResult';

@Component({
  selector: 'app-screen-component',
  templateUrl: './screen-component.component.html',
  styleUrls: ['./screen-component.component.css']
})
export class ScreenComponent implements OnInit {
  searchValue = "";
  results: SearchResult[]
  constructor(
    private http: HttpClient,
    private fileService: FileService
  ) { }
  url = null;
  ngOnInit() {
  }
  sendFiles(event) {
    const files: Array<File> = event.target.files;
    this.fileService.sendFiles(files).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
}
getResultData() {
      if(this.searchValue != null || this.searchValue != " ") {
        this.fileService.getResult(this.searchValue).subscribe(data => {
          console.log(data)
        });
      }
}
}
