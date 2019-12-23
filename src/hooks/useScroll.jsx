import { useRef } from 'react';

const useScroll = (direction = 'bottom') => {
  const scrolledElement = useRef(null);
  const scroll = () => {
    if (!scrolledElement || !scrolledElement.current) {
      return false;
    }

    if (direction === 'bottom') {
      scrolledElement.current.scrollTop = scrolledElement.current.scrollHeight;
      return true;
    }

    if (direction === 'top') {
      scrolledElement.current.scrollTop = 0;
      return true;
    }

    return false;
  };

  return [scrolledElement, scroll];
};

export default useScroll;
