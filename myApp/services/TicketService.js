(function () {
    'use strict';

    angular.module('myApp')
        .factory('TicketService', ['$cookies', '$q', '$http', TicketService]);

        function TicketService ($cookies, $q, $http) {
            return {
                getAllTickets: getAllTickets,
                deleteTicket: deleteTicket,
                updateTicket: updateTicket,
                getTicketById: getTicketById
            };

            function getAllTickets () {
                return $http.get('http://localhost:8080/api/tickets/')
                .then(sendResponseData)
                .catch(sendErrorData)
            }

            function getTicketById(id) {
                  return $http.get(
                        'http://localhost:8080/api/tickets/' + id
                  )
                        .then(sendResponseData)
                        .catch(sendErrorData)
            }

            function updateTicket(id, data) {
                  return $http.put(
                        'http://localhost:8080/api/tickets/' + id,
                        data
                  )
                        .then(sendResponseData)
                        .catch(sendErrorData);
            }

            function deleteTicket(id) {
                  return $http.delete(
                        'http://localhost:8080/api/tickets/' + id
                  )
                        .then(sendResponseData)
                        .catch(sendErrorData)
            }

            function sendResponseData(response) {
                console.log(response);
                return response;
            }

            function sendErrorData(response) {
                console.log(response);
                return $q.reject('Error retrieving devices. HTTP status' + response.status)
            }
        }

}());
