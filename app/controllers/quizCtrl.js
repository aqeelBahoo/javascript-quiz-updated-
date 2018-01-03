angular.module('javascript-quiz')
    .controller('quizCtrl', quizController)

quizController.$inject = ['DataService']

function quizController(DataService) {
    var vm = this;
    vm.DataService = DataService;
    vm.activeQuestion = 0;

}