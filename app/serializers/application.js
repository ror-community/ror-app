import { underscore } from '@ember/string';
import { assign } from '@ember/polyfills';
import DS from 'ember-data';

// Convert label array into a dictionary with relationship type as key
// for variable fields in template
function convertReationships(relationships){
  if(Array.isArray(relationships) && !relationships.length){
    return relationships;
  } else {
      let formattedRelationships = {"Parent":[], "Child":[], "Related":[]};
      for (let i = 0; i < relationships.length; i++){
        formattedRelationships[relationships[i]["type"]].push({"label": relationships[i]["label"], "id": relationships[i]["id"]});
      }
      return formattedRelationships
    }
  }

export default DS.JSONSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let total = payload.number_of_results;
    let totalPages = Math.min(Math.ceil(total / 20), 500);
    let meta = { meta: { total: total, totalPages: totalPages } }
    payload = payload.items.map(item => { 
      // strip "https://" from id
      item.id = item.id.substr(16);
      item.relationships = convertReationships(item.relationships);
      return item;
    });
    let data = this._super(store, primaryModelClass, payload, id, requestType);
    return assign(data, meta);
  },
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    // strip "https://" from id
    payload.id  = payload.id.substr(16);
    payload.relationships = convertReationships(payload.relationships);
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  // normalizeFindRecordResponse(store, primaryModelClass, payload) {
  //   payload.data.attributes.meta = payload.meta || {};

  //   return this._super(store, primaryModelClass, payload);
  // },
    keyForAttribute(attr) {
    return underscore(attr);
  }
});