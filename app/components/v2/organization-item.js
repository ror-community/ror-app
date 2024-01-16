import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { capitalize } from '@ember/string';

export default Component.extend({
  INACTIVE_STATUSES: ['inactive', 'withdrawn'],
  fundref: null,
  grid: null,
  isni: null,
  wikidata: null,
  relationships: {},
  relationshipsCount: null,
  name: null,
  router: service(),
  isSearch: computed('router.currentURL', function() {
    return this.router.currentURL.includes("search")
  }),
  inactiveStatus: false,

  // Convert label array into a dictionary with relationship type as key
  // for variable fields in template
  convertRelationships(relationships){
    let formattedRelationships = {Parent:[], Child:[], Related:[], Successor:[], Predecessor:[]};
    for (let i = 0; i < relationships.length; i++){
        formattedRelationships[capitalize(relationships[i]["type"])].push({"label": relationships[i]["label"], "id": relationships[i]["id"]});
    }
    return formattedRelationships
  },

  didInsertElement() {
    if(this.INACTIVE_STATUSES.indexOf(this.model.get('status')) > -1) {
      this.set('inactiveStatus', true)
    }
    if(this.model.get('relationships')) {
      this.set('relationshipsCount', this.model.get('relationships').length)
      this.set('relationships', this.convertRelationships(this.model.get('relationships')))
    }
    this.set('aliases', this.model.get('aliases').join(', '));
    this.set('acronyms', this.model.get('acronyms').join(', '));
    this.set('labels', this.model.get('labels').map(label => label.label).join(', '));

    if (this.model.get('external_ids.GRID')) {
      if (this.model.get('external_ids.GRID').preferred){
        let grid = this.model.get('external_ids.GRID').preferred;
        this.set('grid', grid);
      }
    }
    if (this.model.get('external_ids.ISNI')) {
      if (this.model.get('external_ids.ISNI').preferred){
        let display_isni = this.model.get('external_ids.ISNI').preferred;
        let link_isni = this.model.get('external_ids.ISNI').preferred.replace(/-|\s/g,"");
        this.set('display_isni', display_isni);
        this.set('link_isni', link_isni);
    } else {
        let display_isni = this.model.get('external_ids.ISNI').all.get('firstObject');
        let link_isni = this.model.get('external_ids.ISNI').all.get('firstObject').replace(/-|\s/g,"");
        this.set('display_isni', display_isni);
        this.set('link_isni', link_isni);
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
    this.set('name', 'This works');
    // if (this.model.get('names')){
    //     this.set('name', 'This works');
    // }
  }
});
