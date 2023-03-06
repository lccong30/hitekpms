import { useEffect, useRef } from "react";

const useScrollFadeIn = (animate, h = 600, rollback) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      if (ref.current.offsetTop - window.scrollY < h) {
        ref.current.classList.add(animate);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [ref, animate, h]);
  return ref;
};

export default useScrollFadeIn;
