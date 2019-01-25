import Controller from '@ember/controller';
export default Controller.extend({
  queryParams: ['query', 'sort', 'page', 'qp'],
  query: null,
  sort: null,
  page: 1,
  qp: 'multiMatch',

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