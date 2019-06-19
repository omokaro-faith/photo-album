import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/header/Header';

describe('Header', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      totalItems: 2,
      pageName: 'Albums'
    };
    wrapper = shallow(<Header {...props}/>);
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
});
