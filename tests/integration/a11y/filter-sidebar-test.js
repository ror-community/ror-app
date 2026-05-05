import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | a11y | filter-sidebar', function (hooks) {
  setupRenderingTest(hooks);

  test('renders without axe violations', async function (assert) {
    this.set('model', {
      query: { query: '', page: 1, allStatus: false, filter: '' },
    });

    await render(hbs`<FilterSidebar @model={{this.model}} />`);
    await a11yAudit();
    assert.ok(true, 'no axe violations');
  });
});
