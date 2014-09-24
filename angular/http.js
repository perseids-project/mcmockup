app.service( 'http', function( $http, $q ) {

  // Publicly accessible methods
  return ({
    json: json,
    md: md
  });
  
  function json( scope ) {
    var request = client( 'GET', scope.data_src, {} );
    return( request.then(
      function( r ) { return r.data },
      function( r ) { return r.data.error }
    ));
  }
  
  function md( url, scope ) {
    var request = client( 'GET', url, {}, 'text/x-markdown; charset=UTF-8' );
    return( request.then(
      function( r ) { return toHtml(r.data) },
      function( r ) { console.log( 'error' )}
    ));
  }
  
  function toHtml( md ) {
    var conv = new Showdown.converter();
    return conv.makeHtml( md );
  }
    
  // JackSON wrapper
  function client( method, url, data, ctype ) {
    ctype = ( ctype == undefined ) ? 'application/json' : ctype;
    return $http({
      method: method.toUpperCase(),
      url: url,
        headers: {
            'Content-Type': ctype
        },
      data: wrap( data )
    });
  }
  
  // JackSON formatted json
  function wrap( json ) {
    return { data: json }
  }
  
  
});