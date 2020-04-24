import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsalePage } from './newsale.page';

describe('NewsalePage', () => {
  let component: NewsalePage;
  let fixture: ComponentFixture<NewsalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
