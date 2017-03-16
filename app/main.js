import angular from "angular";
import router from "angular-ui-router"

import template from './helloTemplate.html';
import toggleTemplate from "./toggleTemplate.html";
import segment_one from "./components/segment_one.js";
import computer_detail from "./catagories/computer_detail.js"


let app = angular.module("myApp", [router, segment_one.name, computer_detail.name], function () {
    console.log("here is my angular app!");
})
app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/computers')
    $urlRouterProvider.when('/computers', '/computers/detail')
    $stateProvider.state('computers', {
        url: '/computers',
        template: "this is computer page<div ui-view='view1'></div><div ui-view='view2'></dov>"
    })
}])

app.controller('myFirstController', ['$scope', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Swizard";
    $scope.toggleText = "toggleText";
}])

app.directive("greetDirective", ['$filter', function ($filter) {
    return {
        restrict: 'ECMA',
        replace: true,
        template: template,
        transclude: true,
        scope: {
            content: '=greetDirective'
        }
    }
}])


app.directive("toggleTemplate", [function () {
    return {
        restrict: 'ECMA',
        replace: true,
        template: toggleTemplate,
        transclude: true,
        scope: {
            myContent: '=etitle'
        },
        link: function (scope, element, attrs) {
            scope.showText = false;
            scope.toggleText = function () {
                scope.showText = (!scope.showText)
            }
        }
    }
}])

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document.querySelector("#myApp"), [app.name]))