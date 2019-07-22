(function () {
    'use strict';
    angular.module('myApp')
        .controller('TicketSelectController', ['$scope', '$location', '$log', 'TicketService', 'ToasterService', TicketSelectController]);

    function TicketSelectController($scope, $location, $log, TicketService, ToasterService) {
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
            ToasterService.getConfiguredToaster('success', 'Success', 'Successfully got all tickets');
        }

        function getTicketsError(error) {
            $log.debug(error);
            ToasterService.getConfiguredToaster('error', 'Error', 'Failed to load all tickets');
        }

        $scope.ticketsSearchFiltering = function() {
            filter('search', $scope.search);
        }

        $scope.ticketsStatusFiltering = function(title, condition) {
            filter(title, condition);
        }

        function filter(title, condition) {
            for (var i = 0; i < vm.allTickets.length; i++) {
                vm.myEl = angular.element('#' + vm.allTickets[i]._id);
                console.log(condition);
                if(title === 'none' && condition === 'none') {
                    $scope.search = '';
                    vm.myEl.removeClass('d-none');
                }
                else if(title === 'assignee' && condition !== vm.allTickets[i].assignee) {
                    vm.myEl.addClass('d-none');
                }
                else if(title === 'status' && condition !== vm.allTickets[i].status) {
                    vm.myEl.addClass('d-none');
                }
                else if(title === 'priority' && condition !== vm.allTickets[i].priority) {
                    vm.myEl.addClass('d-none');
                }
                else if(title === 'search' && condition === $scope.search) {
                    if(!vm.allTickets[i].title.includes(condition)) {
                        vm.myEl.addClass('d-none');
                    }
                    else {
                        vm.myEl.removeClass('d-none');
                    }
                }
                else {
                    vm.myEl.removeClass('d-none');
                }
            }
        }
    }
}());