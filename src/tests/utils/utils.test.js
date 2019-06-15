import { getPageNumbers, getCurrentAlbums } from '../../utils/utils';
import albums from '../fixtures/albums';

describe('getPageNumbers', () => {
  it('returns an array containing page numbers', () => {
    const albumsPerPage = 2;
    const expected = [1, 2, 3];

    expect(getPageNumbers(albums, albumsPerPage)).toEqual(expected);
  });

  it('returns an empty array when page content is empty', () => {
    const albumsPerPage = 2;
    const expected = [];

    expect(getPageNumbers([], albumsPerPage)).toEqual(expected);
  });
});

describe('getCurrentAlbums', () => {
  it('returns an array containing current items on the page', () => {
    const albumsPerPage = 3;
    const currentPage = 1;
    const expected = [
      {
      id: 1,
      title: 'This fall apart',
     },
     {
      id: 2,
      name: 'Bisi goes to school',
     },
     {
      id: 3,
      name: 'The church hill',
     },
  ];

    expect(getCurrentAlbums(currentPage, albumsPerPage, albums)).toEqual(expected);
  });

  it('returns an empty array when page content is empty', () => {
    const albumsPerPage = 2;
    const currentPage = 1;
    const expected = [];

    expect(getCurrentAlbums(currentPage, albumsPerPage, [])).toEqual(expected);
  });
});