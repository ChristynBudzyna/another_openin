// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require react
//= require react_ujs
//= require components
//= require_tree .
//= require bootstrap-sprockets

$(window).load(function() {
  $(".audio-preview-link").click(function(e){
    e.preventDefault();
    var album_name = ($(this).data().showTitle)+" the musical"
    $.getJSON("https://api.spotify.com/v1/search", {type: "album", q: album_name }).done(function(response) {
      debugger;
      if(response.albums.items.length == 0) {
        $("#error-message").show()
      }
      else {
       $("#play-button").show();
       $("#pause-button").show();
       $("#next-button").show();
      $.getJSON(response.albums.items[0].href).done(function(response2) {
        var audioObject = new Audio(response2.tracks.items[0].preview_url);
        $("#play-button").click(function(e){
          e.preventDefault();
          audioObject.play();
        });
        $("#pause-button").click(function(e){
          e.preventDefault();
          audioObject.pause();
        });
        var currentTrack = 0
        $("#next-button").click(function(e){
          e.preventDefault();
          audioObject.pause();
          currentTrack += 1
          audioObject = new Audio(response2.tracks.items[currentTrack].preview_url);
          audioObject.play();
        });
      })
    }
    })
  })

  var nextTrack = function(audioObject) {
    audioObject = new Audio(response2.tracks.items[i].preview_url);
  }

  $("#search-button").click(function(e){
    e.preventDefault();
    $(".search-container").toggleClass('visibility');
  })
});
