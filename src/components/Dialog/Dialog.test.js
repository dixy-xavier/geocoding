import React from 'react';
import { mount, shallow } from 'enzyme';
import Dialog from './Dialog';

describe('Dialog component tests', () => {
  const minProps = {
    toggleDialog: f => f,
    addMarker: f => f
  };
  test('Should render without exploding', () => {
    expect(shallow(<Dialog {...minProps} />).length).toEqual(1);
  });
  test('Should have 2 inputs', () => {
    expect(mount(<Dialog {...minProps} />).find('input').first().length).toEqual(2);
  });
});
