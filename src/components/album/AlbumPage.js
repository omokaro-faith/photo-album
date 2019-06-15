import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from '../pagination/Button';
import Dropdown from '../pagination/Dropdown';
import { getAlbums }  from '../../actions/albums';
import { getUsers }  from '../../actions/users';
import { DEFAULT_COLOR_PALLETTE } from './constants';
import { getPageNumbers, getCurrentAlbums } from '../../utils/utils'
import './album.css';

export class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      currentPage: 1,
      albumsPerPage: 10,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    getAlbums: PropTypes.func.isRequired,
    getUsers:  PropTypes.func.isRequired,
    users: PropTypes.array,
    albums: PropTypes.array,
  }

  componentDidMount() {
    this.props.getAlbums();
    this.props.getUsers();
  }

  static getDerivedStateFromProps(props, state) {
    const { users, albums } = props;
    if (props.albums !== state.albums) {
      const tempArray = [];
      users.forEach((user) => DEFAULT_COLOR_PALLETTE.forEach((pallette) => albums.forEach((album) => {
        if((user.id === album.userId) && (pallette.userId === album.userId)) {
          tempArray.push({
            userName: user.username,
            title: album.title,
            userId: album.userId,
            albumId: album.id,
            color: pallette.color
          })
        }
      })));
      return {
        albums: tempArray
      }
    }
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  handleChange(event) {
    this.setState({
      albumsPerPage: event.target.value,
      currentPage: 1,
    })
  }

  render() {
    const { albums, currentPage, albumsPerPage } = this.state;
    const renderAlbums = getCurrentAlbums(currentPage, albumsPerPage, albums).map((album, index) => 
    (
      <div key={index} className="grid__item">
        <div className="grid__img">
          <img src={`https://via.placeholder.com/150/${album.color}`} alt="" title=""/>   
        </div>
        <h4>Title: {album.title}</h4>
        <h4>UserName: {album.userName}</h4>  
      </div>
    ));

    const renderPageNumbers = getPageNumbers(albums, albumsPerPage).map(number => {
      return (
        <Button
          key={number}
          id={number}
          onClick={this.handleClick}
          pageNumber={number}
        />
      );
    });

    return (
      <section className="grid">
        <div className="grid__container">
          {renderAlbums}
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
        <div>
         <Dropdown handleChange={this.handleChange}/>
        </div>
      </section>  
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbums()),
  getUsers: () => dispatch(getUsers())
});

 const mapStateToProps = (state) => ({
  albums: state.albums.albums,
  users: state.users.users
});

AlbumPage.defaultProps = {
  albums: [],
  users: [],
}


export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
