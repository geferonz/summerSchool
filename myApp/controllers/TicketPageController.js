(function () {
    'use strict';
    angular.module('myApp')
        .controller('TicketPageController', ['$routeParams', '$scope', '$location', 'TicketService', '$log', 'ToasterService', TicketPageController]);



        function TicketPageController($routeParams, $scope, $location, TicketService, $log, ToasterService) {
            var vm = this;

            $log.debug($routeParams.id);

            TicketService.getTicketById($routeParams.id)
            .then(getTicketSuccess, null)
            .catch(getTicketError);

            function getTicketSuccess(response) {
                $log.debug(response);
                vm.ticket = response.data;
                ToasterService.getConfiguredToaster('success', 'Success', 'Successfully got a ticket');
            }

            function getTicketError(error) {
                $log.debug(error);
                ToasterService.getConfiguredToaster('error', 'Error', 'Failed to load a ticket');
            }

            vm.updateTicket = function() {
                vm.ticket.text += $scope.ticket.newtext;
                //console.log('Updated ticket ')
                //console.log(vm.ticket);
                TicketService.updateTicket($routeParams.id, vm.ticket)
                .then(updateTicketSuccess, null)
                .catch(updateTicketError);
                $location.path('/home');
            }
    
            vm.cancelUpdate = function() {
                $location.path('/home');
            }
    
            function updateTicketSuccess(response) {
                $log.debug(response);
                vm.ticket = response.data;
                ToasterService.getConfiguredToaster('success', 'Success', 'Successfully update ticket');
            }
    
            function updateTicketError(error) {
                $log.debug(error);
                ToasterService.getConfiguredToaster('error', 'Error', 'Failed to update ticket');
            }

        }

}());