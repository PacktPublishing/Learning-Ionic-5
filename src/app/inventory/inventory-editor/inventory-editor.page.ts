import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InventoryService} from '../shared/services/inventory.service';
import {InventoryItem} from '../../core/models/inventory.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-inventory-editor',
    templateUrl: './inventory-editor.page.html',
    styleUrls: ['./inventory-editor.page.scss'],
})
export class InventoryEditorPage implements OnInit {

    private EDIT_TITLE = 'Edit Item';

    private CREATE_TITLE = 'New Item';

    public inventoryItem: InventoryItem;

    public inventoryForm: FormGroup;

    public pageTitle = '';

    constructor(private route: ActivatedRoute,
                private router: Router,
                private inventoryService: InventoryService,
                private formBuilder: FormBuilder,
                private navController: NavController,
                private loadingController: LoadingController) {

        if (this.route.snapshot.paramMap.get('id')) {
            this.pageTitle = this.EDIT_TITLE;
            this.inventoryItem = this.inventoryService.getInventoryItem(this.route.snapshot.paramMap.get('id'));
        } else {
            // creating a new record
            console.log('New record!');
            this.pageTitle = this.CREATE_TITLE;
            this.inventoryItem = new InventoryItem();
        }

        this.inventoryForm = formBuilder.group({
            title: [
                , Validators.compose([
                    Validators.required, Validators.minLength(3)
                ])
            ],
            modelNo: [''],
            serialNo: [''],
            qty: ['1'],
            purchasePrice: [0.00, Validators.required],
            resalePrice: [0.00],
            notes: ['']
        });

        this.populateForm();
    }

    public populateForm() {
        this
            .inventoryForm
            .patchValue({
                title: this.inventoryItem.title || '',
                modelNo: this.inventoryItem.modelNo || '',
                serialNo: this.inventoryItem.serialNo || '',
                qty: this.inventoryItem.qty || '',
                purchasePrice: this.inventoryItem.purchasePrice || 0.00,
                resalePrice: this.inventoryItem.resalePrice || 0.00,
                notes: this.inventoryItem.notes || ''
            });
    }

    ngOnInit() {

    }

    public addPhoto() {

    }

    public async saveItem() {
        if (this.inventoryForm.invalid) {
            return;
        } else {

            const loadingContainer = await this
                .loadingController
                .create({message: 'saving...'});

            await loadingContainer.present();

            setTimeout(value => {

                loadingContainer.dismiss();

                this.goBack();

            }, 2000);
        }
    }

    public cancel() {
        /* we put this in a function in case we want to do other
         things like log this action to analytics or prompt the user
         */
        this.goBack();
    }

    private goBack() {
        this.navController.navigateBack('/tabs/inventory');
    }
}
