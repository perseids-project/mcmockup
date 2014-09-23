app.controller("controller", function( $scope, http ){
	
	// PROPERTIES
	$scope.config = {}

	// What is saved to the JackSON server.
    $scope.data_src = "json/data.json";
	$scope.data = http.gimme( $scope );
	
	// Messages
	$scope.msg = "Welcome!";
	
	// Language toggle
	$scope.lang = "eng";
	$scope.lang_switch = function( lang ) {
		$scope.lang = lang;
	}
	$scope.lang_check = function( lang ) {
		return ( $scope.lang == lang )?true:false;
	}
	
	$scope.comment = "body";
	$scope.comment_switch = function() {
		$scope.comment = ( $scope.comment == 'body' ) ? 'bibl':'body';
	}
	$scope.comment_check = function( view ) {
		return ( $scope.comment == view )?true:false;
	}
});