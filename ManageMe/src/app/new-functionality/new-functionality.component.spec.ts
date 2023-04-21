import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFunctionalityComponent } from './new-functionality.component';

describe('NewFunctionalityComponent', () => {
  let component: NewFunctionalityComponent;
  let fixture: ComponentFixture<NewFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFunctionalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
