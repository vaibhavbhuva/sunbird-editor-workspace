import { Component } from '@angular/core';
import { collectionEditorConfig } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sunbird-editor-demo';
  public editorConfig = collectionEditorConfig;
  
}
