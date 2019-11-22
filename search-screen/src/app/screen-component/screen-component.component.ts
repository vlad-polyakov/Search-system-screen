import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-screen-component',
  templateUrl: './screen-component.component.html',
  styleUrls: ['./screen-component.component.css']
})
export class ScreenComponent implements OnInit {
  directory = "";
  searchValue = "";
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

}
