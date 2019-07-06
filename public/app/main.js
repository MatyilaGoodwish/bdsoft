(function () {
    const oren = angular.module("oren", ["ngRoute"]);
    let appStyles = [
        "css/styles.css",
        "css/ui.css"
    ];
    let documentHeader = document.querySelector("head");
    for (style in appStyles) {
        let styleRef = document.createElement("link");
        styleRef.href = appStyles[style];
        styleRef.rel = "stylesheet";
        documentHeader.appendChild(styleRef);
    }

    oren.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider
            .when("/", { template: "<welcome></welcome>" })
            .when("/privacy", { template: "<privacy></privacy>" })
            .when("/products", { template: "<products></products>" })
            .when("/websites", { template: "<websites></websites>" })
            .when("/renew", { template: "<renew></renew> " })
    }]);

    oren.component("welcome", {
        templateUrl: "app/landing/welcome.html",
        controller: function () { }
    });

    oren.component("products", {
        templateUrl: "app/products/products.html",
        controller: ["ProductsSvc", function ProductsCtrl(ProductsSvc) {
            this.title = "Find products by name";
            this.support = ProductsSvc.supportEmail;
            this.shoppingItems = ProductsSvc.ProductsCatalogue;
        }
        ]
    });


    oren.component("privacy", {
        templateUrl: "app/privacy/privacy-policy.html",
        controller: function () { }
    });

    oren.component("websites", {
        templateUrl: "app/websites/products.html",
        controller: ["WebPricingSvc", function shop(WebPricingSvc) {
            this.shoppingItems = WebPricingSvc.PricingStructure;
        }
        ]
    });


    oren.component("renew", {
        templateUrl: "app/renewals/renew.html",
        controller: function () {
            this.isForm = true;
            this.isNotify = false;
            this.partnerImage = "img/partner.png";
            this.notification = "Your message has been succesfully sent. we will contact you within 2-3 business days.";
            this.title = "Buy/Renew Products";
            this.subscriptionLabel = "Subscription Email";
            this.section = "Product Activations";
            this.getInformation = function getInformation() {
                this.validate();
            }
            this.hideForm = function hideForm() {
                this.isForm = false;
                this.showNotification();
            };
            this.showNotification = function showNotification() {
                this.isNotify = true;
            }
            this.messageConfirmation = function () {
                swal("Confirmation", "About to get information regarding a service with email " + this.email, "success");
            }
            this.errorMessage = function () {
                swal("Technical Error", "Valid email required", "error");
            }
            this.validate = function () {
                if (!this.email && this.email.length < 5) {
                    this.errorMessage();
                } else {
                    this.messageConfirmation();
                    this.hideForm();
                    this.showNotification();
                }
            }
        }
    });




    oren.service("ProductsSvc", function () {
        this.supportEmail = "/#/renew";
        this.ProductsCatalogue = [
            {
                product: "Trend Micro™ Maximum Security 2019",
                image: "trendmicro/maximum-security-product.png",
                description:
                    "Trend Micro™ Maximum Security 2019 provides complete multi-device protection against viruses, ransomware, dangerous websites, and identity thieves so you can enjoy your digital life safely.",
                download:
                    "http://files.trendmicro.com/products/Titanium/15.0/NABU/041719/TrendMicro_15.0_HE_Full.exe"
            },
            {
                product: "Trend Micro™ Internet Security 2019",
                image: "trendmicro/internet-security.png",
                description:
                    "Trend Micro™ Internet Security 2019 provides complete multi-device protection against viruses, ransomware, dangerous websites, and identity thieves so you can enjoy your digital life safely.",
                download:
                    "http://files.trendmicro.com/products/Titanium/15.0/NABU/041719/TrendMicro_15.0_MR_Full.exe"
            },
            {
                product: "Trend Micro™ Antivirus Plus Security 2019",
                image: "trendmicro/antivirus.png",
                description:
                    "Trend Micro™ Antivirus Plus Security 2019 provides complete protection against viruses, ransomware, dangerous websites, and identity thieves so you can enjoy your digital life safely.",
                download:
                    "http://files.trendmicro.com/products/Titanium/15.0/NABU/041719/TrendMicro_15.0_EL_Full.exe"
            },
            {
                product: "Trend Micro™ Antivirus for Mac 2019",
                image: "trendmicro/antivirus-mac.png",
                description:
                    "Trend Micro™ Antivirus for Mac 2019 provides privacy and protection from online threats and identity thieves so you can enjoy your digital life safely.",
                download:
                    "http://files.trendmicro.com/products/iTIS/9.0/Trend%20Micro%20Antivirus-9.0.1351.dmg"
            }
        ];
    });



    oren.service("WebPricingSvc", function () {
        this.PricingStructure = [
            {
                product: "Secured S Website & Hosting",
                cost: 460,
                image: "trendmicro/website-plans.png",
                download: ""
            },
            {
                product: "Secured M Website & Hosting",
                cost: 960,
                image: "trendmicro/website-plans.png",
                download: ""
            },
            {
                product: "Secured L Website & Hosting",
                cost: 1260,
                image: "trendmicro/website-plans.png",
                download: ""
            },
            {
                product: "Secured XL Website & Hosting",
                cost: 2150,
                image: "trendmicro/website-plans.png",
                download: ""
            },
            {
                product: "Secured XXL Website & Hosting",
                cost: 3160,
                image: "trendmicro/website-plans.png",
                download: ""
            },
            {
                product: "Secured MEGA Website & Hosting",
                cost: 9160,
                image: "trendmicro/website-plans.png",
                download: ""
            },
            {
                product: "Secured Cloud Website & Hosting",
                cost: 12900,
                image: "trendmicro/website-plans.png",
                download: ""
            }
        ];
    });
}())