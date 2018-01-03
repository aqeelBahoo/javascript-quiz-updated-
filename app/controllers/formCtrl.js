angular.module('javascript-quiz')
    .controller('formCtrl', formController)

function formController($stateParams, $location) {
    console.log($stateParams);
    var vm = this;
    vm.userDetails = userDetails;


    function userDetails(user, userform) {
        if (!userform) {
            return;
        }
        $location.path('quiz');
    }

}