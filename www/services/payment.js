angular.module('starter').factory('paymentService', function(){

    var service = {

        model:{
            friends:[
                {
                    id:'1',
                    name:'Franci',
                    surname:'Zidar',
                    payed:0,
                    borrowed:0,
                    balance:0
                },
                {
                    id:'2',
                    name:'Marko',
                    surname:'Skace',
                    payed:0,
                    borrowed:0,
                    balance:0
                },
                {
                    id:'3',
                    name:'Gorazd',
                    surname:'Slana',
                    payed:0,
                    borrowed:0,
                    balance:0
                },
                {
                    id:'4',
                    name:'Marija',
                    surname:'Skocir',
                    payed:0,
                    borrowed:0,
                    balance:0
                }
            ]
        },
        /**
         *
         * @param selectedFriendId
         */
        addPayment:function(selectedFriendId){

            var sum = 0;

            angular.forEach(service.model.friends, function(friend, index){

                if(friend.id !== selectedFriendId) {

                    if(typeof friend.currentAmount === 'number') {

                        sum += friend.currentAmount;
                        friend.borrowed += friend.currentAmount;

                    }

                }

                friend.currentAmount = 0;

            });

            angular.forEach(service.model.friends, function(friend, index){


                if(friend.id === selectedFriendId){

                    console.log('Friend: '+friend.name+' is paying')

                    friend.payed += sum;

                }

            });

            angular.forEach(service.model.friends, function(friend, index){

                friend.balance = friend.payed - friend.borrowed;

            });



        }
        /*
        getFriendsByDebt:function(){

            function propComparator(prop) {
                return function(a, b) {
                    return a[prop] - b[prop];
                }
            }

            service.model.friends.sort(propComparator('amountOwed'));

            var owesNothing = service.model.friends[0];
            owesNothing.owes = 0;

            console.log(owesNothing);

            angular.forEach(service.model.friends, function(friend, index){

                if(index > 0){

                    friend.owes = friend.amountOwed - owesNothing.amountOwed;

                }

            });

            return service.model.friends;

        }*/

    };

    return service;

});
