import DS from 'ember-data';
import ENV from 'ror-app/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: window.ld.variation("v2") ? ENV.API_URL_V2 : ENV.API_URL_V1,

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