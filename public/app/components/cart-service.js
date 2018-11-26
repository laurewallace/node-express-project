"use strict";
function CartService($http) {
    const self = this;
    self.getAllItems = () => {
        return $http({
            url: "/items",
            method: "GET"        
        });
    };
    self.newItem = (newItem) => {
        return $http({
            url: "/items",
            method: "POST",
            data: newItem
        });
    };
    self.removeItem = (id) => {
        return $http({
            url: `/items/${id}`,
            method: "DELETE"
        });
    };
    self.updateItem = (item) => {
        return $http({
            url: `/items/${item.id}`,
            method: "PUT",
            data: item
        });
    };
}

angular
    .module("App")
    .service("CartService", CartService);