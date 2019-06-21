import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../../../components/pagination/Dropdown';

describe('Dropdown', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      handleChange: jest.fn(),
      itemsLength: 2
    };
    wrapper = shallow(<Dropdown {...props}/>);
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

  describe('handleChange', () => {
    it('should call props.handleClick', () => {
      const select = wrapper.find('select');
      select.simulate('change');
      expect(props.handleChange).toHaveBeenCalled();
    });
  });
});
