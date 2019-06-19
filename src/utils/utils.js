export const getPageNumbers = (items, itemsPerPage) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};

export const getCurrentItems = (currentPage, itemPerPage, items ) => {
  const indexOfLastAlbum = currentPage * itemPerPage;
  const indexOfFirstFirstAlbum = indexOfLastAlbum - itemPerPage;
  return items.slice(indexOfFirstFirstAlbum, indexOfLastAlbum); 
};