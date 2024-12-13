import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class OrganizationsIndexRoute extends Route {
  @service store;

  queryParams = {
    query: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    },
    all_status: {
      refreshModel: true
    },
    filter: {
      refreshModel: true
    }
  };

  model(params) {
    // Escape Elasticsearch reserved chars
    if (params.query) {
      let ror_id = '';
      const re1 = new RegExp("^0[a-hj-km-np-tv-z|0-9]{6}[0-9]{2}$");
      const re2 = new RegExp("^http(s)?:\/\/ror\.org\/0[a-hj-km-np-tv-z|0-9]{6}[0-9]{2}$"); // eslint-disable-line no-useless-escape
      const re3 = new RegExp("^ror\.org\/0[a-hj-km-np-tv-z|0-9]{6}[0-9]{2}$"); // eslint-disable-line no-useless-escape

      if (re1.test(params.query)) {
        ror_id = params.query;
      }

      if (re2.test(params.query)) {
        ror_id = params.query.replace(/http(s)?:\/\/ror\.org\//g, '');
      }

      if (re3.test(params.query)) {
        ror_id = params.query.replace(/ror\.org\//g, '');
      }

      if (ror_id) {
        window.location.href = ror_id;
        return;
      } else {
        params.query = params.query.replace(/([\+\-\=\&\|\>\<\!\(\)\{\}\\\[\]\^\~\*\?\:\/])/g, "\\$1"); // eslint-disable-line no-useless-escape
      }
    }

    return this.store.query('organization', params).then((model) => {
      return model;
    }).catch((reason) => {
      console.log(reason);
      return [];
    });
  }
}
