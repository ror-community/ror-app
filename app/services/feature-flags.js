import Service from '@ember/service';
import ENV from 'ror-app/config/environment';
import { Promise } from 'rsvp';
import fetch from 'fetch';

export default Service.extend({

  init() {
    this._super(...arguments);
  },

  get_features() {
    let promise = new Promise((resolve, reject) => {
      const url = ENV.API_URL + '/features';
      const headers = { 'Accept': 'application/json' };
      fetch(url, {
        headers,
      }).then((response) => {
        response.text().then((text) => {
            try {
                let json = JSON.parse(text);
                if (!response.ok) {
                  response.responseJSON = json;
                  reject(response);
                } else {
                  resolve(json);
                }
              } catch (SyntaxError) {
                response.responseText = text;
                reject(response);
              }
        });
      }).catch(reject);
    });

    return promise;
  },

  async features() {
    let f = {};
    f = await this.get_features();
    return f;
  }
})
