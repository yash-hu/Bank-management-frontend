import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsHomeComponent } from './accounts-home.component';

describe('AccountsHomeComponent', () => {
  let component: AccountsHomeComponent;
  let fixture: ComponentFixture<AccountsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
