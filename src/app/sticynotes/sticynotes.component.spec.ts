import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SticynotesComponent } from './sticynotes.component';

describe('SticynotesComponent', () => {
  let component: SticynotesComponent;
  let fixture: ComponentFixture<SticynotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SticynotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SticynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
