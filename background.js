(function(){
  function go(a){
  	chrome.tabs.getSelected(null,function(l){
  		chrome.tabs.update(l.id,{url:a})
  	})
  }

  chrome.omnibox.onInputEntered.addListener(function(text){
  	var url = "http://drupal.org/project/" + text;
  	go(url);
  });
})();
