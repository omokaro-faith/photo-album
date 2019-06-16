import { getPageNumbers, getCurrentItems } from '../../utils/utils';
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

describe('getCurrentItems', () => {
  it('returns an array containing current items on the page', () => {
    const albumsPerPage = 3;
    const currentPage = 1;
    const expected = [
      {
      id: 1,
      title: 'This fall apart',
      userId: 1,
     },
     {
      id: 2,
      title: 'Bisi goes to school',
      userId: 2,
     },
     {
      id: 3,
      title: 'The church hill',
      userId: 3,
     },
  ];

    expect(getCurrentItems(currentPage, albumsPerPage, albums)).toEqual(expected);
  });

  it('returns an empty array when page content is empty', () => {
    const albumsPerPage = 2;
    const currentPage = 1;
    const expected = [];

    expect(getCurrentItems(currentPage, albumsPerPage, [])).toEqual(expected);
  });
});