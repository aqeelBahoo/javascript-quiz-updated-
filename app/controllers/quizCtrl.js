angular.module('javascript-quiz')
    .controller('quizCtrl', quizController);

quizController.$inject = ['DataService'];

function quizController(DataService) {
    var vm = this;
    vm.DataService = DataService;
    vm.selectedAnswer = selectedAnswer;
    vm.questionAnswered = questionAnswered;
    vm.setActiveQuestion = setActiveQuestion;

    vm.activeQuestion = 0;
    var numAnsweredQuestions = 0;

    function selectedAnswer(index) {
        DataService.quizQuestions[vm.activeQuestion].selected = index;
        console.log(DataService.quizQuestions[vm.activeQuestion].selected);
    }

    function questionAnswered() {
        if (DataService.quizQuestions[vm.activeQuestion].selected !== null) {
            numAnsweredQuestions++;
            if (numAnsweredQuestions >= DataService.quizQuestions.length) {
                //finalize the quiz
            }
        }
        setActiveQuestion();
    }

    function setActiveQuestion() {
        var breakout = true;

        while (breakout){
            vm.activeQuestion = vm.activeQuestion < DataService.quizQuestions.length-1 ? ++vm.activeQuestion: 0;
            if(DataService.quizQuestions[vm.activeQuestion].selected == null){
                breakout = false;
            }

        }


    }

}