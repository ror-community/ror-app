import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  fundref: null,
  grid: null,
  isni: null,
  wikidata: null,
  relationships: {},
  relationshipsCount: null,
  router: service(),
  notFound: false,
  notFoundMsg: null,
  isSearch: computed('router.currentURL', function() {
    return this.router.currentURL.includes("search")
  }),

  // Convert label array into a dictionary with relationship type as key
  // for variable fields in template
  convertRelationships(relationships){
    let formattedRelationships = {Parent:[], Child:[], Related:[]};
    for (let i = 0; i < relationships.length; i++){
      formattedRelationships[relationships[i]["type"]].push({"label": relationships[i]["label"], "id": relationships[i]["id"]});
    }
    return formattedRelationships
  },

  didInsertElement() {
    if(this.model.response_status) {
      if(this.model.response_status[0].includes("does not exist") || this.model.response_status[0].includes("removed") || this.model.response_status[0].includes("not a valid")){
          this.set('notFound', true)
          this.set('notFoundMsg', this.model.response_status[0])
        }
    }
    if(this.notFound === false){
      if(this.model.get('relationships')) {
        this.set('relationshipsCount', this.model.get('relationships').length)
        this.set('relationships', this.convertRelationships(this.model.get('relationships')))
      }
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
          let isni = this.model.get('external_ids.ISNI').preferred;
          this.set('isni', isni);
      } else {
          let isni = this.model.get('external_ids.ISNI').all.get('firstObject');
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
  }
});
