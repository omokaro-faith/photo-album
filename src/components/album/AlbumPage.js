import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getAlbums }  from '../../actions/albums';
import { getUsers }  from '../../actions/users';
import { DEFAULT_COLOR_PALLETTE } from './constants';
import './album.css';

export class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
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

  componentDidUpdate(prevProps, prevState) {
    const { users, albums } = this.props;
    if (users !== prevProps.users) {
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
      this.setState({
        albums: tempArray
      })
    }
  }

  render() {
    const { albums } = this.state;
    return (
      <section className="grid">
        <div className="grid__container">
          {
            albums.map((album, index) => (
              <div key={index} className="grid__item">
                <div className="grid__img">
                  <img src={`https://via.placeholder.com/150/${album.color}`} alt="" title=""/>   
                </div>
                <h4>Title: {album.title}</h4>
                <h4>UserName: {album.userName}</h4>  
              </div>
            ))
          }
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
}


export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
