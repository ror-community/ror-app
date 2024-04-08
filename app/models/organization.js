import Model, { attr } from '@ember-data/model';

export default Model.extend({
  meta: attr(),

  name: attr('string'), //TODO: Remove this when v1 has been retired
  names: attr(),
  local: attr('string'),
  types: attr(),
  links: attr(),
  aliases: attr(),
  acronyms: attr(),
  external_ids: attr(),
  wikipediaUrl: attr('string'),
  labels: attr(),
  country: attr(),
  addresses: attr(),
  relationships: attr(),
  status: attr('string'),
  admin: attr(),
  locations: attr()
});

