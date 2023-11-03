import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormazioneComponent } from './formazione.component';

describe('FormazioneComponent', () => {
  let component: FormazioneComponent;
  let fixture: ComponentFixture<FormazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormazioneComponent]
    });
    fixture = TestBed.createComponent(FormazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
