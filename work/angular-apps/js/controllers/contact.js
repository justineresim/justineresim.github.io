function ContactController($scope) {

    $scope.template = 'contacts-list.html';
    $scope.editValue;

    $scope.contacts = [
        {
            firstName: 'Justine', 
            lastName: 'Lileikis',
            number: '226-688-8664',
            email: 'justine.lileikis@autodata.net'
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            number: '226-545-4359',
            email: 'john.doe@autodata.net'
        },
        {
            firstName: 'Julie',
            lastName: 'Banks',
            number: '519-123-0983',
            email: 'juliajulia@hotmail.com'
        }
    ];
    
    //clear 
    $scope.clearAll = function() {
        $scope.contacts = [];
    }
    
    //list/search view 
    $scope.listView = function() {
        $scope.template = 'contacts-list.html';
    }

    $scope.remove = function(item) {
        $scope.contacts.splice(item, 1);
    }

    $scope.edit = function(item) {
        $scope.editValue = item;
        $scope.editContact = $scope.contacts[item];
        $scope.template = 'contacts-edit-form.html';
        $scope.clearSearch();
    }
    
    //edit contact view 
    $scope.updateContact = function(contact) {
        $scope.contacts[$scope.editValue] = contact;
        console.log(contact);
        console.log($scope.contacts[$scope.editValue]);
        $scope.template = 'contacts-list.html';
    }
    
    //add contact
    $scope.addForm = function() {
        $scope.template = 'contacts-add-form.html';
    }

    $scope.submitContact = function(contact) {
        $scope.contacts.push(contact);
        $scope.template = 'contacts-list.html';
    }

    
    

}
