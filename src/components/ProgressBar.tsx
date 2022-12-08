import React, { Fragment } from 'react';

const ProgressBar = ({ percentage }) => {
  console.log(typeof percentage);
  
 
  return (
    <Fragment>
      <div className={'h-2 rounded bg-white_variant'}>
        <div
          className={`w-[${percentage}%] h-2 rounded bg-tertiary`}
        ></div>
      </div>
    </Fragment>
  );
};

export { ProgressBar as default };
