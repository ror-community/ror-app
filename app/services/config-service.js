import Service from '@ember/service';
import config from '../config/environment';

export default Service.extend({
  API_URL_V1: config.API_URL_V1,
  API_URL_V2: config.API_URL_V2
});