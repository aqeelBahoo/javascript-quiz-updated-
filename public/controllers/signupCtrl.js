angular.module('javascript-quiz')
    .controller('signupCtrl', signupController)

signupController.$inject = ['$http', '$state', '$timeout', 'UserAuth']

function signupController($http, $state, $timeout, UserAuth) {
    var vm = this;
    vm.createAccount = createAccount;
    vm.errorMsg = false;
    vm.successMsg = false;


    function createAccount(userData, forminvalid) {
        if (forminvalid) return;
        $http.post('/user', userData).then(function (data) {
            console.log(data)
            if (data.data.success) {
                vm.successMsg = data.data.message;
                vm.errorMsg = false;
                $timeout(function () {
                    $state.go('quiz', ({id: 1}));
                }, 1000)
                UserAuth.isUserAuthenticate = true;
                UserAuth.setToken(data.data.token);
            }
            else {
                vm.errorMsg = data.data.message;
                vm.successMsg = false;
            }
        })
    }
}
