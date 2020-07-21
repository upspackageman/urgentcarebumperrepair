var module = angular.module("App", ['ngRoute']);

module.config(['$routeProvider',function ($routeProvider){
	
    $routeProvider
		.when("/", {
			templateUrl: 'views/Home/index.php'
		}).
        when('/home', {
            templateUrl: 'views/Home/index.php'
        }).
         when('/gallery', {
             templateUrl: 'views/gallery/index.php'
             
         }).
         when('/services', {
             templateUrl: 'views/service/index.php'
			 
         }).
         when('/estimates', {
             templateUrl: 'views/estimate/index.php'

		 }).
		 when('/restoration', {
         templateUrl: 'views/restoration/index.php'

		 }).
		 when('/insurance', {
         templateUrl: 'views/insurance/index.php'

		 }).
		 when('/bumperrepair', {
         templateUrl: 'views/bumperrepair/index.php'

		 }).
		 when('/process', {
         templateUrl: 'views/process/index.php'

		 }).
		 when('/bodykit', {
         templateUrl: 'views/bodykit/index.php'

		 }).
		 when('/about', {
         templateUrl: 'views/about/index.php'

		 })
		 
        


}]);

angular.module('app', [])
  .controller('MyCtrl', ['$scope', '$window', function ($scope,  $window) {
      console.log($window);
      $scope.scroll = function () {
        //$window.scrollTo(0, angular.element(document.getElementById('div1')).offsetTop);  
         $window.scrollTo(0, 0);  
      };
  }]);