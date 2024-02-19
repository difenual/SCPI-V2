// Carga el SDK de Twitter 
window.twttr = (function(d, s, id) {

  // Inserta el SDK asincronamente
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};

  if (d.getElementById(id)) return t;

  js = d.createElement(s); 
  js.id = id;
  js.async = true;
  js.src = "https://platform.twitter.com/widgets.js";
  
  fjs.parentNode.insertBefore(js, fjs);
   
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  
  return t;

}(document, "script", "twitter-wjs"));

// Cuando el DOM esta listo, renderiza
document.addEventListener('DOMContentLoaded', function(){

  // Renderiza el timeline de tweets
  twttr.widgets.createTimeline({
    sourceType: 'https://twitter.com/ELTIEMPO',
    screenName: 'ELTIEMPO',
  }, 
  
  document.getElementById('tweets-container'));

});
