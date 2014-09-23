app.service( 'http', function( $http, $q ) {

	// Publicly accessible methods
	return ({
		gimme: gimme,
	});
	
	function gimme( scope ) {
		var request = jackson( 'GET', scope.data_src, {} );
		return( request.then(
			function( r ) { return r.data },
			function( r ) { return r.data.error }
		));
	}
		
	// JackSON wrapper
	function jackson( method, url, data ) {
		return $http({
			method: method.toUpperCase(),
			url: url,
		    headers: {
		        'Content-Type': 'application/json'
		    },
			data: wrap( data )
		});
	}
	
	// JackSON formatted json
	function wrap( json ) {
		return { data: json }
	}	
});