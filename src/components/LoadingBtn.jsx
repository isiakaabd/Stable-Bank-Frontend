import classnames from 'classnames';
import React, { Fragment } from 'react';
import { BounceLoader } from 'react-spinners';


const LoadingBtn = ({ loading, loadingCopy, copy, onClick }) => {
  const btnClasses = [
    'px-8',
    'rounded',
    'py-3',
    'bg-tertiary',
    'text-white',
    'font-bold',
    'flex',
    'items-center',
    'justify-center',
  ];
  const btnClassnames = {
    'no-events': loading,
    'pointer-events': !loading,
  };

  return (
    <Fragment>
      <button
        onClick={onClick}
        disabled={loading}
        type={'submit'}
        className={classnames(btnClasses.join(' '), btnClassnames)}
      >
        <BounceLoader color={'#eaf7ff'} loading={loading} size={20} />
        {loading && <div className="mr-2 md:mr-3" />}
        <span>{loading ? loadingCopy : copy}</span>
      </button>
    </Fragment>
  );
};

export { LoadingBtn as default };