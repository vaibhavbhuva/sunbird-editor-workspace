import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FancytreeComponent, FancytreeButtonsComponent } from './components';
import { KnEditorConfig, KN_EDITOR_CONFIG } from './config.token';

@NgModule({
  declarations: [
    FancytreeComponent,
    FancytreeButtonsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    FancytreeComponent,
    FancytreeButtonsComponent
  ]
})
export class SunbirdCoreEditorModule {
  static forRoot(config?: KnEditorConfig): ModuleWithProviders<SunbirdCoreEditorModule> {
    return {
      ngModule: SunbirdCoreEditorModule,
      providers: [ {provide: KN_EDITOR_CONFIG, useValue: config}]
    }
}
 }
