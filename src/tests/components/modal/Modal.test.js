import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../../components/modal/Modal';

describe('Button', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      handleClose: jest.fn(),
      show: true,
      children: [],
    };
    wrapper = shallow(<Modal {...props}/>);
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

describe('handleClose', () => {
  it('should call props.handleClose', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.handleClose).toHaveBeenCalled();
    });
  });
});
