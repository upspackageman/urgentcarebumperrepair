
module.controller('service', function($scope, $location, $anchorScroll){
	$scope.goDown = function(){
		$location.hash('service');
		$anchorScroll();
	}
	
});

module.controller('home', function($scope, $location, $anchorScroll){
	$scope.goDown = function(){
		$location.hash('service');
		$anchorScroll();
	}
	
});

module.controller('bumperrepair', function($scope, $location, $anchorScroll){
	$scope.goDown = function(){
		$location.hash('bumperrepair');
		$anchorScroll();
	}
	
});

module.controller('insurance', function($scope, $location, $anchorScroll){
	$scope.goDown = function(){
		$location.hash('insurance');
		$anchorScroll();
	}
	
});

module.controller('process', function($scope, $location, $anchorScroll){
	$scope.goDown = function(){
		$location.hash('process');
		$anchorScroll();
	}
	
});