(function () {
    const oren = angular.module("oren");
    oren.component("tracing", {
        templateUrl: "app/views/tracing.html",
        controller: function contactController() {
            this.phone = "+27 (087) 057-1581",
                this.fax = "086 606 4081";
            this.email = "gsm@bdsoft.co.za";
            this.tracing = "info@bdsoft.co.za";
            this.website = "https://www.bdsoft.co.za";
        }
    })
}())