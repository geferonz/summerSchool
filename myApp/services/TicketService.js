(function () {
    'use strict';

    angular.module('myApp')
        .factory('TicketService', ['$cookies', '$q', '$http', TicketService]);

        function TicketService ($cookies, $q, $http) {
            const apiUrl = 'http://3.120.230.109:8080/api/tickets/';
            return {
                getAllTickets: getAllTickets,
                deleteTicket: deleteTicket,
                updateTicket: updateTicket,
                getTicketById: getTicketById,
                createTicket: createTicket
            };

            function getAllTickets () {
                return $http.get(apiUrl)
                .then(sendResponseData)
                .catch(sendErrorData)
            }

            function getTicketById(id) {
                  return $http.get(
                        apiUrl + id
                  )
                        .then(sendResponseData)
                        .catch(sendErrorData)
            }

            function updateTicket(id, data) {
                  return $http.put(
                        apiUrl + id,
                        data
                  )
                        .then(sendResponseData)
                        .catch(sendErrorData);
            }

            function createTicket(data) {
                return $http.post(
                  apiUrl,
                      data
                  )
                      .then(sendResponseData)
                      .catch(sendErrorData);
          }

            function deleteTicket(id) {
                  return $http.delete(
                        apiUrl + id
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
