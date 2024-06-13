import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenentComponent } from './componenent.component';

describe('ComponenentComponent', () => {
  let component: ComponenentComponent;
  let fixture: ComponentFixture<ComponenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
