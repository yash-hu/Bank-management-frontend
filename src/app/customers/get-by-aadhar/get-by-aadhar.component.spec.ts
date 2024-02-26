import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByAadharComponent } from './get-by-aadhar.component';

describe('GetByAadharComponent', () => {
  let component: GetByAadharComponent;
  let fixture: ComponentFixture<GetByAadharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetByAadharComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetByAadharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
