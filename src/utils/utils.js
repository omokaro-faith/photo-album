// Logic for displaying page numbers
export const getPageNumbers = (albums, albumsPerPage) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(albums.length / albumsPerPage); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers
}

// Logic for displaying current albums
export const getCurrentAlbums = (currentPage, albumsPerPage, albums ) => {
  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstFirstAlbum = indexOfLastAlbum - albumsPerPage;
  return albums.slice(indexOfFirstFirstAlbum, indexOfLastAlbum); 
}