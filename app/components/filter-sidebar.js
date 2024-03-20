import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),
    activeStatus: true,
    inactiveStatus: false,
    withdrawnStatus: false,
    filterValue: '',

    actions: {
        applyFilter() {
            this.filterValue = ''
            if (this.activeStatus == true){
                this.filterValue += "status:active,"
            }
            if (this.inactiveStatus == true){
                this.filterValue += "status:inactive,"
            }
            if (this.withdrawnStatus == true){
                this.filterValue += "status:withdrawn,"
            }
            this.filterValue = this.filterValue.slice(0, -1)
            this.set('model.query.filter', this.filterValue)
            //this.get('globalSearch').doSearch(this.query, this.allStatus)
            this.router.transitionTo('organizations.index', { queryParams: { query: this.model.query.query, page: this.model.query.page, all_status: this.model.query.allStatus, filter: this.model.query.filter}});
        },
        clearFilter() {
            this.filterValue = ''
            this.set('activeStatus', true);
            this.set('inactiveStatus', false);
            this.set('withdrawnStatus', false);
            this.filterValue = "status:active"
            this.set('model.query.filter', this.filterValue)
            this.router.transitionTo('organizations.index', { queryParams: { query: this.model.query.query, page: this.model.query.page, all_status: this.model.query.allStatus, filter: this.model.query.filter}});
        }
    }

});
