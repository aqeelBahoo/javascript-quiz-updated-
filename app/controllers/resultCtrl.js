angular.module('javascript-quiz')
    .controller('resultCtrl', resultController);
resultController.$inject = ['DataService', 'QuizMetrics'];
function resultController(DataService, QuizMetrics) {
    var vm = this;
    vm.DataService = DataService;
    vm.QuizMetrics = QuizMetrics;
    vm.selectQuestion = selectQuestion;
    vm.activeQuestion = 0;


    function selectQuestion(index){
        vm.activeQuestion = index;
    }


}