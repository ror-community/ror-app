import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    /*Escape Elasticsearch reserved chars
    https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#_reserved_characters*/
    // eslint-disable-next-line
    if(params.query){
      params.query = params.query.replace(/([\+\-\=\&\|\>\<\!\(\)\{\}\\\[\]\^\"\~\*\?\:\/])/g, "\\$1");
    }
    return this.store.query('organization', params).then(function(model) {
      return model;
    }).catch(function (reason) {
      console.log(reason);
      return [];
    });
  },

  queryParams: {
    query: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  }
});
