import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunbirdCoreEditorComponent } from './sunbird-core-editor.component';

describe('SunbirdCoreEditorComponent', () => {
  let component: SunbirdCoreEditorComponent;
  let fixture: ComponentFixture<SunbirdCoreEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunbirdCoreEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunbirdCoreEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
