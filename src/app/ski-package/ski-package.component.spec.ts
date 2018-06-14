import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiPackageComponent } from './ski-package.component';

describe('SkiPackageComponent', () => {
  let component: SkiPackageComponent;
  let fixture: ComponentFixture<SkiPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
