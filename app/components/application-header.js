import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SearchComponent extends Component {
  @service globalSearch;

  @tracked query = '';

  @action
  search(event) {
    event.preventDefault();
    const inputValue = event.target.querySelector('[name="query"]').value;
    this.globalSearch.doSearch(inputValue);
  }
}
