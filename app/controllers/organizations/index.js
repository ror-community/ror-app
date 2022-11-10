import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    featureFlags: service(),
    features: {},
    orgStatus: false,

    init() {
        this.featureFlags.features().then((json) => {
          // on fulfillment
          this.set('features', json);
          if ('ORG_STATUS' in this.features){
            this.set('orgStatus', this.features.ORG_STATUS)
          }
        }, (reason) => {
          // on rejection
          console.log("features flags request rejected")
          console.log(reason)
        });
      }
});