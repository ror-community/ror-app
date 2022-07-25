import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('organization', params.organization_id).then(function(organization) {
      return organization;
    }).catch(function(_this){
      //hack to handle not found error
      //not ideal, but ember DS error handling is lacking
      let organization = {}
      organization.response_status = _this.errors
      return organization;
    });
  },

  actions: {
    queryParamsDidChange() {
      this.refresh();
    }
  }
});
