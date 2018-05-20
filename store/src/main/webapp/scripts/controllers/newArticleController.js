
angular.module('store').controller('NewArticleController', function ($scope, $location, locationParser, ArticleResource , CategoryResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.article = $scope.article || {};
    
    $scope.categoryList = CategoryResource.queryAll(function(items){
        $scope.categorySelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("categorySelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.article.category = {};
            $scope.article.category.id = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Articles/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        ArticleResource.save($scope.article, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Articles");
    };
});