import React, { useRef, useEffect } from 'react';

import PropTypes from 'prop-types';

function useOutsideDetector(ref, action) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

const OutsideDetectProvider = ({ action, children }) => {
  const wrapperRef = useRef(null);
  useOutsideDetector(wrapperRef, action);

  return <div ref={wrapperRef}>{children}</div>;
};

OutsideDetectProvider.propTypes = {
  action: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default OutsideDetectProvider;
