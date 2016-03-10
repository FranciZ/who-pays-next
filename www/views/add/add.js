angular.module('starter').controller('AddCtrl', function(
    $scope,
    $timeout,
    $state,
    contacts,
    paymentService,
    contactsService){

    $scope.contacts = contactsService.model.list;
    $scope.activeFriends = contactsService.model.activeFriends;

    $scope.friendModel = {
          selectedFriend: { }
    };

    $scope.friends = paymentService.model.friends;

    $scope.onPayerSelect = function(selectedFriend){

        console.log($scope.friendModel.selectedFriend);

    };

    $scope.onFriendSelect = function(){

        var payingFor;

        angular.forEach($scope.contacts, function(contact, index){

            if($scope.friendModel.payingFor === contact.id){

                payingFor = contact;

            }

        });

        if(payingFor) {
            contactsService.addToActiveFriends(payingFor);
        }

    };

    $scope.addPayment = function(){

        paymentService.addPayment($scope.friendModel.selectedFriend);

        console.log($scope.friends);

        $state.go('app.home');

    };

});
