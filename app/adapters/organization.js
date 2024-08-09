import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'ror-app/config/environment';

export default JSONAPIAdapter.extend({
  host: ENV.API_URL,

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