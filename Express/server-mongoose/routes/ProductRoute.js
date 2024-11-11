const express = require('express')
const router = express.Router();
const Products = require('../models/ProductsModel')
const validate = require('../config/auth')
router.get('/all', async (req, res) => {
    try {
        const products = await Products.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/add', validate, async (req, res) => {
    try {
        const newproduct = new Products(req.body)
        const { title, img, price } = newproduct
        if (!title || !img || !price) {
            res.status(400).json({ message: "All fields required" })
        }
        await newproduct.save()
        res.status(200).json(newproduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', validate, async (req, res) => {
    try {
        const id = req.params.id
        const existingproduct = await Products.findOne({ _id: id })
        if (!existingproduct) {
            res.status(404).json({ message: "Product not found" })
        }
        const updatedproduct = await Products.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', validate, async (req, res) => {
    try {
        const id = req.params.id
        const existingproduct = await Products.findOne({ _id: id })
        if (!existingproduct) {
            res.status(404).json({ message: "Product not found" })
        }
        await Products.findByIdAndDelete(id)
        res.status(200).json({ message: "Product Deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router
