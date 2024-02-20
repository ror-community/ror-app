import DS from 'ember-data';
import ENV from 'ror-app/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.API_URL
});