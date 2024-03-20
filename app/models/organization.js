import Model, { attr } from '@ember-data/model';

export default Model.extend({
  meta: attr(),

  name: attr('string'),
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
  status: attr('string')
});

