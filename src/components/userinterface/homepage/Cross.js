import React from 'react';

const CloseIcon = () => {
  return (
    <span
      className="j-icon"
      style={{
        '--icon-size-svg': '100%',
        '--icon-size': '1.5rem',
        '--icon-color': 'var(--color-secondary-50)',
      }}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 'var(--icon-size)', height: 'var(--icon-size)', color: 'var(--icon-color)' }}
      >
        <path
          d="M13.41 12l6.3-6.29a1.004 1.004 0 00-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 10-1.42 1.42l6.3 6.29-6.3 6.29a.999.999 0 000 1.42 1 1 0 001.42 0l6.29-6.3 6.29 6.3a1.001 1.001 0 001.639-.325 1 1 0 00-.22-1.095L13.41 12z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
  );
};

export default CloseIcon;
