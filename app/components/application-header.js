import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  globalSearch: service(),
  allStatus: false,
  showAdvanced: false,

  actions: {
    search() {
      this.get('globalSearch').doSearch(this.query);
    },
    clear() {
      this.get('globalSearch').doSearch(null);
    }
  }
});
