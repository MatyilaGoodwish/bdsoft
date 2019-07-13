(function () {
    const oren = angular.module("oren");
    oren.component("products", {
        templateUrl: "app/views/downloads.html",
        controller: ["ProductsSvc", ProductsCtrl]
    });
    function ProductsCtrl(ProductsSvc) {
        this.title = "Find products";
        this.support = ProductsSvc.supportEmail;
        this.shoppingItems = ProductsSvc.ProductsCatalogue;
    }
}())