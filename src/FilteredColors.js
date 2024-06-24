import React from 'react';

const FilteredColors = ({ colors, onRemoveFilter, onClearAll }) => {
  return (
    <div>
      <div>Filtered Colours</div>
      {colors.map(color => (
        <div key={color}>
          <button onClick={() => onRemoveFilter(color)}>Remove</button>
          <span style={{ backgroundColor: color, display: 'inline-block', width: '20px', height: '20px' }}></span>
        </div>
      ))}
      {colors.length > 0 && <button onClick={onClearAll}>Clear All</button>}
    </div>
  );
};

export default FilteredColors;
