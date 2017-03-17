import angular from 'angular';
import router from 'angular-ui-router'
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';


import template from './helloTemplate.html';
import toggleTemplate from "./toggleTemplate.html";
import segment_one from "./components/segment_one.js";
import computer_detail from "./catagories/computer_detail.js"


let app = angular.module("myApp", [router, ngMaterial, segment_one.name, computer_detail.name], function () {
    console.log("here is my angular app!");
})

// app.provider('main', function () {
//     let version;
//     return {
//         setVersion: function (value) {
//             version = value;
//         },
//         $get: function () {
//             return {
//                 title: 'The mainProvider' + ',' + version
//             }
//         }
//     }
// })

app.config(['$urlRouterProvider', '$stateProvider', 'comDetailConst', /*'mainProvider',*/ function ($urlRouterProvider, $stateProvider, comDetailConst/*, mainProvider*/) {
    $urlRouterProvider.otherwise('/computers')
    $urlRouterProvider.when('/computers', '/computers/detail')
    $stateProvider.state('computers', {
        url: '/computers',
        template: "this is computer page<div ui-view='view1'></div><div ui-view='view2'></dov>"
    })
    // mainProvider.setVersion('v1.0.5');
    console.log(comDetailConst.content);
}])

app.service('mainService', function () {
    this.title = "The mainService";
})

app.factory('mainFactory', function () {
    return {
        title: "The mainFactory"
    }
})

app.decorator('mainFactory', function ($delegate) {
    console.log('decorator', $delegate.title);
    return $delegate.title + " - blablabla";
})


app.controller('myFirstController', ['$scope', 'mainService', 'mainFactory',/*'main',*/ function ($scope, mainService, mainFactory/*,main*/) {
    $scope.firstName = "John";
    $scope.lastName = "Swizard";
    $scope.toggleText = "toggleText";
    console.log("service", mainService.title);
    console.log('factory', mainFactory);
    //console.log('mainProvider--controller-inside', main.title);
}])

app.directive("greetDirective", ['$filter', function ($filter) {
    return {
        restrict: 'EA',
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
        restrict: 'EA',
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


app.run(['$rootScope', function ($rootScope) {
    console.log("app is done loading all modules");
}])

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document.querySelector("#myApp"), [app.name]))