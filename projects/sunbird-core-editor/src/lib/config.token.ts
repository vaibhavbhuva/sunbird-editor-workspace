import { InjectionToken } from '@angular/core';

export interface KnEditorConfig {
    host?: string;
}

export const KN_EDITOR_CONFIG = new InjectionToken<KnEditorConfig>('KN_EDITOR_CONFIG');
  
  