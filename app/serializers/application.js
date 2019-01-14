import { underscore } from '@ember/string';
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.hits;
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  keyForAttribute(attr) {
    return underscore(attr);
  }
});