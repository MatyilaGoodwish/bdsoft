(function() {
  const oren = angular.module("oren");
  oren.controller("members-menu", [
    "$scope",
    function($scope) {
      let isUser = false;
      addEventListener("hashchange", function() {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            $scope.isUser = true;
          } else {
            $scope.isUser = false;
          }
        });
        $scope.$digest();
      });
    }
  ]);

  console.info(
    "%cIf you looking here you should be working for us",
    "padding:2em;color:red;font-weight:900;font-size:20px"
  );
  console.info(
    "%csend CV goodwish@axxess.co.za",
    "padding:2em;color:green;font-weight:900;font-size:20px"
  );
})();
