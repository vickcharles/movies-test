import React from 'react';
import App from './App';
import { configure } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { store } from "./js/helpers/store";
import { mount } from 'enzyme';

configure({ adapter: new Adapter() });

export const CustomProvider = ({ children }) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
};

it('renders without crashing', () => {
  mount(<CustomProvider><App /></CustomProvider>);
  expect(true).toBeTruthy();
});
