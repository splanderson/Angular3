angular.module('userProfiles')
  .controller('MainController', function($scope, mainService){

    //$scope.thisAppIsBroken = "This angular app is working";
    $scope.getUsers = function(){
      mainService.getUsers().then(function(dataFromService){
        $scope.users = dataFromService;
      });
      //$scope.users = mainService.getUsers();
    }

    $scope.getUsers();

    $scope.toggleFavorite = mainService.toggleFavorite;
});
