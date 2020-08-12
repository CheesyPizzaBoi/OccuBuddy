import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2Category1ApplyPagePage } from './tab2-category1-apply-page.page';

describe('Tab2Category1ApplyPagePage', () => {
  let component: Tab2Category1ApplyPagePage;
  let fixture: ComponentFixture<Tab2Category1ApplyPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2Category1ApplyPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Category1ApplyPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
