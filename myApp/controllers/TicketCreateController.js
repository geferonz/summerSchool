(function () {
    'use strict';
    angular.module('myApp')
        .controller('TicketCreateController', ['$scope', '$location', '$log', 'TicketService', 'ToasterService', TicketCreateController]);

    function TicketCreateController($scope, $location, $log, TicketService, ToasterService) {
        var vm = this;

        vm.createTicket = function() {
            if(angular.element(angular.element($('#title')).val() === '') 
                || angular.element(angular.element($('#author')).val() === '') 
                || angular.element(angular.element($('#textMessage')).val() === '')) {
                console.log('1');
            }
            TicketService.createTicket($scope.ticket)
            .then(createTicketSuccess, null)
            .catch(createTicketError);
            $location.path('/home');
        }

        vm.cancelCreation = function() {
            $location.path('/home');
        }

        function createTicketSuccess(response) {
            $log.debug(response);
            vm.ticket = response.data;
            ToasterService.getConfiguredToaster('success', 'Success', 'Successfully create ticket');
        }

        function createTicketError(error) {
            $log.debug(error);
            ToasterService.getConfiguredToaster('error', 'Error', 'Failed to create ticket');
        }
    }
}());