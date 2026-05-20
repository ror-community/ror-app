import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | a11y | error', function (hooks) {
  setupApplicationTest(hooks);

  test('the error route has no axe violations', async function (assert) {
    await visit('/this-path-does-not-exist-for-a11y-test');
    await a11yAudit();
    assert.ok(true, 'no axe violations on error route');
  });
});
