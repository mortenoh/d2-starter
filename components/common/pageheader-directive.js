"use strict";

angular.module('d2-starter').directive('pageHeader', function() {
  return {
    restrict: 'E',
    scope: {
      text: '@',
      subtext: '@'
    },
    templateUrl: 'components/common/pageheader.html'
  }
});
