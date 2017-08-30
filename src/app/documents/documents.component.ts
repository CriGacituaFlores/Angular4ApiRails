import { Component } from '@angular/core';
import { IDocument } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard";

  documents: IDocument[] = [
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
