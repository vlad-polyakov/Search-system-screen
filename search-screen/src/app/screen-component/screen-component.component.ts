import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FileService } from '../service/file.service';
import { SearchResult } from '../model/SearchResult';
import { Metric } from '../model/Metric';

@Component({
  selector: 'app-screen-component',
  templateUrl: './screen-component.component.html',
  styleUrls: ['./screen-component.component.scss']
})
export class ScreenComponent implements OnInit {
  searchValue = "";
  checkresults = true;
  results: SearchResult[]
  files: Array<File>
  searchresults: Map<Metric,SearchResult[]>
  constructor(
    private http: HttpClient,
    private fileService: FileService
  ) { }
  url = null;
  ngOnInit() {
  }
  sendFiles(event) {
    this.files = event.target.files;
    this.fileService.sendFiles(this.files).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
}
getResultData() {
  if(this.files == null) {
    alert("there are no files")
    return
  }
  this.searchresults = new Map([])
      if(this.searchValue != null || this.searchValue != " ") {
        this.fileService.getResult(this.searchValue).subscribe(data => {
          console.log(data)
          this.results = []
          if(data == null) {
            this.checkresults = false;
            return;
          }
          this.searchresults = data;
          for(let [key,value] of Object.entries(this.searchresults)){
           this.results.push(value[0])
           console.log(this.results)
        }
        });
      }
      else {
        this.checkresults = false;
      }
}
}
