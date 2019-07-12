(function () {
    const oren = angular.module("oren");
    oren.service("WebPricingSvc", function () {
        this.PricingStructure = [
            {
                "product": "Secured S Website & Hosting",
                "cost": 460,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "Secured M Website & Hosting",
                "cost": 960,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "Secured L Website & Hosting",
                "cost": 1260,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "Secured XL Website & Hosting",
                "cost": 2150,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "Secured XXL Website & Hosting",
                "cost": 3160,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "Secured MEGA Website & Hosting",
                "cost": 9160,
                "image": "trendmicro/website-plans.png",
                "download": ""
            },
            {
                "product": "Secured Cloud Website & Hosting",
                "cost": 12900,
                "image": "trendmicro/website-plans.png",
                "download": ""
            }
        ]
    });
}())