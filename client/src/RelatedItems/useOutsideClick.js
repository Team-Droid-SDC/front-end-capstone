import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  // console.log(ref);
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
