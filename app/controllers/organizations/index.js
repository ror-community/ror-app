import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    featureFlags: service(),
    features: {},

    init() {
        this.featureFlags.features().then((json) => {
          // on fulfillment
          this.set('features', json);
          console.log("this.features is")
          console.log(this.features)
          console.log(this.features['ORG_STATUS'])
        }, (reason) => {
          // on rejection
          console.log("rejected")
          console.log(reason)
        });
      }
});