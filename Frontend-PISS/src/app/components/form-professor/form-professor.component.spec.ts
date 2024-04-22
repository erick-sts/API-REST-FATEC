import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfessorComponent } from './form-professor.component';

describe('FormProfessorComponent', () => {
  let component: FormProfessorComponent;
  let fixture: ComponentFixture<FormProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProfessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

