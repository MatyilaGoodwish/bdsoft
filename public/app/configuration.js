(function () {
    const oren = angular.module("oren", ["ngRoute"]);
    oren.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider
            .when("/", { 
                template: "<welcome></welcome>" 
            })
            .when("/tracing", { 
                template: "<tracing></tracing>" 
            })
            .when("/privacy", { 
                template: "<privacy></privacy>" 
            })
            .when("/products", { 
                template: "<products></products>" 
            })
            .when("/websites", { 
                template: "<websites></websites>" 
            })
            .when("/renew", { 
                template: "<renew></renew> " 
            })
            .when("/support", { 
                template: "<support></support> " 
            })
            .when("/about", {
                template: "<about></about> "
            })
            .otherwise({
                redirectTo: "/"
            });
    }]);
}())