function TodoController($scope, $location) {
  $scope.items = [];
  $scope.currentName = '';
  this.location = $location;



  $scope.addItem = function(name) {
    $scope.items.push({
      name: name,
      done: false
    });

    $scope.currentName = '';
  };

  $scope.incompletedCount = function() {
    return _.reject($scope.items, function(item){
      return item.done;
    }).length;
  };

  $scope.completedCount = function() {
    return _.filter($scope.items, function(item){
      return item.done;
    }).length;
  };

  $scope.navigate = function() {
    $location.path('/zing');
  };
}

TodoController.$inject = ['$scope', '$location']
