import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dropdown from '../pagination/Dropdown';
import Buttons from '../pagination/Button';
import { getAlbums, fetchAllAlbums }  from '../../actions/albums';
import { getUsers }  from '../../actions/users';
import { DEFAULT_COLOR_PALLETTE, INITIAL_START_VALUE } from '../../constants/constants';
import { getPageNumbers, getStartPage } from '../../utils/utils';
import Header from '../header/Header';
import ErrorDisplay from '../error/ErrorDisplay';

export class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      currentPage: 1,
      itemsPerpage: 20,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    getAlbums: PropTypes.func.isRequired,
    getUsers:  PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    albums: PropTypes.array.isRequired,
    fetchAllAlbums:  PropTypes.func.isRequired,
  };

  static defaultProps = {
    albums: [],
    users: [],
    totalAlbums: 0,
  };

  componentDidMount() {
    const { getAlbums, getUsers, fetchAllAlbums } = this.props;
    fetchAllAlbums();
    const { itemsPerpage } = this.state;
    getAlbums(INITIAL_START_VALUE, itemsPerpage);
    getUsers();
  }

  static getDerivedStateFromProps(props, state) {
    const { users, albums  } = props;
    if (props.albums !== state.albums) {
      const storage = [];
      users.forEach((user) => DEFAULT_COLOR_PALLETTE.forEach((pallette) => albums.forEach((album) => {
        if((user.id === album.userId) && (pallette.userId === album.userId)) {
          storage.push({
            userName: user.username,
            title: album.title,
            userId: album.userId,
            albumId: album.id,
            color: pallette.color,
            owner: user.name
          })
        }
      })));
      return {
        albums: storage,
      }
    }
  }


  handleChange(event) {
    const { getAlbums } = this.props;
    this.setState({
      currentPage: 1,
      itemsPerpage: event.target.value,
    });

    getAlbums(INITIAL_START_VALUE, event.target.value);
  }

  handleClick(event) {
    const { itemsPerpage } = this.state;
    const { getAlbums } = this.props;
    const currentPage = Number(event.target.id);
    const start = getStartPage(itemsPerpage, currentPage);
    
    getAlbums(start, itemsPerpage);
    this.setState({ currentPage });
  }

  render() {
    const { albums, currentPage, itemsPerpage } = this.state;
    const { totalAlbums, errorMessage, message } = this.props;

    const renderAlbums = albums.map((album, index) => 
    (
      <div key={index} className='grid__item'>
          <Link to={{
          pathname: `/photo-page/${album.albumId}/${album.title}/${album.owner}`,
          state: { AlbumPage: true },
          }}
          >
          <div className='grid__img'>
            <img className='grid__img--item' src={`https://via.placeholder.com/150/${album.color}`} alt={`${album.title}`} />
          </div>
          </Link>
          <div className='tooltip'>
            <h5>Username: {album.userName} </h5>
            <h5>Title: {album.title}</h5>
            <h4 className='tooltiptext'>{album.title} </h4>
        </div>
      </div>
    ));

    const renderPageNumbers = getPageNumbers(totalAlbums, itemsPerpage).map((number) => (
       <Buttons 
        key={number}
        id={number}
        handleClick={this.handleClick}
        pageNumber={number}
        currentPage={currentPage}
       />
    ));

    return (
      <Fragment>
      { 
      (errorMessage || message) &&
        <ErrorDisplay />
      }
      <section className='grid'>
      <Header totalItems={totalAlbums} pageName='Albums' />
        <div className='dropdown-button__wrapper'>
         <Dropdown handleChange={this.handleChange} itemsLength={albums.length}/>
        {renderPageNumbers}
       </div>
       { albums.length >= 1 
       ?
       <div className='grid__container'>
        { renderAlbums } 
       </div>
       : <div className='loader'></div>}
      </section> 
    </Fragment> 
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAlbums: (start, limit) => dispatch(getAlbums(start, limit)),
  getUsers: () => dispatch(getUsers()),
  fetchAllAlbums: () => dispatch(fetchAllAlbums()),
});

 const mapStateToProps = (state) => ({
  albums: state.albums.albums,
  totalAlbums: state.albums.totalAlbums,
  users: state.users.users,
  errorMessage: state.albums.errorMessage,
  message: state.albums.message,
});


export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
