angular.module('starter').factory('contactsService', function($http){

    console.log('Service init');

    var service = {

        model:{
            list:[],
            item:null,
            activeFriends:[]
        },
        addToActiveFriends:function(contact){

            service.model.activeFriends.push(contact);

        },
        getContacts:function(){

            return new Promise(function(resolve, reject){

                var options      = new ContactFindOptions();
                options.multiple = true;
                options.desiredFields = [navigator.contacts.fieldType.id, navigator.contacts.fieldType.name, navigator.contacts.fieldType.displayName];
                options.hasPhoneNumber = true;
                var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
                navigator.contacts.find(fields, function(contacts){

                    console.log(contacts);
                    service.model.list = contacts;
                    resolve(contacts);

                }, function(contactError){
                    reject(contactError);
                }, options);

            });

        }

    };

    return service;

});
