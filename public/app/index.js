const oren = angular.module("oren", ["ngRoute"])

.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
  }]);
/**
 * Configuration
 * Goodwish Matyila
 * Application Router 
 */
oren.config(["$routeProvider","$locationProvider",
function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", { 
        template: "<welcome></welcome>" 
    })
    .when("/login",{ 
        template: "<login></login>" 
    })
    .when("/dashboard", { 
        template: "<dashboard></dashboard>"
    })
    .when("/register", { 
        template: "<register></register>" 
    })
    .when("/activate", { 
        template: "<activation></activation>" 
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
    .otherwise({ 
        redirectTo: "/"
    });
}]);


oren.controller("members-menu", ["$scope", function($scope){
    let isUser = false; 
    addEventListener("hashchange", function(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                $scope.isUser = true;
            }else{
                $scope.isUser = false;
            }
        })
        $scope.$digest();
    })
}])
 

console.info("%cIf you looking here you should be working for us", "padding:2em;color:red;font-weight:900;font-size:20px");
console.info("%csend CV goodwish@axxess.co.za", "padding:2em;color:green;font-weight:900;font-size:20px");












 
 
 