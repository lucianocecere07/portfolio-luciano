import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationExperienceCardComponent } from './formation-experience-card.component';

describe('FormationExperienceCardComponent', () => {
  let component: FormationExperienceCardComponent;
  let fixture: ComponentFixture<FormationExperienceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationExperienceCardComponent]
    });
    fixture = TestBed.createComponent(FormationExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
