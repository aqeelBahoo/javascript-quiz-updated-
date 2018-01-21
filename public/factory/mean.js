/**
 * Created by Home on 1/8/2018.
 */
angular.module('javascript-quiz')
    .factory("mean", mean)

function mean($http) {
    var obj = {
        post: function (userData) {
            return $http.post('saveUser', userData)
        }
    };

    return obj;
}