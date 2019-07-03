(function() {
  const oren = angular.module("oren");
  oren.service("accountSvc", function($location) {
    this.login = async function (email, password) {
      try{
        let user = await firebase.auth().signInWithEmailAndPassword(email, password);
        if(user){
          $location.path("/dashboard").replace();
        }
      }catch(error){
        swal("Login Issue", error.message, "error");
      }
    };
  });
})();
