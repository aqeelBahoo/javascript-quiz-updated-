angular.module('javascript-quiz')
    .controller('quizCtrl', quizController);

quizController.$inject = ['DataService', '$state', 'QuizMetrics'];

function quizController(DataService, $state, QuizMetrics) {
    var vm = this;
    vm.DataService = DataService;
    vm.selectedAnswer = selectedAnswer;
    vm.questionAnswered = questionAnswered;
    vm.setActiveQuestion = setActiveQuestion;
    vm.isError = false;

    vm.activeQuestion = 0;
    var numAnsweredQuestions = 0;

    function selectedAnswer(index) {
        DataService.quizQuestions[vm.activeQuestion].selected = index;
    }

    function questionAnswered() {
        if (DataService.quizQuestions[vm.activeQuestion].selected !== null) {
            numAnsweredQuestions++;
            if (numAnsweredQuestions >= DataService.quizQuestions.length) {
                //finalize the quiz
                vm.isError = false;
                QuizMetrics.activeResult();
                $state.go('result');
                return;
            }
        }
        setActiveQuestion();
    }

    function setActiveQuestion() {
        var breakout = true;
        while (breakout) {
            vm.activeQuestion = vm.activeQuestion < DataService.quizQuestions.length - 1 ? ++vm.activeQuestion : 0;
            if (vm.activeQuestion == 0) {
                vm.isError = true;
            }
            if (DataService.quizQuestions[vm.activeQuestion].selected == null) {
                breakout = false;
            }
        }
    }

}