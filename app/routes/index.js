import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('invitation');
  },

  actions:{
    saveInvitation(invitation){
      invitation.save().then((response)=>{
        this.controller.set('responseMessage',`Thank you! We saved your email address with the following id:${response.get('id')}`);
      });
      invitation.set('email','');
    }
  }

});
