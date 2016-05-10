var bbsControllers = angular.module('bbsControllers', []);

bbsControllers.controller('HomeCtrl', ['$scope', '$http',
function($scope, $http) {
	$http.get('api/articles').success(function(dataSet) {
		$scope.dataSet = dataSet;
	});
}]);

bbsControllers.controller('ViewCtrl', ['$scope', '$http', '$routeParams',
function($scope, $http, $routeParams) {
	$http.get('api/articles/' + $routeParams.id).success(function(data) {
		$scope.data = data;
	});
}]);

bbsControllers.controller('WriteCtrl', ['$scope', '$http', '$location',
function($scope, $http, $location) {
	$scope.submit = function(title, content) {
		if (title !== undefined && content !== undefined) {
			$http.post('api/articles', 'title=' + encodeURIComponent(title) + '&content=' + encodeURIComponent(content)).success(function(id) {
				$location.path('view/' + id);
			});
		}
	};
}]);

bbsControllers.controller('UpdateCtrl', ['$scope', '$http', '$location', '$routeParams',
function($scope, $http, $location, $routeParams) {
	
	$http.get('api/articles/' + $routeParams.id).success(function(data) {
		$scope.title = data.title;
		$scope.content = data.content;
	});
	
	$scope.submit = function(title, content) {
		if ($routeParams.id !== undefined && title !== undefined && content !== undefined) {
			$http.put('api/articles/' + $routeParams.id, 'title=' + encodeURIComponent(title) + '&content=' + encodeURIComponent(content)).success(function(id) {
				$location.path('view/' + id);
			});
		}
	};
}]);