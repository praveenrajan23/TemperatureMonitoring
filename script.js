var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/cm', {
   templateUrl: 'currentmedian.html',
   controller: "tempController"
  })
});

app.controller('tempController',['$scope',function($scope){
  $scope.tempArray = [];
  $scope.addTemperature = function(temp){
      $scope.tempArray.push(parseInt(temp));  //getting integer values from temp and adding it to array.
      $scope.temp ='';
  } 
  
  $scope.getMedian = function(){
    var sorted = $scope.tempArray.sort(function(a, b){   //Sorting array of temperature
      if (a < b)
        return -1;
      if (a > b)
        return 1;
      else
        return 0;
  });
      if(sorted.length % 2 !== 0 ){     //for odd or even array check
        var middle = (sorted.length+1) / 2 ;
        $scope.median = sorted[middle-1];
      }else{                           //for even array
        var middle1 = (sorted.length) / 2 ;
        var middle2 = (sorted.length+2) /2;
        $scope.median = (parseInt(sorted[middle1-1])+parseInt(sorted[middle2-1]))/2;
      }
  }
  
}]);