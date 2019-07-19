(function () {
    'use strict';
    angular.module('myApp')
        .controller('TicketSelectController', ['$scope', '$location', '$log', 'TicketService', 'ToasterService', TicketSelect]);

    function TicketSelect($scope, $location, $log, TicketService, ToasterService) {
        var vm = this;

        TicketService.getAllTickets()
            .then(getTicketsSuccess, null)
            .catch(getTicketsError);

        vm.deleteTicket = function(id){
            TicketService.deleteTicket(id)
            .then(deleteTicketsSuccess, null)
            .catch(deleteTicketsError);

            function deleteTicketsSuccess(response) {
                $log.debug(response);
                TicketService.getAllTickets()
                .then(getTicketsSuccess, null)
                .catch(getTicketsError);
                ToasterService.getConfiguredToaster('success', 'Success', 'Successfully delete ticket');
            }
    
            function deleteTicketsError(error) {
                $log.debug(error);
                ToasterService.getConfiguredToaster('error', 'Error', 'Failed to delete ticket');
            }
        }

        function getTicketsSuccess(response) {
            $log.debug(response);
            vm.allTickets = response.data;
            console.log(vm.allTickets);
            ToasterService.getConfiguredToaster('success', 'Success', 'Successfully got all tickets');
        }

        function getTicketsError(error) {
            $log.debug(error);
            ToasterService.getConfiguredToaster('error', 'Error', 'Failed to load all tickets');
        }
    }
}());