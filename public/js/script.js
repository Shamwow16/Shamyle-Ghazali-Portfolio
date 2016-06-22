(function() {
    angular
        .module('portfolio', [])
        .controller('portfolioCtrl', portfolioController);

    function portfolioController() {
        var vm = this;
        vm.navTemplate = { name: 'navigation.html', url: 'navigation.html' };
        vm.footerTemplate = { name: 'footer.html', url: 'footer.html' };

    }

})();
