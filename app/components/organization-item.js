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
  router: service(),
  isSearch: computed('router.currentURL', function() {
    return this.router.currentURL.includes("search")
  }),
  inactiveStatus: false,
  name: null,
  lastModifiedDate: null,
  otherNames: null,
  organizationTypes: null,
  configService: service('config-service'),


  // Convert label array into a dictionary with relationship type as key
  // for variable fields in template
  convertRelationships(relationships){
    let formattedRelationships = {Parent:[], Child:[], Related:[], Successor:[], Predecessor:[]};
    for (let i = 0; i < relationships.length; i++){
      formattedRelationships[capitalize(relationships[i]["type"])].push({"label": relationships[i]["label"], "id": relationships[i]["id"]});
    }
    return formattedRelationships
  },

  convertOtherNames(names) {
    const nameOrder = ['label', 'alias', 'acronym'];

    const initialGroupedNames = names.reduce((result, name) => {
      if (name.types.includes("ror_display")) {
        return result;
      }
      const type = name.types.includes("label") ? "label" : name.types[0];
      result[type] = result[type] || [];
      
      if (name.lang && !name.value.includes(`(${name.lang})`)) {
        name.value = `${name.value} (${name.lang})`;
      }
      result[type].push(name);
      return result;
    }, {});

    const orderedGroupedNames = {};
    const orderedValues = [];

    nameOrder.forEach(type => {
      if (initialGroupedNames[type]) {
        orderedGroupedNames[type] = initialGroupedNames[type];

        initialGroupedNames[type].forEach(item => {
          orderedValues.push(item.value);
        });
      }
    });

    const valuesString = orderedValues.join(', ');

    return {
      values: valuesString,
      groupedNames: orderedGroupedNames,
      groupedNamesCount: Object.keys(orderedGroupedNames).length
    };
  },

  getName(names) {
    let name = names.find(record => record.types.includes("ror_display"));

    return name ? name.value : null;
  },

  didInsertElement() {
    if(this.INACTIVE_STATUSES.indexOf(this.model.get('status')) > -1) {
      this.set('inactiveStatus', true)
    }
    if(this.model.get('relationships')) {
      this.set('relationshipsCount', this.model.get('relationships').length)
      this.set('relationships', this.convertRelationships(this.model.get('relationships')))
    }
    if (this.model.get('external_ids')){
      this.model.get('external_ids').forEach(externalId => {
        switch (externalId.type) {
          case 'grid':
            if (externalId.preferred) {
              this.set('grid', externalId.preferred);
            }
            break;

          case 'isni':
            if (externalId.preferred) {
              let displayIsni = externalId.preferred;
              let linkIsni = externalId.preferred.replace(/-|\s/g, "");
              this.set('display_isni', displayIsni);
              this.set('link_isni', linkIsni);
            } else {
              let displayIsni = externalId.all[0];
              let linkIsni = externalId.all[0].replace(/-|\s/g, "");
              this.set('display_isni', displayIsni);
              this.set('link_isni', linkIsni);
            }
            break;

          case 'fundref':
            if (externalId.preferred) {
              this.set('fundref', externalId.preferred);
            } else {
              this.set('fundref', externalId.all[0]);
            }
            break;

          case 'wikidata':
            if (externalId.preferred) {
              this.set('wikidata', externalId.preferred);
            } else {
              this.set('wikidata', externalId.all[0]);
            }
            break;

          default:
            break;
        }
      });
    }
    if (this.model.get('names')){
      let names = this.model.get('names');
      this.set('name', this.getName(names));
      this.set('otherNames', this.convertOtherNames(names));
    }
    if (this.model.get('admin.last_modified')) {
      this.set('lastModifiedDate', this.model.get('admin.last_modified').date)
    }
    if (this.model.get('types')) {
      this.set('organizationTypes', this.model.get('types').map(type => type.charAt(0).toUpperCase() + type.slice(1)).join(', '))
    }
  }
});
