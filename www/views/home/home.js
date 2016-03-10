angular.module('starter').controller('HomeCtrl', function($scope, paymentService, contactsService){

    $scope.friends = contactsService.model.activeFriends;



});
