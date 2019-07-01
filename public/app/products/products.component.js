(function() {
  const oren = angular.module("oren");
  oren.component("products", {
    templateUrl: "app/products/products.html",
    controller: [
      "ProductsSvc",
      function ProductsCtrl(ProductsSvc) {
        this.shoppingItems = ProductsSvc.ProductsCatalogue;
      }
    ]
  });
})();
