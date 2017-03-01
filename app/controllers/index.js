import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed.match('model.email',/^.+@.+\..+$/),
  isDisabled:Ember.computed.not('isValid'),
});
