import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTesterComponent } from './api-tester.component';

describe('ApiTesterComponent', () => {
  let component: ApiTesterComponent;
  let fixture: ComponentFixture<ApiTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiTesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
