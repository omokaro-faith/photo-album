import React from 'react';
import { shallow } from 'enzyme';
import ErrorDisplay from '../../../components/error/ErrorDisplay';

describe('ErrorDisplay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorDisplay/>);
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
