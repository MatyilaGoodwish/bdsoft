(function () {
    const oren = angular.module("oren");
    oren.service("accountSvc", function ($location) {
        this.login = function (email, password) {
            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    $location.path('/dashboard');
                })
                .catch(error => {
                    swal("Technical Notice", "under upgrade", "info");
                    //swal("Technical Error", error.message, "error");
                })
        };
    })
}())