import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'ror-app/config/environment';
import { variation } from 'ember-launch-darkly';

export default JSONAPIAdapter.extend({
  host: variation('v2_ui') ? ENV.API_URL_V2 : ENV.API_URL_V1
});