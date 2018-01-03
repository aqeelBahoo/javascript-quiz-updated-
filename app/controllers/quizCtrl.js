angular.module('javascript-quiz')
    .controller('quizCtrl', quizController)

quizController.$inject = ['DataService']

function quizController(DataService) {
    var vm = this;
    vm.DataService = DataService;
    vm.selectedAnswer = selectedAnswer;
    vm.activeQuestion = 0;

    function selectedAnswer(index) {
        DataService.quizQuestions[vm.activeQuestion].selected = index;
        console.log(DataService.quizQuestions[vm.activeQuestion].selected)
    }

}