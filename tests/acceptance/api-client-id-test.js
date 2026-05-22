import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | api-client-id', function (hooks) {
  setupApplicationTest(hooks);

  test('when registration is paused, the banner is shown and the form is not rendered', async function (assert) {
    this.owner.lookup('service:config-service').set('CLIENT_ID_REGISTRATION_PAUSED', true);

    await visit('/api-client-id');

    assert.dom('.alert-warning').exists('paused banner is rendered');
    assert.dom('.alert-warning').includesText('Client ID registration is temporarily paused');
    assert.dom('.api-client-registration-form').doesNotExist('registration form is not rendered when paused');
    assert.dom('button[type="submit"]').doesNotExist('submit button is not rendered when paused');
  });

  test('when registration is not paused, the form is rendered and the banner is not shown', async function (assert) {
    this.owner.lookup('service:config-service').set('CLIENT_ID_REGISTRATION_PAUSED', false);

    await visit('/api-client-id');

    assert.dom('.alert-warning').doesNotExist('paused banner is not rendered');
    assert.dom('.api-client-registration-form').exists('registration form is rendered');
    assert.dom('button[type="submit"]').exists('submit button is rendered');
  });
});
