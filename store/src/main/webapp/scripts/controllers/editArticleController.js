

angular.module('store').controller('EditArticleController', function($scope, $routeParams, $location, ArticleResource , CategoryResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.article = new ArticleResource(self.original);
            CategoryResource.queryAll(function(items) {
                $scope.categorySelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.article.category && item.id == $scope.article.category.id) {
                        $scope.categorySelection = labelObject;
                        $scope.article.category = wrappedObject;
                        self.original.category = $scope.article.category;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/Articles");
        };
        ArticleResource.get({ArticleId:$routeParams.ArticleId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.article);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.article.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Articles");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Articles");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.article.$remove(successCallback, errorCallback);
    };
    
    $scope.$watch("categorySelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.article.category = {};
            $scope.article.category.id = selection.value;
        }
    });
    
    $scope.get();
});