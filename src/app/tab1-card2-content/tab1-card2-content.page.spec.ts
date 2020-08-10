import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab1Card2ContentPage } from './tab1-card2-content.page';

describe('Tab1Card2ContentPage', () => {
  let component: Tab1Card2ContentPage;
  let fixture: ComponentFixture<Tab1Card2ContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1Card2ContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Card2ContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
