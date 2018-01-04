angular.module('javascript-quiz')
    .factory('QuizMetrics', QuizMetrics);

QuizMetrics.$inject = ['DataService'];

function QuizMetrics(DataService) {
    var metrics = {
        activeResult: activeResult,
        percentage: percentage,
        resetQuiz: resetQuiz,
        isError: false,
        activeQuestion: 0,
        numAnsweredQuestions: 0,
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
    }

    function percentage() {
        return metrics.correctAnswer / DataService.quizQuestions.length * 100;
    }

    function resetQuiz() {
        DataService.quizQuestions.forEach(function (questionAnswer) {
            questionAnswer.selected = null;
            questionAnswer.correct = null;
            metrics.correctAnswer = 0;
        })
        metrics.correctAnswer = 0;
        metrics.numAnsweredQuestions = 0;
        metrics.activeQuestion = 0;
    }

}