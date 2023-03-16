import React from 'react';
import MapContainer from './src/MapContainer';

const Location = () => (
    <><div>Location Module</div><div className="App">
        <MapContainer />
    </div></>
);

export default {
    routeProps: {
        path: '/location',
        component: Location,
    },
    name: 'Location',
};
