import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropdown from '../pagination/Dropdown';
import Buttons from '../pagination/Button';
import Modal from '../modal/Modal';
import { getPhotos }  from '../../actions/photo';
import Header from '../header/Header';
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
            <img src={`${photo.thumbnailUrl}`} alt='' title='' className='grid__img--item'/>
        </div>
        <h5>Title: {photo.title}</h5>
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
        <Header totalItems={photos.length} pageName='Photos'/>
        <div className='dropdown-button__wrapper'>
         <Dropdown handleChange={this.handleChange} itemsLength={photos.length}/>
         {renderPageNumbers}
        </div>
        { photos.length >= 1 ? 
          <Fragment>
            <h3>Owner: {albumOwner}</h3>
            <h3>Album Title: {albumTitle}</h3>
            <div className="grid__container">
            { renderPhotos }
            </div>
          </Fragment>
        : <div className="loader"></div> }
        <Modal show={show} handleClose={this.hideModal}>
            <div className='img-content'>
              <img src={`${modalContent.picture}`} alt='' title=''/>
            </div>
            <div>
              <h5>Owner: <span>{albumOwner}</span></h5>
              <h5>Title: {modalContent.title}</h5>
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
