import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab1InterviewContentPage } from './tab1-interview-content.page';

describe('Tab1InterviewContentPage', () => {
  let component: Tab1InterviewContentPage;
  let fixture: ComponentFixture<Tab1InterviewContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1InterviewContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1InterviewContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
