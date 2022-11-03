import { NgModule } from '@angular/core';
import { SunbirdCoreEditorModule } from 'sunbird-core-editor';
import { EditorComponent } from './components';
import { CustomFancytreeComponent } from './components/custom-fancytree/custom-fancytree.component';


@NgModule({
  declarations: [
    EditorComponent,
    CustomFancytreeComponent
  ],
  imports: [
    SunbirdCoreEditorModule.forRoot({host: 'https://dev.knowlg.sunbird.org/'}),
  ],
  exports: [
    EditorComponent
  ]
})
export class SunbirdKnowlgEditorModule { }
