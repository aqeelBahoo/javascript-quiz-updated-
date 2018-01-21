/**
 * Created by Home on 1/12/2018.
 */
angular.module('javascript-quiz')
    .factory('UserAuth', UserAuth);

function UserAuth() {
    var obj = {
        setToken: setToken,
        getToken: getToken,
        removeToken: removeToken,
        isUserAuthenticate: false,
        resultActive: false

    };
    return obj;

    function setToken(token) {
        localStorage.setItem('userToken', JSON.stringify(token));
    }

    function getToken() {
        var token = JSON.parse(localStorage.getItem('userToken'));
        if (token) {
            return token;
        }
        return false;
    }

    function removeToken() {
        localStorage.removeItem('userToken');
    }

}
