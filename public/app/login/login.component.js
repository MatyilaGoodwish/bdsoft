(function(){
    const oren = angular.module("oren");
    oren.component("login", {
        templateUrl: "app/login/login.html",
        controller: 
        function loginController(accountSvc){
            this.loginClient = function(){
                accountSvc.login(this.email,this.password);
            }
        }
    })
}())

