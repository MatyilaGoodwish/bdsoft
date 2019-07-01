(function() {
  const oren = angular.module("oren");
  oren.component("activation", {
    templateUrl: "app/activations/activation.html",
    controller: [
      "$scope",
      "$location",
      function($scope, $location) {
        let client = {};
        $scope.client = client;
        $scope.process = function() {
          firebase.auth().onAuthStateChanged(user => {
            if (user) {
              firebase
                .firestore()
                .collection("Accounts")
                .doc(user.uid)
                .set({
                  name: $scope.client.firstname,
                  lastname: $scope.client.lastname,
                  phone: $scope.client.phone
                })
                .then(success => {
                  swal(
                    "Account Approved",
                    "Your account has been pre-approved",
                    "success"
                  );
                })
                .catch(error => {
                  swal("Network Issues", "Slow internet detected", "info");
                });
            }
          });
        };
      }
    ]
  });
})();
