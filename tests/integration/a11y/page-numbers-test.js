import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | a11y | page-numbers', function (hooks) {
  setupRenderingTest(hooks);

  test('renders without axe violations on a middle page', async function (assert) {
    this.set('model', {
      query: { page: 5 },
      meta: { totalPages: 20 },
    });

    await render(hbs`<PageNumbers @model={{this.model}} @link="organizations.index" />`);
    await a11yAudit();
    assert.ok(true, 'no axe violations on middle page');
  });

  test('renders without axe violations on the first page (previous disabled)', async function (assert) {
    this.set('model', {
      query: { page: 1 },
      meta: { totalPages: 20 },
    });

    await render(hbs`<PageNumbers @model={{this.model}} @link="organizations.index" />`);
    await a11yAudit();
    assert.ok(true, 'no axe violations on first page');
  });

  test('renders without axe violations on the last page (next disabled)', async function (assert) {
    this.set('model', {
      query: { page: 20 },
      meta: { totalPages: 20 },
    });

    await render(hbs`<PageNumbers @model={{this.model}} @link="organizations.index" />`);
    await a11yAudit();
    assert.ok(true, 'no axe violations on last page');
  });
});
