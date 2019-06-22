import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import Dropdown from '../pagination/Dropdown';
import Buttons from '../pagination/Button';
import Modal from '../modal/Modal';
import { getPhotos, fetchAllPhotos } from '../../actions/photo';
import { getPageNumbers, getStartPage } from '../../utils/utils';
import { INITIAL_START_VALUE } from '../../constants/constants';
import ErrorDisplay from '../error/ErrorDisplay';


export class PhotoPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			modalContent: {},
			currentPage: 1,
			itemsPerpage: 20,
		};
		this.handleChange = this.handleChange.bind(this);
		this.showModal = this.showModal.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	static propTypes = {
		getPhotos: PropTypes.func.isRequired,
		fetchAllPhotos: PropTypes.func.isRequired,
		photos: PropTypes.array.isRequired,
		totalPhotos: PropTypes.number.isRequired,
		match: PropTypes.shape({
			params: PropTypes.shape({
				albumOwner: PropTypes.string.isRequired,
				albumTitle: PropTypes.string.isRequired,
			}),
		}).isRequired,
	};

	static defaultProps = {
		totalPhotos: 0,
		photos: [],
  };

	componentDidMount() {
	const {
		match: { params },
		getPhotos,
		fetchAllPhotos,
		} = this.props;

	const { itemsPerpage } = this.state;

	fetchAllPhotos(params.albumId);
	getPhotos(params.albumId, INITIAL_START_VALUE, itemsPerpage);
	}


	handleChange(event) {
		const {
			match: { params },
			getPhotos,
		} = this.props;

		this.setState({
			currentPage: 1,
			itemsPerpage: event.target.value,
		});

		getPhotos(params.albumId, INITIAL_START_VALUE, event.target.value);
	}

	handleClick(event) {
		const { itemsPerpage } = this.state;
		const { getPhotos, match: { params } } = this.props;
    const currentPage = Number(event.target.id);
		const start = getStartPage(itemsPerpage, currentPage);
		
		getPhotos(params.albumId, start, itemsPerpage);
		this.setState({ currentPage });
	}

	showModal = ({ content }) => {
		this.setState({
			show: true,
			modalContent: {
				picture: content.url,
				title: content.title,
			},
		});
	};

	hideModal = () => {
		this.setState({
			show: false,
			modalContent: {},
		});
	};

	render() {
		const {
			photos,
			match: {
				params: { albumOwner, albumTitle },
			},
		} = this.props;
		const { show, modalContent, currentPage, itemsPerpage } = this.state;
		const { totalPhotos, errorMessage, message } = this.props;
		const renderPhotos = photos.map(photo => (
			<div key={uniqueId()} className='grid__item' onClick={() => this.showModal({ content: photo })}>
					<div className='grid__img'>
						<img src={`${photo.thumbnailUrl}`} alt={photo.title} className='grid__img--item' />
					</div>
        <div className='tooltip'>
					<h5>Title: {photo.title}</h5>
					<h4 className='tooltiptext'>{photo.title} </h4>
				</div>
			</div>
		));

		const renderPageNumbers = getPageNumbers(totalPhotos, itemsPerpage).map(number => (
			<Buttons
				key={uniqueId()}
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
        <ErrorDisplay item='photos'/>
      }
			{ photos.length >= 1 &&
			<Fragment>
			<h3 className='info'>Owner: {albumOwner}</h3>
				<h3>Album Title: {albumTitle}</h3>
				<h3>Viewing {photos.length } of {totalPhotos} Photos</h3>
			</Fragment>
			}
			<section className='grid'>
				<div className='dropdown-button__wrapper'>
					<Dropdown handleChange={this.handleChange} itemsLength={photos.length} />
					{renderPageNumbers}
				</div>
				{photos.length >= 1 ? (
					<Fragment>
						<div className='grid__container'>{renderPhotos}</div>
					</Fragment>
				) : (
					<div className='loader' />
				)}
				<Modal show={show} handleClose={this.hideModal}>
					<div className='img-content'>
						<img src={`${modalContent.picture}`} alt='defualt-title'/>
					</div>
					<div>
						<h4>
							Owner: <span>{albumOwner}</span>
						</h4>
						<h4>Title: {modalContent.title}</h4>
						<h4>Album Title: {albumTitle}</h4>
					</div>
				</Modal>
			</section>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	getPhotos: (albumId, start, limit) => dispatch(getPhotos(albumId, start, limit, )),
	fetchAllPhotos: (albumId) => dispatch(fetchAllPhotos(albumId))
});

const mapStateToProps = state => ({
	photos: state.photos.photos,
	totalPhotos: state.photos.totalPhotos,
	errorMessage: state.photos.errorMessage,
  message: state.photos.message,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoPage);
