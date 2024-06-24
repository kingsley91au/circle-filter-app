import React from 'react';

const LoadingStatus = ({ status }) => {
  return (
    <div>
      <div>
        Dataset 1: {status.dataset1 === 'loading' ? 'Loading...' : status.dataset1 === 'success' ? '✔️' : '❌'}
      </div>
      <div>
        Dataset 2: {status.dataset2 === 'loading' ? 'Loading...' : status.dataset2 === 'success' ? '✔️' : '❌'}
      </div>
    </div>
  );
};

export default LoadingStatus;
