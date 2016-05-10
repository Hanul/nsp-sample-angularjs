var bbs = angular.module('bbs', ['ngRoute', 'bbsControllers']);

bbs.config(['$routeProvider',
function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'HomeCtrl'
	}).when('/view/:id', {
		templateUrl : 'view.html',
		controller : 'ViewCtrl'
	}).when('/write', {
		templateUrl : 'write.html',
		controller : 'WriteCtrl'
	}).when('/update/:id', {
		templateUrl : 'update.html',
		controller : 'UpdateCtrl'
	}).when('/remove/:id', {
		templateUrl : 'remove.html',
		controller : 'RemoveCtrl'
	}).otherwise({
		redirectTo : '/'
	});
}]);
