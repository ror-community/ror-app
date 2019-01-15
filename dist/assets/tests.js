'use strict';

define("ror-app/tests/integration/components/application-footer-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | application-footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "JnA2p32h",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"application-footer\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'The content of this site is licensed under a Creative Commons Attribution 4.0 International License.');
    });
  });
});
define("ror-app/tests/integration/components/application-header-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | application-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "t9eVh+5s",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"application-header\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '');
    });
  });
});
// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';
// module('Integration | Component | application-sidebar', function(hooks) {
//   setupRenderingTest(hooks);
//   test('it renders', async function(assert) {
//     // Set any properties with this.set('myProperty', 'value');
//     // Handle any actions with this.set('myAction', function(val) { ... });
//     await render(hbs`{{application-sidebar}}`);
//     assert.equal(this.element.textContent.trim(), 'ROR');
//   });
// });
define("ror-app/tests/integration/components/application-sidebar-test", [], function () {
  "use strict";
});
// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';
// module('Integration | Component | organization-item', function(hooks) {
//   setupRenderingTest(hooks);
//   test('it renders', async function(assert) {
//     // Set any properties with this.set('myProperty', 'value');
//     // Handle any actions with this.set('myAction', function(val) { ... });
//     await render(hbs`{{organization-item}}`);
//     assert.equal(this.element.textContent.trim(), '');
//   });
// });
define("ror-app/tests/integration/components/organization-item-test", [], function () {
  "use strict";
});
// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';
// module('Integration | Component | page-numbers', function(hooks) {
//   setupRenderingTest(hooks);
//   test('it renders', async function(assert) {
//     // Set any properties with this.set('myProperty', 'value');
//     // Handle any actions with this.set('myAction', function(val) { ... });
//     await render(hbs`{{page-numbers}}`);
//     assert.equal(this.element.textContent.trim(), '');
//   });
// });
define("ror-app/tests/integration/components/page-numbers-test", [], function () {
  "use strict";
});
define("ror-app/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/application-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/application-footer.js should pass ESLint\n\n');
  });
  QUnit.test('components/application-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/application-header.js should pass ESLint\n\n');
  });
  QUnit.test('components/application-sidebar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/application-sidebar.js should pass ESLint\n\n');
  });
  QUnit.test('components/organization-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/organization-item.js should pass ESLint\n\n');
  });
  QUnit.test('components/page-numbers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-numbers.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/organizations.js/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/organizations.js/index.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/organizations.js/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/organizations.js/show.js should pass ESLint\n\n');
  });
  QUnit.test('formats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'formats.js should pass ESLint\n\n');
  });
  QUnit.test('models/organization.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/organization.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
  QUnit.test('routes/organizations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/organizations.js should pass ESLint\n\n');
  });
  QUnit.test('routes/organizations/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/organizations/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/organizations/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/organizations/show.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define("ror-app/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ror-app/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ror-app/templates/components/application-footer.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/components/application-footer.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ror-app/templates/components/application-header.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/components/application-header.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ror-app/templates/components/application-sidebar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/components/application-sidebar.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ror-app/templates/components/organization-item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/components/organization-item.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ror-app/templates/components/page-numbers.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/components/page-numbers.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ror-app/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ror-app/templates/organizations.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/organizations.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ror-app/templates/organizations/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/organizations/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ror-app/templates/organizations/show.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/organizations/show.hbs should pass TemplateLint.\n\n');
  });
});
define("ror-app/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/application-footer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/application-footer-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/application-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/application-header-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/application-sidebar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/application-sidebar-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/organization-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/organization-item-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/page-numbers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/page-numbers-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/organization-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/organization-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/organizations-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/organizations-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });
});
define("ror-app/tests/test-helper", ["ror-app/app", "ror-app/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ror-app/tests/unit/models/organization-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | organization', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('organization', {});
      assert.ok(model);
    });
  });
});
define("ror-app/tests/unit/routes/organizations-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | organizations', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:organizations');
      assert.ok(route);
    });
  });
});
define("ror-app/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('organization');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('organization', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('ror-app/config/environment', [], function() {
  var prefix = 'ror-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ror-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
