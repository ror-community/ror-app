import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'ror-app/config/environment';

export default JSONAPIAdapter.extend({
  host: ENV.API_URL
});