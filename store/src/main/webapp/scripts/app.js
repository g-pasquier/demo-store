'use strict';

angular.module('store',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Articles',{templateUrl:'views/Article/search.html',controller:'SearchArticleController'})
      .when('/Articles/new',{templateUrl:'views/Article/detail.html',controller:'NewArticleController'})
      .when('/Articles/edit/:ArticleId',{templateUrl:'views/Article/detail.html',controller:'EditArticleController'})
      .when('/Categories',{templateUrl:'views/Category/search.html',controller:'SearchCategoryController'})
      .when('/Categories/new',{templateUrl:'views/Category/detail.html',controller:'NewCategoryController'})
      .when('/Categories/edit/:CategoryId',{templateUrl:'views/Category/detail.html',controller:'EditCategoryController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
