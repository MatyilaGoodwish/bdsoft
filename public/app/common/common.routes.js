(function() {
  const oren = angular.module("oren");
  /**
   * Configuration
   * Goodwish Matyila
   * Application Router
   */
  oren.config([
    "$routeProvider",
    "$locationProvider",
    function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true).hashPrefix("");
      $routeProvider
        .when("/", {
          template: "<welcome></welcome>"
        })
        .when("/login", {
          template: "<login></login>"
        })
        .when("/dashboard", {
          template: "<dashboard></dashboard>",
          
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
        
    }
  ]);
})();
