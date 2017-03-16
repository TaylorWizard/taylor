import angular from "angular";

export default angular.module('computer_detail', [])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    //router
    //custom rule
    $urlRouterProvider.rule(function($injector, $location) {
        let path = $location.path();
        let normalized = path.toLowerCase();
        console.log("path:", path, ",normalized:", normalized, );
    })
    $urlRouterProvider.otherwise('/detail')
    $urlRouterProvider.when('', '/computers/detail')
    $stateProvider.state('computers.detail', {
      url: '/detail',
      // template: '<h1>this is computer_detail page</h1>',
      views: {
        view1: {
          template: "this is computer detail view1"
        },
        view2: {
          template: "this is computer detail view2"
        }
      },
      controller: function ($stateParams) {
        console.log($stateParams);
      }
    })
  }])