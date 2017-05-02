//script for angular fun

var app = angular.module('ourModule', []);

app.controller('ourController', function($scope){

//empty array of to do list and completed list
   $scope.toDoList = [];
   $scope.checked = [];

//add task items to list
    $scope.addTask = function(newTask) {
      //console.log(newTask);
      $scope.toDoList.push({ name: newTask.name, due: newTask.due });
      console.log($scope.toDoList);
      //clear items after pushed
      $scope.task.name = "";
      $scope.task.due = "";

    }

//delete item from list
    $scope.remove = function(task){
      var index = $scope.toDoList.indexOf(task);
      $scope.toDoList.splice(index, 1);
  }

//remove from list and add items to completed section
  $scope.add = function (task) {
    var index = $scope.toDoList.indexOf(task);
    $scope.checked.push($scope.toDoList[index]);
    $scope.toDoList.splice(index, 1);
}



});
