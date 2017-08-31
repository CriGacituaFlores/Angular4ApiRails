import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IDocument } from './document';
import { DocumentService } from './document.service';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  providers: [
    DocumentService
  ]
})

export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard";
  documents: IDocument[];
  errorMessage: string;
  mode = "Observable";

  constructor(private documentService: DocumentService){
    
  }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
    //this.getDocuments();
  }

  getDocuments(){
    this.documentService.getDocuments()
      .subscribe(documents => this.documents = documents,
                 error => this.errorMessage = <any>error);
  }

  documents2: IDocument[] = [
    {
      title: "First",
      description: "Last",
      file_url: "http://google.cl",
      updated_at: "11/11/16",
      image_url: "http://google.cl"
    },
    {
      title: "Second",
      description: "Last",
      file_url: "http://google.cl",
      updated_at: "11/11/16",
      image_url: "http://google.cl"
    },
    {
      title: "Third",
      description: "Last",
      file_url: "http://google.cl",
      updated_at: "11/11/16",
      image_url: "http://google.cl"
    }
  ];

}
