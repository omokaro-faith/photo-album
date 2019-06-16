import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropdown from '../pagination/Dropdown';
import Buttons from '../pagination/Button';
import Modal from '../modal/Modal';
import { getPhotos }  from '../../actions/photo';
import { getPageNumbers, getCurrentItems } from '../../utils/utils';

export class PhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      modalContent: {},
      currentPage: 1,
      itemsPerPage: 10,
    };
    this.handleChange = this.handleChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  static propTypes = {
    getPhotos: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        albumOwner: PropTypes.string.isRequired,
        albumTitle: PropTypes.string.isRequired
      })
    }).isRequired
  };

  componentDidMount() {
    const { match: { params }, getPhotos } = this.props;
    getPhotos(undefined, params.albumId)
  }

  handleChange(event) {
    const { match: { params }, getPhotos } = this.props;
    getPhotos(event.target.value, params.albumId);
    this.setState({
      currentPage: 1,
    });
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  showModal = ({ content }) => {
    this.setState({ 
      show: true,
      modalContent: {
        picture: content.url,
        title: content.title,
      }
     });
  };

  hideModal = () => {
    this.setState({ 
      show: false,
      modalContent: {},
     });
  };

  render() {
    const { photos, match: { params: { albumOwner, albumTitle } } } = this.props;
    const { show, modalContent, currentPage, itemsPerPage } = this.state;
    const renderPhotos = getCurrentItems(currentPage, itemsPerPage, photos).map((photo, index) => 
    (
      <div key={index} className="grid__item" onClick={() => this.showModal({ content: photo })}>
        <div className="grid__img">
            <img src={`${photo.thumbnailUrl}`} alt='' title='' />
        </div>
        <h4>Title: {photo.title}</h4>
      </div>
    ));

    const renderPageNumbers = getPageNumbers(photos, itemsPerPage).map((number) => (
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
          <h1>Owner: {albumOwner}</h1>
          <h1>Album Title: {albumTitle}</h1>
          <div className="grid__container">
          { renderPhotos }
        </div>
        <Modal show={show} handleClose={this.hideModal}>
            <div className='img-content'>
              <img src={`${modalContent.picture}`} alt='' title=''/>
            </div>
            <div>
              <h1>Owner: {albumOwner}</h1>
              <h1>Title: {modalContent.title}</h1>
            </div>
        </Modal>
      </section> 
    )
  }
}

PhotoPage.defaultProps = {
  photos: [],
};

const mapDispatchToProps = (dispatch) => ({
  getPhotos: (limit, albumId) => dispatch(getPhotos(limit, albumId)),
});

 const mapStateToProps = (state) => ({
  photos: state.photos.photos,
});



export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
