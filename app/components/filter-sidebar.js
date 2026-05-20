import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FilterSidebarComponent extends Component {
  @service router;

  @tracked activeStatus = true;
  @tracked inactiveStatus = false;
  @tracked withdrawnStatus = false;
  @tracked popoverVisible = false;

  filterValue = '';

  @action
  toggleStatus(e) {
    this[e.target.name] = e.target.checked;
  }

  @action
  applyFilter() {
    this.filterValue = '';
    if (this.activeStatus) {
      this.filterValue += 'status:active,';
    }
    if (this.inactiveStatus) {
      this.filterValue += 'status:inactive,';
    }
    if (this.withdrawnStatus) {
      this.filterValue += 'status:withdrawn,';
    }
    this.filterValue = this.filterValue.slice(0, -1);
    this.args.model.query.filter = this.filterValue;
    this.router.transitionTo('organizations.index', {
      queryParams: {
        query: this.args.model.query.query,
        page: this.args.model.query.page,
        all_status: this.args.model.query.allStatus,
        filter: this.args.model.query.filter,
      },
    });
  }

  @action
  clearFilter() {
    this.filterValue = '';
    this.activeStatus = true;
    this.inactiveStatus = false;
    this.withdrawnStatus = false;
    this.filterValue = 'status:active';
    this.args.model.query.filter = this.filterValue;
    this.router.transitionTo('organizations.index', {
      queryParams: {
        query: this.args.model.query.query,
        page: this.args.model.query.page,
        all_status: this.args.model.query.allStatus,
        filter: this.args.model.query.filter,
      },
    });
  }

  @action
  onPopoverShown() {
    this.popoverVisible = true;
  }

  @action
  onPopoverHidden() {
    this.popoverVisible = false;
  }

  @action
  handlePopoverKeydown(event) {
    if (event.key === 'Escape' && this.popoverVisible) {
      event.preventDefault();
      event.target.click();
    }
  }
}
