(function () {
    const oren = angular.module("oren");
    oren.service("WebPricingSvc", function () {
        this.PricingStructure = [
            {
                "product": "Small",
                "cost": 199,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "Medium",
                "cost": 350,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "Large",
                "cost": 599,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "Cloud XL Website & Hosting",
                "cost": 2150,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "Cloud XXL Website & Hosting",
                "cost": 3160,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "VPS MEGA Website & Hosting",
                "cost": 9160,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "VPS Website & Hosting",
                "cost": 12900,
                "image": "trendmicro/website-plans.png",
                "download": ""
            }
        ]
    });
}())