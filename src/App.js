import React, { useEffect, useState } from 'react';
import LoadingStatus from './LoadingStatus';
import FilteredColors from './FilteredColors';
import CircleList from './CircleList';

const App = () => {
  const [data, setData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState({ dataset1: 'loading', dataset2: 'loading' });
  const [filteredColors, setFilteredColors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //The data is fetched from the provided URLs https://gabriel2761.github.io/data/circles.json and https://gabriel2761.github.io/data/circles2.json
      try {
        const response1 = await fetch('https://gabriel2761.github.io/data/circles.json');
        const data1 = await response1.json();
        setLoadingStatus(prev => ({ ...prev, dataset1: 'success' }));
        
        const response2 = await fetch('https://gabriel2761.github.io/data/circles2.json');
        const data2 = await response2.json();
        setLoadingStatus(prev => ({ ...prev, dataset2: 'success' }));
        
        //The JSON data structure is assumed to be a list of objects, each containing id (number) and color (string) properties.
        //Example format: [ { id: 1, color: "#ff0000" }, { id: 2, color: "#00ff00" } ].
        setData([...data1, ...data2]);
        console.log(...data1);
        console.log(...data2);
      } catch (error) {
        //If any dataset fails to fetch, it marks the status as "error".
        setLoadingStatus(prev => ({ ...prev, dataset1: 'error', dataset2: 'error' }));
      }
    };

    fetchData();
  }, []);

  //Check filteredColors is including colour, if not add data to filteredColours
  const handleCircleClick = (color) => {
    if (!filteredColors.includes(color)) {
      setFilteredColors([...filteredColors, color]);
    }
  };

  //Redo the array without color, then reput the FilterColours
  const handleRemoveFilter = (color) => {
    setFilteredColors(filteredColors.filter(c => c !== color));
  };

  //Set setFilteredColors empty
  const handleClearAll = () => {
    setFilteredColors([]);
  };

  const filteredData = data.filter(item => !filteredColors.includes(item.color));

  return (
    <div>
      <LoadingStatus status={loadingStatus} />
      <FilteredColors colors={filteredColors} onRemoveFilter={handleRemoveFilter} onClearAll={handleClearAll} />
      <CircleList circles={filteredData} onCircleClick={handleCircleClick} />
    </div>
  );
};

export default App;
