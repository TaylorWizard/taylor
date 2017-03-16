import angular from "angular";
import template from "./segment_one_template.html"

export default angular.module('segment_one', [])
  .directive('segmentOne', ['$filter', function ($filter) {
    return {
      restrict: 'EA',
      replate: true,
      template: template,
      transclue: true,
      scope: {
          
      },
      link: function (scope) {

      }
    }
  }])

