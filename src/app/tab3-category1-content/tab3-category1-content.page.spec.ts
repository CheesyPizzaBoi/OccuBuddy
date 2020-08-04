import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab3Category1ContentPage } from './tab3-category1-content.page';

describe('Tab3Category1ContentPage', () => {
  let component: Tab3Category1ContentPage;
  let fixture: ComponentFixture<Tab3Category1ContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3Category1ContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Category1ContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
