(function () {
    'use strict';
    angular.module('myApp')
        .controller('TicketSelectController', ['$scope', '$location', '$log', 'TicketService', 'ToasterService', TicketSelect]);

    function TicketSelect($scope, $location, $log, TicketService, ToasterService) {
        var vm = this;

        TicketService.getAllTickets()
            .then(getTicketsSuccess, null)
            .catch(getTicketsError);

        function getTicketsSuccess(response) {
            $log.debug(response);
            vm.allTickets = response;
            console.log(vm.allTickets);
            ToasterService.getConfiguredToaster('success', 'Success', 'Successfully got all tickets');
        }

        function getTicketsError(error) {
            $log.debug(error);
            ToasterService.getConfiguredToaster('error', 'Error', 'Failed to load all tickets');
        }
    }
}());