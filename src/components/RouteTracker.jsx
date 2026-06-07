import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteTracker() {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // We skip the very first load because your index.html base code already fires the initial PageView.
    // This prevents double-firing on the landing page!
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname, location.search]);

  return null;
}
