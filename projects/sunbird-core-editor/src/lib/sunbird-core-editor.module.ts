import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FancytreeComponent } from './components';
import { KnEditorConfig, KN_EDITOR_CONFIG } from './config.token';

@NgModule({
  declarations: [
    FancytreeComponent,
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    FancytreeComponent
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
