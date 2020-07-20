(function() {
    'use strict';
    angular.module('common', [])
        .constant('APIBasePath', 'https://karimlab2-coursera.herokuapp.com')
        .config(config);
    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }
})();
// https://anantajitjg-ng-courseapp.herokuapp.com
