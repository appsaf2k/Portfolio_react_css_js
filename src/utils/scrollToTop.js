import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//TODO: Scroll page to top
export function ScrollToTop() {
  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return null;
}
