import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserAccountPage } from './user-account.page';

describe('UserAccountPage', () => {
  let component: UserAccountPage;
  let fixture: ComponentFixture<UserAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
