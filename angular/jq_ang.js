var jq_ang = function() {

  // Singleton
  if ( jq_ang.prototype.me ) {
    return jq_ang.prototype.me;
  }
  jq_ang.prototype.me = this;
  
  this.click_start = function(elem) {
    $('a.inttext').on('touchstart click', function(e) {
      var href = $(this).attr('href').substring(1);
      var color = $(this).css('color');
	  var targ = $('a.inttarg[name="'+href+'"]');
	  var current = targ.css('background-color');	  
	  var i = 0;
	  var max = 2;
	  var timer = null;
	  timer = setInterval(function () {
	    if (i%2==0) {
		  targ.css('background-color', color );
	    }
	    else {
		  targ.css('background-color', current );
	    }
	    i++;
	    if ( i > max ) {
 		  clearInterval( timer );
	    }
	  }, 400);
    });
  }
}