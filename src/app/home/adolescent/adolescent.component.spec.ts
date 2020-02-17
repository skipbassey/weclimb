import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdolescentComponent } from './adolescent.component';

describe('AdolescentComponent', () => {
  let component: AdolescentComponent;
  let fixture: ComponentFixture<AdolescentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdolescentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdolescentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
