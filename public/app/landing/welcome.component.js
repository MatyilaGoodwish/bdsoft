(function(){
    const oren = angular.module("oren");
    oren.component("welcome", {
        templateUrl: "app/landing/welcome.html",
        controller: function($scope,$location){
            $scope.loginShow = function() {
                return $location.path("/login");
            };
            $scope.registerShow = function() {
                return $location.path("/register");
            };
        }
    })
}())
