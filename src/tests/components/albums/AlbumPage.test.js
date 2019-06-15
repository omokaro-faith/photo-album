import React from 'react';
import { shallow } from 'enzyme';
import { AlbumPage } from '../../../components/album/AlbumPage';

describe('AlbumPage', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      users: [],
      albums: [],
      getUsers: jest.fn(),
      getAlbums: jest.fn(),
    };
    wrapper = shallow(<AlbumPage {...props}/>);
  });

  afterEach(() => { wrapper = null; });

  
  describe('renders', () => {
    it('should exist', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('should not have any regressions', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('sets albums', () => {
      wrapper.setState({
        userId: 1,
        title: 'lorem ipsum',
        color: '#000fff',
        userName: 'Omokaro Faith',
        albumId: 2,
        albumsPerPage: 10,
        currentPage: 1,
      });

      const result = {
        userId: 1,
        title: 'lorem ipsum',
        color: '#000fff',
        userName: 'Omokaro Faith',
        albumId: 2,
        albums: [],
        albumsPerPage: 10,
        currentPage: 1,
      };

      expect(wrapper.state()).toEqual(result);
    });
  });
})