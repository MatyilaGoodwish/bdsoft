(function(){
    const oren = angular.module("oren", ["ngRoute"]);
    oren.config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
        $compileProvider.commentDirectivesEnabled(false);
        $compileProvider.cssClassDirectivesEnabled(false);
    }]);
 
    let appStyles = [
        "css/styles.css",
        "css/ui.css"
    ];

    let dependencies = [
        "app/common/common.routes.js", 
        "app/dashboard/dashboard.component.js", 
        "app/login/login.component.js",
        "app/common/accounts.service.js",
        "app/privacy/privacy.component.js",
        "app/register/register.component.js",
        "app/activations/activations.component.js",
        "app/landing/welcome.component.js",
        "app/products/products.component.js",
        "app/products/products.service.js",
        "app/websites/websites.component.js",
        "app/websites/websites.service.js",
        "app/renewals/renew.component.js",
        "lib/swal.js"
    ];

    let documentHeader = document.querySelector("head");
    for (dependency in dependencies) {
        let dependant = document.createElement("script");
        dependant.src = dependencies[dependency];
        documentHeader.appendChild(dependant);
    }

    for (style in appStyles) {
        let styleRef = document.createElement("link");
        styleRef.href = appStyles[style];
        styleRef.rel = "stylesheet";
        documentHeader.appendChild(styleRef);
    }
   
}())













 
 
 