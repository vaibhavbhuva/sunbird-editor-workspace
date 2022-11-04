import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsetComponent } from './questionset.component';
import { RouterModule, Routes } from '@angular/router';
import { SunbirdQuestionsetEditorModule } from 'sunbird-questionset-editor';

const routes: Routes = [
  {
    path: '',
    component: QuestionsetComponent
  }
];

@NgModule({
  declarations: [
    QuestionsetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SunbirdQuestionsetEditorModule
  ],
  exports: [RouterModule]
})
export class QuestionsetModule { }
