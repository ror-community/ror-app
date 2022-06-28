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

    if (this.model.get('external_ids.GRID')) {
      if (this.model.get('external_ids.GRID').preferred){
        let grid = this.model.get('external_ids.GRID').preferred;
        this.set('grid', grid);
      }
    }
    if (this.model.get('external_ids.ISNI')) {
      if (this.model.get('external_ids.ISNI').preferred){
        let isni = this.model.get('external_ids.ISNI').preferred.replace(/-|\s/g,"");
        this.set('isni', isni);
    } else {
        let isni = this.model.get('external_ids.ISNI').all.get('firstObject').replace(/-|\s/g,"");
        this.set('isni', isni);
      }
    }
    if (this.model.get('external_ids.FundRef')) {
      if (this.model.get('external_ids.FundRef').preferred){
        let fundref = this.model.get('external_ids.FundRef').preferred;
        this.set('fundref', fundref);
      } else {
        let fundref = this.model.get('external_ids.FundRef').all.get('firstObject');
        this.set('fundref', fundref);
      }
    }
    if (this.model.get('external_ids.Wikidata')) {
      if (this.model.get('external_ids.Wikidata').preferred){
        let wikidata = this.model.get('external_ids.Wikidata').preferred;
        this.set('wikidata', wikidata);
      } else {
        let wikidata = this.model.get('external_ids.Wikidata').all.get('firstObject');
        this.set('wikidata', wikidata);
      }
    }
  }
});
