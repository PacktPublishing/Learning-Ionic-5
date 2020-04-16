const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const inventorySchema = new Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
    },
    description: {
        type: String
    },
    qty: {
        type: Number
    },
    location: {
        type: String
    },
    purchasePrice: {
        type: String
    },
    resalePrice: {
        type: String
    },
    images: {
        type: Array
    },
    dateCreated: {
        type: Date
    },
    modelNo: {
        type: String
    },
    serialNo: {
        type: String
    },
    notes: {
        type: String
    }
});

// Enable beautifying on this schema
inventorySchema.plugin(beautifyUnique);

module.exports = mongoose.model('Inventory', inventorySchema);
