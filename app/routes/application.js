import Route from '@ember/routing/route';

export default Route.extend({
    //Using beforeModel hook works better to ensure
    //LaunchDarkly requests are complete before model loads
    beforeModel() {
        let user = {
            //Docs say that key is not required, but it is
            //https://github.com/adopted-ember-addons/ember-launch-darkly/blob/v1.0.0/README.md#initialize
            key: 'user-key-123abc',
            anonymous: true
        };

        return this.launchDarkly.initialize(user);
    },
    model(){
        console.log("App route")
        console.log(this.launchDarkly.variation("v2_ui"))
    }
});