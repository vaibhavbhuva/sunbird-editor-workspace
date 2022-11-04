import { Component, OnInit } from '@angular/core';
import { collectionEditorConfig } from '../data';
@Component({
  selector: 'app-questionset',
  templateUrl: './questionset.component.html',
  styleUrls: ['./questionset.component.scss']
})
export class QuestionsetComponent implements OnInit {
  public editorConfig = collectionEditorConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
