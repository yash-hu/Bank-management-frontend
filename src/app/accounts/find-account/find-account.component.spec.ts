import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAccountComponent } from './find-account.component';

describe('FindAccountComponent', () => {
  let component: FindAccountComponent;
  let fixture: ComponentFixture<FindAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
