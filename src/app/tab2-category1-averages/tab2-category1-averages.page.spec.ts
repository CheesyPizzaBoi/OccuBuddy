import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2Category1AveragesPage } from './tab2-category1-averages.page';

describe('Tab2Category1AveragesPage', () => {
  let component: Tab2Category1AveragesPage;
  let fixture: ComponentFixture<Tab2Category1AveragesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2Category1AveragesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Category1AveragesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
