import DS from 'ember-data';
import ENV from 'ror-app/config/environment';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  launchDarkly: service(),
  host: computed('launchDarkly.variation', function() {
    return this.launchDarkly.variation('v2_ui') ? ENV.API_URL_V2 : ENV.API_URL_V1;
  }),

  urlForFindRecord(id, modelName) {
    return `${this.host}/${modelName}s/ror.org/${id}`;
  },

  init() {
    this._super(...arguments);

    this.set('headers', {
      'ACCEPT': 'application/json'
    });
  }
});