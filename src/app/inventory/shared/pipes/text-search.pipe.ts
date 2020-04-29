import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'textSearch'
})
export class TextSearchPipe implements PipeTransform {

    transform(items: any[], inventorySearchText: string): any {
        if (!items) {
            return [];
        }

        if (!inventorySearchText) {
            return items;
        }

        inventorySearchText = inventorySearchText.toLocaleLowerCase();

        return items.filter(it => {
            return it.title.toLowerCase().includes(inventorySearchText) || it.description.toLowerCase().includes(inventorySearchText);
        });
    }
}
