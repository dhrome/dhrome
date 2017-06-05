(function(){
  /* global chrome */
  chrome.omnibox.onInputEntered.addListener(function(query) {
    go(prepareUrl(query));
  });

  // Redirects the user to the selected Drupal.org related URL.
  function go(a){
    chrome.tabs.getSelected(null,function(l) {
      chrome.tabs.update(l.id,{url:a})
    })
  }

  // Prepare URL based on query params.
  // @return Drupal.org related URL.
  function prepareUrl(query) {

    let url = 'https://www.drupal.org/search/site/';
    url += query;

    // LOG IN (login) commnad
    if (query.search(/^login$/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/user/login';
    }

    // API (api) command
    if (query.search(/^api:/) == 0) {
      let version = '8.3';
      //check if api version is specified
      if((query.charAt(4) >= '4' && query.charAt(4) <= '8') && query.charAt(5) == ':') {
        version = (query.charAt(4) == '4' ) ? '4.7' : query.charAt(4) ;
        version = (query.charAt(4) == '8' ) ? version : query.charAt(4) ;
        query = query.substr(6,query.length);
        url = 'https://api.drupal.org/api/drupal/' + version + '.x/search/' + query;
      }
      url = 'https://api.drupal.org/api/drupal/' + version + '.x/search/' + query;
    }
    // USER (urs) commnad
    if (query.search(/^usr:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/search/user/' + query;
    }
    // PROJECT (prj) commnad
    if (query.search(/^prj:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/project/' + query;
    }
    // USAGE (usg) command
    if (query.search(/^usg:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/project/usage/' + query;
    }
    // Form API (fapi) command
    if (query.search(/^fapi:/) == 0) {
      query = query.substr(7,query.length);
      let version = query.substr(5,query.length);
      let versionMap = {
        '7': 'http://api.drupal.org/api/drupal/developer!topics!forms_api_reference.html/7#',
        '8': 'https://api.drupal.org/api/drupal/elements/8.2.x'
      };

      url = versionMap[version]  + query;
    }
    // ISSUES (iss) command
    if (query.search(/^iss:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/project/issues/' + query + '?status=All' ;
    }
    // Global Search (do) command
    if (query.search(/^do:/) == 0) {
      query = query.substr(3,query.length);
      url = 'https://www.drupal.org/search/site/' + query;
    }
    // DOCUMENTATION (doc) command
    if (query.search(/^doc:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/search/apachesolr_multisitesearch/' + query + '?filters=ss_meta_type%3Adocumentation';
    }
    // MODULE (mod) command
    if (query.search(/^mod:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/project/modules?text=' + query;
    }
    // THEME (thm) command
    if (query.search(/^thm:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/project/themes?text=' + query;
    }
    // IRC user (irc) command
    if (query.search(/^irc:/) == 0) {
      query = query.substr(4,query.length);
      url = 'http://drupal.org/search/drupalorg/' + query;
    }
    return url;
  }
})();
