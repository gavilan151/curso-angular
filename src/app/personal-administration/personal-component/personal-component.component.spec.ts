import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalComponentComponent } from './personal-component.component';

describe('PersonalComponentComponent', () => {
  let component: PersonalComponentComponent;
  let fixture: ComponentFixture<PersonalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalComponentComponent]
    });
    fixture = TestBed.createComponent(PersonalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
