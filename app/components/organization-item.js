import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.set('aliases', this.model.get('aliases').join(', '));
    this.set('acronyms', this.model.get('acronyms').join(', '));

    let external_ids = this.model.get('external_ids');
    // .map(id => { 
    //   item.id = item.id.substr(8);
    //   return item;
    // });
    this.set('external_ids', external_ids);
  }
});
