import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class OrganizationsShowRoute extends Route {
  @service store;

  model(params) {
    const { organization_id } = params;
    return this.store.findRecord('organization', organization_id);
  }
}
