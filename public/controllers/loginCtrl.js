angular.module('javascript-quiz')
    .controller('formCtrl', formController)

formController.$inject = ['$stateParams', '$state', '$http', 'UserAuth'];
function formController($stateParams, $state, $http, UserAuth) {
    var vm = this;
    vm.userDetails = userDetails;
    vm.errorMsg = false;
    vm.successMsg = false;

    function userDetails(user, userform) {
        if (!userform) {
            return;
        }
        else {
            $http.post('/authenticate', user).then(function (data) {
                console.log(data);
                if (data.data.success) {
                    vm.successMsg = data.data.message;
                    vm.errorMsg = false;
                    UserAuth.isUserAuthenticate = true;
                    UserAuth.setToken(data.data.token);
                    $state.go('quiz', ({id: 1}));
                }
                else {

                    vm.errorMsg = data.data.message;
                    vm.successMsg = false;
                }
                console.log(vm.errorMsg)
                console.log(vm.successMsg)
            })

        }

    }
}