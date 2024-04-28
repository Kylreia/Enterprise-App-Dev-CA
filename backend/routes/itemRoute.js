import express from "express";
import { Item } from "../models/item_Model.js";

const router = express.Router();

// Route to save a new item
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.brand ||
            !request.body.price
        ) {
            return response.status(400).send({
                message: 'Fill out all required fields: Name, Brand, Price',
            });
        }
        const newItem = {
            name: request.body.name,
            brand: request.body.brand,
            price: request.body.price,
        };

        const item = await Item.create(newItem);

        return response.status(201).send(item);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get all items from database
router.get('/', async (request, response) => {
    try {
        const items = await Item.find({});

        return response.status(200).json({
            count: items.length,
            data: items
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to an item from database (search)
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const item = await Item.findById(id);

        return response.status(200).json(item);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update an item
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.brand ||
            !request.body.price
        ) {
            return response.status(400).send({
                message: 'Fill out all required fields: Name, Brand, Price',
            });
        }

        const { id } = request.params;

        const result = await Item.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Item not found' });
        }
        
        return response.status(200).send({ message: 'Details updated successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to delete an item
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Item.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Item not found' });
        }

        return response.status(200).send({ message: 'Item deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    };
});

export default router;