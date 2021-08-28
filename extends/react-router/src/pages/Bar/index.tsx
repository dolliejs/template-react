import React from 'react';

interface BarPageProps {}

const BarPage: React.FC<BarPageProps> = () => {
  return (
    <div className="page-bar">
      <h5>WELCOME TO <code>/bar</code> PAGE!</h5>
    </div>
  );
};

export default BarPage;
