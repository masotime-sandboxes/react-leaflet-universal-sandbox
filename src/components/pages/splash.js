import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet-universal';

const markers = [
	{ position: [49.8397, 24.0297] },
	{ position: [52.2297, 21.0122] },
	{ position: [51.5074, -0.0901] },
];

const STYLE = {
	width: '500px',
	height: '500px'
};

// SAD!
export default class SplashPage extends Component {
	render() {
		const { title, message } = this.props;

		return (
			<div>
				<h1>{title}</h1>
				<p>{message}</p>
				<Map style={STYLE} className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
					{
						() => {
							const MarkerClusterGroup = require('react-leaflet-markercluster').default;
							return (
								<Fragment>
									<TileLayer
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
										attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
									/>
									<MarkerClusterGroup />
								</Fragment>
							);
						}
					}
				</Map>
			</div>
		);
	}
}

SplashPage.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string
};