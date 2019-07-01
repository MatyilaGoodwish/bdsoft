(function() {
  const oren = angular.module("oren");
  oren.component("dashboard", {
    templateUrl: "app/dashboard/dashboard.html",
    controller: [
      "$location",
      function dashboardController($location) {
        this.logout = function() {
          firebase.auth().signOut();
          location.replace("/");
        };
        this.isUser = function(){
          firebase.auth().onAuthStateChanged(user => {
            if (!user) {
              location.replace("/");
            }
          });
        }
      }
    ]
  });
})();
