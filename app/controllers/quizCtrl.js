angular.module('javascript-quiz')
    .controller('quizCtrl', quizController);

quizController.$inject = ['DataService', '$state', 'QuizMetrics', '$stateParams'];

function quizController(DataService, $state, QuizMetrics, $stateParams) {
    console.log($stateParams)
    var vm = this;
    vm.DataService = DataService;
    vm.QuizMetrics = QuizMetrics;
    vm.selectedAnswer = selectedAnswer;
    vm.questionAnswered = questionAnswered;
    vm.setActiveQuestion = setActiveQuestion;
    if($stateParams.id){
        QuizMetrics.activeQuestion = $stateParams.id-1;
    }
    function selectedAnswer(index) {
        DataService.quizQuestions[QuizMetrics.activeQuestion].selected = index;
    }

    function questionAnswered() {
        if (DataService.quizQuestions[QuizMetrics.activeQuestion].selected !== null) {
            //  numAnsweredQuestions++;
            QuizMetrics.numAnsweredQuestions++;
            if (QuizMetrics.numAnsweredQuestions >= DataService.quizQuestions.length) {
                //finalize the quiz
                QuizMetrics.isError = false;
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
            QuizMetrics.activeQuestion = QuizMetrics.activeQuestion < DataService.quizQuestions.length - 1 ? ++QuizMetrics.activeQuestion : 0;
            $state.go('quiz', ({id: QuizMetrics.activeQuestion+1}));

            if (QuizMetrics.activeQuestion == 0) {
                QuizMetrics.isError = true;
            }
            if (DataService.quizQuestions[QuizMetrics.activeQuestion].selected == null) {
                breakout = false;
            }
        }
    }

}