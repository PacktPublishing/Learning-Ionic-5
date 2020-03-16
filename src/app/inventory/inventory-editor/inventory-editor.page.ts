import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-inventory-editor',
    templateUrl: './inventory-editor.page.html',
    styleUrls: ['./inventory-editor.page.scss'],
})
export class InventoryEditorPage implements OnInit {

    constructor(private route: ActivatedRoute) {
        if (this.route.snapshot.paramMap.get('id')) {
            // editing an existing record
            console.log(this.route.snapshot.paramMap.get('id'));
        } else {
            // creating a new record
            console.log('New record!');
        }
    }

    ngOnInit() {
    }

}
