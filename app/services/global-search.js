import Service from '@ember/service';
import { inject as service } from '@ember/service';
// import { assign } from '@ember/polyfills';

export default Service.extend({
  router: service(),

  init() {
    this._super(...arguments);
  },

  doSearch(query) {
    //let params = assign(this.model.get('query'), { query: this.query, sort: this.sort });

    // this.router.transitionTo({ queryParams: params });
    this.get('router').transitionTo('organizations.index', { queryParams: { query: query, page: 1 } });
  }
});