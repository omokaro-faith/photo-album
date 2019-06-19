import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../../components/notfound/NotFoundPage';

describe('NotFoundPage', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = { 
      totalItems: 2,
      pageName: 'Photos',
    }
    wrapper = shallow(<NotFoundPage {...props} />);
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
