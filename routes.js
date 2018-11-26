"use strict";
const express = require("express");
const routes = express.Router();
const pool = require("./connection/connection.js")

routes.get("/items", (req, res) => {
    pool.query("select * from shopping_cart").then((result) => {
        res.json(result.rows)
    });
});

routes.put("/items/:id", (req, res) => {
    pool.query("update shopping_cart set product=$2::text, price=$3::decimal, quantity=$4::int where id=$1::int", [req.params.id, req.body.product, req.body.price, req.body.quantity]).then(() => {
        pool.query("select * from shopping_cart").then((result) => {
            res.json(result.rows)
        }); 
    });
});

routes.delete("/items/:id", (req, res) => {
    pool.query("delete from shopping_cart where id=$1::int", [req.params.id]).then(() => {
        pool.query("select * from shopping_cart").then((result) => {
            res.json(result.rows)
        });
    });
});

routes.post("/items", (req, res) => {
    pool.query("insert into shopping_cart(product, price, quantity)values($1::text, $2::decimal, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
        pool.query("select * from shopping_cart").then((result) => {
            res.json(result.rows)
        });
    });
})

module.exports = routes