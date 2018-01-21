var app = angular.module('javascript-quiz')
app.config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise('login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'formCtrl',
            controllerAs: 'form',
            authentication: false
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'views/signup.html',
            controller: 'signupCtrl',
            controllerAs: 'signup',
            authentication: false
        })
        .state('quiz', {
            url: '/quiz/:id',
            templateUrl: 'views/quiz.html',
            controller: 'quizCtrl',
            controllerAs: 'quiz',
            authentication: true
        })
        .state('result', {
            url: '/result',
            templateUrl: 'views/result.html',
            controller: 'resultCtrl as result',
            authentication: true
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'views/admin/home.html',
            controller: 'resultCtrl as result',
            authentication: true
        })

    $locationProvider.html5Mode(true);

    //Protect authentication routes

    //end

})

app.run(function ($rootScope, $state, $transitions, UserAuth) {

    $transitions.onStart({}, function (transitions) {
        if (!UserAuth.isUserAuthenticate && transitions.to().authentication) {
            console.log("need to authenticate");
            return transitions.router.stateService.target('login');
        }
        /*else if (!UserAuth.resultActive && transitions.to().authentication) {
            console.log("cant access the result");
            return transitions.router.stateService.target('login');
        }*/
        // console.log(transitions.to().isAuthenticate );

        // console.log(transition.params().auth)
        // console.log(transition)
        /*console.log(transition.from())
         console.log(transition.to())*/
        /*
         console.log(
         "Successful Transition from " + transition.from().name +
         " to " + transition.to().name
         );*/
    });

    /*$transitions.onStart({}, function ($transition) {
     console.log("test2222")
     console.log($transition.$from());
     console.log($transition.$to());
     console.log($transition.params());
     });*/


    /* $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
     console.log("testtt222")
     $transitions.onSuccess({to: 'login'}, function (transition) {
     console.log("Now at 'login' state");
  ;   });

     $transitions.onSuccess({from: 'login'}, function (transition) {
     console.log("Left 'login' state");
     });

     $transitions.onError({from: 'home'}, function (transition) {
     console.log("Error while leaving 'home' state: " + transition.error());
     });

     })*/

    /* $rootScope.$on('$stateChangeStart',
     function(event, toState, toParams, fromState, fromParams, options){
     console.log(event)
     console.log(toState)
     console.log(toParams)
     console.log(fromState)
     console.log(fromParams)
     console.log(options)


     // event.preventDefault();
     // transitionTo() promise will be rejected with
     // a 'transition prevented' error
     })*/

    /*$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
     console.log('toState.name: ' + toState.name);
     console.log('fromState.name: ' + fromState.name)
     });*/

    /*$transitions.onStart( { }, function(trans) {
     var $state = trans.router.stateService;
     console.log(trans)
     });*/
    /*$rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
     console.log('toState.name: ' + toState.name);
     console.log('fromState.name: ' + fromState.name)
     });*/
});


/*app.run(function ($rootScope, $state) {
 console.log("test")
 $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
 console.log("test22");
 console.log(event)
 })
 })*/

/*
 app.run(['$rootScope', function ($rootScope) {
 $rootScope.$on('$locationChangeStart', function () {
 console.log("$locationChangeStart")
 console.log(arguments);
 });
 $rootScope.$on('$routeChangeStart', function () {
 console.log("$routeChangeStart")
 console.log(arguments);
 });
 }]);*/
