angular.module('javascript-quiz')
    .controller('resultCtrl', resultController);
resultController.$inject = ['DataService', 'QuizMetrics', '$state'];
function resultController(DataService, QuizMetrics, $state) {
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
        $state.go('user-form');
    }

}