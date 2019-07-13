(function () {
    const ContactApp = angular.module("oren");
    ContactApp.controller("ContactCtrl", [ContactCtrl]);
    function ContactCtrl() {
        this.phone = "+27 (087) 057-1581",
        this.fax = "086 606 4081";
        this.email = "gsm@bdsoft.co.za";
        this.tracing = "info@bdsoft.co.za";
        this.website = "https://www.bdsoft.co.za";
    }
}())