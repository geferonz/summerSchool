;(function () {
    'use strict';
    angular.module('myApp')
        .controller('TicketCreateController', ['$scope', '$location', '$log', 'TicketService', 'ToasterService', TicketCreateController]);

    function TicketCreateController($scope, $location, $log, TicketService, ToasterService) {
        var vm = this;
        console.log($scope)
        console.log("ghe")
        $scope.createTicket = function() {
            // if(vm.angular.element(vm.angular.element($('#title')).val() === '') 
            //     || vm.angular.element(vm.angular.element($('#author')).val() === '') 
            //     || vm.angular.element(vm.angular.element($('#textMessage')).val() === '')) {
            //     console.log('1');
            //     console.log(vm.angular.element($('#title')).val());
            // }
            if(false) {
                TicketService.createTicket($scope.ticket)
                .then(createTicketSuccess, null)
                .catch(createTicketError);
                $location.path('/home');
            }
            console.log('Hi');
            $log.debug($scope);
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