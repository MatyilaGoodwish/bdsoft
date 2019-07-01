(function () {
    const oren = angular.module("oren");
    oren.component("dashboard", {
        templateUrl: "app/dashboard/dashboard.html",
        controller: ["$location", function dashboardController($location) {
            this.logout = function () {
                firebase.auth().signOut();
                $location.path('/');
            }
            firebase.auth().onAuthStateChanged((user) => {
                if (!user) {
                    $location.path('/login');
                }
            });
        }]
    })
}())

