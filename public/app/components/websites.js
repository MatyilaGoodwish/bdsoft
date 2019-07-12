(function () {
    const oren = angular.module("oren");
    oren.component("websites", {
        templateUrl: "app/views/websites.html",
        controller: ["WebPricingSvc", function websitesController(WebPricingSvc) {
            this.shoppingItems = WebPricingSvc.PricingStructure;
        }]
    });
}())