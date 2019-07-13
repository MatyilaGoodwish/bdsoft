(function () {
    const OrderWebsites = angular.module("oren");
    OrderWebsites.controller("WebsitesCtrl", ["WebPricingSvc", WebsitesCtrl]);
    function WebsitesCtrl(WebPricingSvc) {
        this.shoppingItems = WebPricingSvc.PricingStructure;
    }
    
}())