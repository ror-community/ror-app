import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  globalSearch: service(),

  actions: {
    search(query) {
      this.get('globalSearch').doSearch(query);
    },
    clear() {
      this.get('globalSearch').doSearch(null);
    }
  }
});
