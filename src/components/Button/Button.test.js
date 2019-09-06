import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from './Button';

describe('Button component tests', () => {
  let x = false;
  const eventFunction = () => {
    x = true;
  };
  const minProps = {
    onClick: eventFunction,
    children: '',
  };
  test('Should render without exploding', () => {
    expect(shallow(<Button {...minProps} />).length).toEqual(1);
  });

  test('Should handle the click events', () => {
    const btn = mount(<Button {...minProps} />).find('button').first();
    btn.simulate('click');
    expect(x).toEqual(true);
  });
});
