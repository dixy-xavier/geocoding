import React from 'react';
import { shallow } from 'enzyme';
import Toast from './Toast';

describe('Toast component tests', () => {
  const minProps = {
    error: ''
  };
  test('Should render without exploding', () => {
    expect(shallow(<Toast {...minProps} />).length).toEqual(1);
  });
});
