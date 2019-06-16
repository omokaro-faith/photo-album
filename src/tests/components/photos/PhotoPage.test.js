import React from 'react';
import { shallow } from 'enzyme';
import { PhotoPage } from '../../../components/photo/PhotoPage';
import photos from '../../fixtures/photos';

describe('PhotoPage', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      photos: [],
      getPhotos: jest.fn(),
      match: {
        params: {
          albumOwner: 'Leonardo Da vinci',
          albumTitle: 'Angel & Demos',
        }
      }
    };
    wrapper = shallow(<PhotoPage {...props}/>);
  });

  afterEach(() => { wrapper = null; });

  
  describe('renders', () => {
    it('should exist', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('should not have any regressions', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('sets photos', () => {
      wrapper.setState({
       photos: photos
      });

      const result = {
        modalContent:  {},
        photos: [
          {
           id: 1,
           thumbnailUrl: 'http://dummypath',
           url: 'http://dummypath',
         },
          {
           id: 2,
           thumbnailUrl: 'http://dummypath',
           url: 'http://dummypath',
         },
          {
           id: 3,
           thumbnailUrl: 'http://dummypath',
           url: 'http://dummypath',
         },
          {
           id: 4,
           thumbnailUrl: 'http://dummypath',
           url: 'http://dummypath',
         },
          {
           id: 5,
           thumbnailUrl: 'http://dummypath',
           url: 'http://dummypath',
         },
        ],
        show: false,
        currentPage: 1,
        itemsPerPage: 10,
      };

      expect(wrapper.state()).toEqual(result);
    });
  });
})