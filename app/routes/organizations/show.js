import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    //let self = this;
    return this.store.findRecord('organization', params.organization_id).then(function(organization) {
      return organization;
    })
  },
  actions: {
    queryParamsDidChange() {
      this.refresh();
    }
  }
});
