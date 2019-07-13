(function () {
    const oren = angular.module("oren");
    oren.controller("RenewalCtrl", [RenewalCtrl]);
    function RenewalCtrl() {
        this.isForm = true;
        this.isNotify = false;
        this.partnerImage = "img/partner.png";
        this.notification = "Your message has been succesfully sent.";
        this.title = "Buy/Renew Products";
        this.subscriptionLabel = "Subscription Email";
        this.section = "Product Activations";
        this.getInformation = function getInformation() {
            this.validate();
        }
        this.hideForm = function hideForm() {
            this.isForm = false;
            this.showNotification();
        };
        this.showNotification = function showNotification() {
            this.isNotify = true;
        }
        this.messageConfirmation = function () {
            swal("Confirmation", "About to get information regarding a service with email " + this.email, "success");
        }
        this.errorMessage = function () {
            swal("Technical Error", "Valid email required", "error");
        }
        this.validate = function () {
            if (!this.email && this.email.length < 5) {
                this.errorMessage();
            } else {
                this.messageConfirmation();
                this.hideForm();
                this.showNotification();
            }
        }
    }
}())