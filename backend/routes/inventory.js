const _ = require('lodash');
const checkAuth = require('../middleware/check-auth');
const express = require('express');
const Inventory = require('../models/inventory');
const router = express.Router();

router.get('/:user', checkAuth, async (request, response) => {
    try {
        const inventory = await Inventory.find({owner: request.params.user}).exec();
        await response.status(200).json({data: inventory});
    } catch (error) {
        await response.status(500).json({title: 'Error', message: 'Could not load inventory'});
    }
});

router.post('', checkAuth, async (request, response) => {
    const body = _.get(request, 'body');

    const inventory = new Inventory({
        userId: body.userId,
        title: body.title,
        description: body.description,
        qty: body.qty,
        location: body.location,
        purchasePrice: body.purchasePrice,
        resalePrice: body.resalePrice,
        images: body.images,
        dateCreated: body.dateCreated,
        modelNo: body.modelNo,
        serialNo: body.serialNo,
        notes: body.notes
    });

    try {
        const result = await inventory.save();
        await response.status(200).json({message: 'Inventory Created', result: result});
    } catch (error) {
        console.log(error);
        await response.status(500).json({message: 'Inventory Not Created', error: error});
    }
});

router.put('/:id', checkAuth, async (request, response) => {
    const body = _.get(request, 'body');
    const id = _.get(request, 'params.id');

    try {
        Inventory.findById(id, async (error, inventory) => {
            if (error) {
                throw new Error(error);
            }
            await inventory.set(body);
            const result = await inventory.save();
            await response.status(200).json({message: 'Inventory Updated', result: result});
        });
    } catch (error) {
        console.log(error);
        await response.status(500).json({message: 'Inventory Not Updated', error: error});
    }
});

router.delete('/:id', checkAuth, async (request, response) => {
    const id = _.get(request, 'params.id');

    try {
        const result = await Inventory.remove({_id: id});
        await response.status(200).json({message: 'Inventory Deleted', result: result});
    } catch (error) {
        console.log(error);
        await response.status(500).json({message: 'Inventory Not Deleted', error: error});
    }
});

module.exports = router;
