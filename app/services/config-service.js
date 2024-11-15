import Service from '@ember/service';
import config from '../config/environment';

export default Service.extend({
  API_URL: config.API_URL
});