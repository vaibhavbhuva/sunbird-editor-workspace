import { Component, OnInit } from '@angular/core';
import { collectionEditorConfig } from '../data';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  public editorConfig = collectionEditorConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
