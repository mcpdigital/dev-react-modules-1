import React from 'react';
import './Jupyter.css';

function Grid(props) {
  const { items } = props;

  const numColumns = 3;

  const rows = items.reduce((acc, item, index) => {
    const rowIndex = Math.floor(index / numColumns);

    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }

    acc[rowIndex].push(item);

    return acc;
  }, []);

  const renderItem = item => (
    <div key={item.url} className="grid-item">
      <a href={item.url} target="_self" rel="noopener noreferrer">
        <img src={item.thumbnail} alt="thumbnail" />
      </a>
    </div>
  );

  return (
    <div className="grid-container">
      {rows.map((row, index) => (
        <div key={index} className="grid-row">
          {row.map(renderItem)}
        </div>
      ))}
    </div>
  );
}

export default Grid;


