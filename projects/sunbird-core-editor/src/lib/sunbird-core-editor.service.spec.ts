import { TestBed } from '@angular/core/testing';

import { SunbirdCoreEditorService } from './sunbird-core-editor.service';

describe('SunbirdCoreEditorService', () => {
  let service: SunbirdCoreEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunbirdCoreEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
