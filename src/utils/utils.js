export const getPageNumbers = (totalItems, itemsPerPage) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};

export const getStartPage = (itemsPerPage, currentPage) => (currentPage * itemsPerPage) - itemsPerPage;
