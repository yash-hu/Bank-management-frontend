import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAccountComponent } from './get-account.component';

describe('GetAccountComponent', () => {
  let component: GetAccountComponent;
  let fixture: ComponentFixture<GetAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
