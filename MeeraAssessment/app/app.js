

var app = angular.module('app', []);
    
	app.controller('dataController', ['$scope','$http', function($scope,$http) {

        $scope.getData = function(username) {
          $scope.userName = username;

		  if($scope.userName && $scope.userName.name != 'undefined'){
			$http.get("https://api.github.com/users/" + $scope.userName.name)
				.success(function (data) {
					$scope.userData = data;
					loadRepos();
				});

			var loadRepos = function () {
				$http.get($scope.userData.repos_url)
					.success(function (data) {
						$scope.repoData = data;
					});
			};
		  }
		};

	}]);
