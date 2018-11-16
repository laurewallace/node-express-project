"use strict";
const cart = {
    templateUrl: "/app/components/cart.html",
    controller: ["CartService", function(CartService) {
        const vm = this;
        // vm.getAllItems = () => {
            CartService.getAllItems().then((response) => {
                vm.cartItems = response.data;
                console.log(vm.cartItems)
            })
        // }
    }]

}

angular
    .module("App")
    .component("cart", cart);