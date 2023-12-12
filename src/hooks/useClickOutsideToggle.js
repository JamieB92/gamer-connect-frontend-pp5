import { useEffect, useRef, useState } from "react";

// Hook to allow the user to click and close the nav bar when they are on smaller screens

const useClickOutsideToggle = () => {
  
  
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;