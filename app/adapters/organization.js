import DS from 'ember-data';
import ENV from 'ror-app/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.API_URL,

  urlForFindRecord(id, modelName) {
    return `${ENV.API_URL}/${modelName}s/ror.org/${id}`;
  }
});