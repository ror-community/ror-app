import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | a11y | api-client-id', function (hooks) {
  setupApplicationTest(hooks);

  test('the API client registration page has no axe violations when paused', async function (assert) {
    this.owner.lookup('service:config-service').set('CLIENT_ID_REGISTRATION_PAUSED', true);
    await visit('/api-client-id');
    await a11yAudit();
    assert.ok(true, 'no axe violations on /api-client-id when paused');
  });

  test('the API client registration page has no axe violations when registration is open', async function (assert) {
    this.owner.lookup('service:config-service').set('CLIENT_ID_REGISTRATION_PAUSED', false);
    await visit('/api-client-id');
    await a11yAudit();
    assert.ok(true, 'no axe violations on /api-client-id when registration is open');
  });
});
