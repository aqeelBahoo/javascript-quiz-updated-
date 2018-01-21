/**
 * Created by Home on 1/12/2018.
 */
angular.module('javascript-quiz')
    .factory('AdminAuth', adminAuthentication);

function adminAuthentication(){
    var obj = {
        admin: true
    };


    return obj;
}