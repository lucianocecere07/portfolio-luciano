import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperienzaComponent } from './esperienza.component';

describe('EsperienzaComponent', () => {
  let component: EsperienzaComponent;
  let fixture: ComponentFixture<EsperienzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsperienzaComponent]
    });
    fixture = TestBed.createComponent(EsperienzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
