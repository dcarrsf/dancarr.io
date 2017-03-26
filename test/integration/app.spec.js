import React from 'react';
import { describe } from 'tape-plus';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

// Store
import store from '../../client/jsx/model/store.js';

// Component
import App from '../../client/jsx/containers/app/App.jsx';

// Enzyme
let wrapper;

// Bindings
function getProvider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// Run Tests
describe('<App />', it => {

  // --------------------
  // Integration Testing:

  it.group('Integration', test => {

    test.beforeEach(t => {
      wrapper = mount(getProvider());
    });

    test.afterEach(t => {
      wrapper.unmount();
    });

    // Test: Sub Components
    test('it contains Header and ScrollView components.', (t) => {
      // Contains Foo and Bar components
      t.equal(wrapper.find('Header').length === 1, true);
      t.equal(wrapper.find('ScrollView').length === 1, true);
    });

    // Test: State & Props
    // test('it contains a, b, and c props.', (t) => {
    //   // Contains default state
    //   const fooBarProps = wrapper.find('FooBar').props();
    //   t.equal(fooBarProps.a === 0, true);
    //   t.equal(fooBarProps.b === 0, true);
    //   t.equal(fooBarProps.c === 0, true);
    //   // Contains default props in Foo
    //   const fooProps = wrapper.find('Foo').props();
    //   t.equal(fooProps.a === 0, true);
    //   t.equal(fooProps.b === 0, true);
    //   // Contains default props in Bar
    //   const barProps = wrapper.find('Bar').props();
    //   t.equal(barProps.a === 0, true);
    //   t.equal(barProps.b === 0, true);
    //   t.equal(barProps.c === 0, true);

    //   t.comment('---------------');
    // });
  });

  // --------------------
  // Behavior Testing:

  // it.group('Behavior', test => {

  //   test.beforeEach(t => {
  //     wrapper = mount(getProvider());
  //   });

  //   test.afterEach(t => {
  //     wrapper.unmount();
  //   });

  //   test('it updates a, b, and c values when clicked.', (t) => {
  //     // Cache values
  //     const container = wrapper.find('FooBar');
  //     let a = container.props().a;
  //     let b = container.props().b;
  //     let c = container.props().c;
  //     // Simulate click
  //     container.find('Foo').find('h1').simulate('click');
  //     // Test value has changed
  //     t.notEqual(container.props().a === a, true);
  //     t.notEqual(container.props().b === b, true);
  //     t.notEqual(container.props().c === c, true);
  //     // Cache values
  //     a = container.props().a;
  //     b = container.props().b;
  //     c = container.props().c;
  //     // Simulate click
  //     container.find('Bar').find('h1').simulate('click');
  //     // Test value has changed
  //     t.notEqual(container.props().a === a, true);
  //     t.notEqual(container.props().b === b, true);
  //     t.notEqual(container.props().c === c, true);

  //     t.comment('---------------');
  //   });
  // });
});
