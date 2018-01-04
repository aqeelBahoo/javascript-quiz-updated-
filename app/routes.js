angular.module('javascript-quiz')
    .config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('user-form');

        $stateProvider
            .state('user-form', {
                url: '/user-form',
                templateUrl: 'views/user-form.html',
                controller: 'formCtrl',
                controllerAs: 'form'
            })
            .state('quiz', {
                url: '/quiz',
                templateUrl: 'views/quiz.html',
                controller: 'quizCtrl',
                controllerAs: 'quiz'
            })
            .state('result', {
                url: '/result',
                templateUrl: 'views/result.html',
                controller: 'resultCtrl as result'
            })
    })