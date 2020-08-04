import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2Category1ContentPage } from './tab2-category1-content.page';

describe('Tab2Category1ContentPage', () => {
  let component: Tab2Category1ContentPage;
  let fixture: ComponentFixture<Tab2Category1ContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2Category1ContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Category1ContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
