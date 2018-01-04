angular.module('javascript-quiz')
    .factory('QuizMetrics', QuizMetrics)

QuizMetrics.$inject = ['DataService'];

function QuizMetrics(DataService) {
    var metrics = {
        activeResult: activeResult,
        percentage: percentage,
        correctAnswer: 0
    };


    return metrics;


    function activeResult() {
        DataService.quizQuestions.forEach(function (questionAnswer, index) {
            if (DataService.correctAnswers[index] == DataService.quizQuestions[index].selected) {
                metrics.correctAnswer++;
                DataService.quizQuestions[index].correct = true;
            }
            else {
                DataService.quizQuestions[index].correct = false;
            }
        })

        console.log(DataService.quizQuestions);
    }

    function percentage() {
       return  metrics.correctAnswer / DataService.quizQuestions.length * 100;
    }


}