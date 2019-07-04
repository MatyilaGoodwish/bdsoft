(function () {
    const oren = angular.module("oren");
    oren.component("renew", {
        templateUrl: "app/renewals/renew.html",
        controller: function () {
            this.isForm = true;
            this.isNotify = false;
            this.notification = "Your message has been succesfully sent. we will contact you within 2-3 business days.";
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
                swal("Confirmation","About to get information regarding a service with email " + this.email, "success");
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
    })
}())