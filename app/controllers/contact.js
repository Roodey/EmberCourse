import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  isValidEmail: Ember.computed.match('emailAddress',/^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length',5),
  isValid: Ember.computed.and('isValidEmail','isValidMessage'),

  isDisabled: Ember.computed.not('isValid')
});
