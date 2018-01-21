angular.module('javascript-quiz')
    .controller('resultCtrl', resultController);
resultController.$inject = ['DataService', 'QuizMetrics', '$state', 'UserAuth'];
function resultController(DataService, QuizMetrics, $state, UserAuth) {
    var vm = this;
    vm.DataService = DataService;
    vm.QuizMetrics = QuizMetrics;
    vm.selectQuestion = selectQuestion;
    vm.reset = reset;
    vm.activeQuestion = 0;

    function selectQuestion(index) {
        vm.activeQuestion = index;
    }

    function reset() {
        QuizMetrics.resetQuiz();
        UserAuth.removeToken();
        UserAuth.isUserAuthenticate = false;
        UserAuth.removeToken();
        $state.go('login');
    }

}