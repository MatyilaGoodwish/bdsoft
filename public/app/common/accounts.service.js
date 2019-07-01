(function() {
  const oren = angular.module("oren");
  oren.service("accountSvc", function($location) {
    this.login = async function (email, password) {
      try{
        let user = await firebase.auth().signInWithEmailAndPassword(email, password);
        if(user){
          location.replace("/dashboard");
        }
      }catch(error){
        swal("Login Issue", error.message, "error");
      }
    };
  });
})();
