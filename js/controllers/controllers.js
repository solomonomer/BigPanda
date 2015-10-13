app.controller('MainController', ['$scope','md5', function ($scope, md5) {
    $scope.comments = [];

    $scope.addComment = function () {
        $scope.newcomment.hash = md5.createHash($scope.newcomment.email);
        $scope.comments.push($scope.newcomment);
        $scope.newcomment = {};
    }
}]);