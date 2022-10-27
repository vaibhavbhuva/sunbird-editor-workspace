import { NgModule } from '@angular/core';
import { SunbirdKnowlgEditorComponent } from './sunbird-knowlg-editor.component';
import { SunbirdCoreEditorModule } from 'sunbird-core-editor'


@NgModule({
  declarations: [
    SunbirdKnowlgEditorComponent
  ],
  imports: [
    SunbirdCoreEditorModule
  ],
  exports: [
    SunbirdKnowlgEditorComponent
  ]
})
export class SunbirdKnowlgEditorModule { }
