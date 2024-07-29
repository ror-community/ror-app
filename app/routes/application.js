import Route from '@ember/routing/route';
import { initialize } from 'ember-launch-darkly';
import config from '../config/environment';

export default class ApplicationRoute extends Route {
  async model() {
    const user = {
      key: 'user-key-123abc',
      anonymous: true
    };

    // Destructure clientSideId and any other config options
    const { launchDarkly: { clientSideId }, ...restConfig } = config;
    
    console.log('clientSideId:', clientSideId);
    console.log('user:', user);
    console.log('config rest:', restConfig);

    try {
      // Initialize LaunchDarkly client and wait for it to complete
      const result = await initialize(clientSideId, user, restConfig);
      console.log('LaunchDarkly initialized:', initialize());
      return result;
    } catch (error) {
      console.error('Error initializing LaunchDarkly:', error);
      // Handle initialization error if needed, e.g., fallback logic or empty model
      return {}; // or handle it according to your app's needs
    }
  }
}
