import { underscore } from '@ember/string';
import { merge } from '@ember/polyfills';
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let total = payload.number_of_results;
    let totalPages = Math.min(Math.ceil(total / 20), 500);
    let meta = { meta: { total: total, totalPages: totalPages } }
    payload = payload.items.map(item => { 
      // strip "https://" from id
      item.id = item.id.substr(16);
      return item;
    });
    let data = this._super(store, primaryModelClass, payload, id, requestType);
    return merge(data, meta);
  },
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    // strip "https://" from id
    payload.id  = payload.id.substr(16);
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