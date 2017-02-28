import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('library');
  },

  actions:{
    saveLibrary(newLibrary){
      newLibrary.save().then((response)=>this.controller.get('model').rollbackAttributes());
    },
    willTransition(){
      this.controller.get('model').rollbackAttributes();
    }
  }
});
