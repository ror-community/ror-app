import { underscore } from '@ember/string';
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.items.map(item => { 
      // strip "https://" from id
      item.id = item.id.substr(8);
      return item;
   });
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    // strip "https://" from id
    payload.id  = payload.id.substr(8);
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