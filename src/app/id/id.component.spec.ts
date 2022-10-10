import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDComponent } from './id.component';

describe('IDComponent', () => {
  let component: IDComponent;
  let fixture: ComponentFixture<IDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
