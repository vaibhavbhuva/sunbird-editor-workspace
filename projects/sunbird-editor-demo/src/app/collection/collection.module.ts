import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';
import { RouterModule, Routes } from '@angular/router';
import { SunbirdCollectionEditorModule } from 'sunbird-collection-editor';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: CollectionComponent
  }
];

@NgModule({
  declarations: [
    CollectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SunbirdCollectionEditorModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class CollectionModule { }
