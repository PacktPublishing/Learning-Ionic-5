import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventoryEditorPage } from './inventory-editor.page';

describe('InventoryEditorPage', () => {
  let component: InventoryEditorPage;
  let fixture: ComponentFixture<InventoryEditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryEditorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
