"use strict";
const cart = {
    templateUrl: "/app/components/cart.html",
    controller: ["CartService", function(CartService) {
        const vm = this;
        function updateItem(result) {
            vm.listOfItems = result.data
        };
        CartService.getAllItems().then((result) => {
            vm.listOfItems = result.data
        });
        vm.addItem = (newItem) => {
            CartService.newItem(newItem).then(updateItem)
        };
        vm.deleteItem = (id) => {
            CartService.removeItem(id).then(updateItem)
        };
        vm.updateItem = (item) => {
            CartService.updateItem(item).then(updateItem)
        };

    }]

};

angular
    .module("App")
    .component("cart", cart);