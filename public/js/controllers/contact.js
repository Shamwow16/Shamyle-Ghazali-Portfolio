(function() {
    angular
        .module('portfolio')
        .controller('formCtrl', formController);

    formController.$inject = ['$http']

    function formController($http) {
        var vm = this;
        /*     vm.template = { name: 'navigation.html', url: 'navigation.html' };
         */
        vm.name = '';
        vm.emailAddress = '';
        vm.message = '';
        vm.submitContactForm = submitContactForm;
        vm.data = {
            name: vm.name,
            emailAddress: vm.emailAddress,
            message: vm.message
        };
        vm.hasSubmitted = false;


        function submitContactForm() {
            console.log(vm.message);
            vm.hasSubmitted = true;
            vm.data.name = vm.name;
            vm.data.emailAddress = vm.emailAddress;
            vm.data.message = vm.message;

            $http.post("/submit", vm.data).success(function(data, status) {
                console.log(data);
            }).error(function(response) {
                console.log(response);
            });
        }
    }
})();
