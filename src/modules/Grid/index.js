import React from 'react';

import Grid from './Grid';
import './Jupyter.css';

const items = [
  {
    url: './static/1.html',
    thumbnail: './static/thumbnail1.png'
  },
  {
    url: './static/2.html',
    thumbnail: './static/thumbnail2.png'
  },
  {
    url: './static/3.html',
    thumbnail: 'thumbnail3.png'
  },
  {
    url: './static/4.html',
    thumbnail: './static/thumbnail1.png'
  }
];

const Index = () => (
  <><div>Grid Module</div>
  <Grid items={items} /></>
);

export default {
  routeProps: {
      path: '/grid',
      component: Index,
  },
  name: 'Jupyter Grid',
};