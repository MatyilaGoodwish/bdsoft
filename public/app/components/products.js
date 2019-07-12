(function () {
    const oren = angular.module("oren");
    oren.component("products", {
        templateUrl: "app/views/downloads.html",
        controller: ["ProductsSvc", function ProductsCtrl(ProductsSvc) {
            this.title = "Find products by name";
            this.support = ProductsSvc.supportEmail;
            this.shoppingItems = ProductsSvc.ProductsCatalogue;
        }]
    });
}())