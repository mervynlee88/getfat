function TodoCtrl($scope) {
  $scope.todos = [];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText});
    $scope.todoText = '';
  };
 
 
 
  }
