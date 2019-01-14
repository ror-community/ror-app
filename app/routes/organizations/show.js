import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let self = this;
    return this.store.findRecord('organization', params.organization_id).then(function(organization) {
      return organization;
    }).catch(function(reason){
      if (console.debug) {
        console.debug(reason);
      } else {
        console.log(reason);
      }

      return self.transitionTo('index');
    });
  },

  actions: {
    queryParamsDidChange() {
      this.refresh();
    }
  }
});
