import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | a11y | copy-button', function (hooks) {
  setupRenderingTest(hooks);

  test('renders without axe violations', async function (assert) {
    await render(hbs`<CopyButton @textToCopy="https://ror.org/01yc4dn07" />`);
    await a11yAudit();
    assert.ok(true, 'no axe violations');
  });
});
