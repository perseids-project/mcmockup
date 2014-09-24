app.controller("controller", function( $scope, http ){
	
	// PROPERTIES
	var load = 'Loading...'
	$scope.config = {}
	$scope.original = load;
	$scope.commentary = {};
	$scope.commentary.body = load;
	$scope.commentary.bibl = load;
	
	$scope.translation = {};
	$scope.translation.english = load;
	$scope.translation.french = load;

	// What is saved to the JackSON server.
    $scope.data_src = "json/data.json";
	$scope.data = http.json( $scope ).then(
		function( data ) {
			// Bind the retrieved data.
			$scope.original = http.md( data.original, $scope );
			$scope.translation.english = http.md( data.translation.english, $scope );
			$scope.translation.french = http.md( data.translation.french, $scope );
			$scope.commentary.body = http.md( data.commentary.body, $scope );
			$scope.commentary.bibl = http.md( data.commentary.bibl, $scope );
			return data;
		}
	);
	
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