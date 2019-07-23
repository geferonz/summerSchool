(function () {
    'use strict';
    angular.module('myApp')
        .controller('TicketSelectController', ['$scope', '$location', '$log', 'TicketService', 'ToasterService', TicketSelectController]);

    function TicketSelectController($scope, $location, $log, TicketService, ToasterService) {
        var vm = this;

        TicketService.getAllTickets()
            .then(getTicketsSuccess, null)
            .catch(getTicketsError);

        $scope.deleteTicket = function(id){
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
            $scope.allTickets = response.data;
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
            for (var i = 0; i < $scope.allTickets.length; i++) {
                $scope.myEl = angular.element('#' + $scope.allTickets[i]._id);
                
                if(title === 'none' && condition === 'none') {
                    $scope.search = '';
                    $scope.myEl.removeClass('d-none');
                }
                else if(title === 'assignee' && condition !== $scope.allTickets[i].assignee) {
                    $scope.myEl.addClass('d-none');
                }
                else if(title === 'status' && condition !== $scope.allTickets[i].status) {
                    $scope.myEl.addClass('d-none');
                }
                else if(title === 'priority' && condition !== $scope.allTickets[i].priority) {
                    $scope.myEl.addClass('d-none');
                }
                else if(title === 'search' && condition === $scope.search) {
                    if(!$scope.allTickets[i].title.includes(condition)) {
                        $scope.myEl.addClass('d-none');
                    }
                    else {
                        $scope.myEl.removeClass('d-none');
                    }
                }
                else {
                    $scope.myEl.removeClass('d-none');
                }
            }
        }
    }
}());