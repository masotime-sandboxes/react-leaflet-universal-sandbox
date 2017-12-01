import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet-universal';

const URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';
const ZOOM = 13;
const CENTER = [51.505, -0.00];

export default class LeafletRefExample extends Component {

	leafletRefAvailable = ref => {
		console.log(ref.leafletElement);
	}

	render() {
		return (
			<Map leafletRef={ref => this.leafletRefAvailable(ref)} zoom={ZOOM} center={CENTER}>
			<TileLayer
				url={URL}
				attribution={ATTRIBUTION}
			/>
			</Map>
		);
	}
}