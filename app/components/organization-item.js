import Component from '@ember/component';

export default Component.extend({
  isni: null,
  wikidata: null,

  didInsertElement() {
    this.set('aliases', this.model.get('aliases').join(', '));
    this.set('acronyms', this.model.get('acronyms').join(', '));

    this.set('grid', this.model.get('local'));
    if (this.model.get('external_ids.ISNI')) {
      this.set('isni', this.model.get('external_ids.ISNI').all);
    }
    if (this.model.get('external_ids.FundRef')) {
      this.set('fundref', this.model.get('external_ids.FundRef').all);
    }
    if (this.model.get('external_ids.Wikidata')) {
      this.set('wikidata', this.model.get('external_ids.Wikidata').all);
    }
  }
});
