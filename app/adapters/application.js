import DS from 'ember-data';
import ENV from 'ror-app/config/environment';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend({
    //launchDarkly: service(),
    //host: this.lauchDarkly.variation("v2_ui") ? ENV.API_URL_V2 : ENV.API_URL_V1,
    host: ENV.API_URL_V2,
});