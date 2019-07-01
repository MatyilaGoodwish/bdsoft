(function() {
  const oren = angular.module("oren");
  oren.component("websites", {
    templateUrl: "app/websites/products.html",
    controller: [
      "WebPricingSvc",
      function shop(WebPricingSvc) {
        this.shoppingItems = WebPricingSvc.PricingStructure;
      }
    ]
  });
})();
