import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class OrganizationsRegisterRoute extends Route {
  @service('config-service') configService;

  model() {
    return {
      registrationPaused: this.configService.CLIENT_ID_REGISTRATION_PAUSED,
    };
  }
}
