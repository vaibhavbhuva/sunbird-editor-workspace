import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunbirdCollectionEditorModule } from 'sunbird-collection-editor';
import { SunbirdQuestionsetEditorModule } from 'sunbird-questionset-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SunbirdCollectionEditorModule,
    SunbirdQuestionsetEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
