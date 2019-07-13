(function () {
    const oren = angular.module("oren", ["ngRoute"]);
    oren.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider
            .when("/", { 
                templateUrl: "app/views/welcome.html" 
            })
            .when("/tracing", { 
                templateUrl: "app/views/tracing.html" 
            })
            .when("/privacy", { 
                templateUrl: "app/views/privacy.html"
            })
            .when("/products", { 
                template: "<products></products>" 
            })
            .when("/websites", { 
                templateUrl: "app/views/websites.html",
                controller: "WebsitesCtrl"
            })
            .when("/renew", { 
                templateUrl: "app/views/renew.html",
                controller: "RenewalCtrl"
            })
            .when("/support", { 
                templateUrl: "app/views/contact.html",
                controller: "ContactCtrl"
            })
            .when("/about", {
                templateUrl: "app/views/about.html",
                controller: "AboutCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });
    }]);


    oren.controller("FooterController", FooterController);
    function FooterController() {
        this.copyrightYear = "2019";
        this.company = "BD Group (Pty)Ltd t/a BDSoft";
    }
}())