import { Meteor } from 'meteor/meteor';

import { loadParties } from './imports/fixtures/parties';

import './imports/publications/parties';
import './imports/publications/users';
import './imports/publications/images';


Meteor.startup(() => {
  loadParties();
});
