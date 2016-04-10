//creation of module "addrBook"
var addrBook = angular.module('addrBook', []);

//creation of our controller with angular's $http and $scopes services passed in
function addrCtrl($scope, $http){
	$scope.addresses = {};
	//array for limiting how many rows to view
	$scope.numbers = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30];
	//property used for setting total rows viewable. Default is 20
	$scope.curNum = 20;
	//array for ordering table based off a specific column 
	$scope.rows = ["name", "state", "email"];
	//property used for setting column to order table by. defaut is set to "name"
	$scope.rowOrder = "name";
	
	//gets table data from db via back-end when page is loaded
	$http.get('/api/addresses')
		.success(function(data){
			//places the data that gets returned into the property "addr"
			$scope.addr = data;
		})
		.error(function(data){
			//logs any error data returned
			console.log(data);
		});
		
		//function called when user clicks the submit button
		$scope.createAddr = function() {
			//function called when form is submitted
			$scope.submitForm = function(isValid){
				//checks if the form meets the requirements set
				if(isValid){
				//sends the data in the "addresses" property to back-end
				$http.post('/api/addresses', $scope.addresses)
					.success(function(data){
						//creates an empty object for "addresses" property
						$scope.addresses = {};
						//stores the returned data into the "addr" property
						$scope.addr = data;
					})
					.error(function(data){
						//logs any errors
						console.log(data);
					});
				}
			};	
		};	
		
		//function called when a checkbox under row "X" gets clicked
		$scope.deleteAddr = function(id) {
			//gets the id that was passed in from function and passses it to back-end
			$http.delete('/api/addresses/' + id)
				.success(function(data){
					//places any data returned into the "addr" property
					$scope.addr = data;
				})
				.error(function(data){
					//logs any error
					console.log(data);
				});
		};
		
		
}