import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    console.log(this.model.queryParams)
    /*Escape Elasticsearch reserved chars
    https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#_reserved_characters*/
    if(params.query){
      console.log("params exist")
      // eslint-disable-next-line
      params.query = params.query.replace(/([\+\-\=\&\|\>\<\!\(\)\{\}\\\[\]\^\~\*\?\:\/])/g, "\\$1");
    }
    if(params.query === ""){
      console.log("empty query")
      params.query = undefined
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
    },
    all_status: {
      refreshModel: true
    },
    filter: {
      refreshModel: true
    }
  }
});
