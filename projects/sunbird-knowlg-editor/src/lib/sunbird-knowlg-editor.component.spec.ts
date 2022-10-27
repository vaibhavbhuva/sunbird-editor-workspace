import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunbirdKnowlgEditorComponent } from './sunbird-knowlg-editor.component';

describe('SunbirdKnowlgEditorComponent', () => {
  let component: SunbirdKnowlgEditorComponent;
  let fixture: ComponentFixture<SunbirdKnowlgEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunbirdKnowlgEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunbirdKnowlgEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
