import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarkerClusterGroup from 'react-leaflet-markercluster';

// SAD!
export default class SplashPage extends Component {
	render() {
		const { title, message } = this.props;

		return (
			<div>
				<h1>{title}</h1>
				<p>{message}</p>
			</div>
		);
	}
}

SplashPage.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string
};