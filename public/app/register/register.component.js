(function() {
  const oren = angular.module("oren");
  oren.component("register", {
    templateUrl: "app/register/register.html",
    controller: function registerController($location) {
      this.registerClient = function() {
        if (this.client.password.length < 6 && this.client.password2.length < 6 ) {
          swal("Fix Password", "Password is too short try longer password", "error");
        } else if (this.client.password !== this.client.password2) {
          swal("Match Passwords", "Passwords do not match!", "error");
        } else if (this.client.email === undefined) {
          swal("Invalid Email", "Your email is invalid", "error");
        } else {
          firebase
            .auth()
            .createUserWithEmailAndPassword(
              this.client.email,
              this.client.password
            )
            .then(user => {
              swal("Registration Success", "Your email has been succesfully registered pending activation", "success");
              $location.path("/dashboard").replace();
            })
            .catch(error => {
              swal("Technical Notice", "under upgrade", "info");
            });
        }
      };
    }
  });
})();
