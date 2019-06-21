import { getPageNumbers, getStartPage } from '../../utils/utils';
import albums from '../fixtures/albums';

const defaultArray = [];
describe('getPageNumbers', () => {
  it('returns an array containing page numbers', () => {
    const itemsPerPage = 1;
    const expected = [1, 2, 3, 4, 5];

    expect(getPageNumbers(albums.length, itemsPerPage)).toEqual(expected);
  });

  it('returns an empty array when page content is empty', () => {
    const albumsPerPage = 2;
    const expected = [];

    expect(getPageNumbers(defaultArray, albumsPerPage)).toEqual(expected);
  });
});

describe('getStartPage', () => {
  it('returns a page start number', () => {
    const itemsPerPage = 100;
    const currentPage = 3;

    expect(getStartPage(itemsPerPage, currentPage)).toEqual(200);
  });
  it('returns zero as default when item per page is zero', () => {
    const itemsPerPage = 0;
    const currentPage = 3;

    expect(getStartPage(itemsPerPage, currentPage)).toEqual(0);
  });
});