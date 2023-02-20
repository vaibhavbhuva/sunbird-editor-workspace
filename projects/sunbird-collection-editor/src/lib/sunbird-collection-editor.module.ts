import { NgModule } from '@angular/core';
import { EditorComponent } from './components';
import { SunbirdCoreEditorModule } from 'sunbird-core-editor';
@NgModule({
  declarations: [
    EditorComponent,
  ],
  imports: [
    SunbirdCoreEditorModule(),
  ],
  exports: [
    EditorComponent
  ]
})
export class SunbirdCollectionEditorModule { }
