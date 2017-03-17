import angular from "angular";
import template from "./com_view1_template.html";

export default angular.module('computer_detail', [])
  .config(['$urlRouterProvider', '$stateProvider', '$provide', function ($urlRouterProvider, $stateProvider, $provide) {
    //router
    //custom rule
    $urlRouterProvider.rule(function ($injector, $location) {
      let path = $location.path();
      let normalized = path.toLowerCase();
      console.log("path:", path, ",normalized:", normalized);
    })
    $urlRouterProvider.otherwise('/detail')
    $urlRouterProvider.when('', '/computers/detail')
    $stateProvider.state('computers.detail', {
      url: '/detail',
      //template: '<h1>this is computer_detail page</h1>',
      views: {
        view1: {
          template: template,
          controller: 'ComController',
          controllerAs: 'ComController'
        },
        view2: {
          template: "this is computer detail view2<div><div>"
        }
      }
    })
  }])
  .constant('comDetailConst', {
    content: "hi there and computer_detail const!!!!"
  })
  .controller('ComController', ['$scope', function ($scope) {
    console.log('this', this);
    console.log('$scope', $scope);
    this.name = "ComController"
  }])

