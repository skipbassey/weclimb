import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApptTimesComponent } from './appt-times.component';

describe('ApptTimesComponent', () => {
  let component: ApptTimesComponent;
  let fixture: ComponentFixture<ApptTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptTimesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApptTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
