import Route from '@ember/routing/route';
import ENV from 'ror-app/config/environment';

export default class ErrorRoute extends Route {
  redirect() {
    window.location.replace(ENV.BASE_URL + "/error");
  }
}