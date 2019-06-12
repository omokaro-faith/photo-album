import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlbums }  from '../actions/albums';

class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: 0
    };
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    console.log(this.props.albums, "albums");
    return (
      <header>
        <h1>Album Page</h1>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbums())
});

 const mapStateToProps = (state) => ({
  albums: state.albums,
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
