import React from 'react';
// import MapContainer from './src/MapContainer';
import './WebSite.css';
const Location = () => (
    <div class='WebSite'>Wordpress Website
        <iframe class='WebSite' title="Patagonia Images" src="https://www.patagoniaimages.com"></iframe>
    </div>
);

export default {
    routeProps: {
        path: '/website',
        component: Location,
    },
    name: 'Website',
};
