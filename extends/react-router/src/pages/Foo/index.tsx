import React from 'react';

interface FooPageProps {}

const FooPage: React.FC<FooPageProps> = () => {
  return (
    <div className="page-foo">
      <h5>WELCOME TO <code>/foo</code> PAGE!</h5>
    </div>
  );
};

export default FooPage;
