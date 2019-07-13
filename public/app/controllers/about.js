(function () {
    const aboutController = angular.module("oren");
    aboutController.controller("AboutCtrl", [AboutCtrl]);
    function AboutCtrl() {
        this.title = "About Us";
    }
}())