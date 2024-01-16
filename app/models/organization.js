import DS from 'ember-data';

export default DS.Model.extend({
  meta: DS.attr(),

  name: DS.attr('string'), //TODO: Remove this when v1 has been retired
  names: DS.attr(),
  local: DS.attr('string'),
  types: DS.attr(),
  links: DS.attr(),
  aliases: DS.attr(),
  acronyms: DS.attr(),
  external_ids: DS.attr(),
  wikipediaUrl: DS.attr('string'),
  labels: DS.attr(),
  country: DS.attr(),
  addresses: DS.attr(),
  relationships: DS.attr(),
  status: DS.attr('string')
});

