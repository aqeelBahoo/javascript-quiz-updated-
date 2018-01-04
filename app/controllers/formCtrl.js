angular.module('javascript-quiz')
    .controller('formCtrl', formController)

formController.$inject = ['$stateParams', '$state'];
function formController($stateParams, $state) {
    var vm = this;
    vm.userDetails = userDetails;

    function userDetails(user, userform) {
        if (!userform) {
            return;
        }
        $state.go('quiz', ({id: 1}));
    }
}