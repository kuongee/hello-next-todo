import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import reducer from './modules';

const configureStore = () => {
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: true,
});

export default wrapper;
