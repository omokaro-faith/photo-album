import React from 'react';
import { shallow } from 'enzyme';
import { AlbumPage } from '../../../components/album/AlbumPage';
import albums from '../../fixtures/albums';
import users from '../../fixtures/users';

describe('AlbumPage', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      users: [],
      getUsers: jest.fn(),
      getAlbums: jest.fn(),
      albums: [],
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

    describe('getDerivedStateFromProps', () => {
      it('should set album data', () => {
        const props = { albums, users };
        const state = { albums: [] };

        const expected =
            {
               albums:  [
                  {
                   albumId: 1,
                   color: 'CC6699',
                   owner: 'Leanne Graham',
                   title: 'This fall apart',
                   userId: 1,
                   userName: 'air',
                 },
                  {
                   albumId: 2,
                   color: 'F1B02F',
                   owner: 'Ervin Howell',
                   title: 'Bisi goes to school',
                   userId: 2,
                   userName: 'wind',
                 },
                  {
                   albumId: 3,
                   color:'EADE84',
                   owner: 'Teni askamaya',
                   title: 'The church hill',
                   userId: 3,
                   userName: 'sea',
                 },
                  {
                   albumId: 4,
                   color: 'A3D064',
                   owner: 'dauty',
                   title: 'dauty',
                   userId: 4,
                   userName: 'asa',
                 },
                  {
                   albumId: 5,
                   color: '11B2AA',
                   owner: 'kelly rowrow',
                   title: 'kelly rowrow',
                   userId: 5,
                   userName: 'cornrow',
                 },
               ],
        };

        const result = AlbumPage.getDerivedStateFromProps(props, state);
        expect(result).toEqual(expected);
      });
    });

    describe('Albums length is equal 0', () => {
      it('displays the loader', () => {
        const loader = wrapper.find('.loader');
        expect(loader.length).toEqual(1);
      })
    })
  });
})