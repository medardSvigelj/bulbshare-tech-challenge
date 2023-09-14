import { useEffect, useState } from "react";

export const useScroll = () => {
  const [isScrollOnBottom, setIsScrollOnBottom] = useState(false);
  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
      document.documentElement.offsetHeight
    ) {
      setIsScrollOnBottom(true);
    } else {
      setIsScrollOnBottom(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return { isScrollOnBottom };
};
