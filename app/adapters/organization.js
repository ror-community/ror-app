import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'ror-app/config/environment';
import { variation } from 'ember-launch-darkly';

export default JSONAPIAdapter.extend({
  host: variation('v2_ui') ? ENV.API_URL_V2 : ENV.API_URL_V1,

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