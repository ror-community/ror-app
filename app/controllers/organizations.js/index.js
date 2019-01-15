import Controller from '@ember/controller';
export default Controller.extend({
  queryParams: ['query', 'sort', 'page'],
  query: null,
  sort: null,
  page: 1
});