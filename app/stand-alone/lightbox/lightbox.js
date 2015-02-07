angular.module('lightbox', ['ui.router', 'famous.angular'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/a");
    $stateProvider
      .state("a", {
        url: "/a",
        templateUrl: "views/a.html"
      })
      .state("b", {
        url: "/b",
        templateUrl: "views/b.html"
      })
      .state("c", {
        url: "/c",
        templateUrl: "views/c.html"
      });

  });

angular.module('lightbox').controller('LightboxCtrl', ['$scope','$state', '$famous', function($scope, $state, $famous){
  var Transform = $famous['famous/core/Transform'];
  var srcs = ['a', 'b', 'c'];
  var index = 0;

  window.onclick = function(){
    index = (index + 1) % 3;
    _opt.overlap = !_opt.overlap;
    $scope.$apply();
    //$state.go(srcs[index]); // uncomment if using ui-view
  }

  $scope.getSrc = function(){
    var ret = 'views/' + srcs[index] + '.html';
    return ret;
  }

  var _opt = {
      inTransform: Transform.identity,
      inOpacity: 0,
      inOrigin: [.5, .5],
      outTransform: Transform.identity,
      outOpacity: 0,
      outOrigin: [.5, .5],
      showTransform: Transform.identity,
      showOpacity: 1,
      showOrigin: [.5, .5],
      inTransition: {
          duration: 1e3
      },
      outTransition: {
          duration: 1e3
      },
      overlap: !0
  };

  $scope.getOptions = function(){
    return _opt;
  };
}]);
