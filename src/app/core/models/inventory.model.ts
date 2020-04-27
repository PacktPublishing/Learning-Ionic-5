export class InventoryItem {
    _id: string;
    title: string;
    description: string;
    qty: number;
    location: string;
    purchasePrice: number;
    resalePrice: number;
    images: Array<string>;
    dateCreated: Date;
    modelNo: string;
    serialNo: string;
    notes: string;

    constructor() {
        this.purchasePrice = 0.00;
        this.resalePrice = 0.00;
        this.qty = 1;
    }
}
