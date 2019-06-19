import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../components/pagination/Button';

describe('Button', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      handleClick: jest.fn(),
      id: 1,
      pageNumber: 2
    };
    wrapper = shallow(<Button {...props}/>);
  });

  afterEach(() => { wrapper = null; });

  
  describe('renders', () => {
    it('should exist', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('should not have any regressions', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('handleClick', () => {
  it('should call props.handleClick', () => {
    const ol = wrapper.find('ol');
    ol.simulate('click');
    expect(props.handleClick).toHaveBeenCalled();
    });
  });
});
