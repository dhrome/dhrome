(function(){
  function go(a){
  	chrome.tabs.getSelected(null,function(l){
  		chrome.tabs.update(l.id,{url:a})
  	})
  }

  chrome.omnibox.onInputEntered.addListener(function(query){
    var url = 'http://drupal.org/search/apachesolr_multisitesearch/';

    url += query;

    // api command
    if (query.search(/^api:/) == 0) {
    //check if api version is specified
      if((query.charAt(4) == '6' || query.charAt(4) == '7') && query.charAt(5) == ':'){
          version = query.charAt(4);
          query = query.substr(6,query.length);
          url = 'http://api.drupal.org/api/search/' + version + '/' +query;
      }
    }
    // usr commnad
    if (query.search(/^usr:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/search/user_search/' + query;
    }
    // prj commnad
    if (query.search(/^prj:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/project/' + query;
    }
    // usg command
    if (query.search(/^usg:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/project/usage/' + query;
    }
    // fapi command
    if (query.search(/^fapi:/) == 0) {
      query = query.substr(5,query.length);
      url = 'http://api.drupal.org/api/drupal/developer!topics!forms_api_reference.html/7#' + query;
    }
    // iss command
    if (query.search(/^iss:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/project/issues/' + query + '?status=All' ;
    }
    // do command
    if (query.search(/^do:/) == 0) {
      query = query.substr(3,query.length);
      url = 'http://drupal.org/search/apachesolr_search/' + query;
    }
    // doc command
    if (query.search(/^doc:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/search/apachesolr_multisitesearch/' + query + '?filters=ss_meta_type%3Adocumentation';
    }
    // mod command
    if (query.search(/^mod:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/project/modules?text=' + query;
    }
    // thm command
    if (query.search(/^thm:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/project/themes?text=' + query;
    }
    // irc command
    if (query.search(/^irc:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/search/drupalorg/' + query;
    }

  	go(url);
  });
})();
