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

    

    let documentHeader = document.querySelector("head");

    for (style in appStyles) {
        let styleRef = document.createElement("link");
        styleRef.href = appStyles[style];
        styleRef.rel = "stylesheet";
        documentHeader.appendChild(styleRef);
    }
   
}())













 
 
 