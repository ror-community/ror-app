import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.set('aliases', this.model.get('aliases').join(', '));
    this.set('acronyms', this.model.get('acronyms').join(', '));
  }
});
