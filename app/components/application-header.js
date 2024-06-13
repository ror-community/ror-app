import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  globalSearch: service(),
  allStatus: false,
  showAdvanced: false,

  actions: {
    search() {
      this.globalSearch.doSearch(this.query);
    },
    clear() {
      this.globalSearch.doSearch(null);
    }
  }
});
