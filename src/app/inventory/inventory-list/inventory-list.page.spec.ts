import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventoryListPage } from './inventory-list.page';

describe('InventoryListPage', () => {
  let component: InventoryListPage;
  let fixture: ComponentFixture<InventoryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
