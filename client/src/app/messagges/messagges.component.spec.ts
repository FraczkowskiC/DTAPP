import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessaggesComponent } from './messagges.component';

describe('MessaggesComponent', () => {
  let component: MessaggesComponent;
  let fixture: ComponentFixture<MessaggesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessaggesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessaggesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
