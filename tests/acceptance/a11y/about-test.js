import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | a11y | about', function (hooks) {
  setupApplicationTest(hooks);

  test('the about page has no axe violations', async function (assert) {
    await visit('/');
    await a11yAudit();
    assert.ok(true, 'no axe violations on /');
  });
});
