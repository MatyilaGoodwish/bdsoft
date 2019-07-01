(function(){
    const oren = angular.module("oren", ["ngRoute"]);
    oren.config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
        $compileProvider.commentDirectivesEnabled(false);
        $compileProvider.cssClassDirectivesEnabled(false);
      }]);
}())













 
 
 