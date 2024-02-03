import DS from 'ember-data';
import ENV from 'ror-app/config/environment';

export default DS.JSONAPIAdapter.extend({
    //Tried injecting serivce but does not work :(
    //launchDarkly: service(),
    //host: this.lauchDarkly.variation("v2_ui") ? ENV.API_URL_V2 : ENV.API_URL_V1,
    host: ENV.API_URL_V2,

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