"use strict";
const express = require("express");
const cartRoutes = express.Router();

const cartItems = [
    {
        id: 0,
        product: "bananas",
        price: 0.50,
        quantity: 5
    },
    {
        id: 1,
        product: "dog food",
        price: 50,
        quantity: 1
    },
    {
        id: 2,
        product: "chicken",
        price: 6,
        quantity: 2
    },
]

cartRoutes.get("/cart-items", (req, res) => {
    res.json(cartItems);
});

module.exports = cartRoutes