import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutreachComponent } from './outreach.component';

describe('OutreachComponent', () => {
  let component: OutreachComponent;
  let fixture: ComponentFixture<OutreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutreachComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
