var jq_ang = function() {

  // Singleton
  if ( jq_ang.prototype.me ) {
    return jq_ang.prototype.me;
  }
  jq_ang.prototype.me = this;
  
  this.click_start = function(elem) {
    $(elem,'a.inttext').on('touchstart click', function(e) {
      var href = $(this).attr('href').substring(1);
      var color = $(this).css('background-color');
      $('a.inttarg[name="'+href+'"]').css('background-color', color);
    });
  }
}