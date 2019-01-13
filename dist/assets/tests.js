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
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "yoncN9AM",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"application-footer\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
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
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "X4DFtxeX",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"application-header\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ror-app/tests/integration/components/application-sidebar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | application-sidebar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3solakO+",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"application-sidebar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "kTKBQRIU",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"application-sidebar\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ror-app/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
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
  QUnit.test('formats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'formats.js should pass ESLint\n\n');
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
  QUnit.test('ror-app/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ror-app/templates/organizations.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ror-app/templates/organizations.hbs should pass TemplateLint.\n\n');
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
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/organizations-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/organizations-test.js should pass ESLint\n\n');
  });
});
define("ror-app/tests/test-helper", ["ror-app/app", "ror-app/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
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
