import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    /*Escape Elasticsearch reserved chars
    https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#_reserved_characters*/
    if(params.query){
      let ror_id = ''
      // eslint-disable-next-line
      let re1 = new RegExp("^0[a-hj-km-np-tv-z|0-9]{6}[0-9]{2}$");
      // eslint-disable-next-line
      let re2 = new RegExp("^http(s)?:\/\/ror\.org\/0[a-hj-km-np-tv-z|0-9]{6}[0-9]{2}$");
      // eslint-disable-next-line
      let re3 = new RegExp("^ror\.org\/0[a-hj-km-np-tv-z|0-9]{6}[0-9]{2}$")
      if(re1.test(params.query)){
        ror_id = params.query
      }
      if(re2.test(params.query)){
        // eslint-disable-next-line
        ror_id = params.query.replace(/http(s)?:\/\/ror\.org\//g, '')
      }
      if(re3.test(params.query)){
        // eslint-disable-next-line
        ror_id = params.query.replace(/ror\.org\//g, '')
      }
      if(ror_id){
        this.transitionTo('/' + ror_id);
        return;
      } else {
        // eslint-disable-next-line
        params.query = params.query.replace(/([\+\-\=\&\|\>\<\!\(\)\{\}\\\[\]\^\~\*\?\:\/])/g, "\\$1");
      }
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
