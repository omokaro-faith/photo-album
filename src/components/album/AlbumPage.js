import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dropdown from '../pagination/Dropdown';
import Buttons from '../pagination/Button';
import { getAlbums }  from '../../actions/albums';
import { getUsers }  from '../../actions/users';
import { DEFAULT_COLOR_PALLETTE, ITEMS_PER_PAGE } from '../../constants/constants';
import { getPageNumbers, getCurrentItems } from '../../utils/utils';

export class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      currentPage: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    getAlbums: PropTypes.func.isRequired,
    getUsers:  PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    albums: PropTypes.array.isRequired,
  };

  static defaultProps = {
    albums: [],
    users: [],
  };

  componentDidMount() {
    const { getAlbums, getUsers } = this.props;
    getAlbums();
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
    getAlbums(event.target.value);
    this.setState({
      currentPage: 1,
    });
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { albums, currentPage } = this.state;
    const renderAlbums = getCurrentItems(currentPage, ITEMS_PER_PAGE, albums).map((album, index) => 
    (
      <div key={index} className="grid__item">
      <Link to={{
          pathname: `/photo-page/${album.albumId}/${album.title}/${album.owner}`,
          state: { AlbumPage: true },
        }}
        >
        <div className="grid__img">
          <img src={`https://via.placeholder.com/150/${album.color}`} alt='' title={`${album.title}`} />
        </div>
        </Link>
        <h4>Title: {album.title}</h4>
        <h4>UserName: {album.userName}</h4>
      </div>
    ));

    const renderPageNumbers = getPageNumbers(albums, ITEMS_PER_PAGE).map((number) => (
       <Buttons 
        key={number}
        id={number}
        handleClick={this.handleClick}
        pageNumber={number}
       />
    ))

    return (
      <section className="grid">
        <div>
         <Dropdown handleChange={this.handleChange}/>
        {renderPageNumbers}
       </div>
       <div className="grid__container">
        {renderAlbums}
       </div>
      </section>  
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAlbums: (limit) => dispatch(getAlbums(limit)),
  getUsers: () => dispatch(getUsers())
});

 const mapStateToProps = (state) => ({
  albums: state.albums.albums,
  users: state.users.users
});


export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
