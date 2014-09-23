app.service( 'http', function( $http, $q ) {

	// Publicly accessible methods
	return ({
		gimme: gimme,
	});
	
	function gimme( scope ) {
		var request = client( 'GET', scope.data_src, {} );
		return( request.then(
			function( r ) { return md(r.data) },
			function( r ) { return r.data.error }
		));
	}
	
	function md( data ) {
		var conv = new Showdown.converter();
		
		// What data needs conversion to markdown?
		data.commentary.body = conv.makeHtml( data.commentary.body );
		data.commentary.bibl = conv.makeHtml( data.commentary.bibl );
		data.original = conv.makeHtml( data.original );
		for ( var lang in data.translation ) {
			data.translation[lang] = conv.makeHtml( data.translation[lang] );
		}
		
		return data;
	}
		
	// JackSON wrapper
	function client( method, url, data ) {
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