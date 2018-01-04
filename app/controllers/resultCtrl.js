angular.module('javascript-quiz')
    .controller('resultCtrl', resultController);
resultController.$inject = ['DataService', 'QuizMetrics'];
function resultController(DataService, QuizMetrics) {
    var vm = this;
    vm.DataService = DataService;
    vm.QuizMetrics = QuizMetrics;
    vm.activeQuestion = 0;


}