import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import OrdersList from '../components/orders_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('orders').ready()) {
    const orders = Collections.Orders.find().fetch(); 
    onData(null, {orders});
  }

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(OrdersList);
