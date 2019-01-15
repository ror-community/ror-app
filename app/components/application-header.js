import Component from '@ember/component';
// import { assign } from '@ember/polyfills';

export default Component.extend({

  // search() {
  //   let params = { query: this.query, sort: this.sort };

  //   this.router.transitionTo({ queryParams: params });
  // },

  actions: {
    doSearch(query) {
      if (query) {
        this.set('sort', 'relevance');
      } else if (this.sort === 'relevance') {
        this.set('sort', null);
      }

      this.set('query', query);
      this.search();
    },
    clear() {
      this.set('query', null);
      this.set('sort', null);
      this.search();
    }
  }
});
