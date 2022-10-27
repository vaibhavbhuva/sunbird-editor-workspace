import { TestBed } from '@angular/core/testing';

import { SunbirdKnowlgEditorService } from './sunbird-knowlg-editor.service';

describe('SunbirdKnowlgEditorService', () => {
  let service: SunbirdKnowlgEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunbirdKnowlgEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
