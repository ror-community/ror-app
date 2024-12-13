import JSONSerializer from '@ember-data/serializer/json';
import { underscore } from '@ember/string';
import { assign } from '@ember/polyfills';

export default JSONSerializer.extend({
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
    return assign(data, meta);
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