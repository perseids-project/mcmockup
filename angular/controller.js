app.controller("controller", function( $scope, http ){
	
	// PROPERTIES
	$scope.config = {}

	// What is saved to the JackSON server.
    $scope.data_src = "json/data.json";
	$scope.data = http.gimme( $scope );
	
	// Messages
	$scope.msg = "Welcome!";
});