import Component from '@ember/component';

export default Component.extend({
  isni: null,
  wikidata: null,

  didInsertElement() {
    this.set('aliases', this.model.get('aliases').join(', '));
    this.set('acronyms', this.model.get('acronyms').join(', '));
    this.set('labels', this.model.get('labels').map(label => { 
      return label.label;
    }));

    this.set('grid', this.model.get('external_ids.GRID').preferred);
    if (this.model.get('external_ids.ISNI')) {
      let isni = this.model.get('external_ids.ISNI').all.get('firstObject').replace(/-|\s/g,"");
      this.set('isni', isni);
    }
    if (this.model.get('external_ids.FundRef')) {
      let fundref = this.model.get('external_ids.FundRef').all.get('firstObject');
      this.set('fundref', fundref);
    }
    if (this.model.get('external_ids.Wikidata')) {
      let wikidata = this.model.get('external_ids.Wikidata').all.get('firstObject');
      this.set('wikidata', wikidata);
    }
  }
});
