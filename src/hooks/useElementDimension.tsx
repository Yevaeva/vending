import { useEffect, useState } from "react";

type BoundingClientRect = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
};

const useElementDimension = (ref: React.MutableRefObject<any>) => {
  const [elementDimension, setElementDimension] =
    useState<BoundingClientRect | null>(null);
  const updateDimensions = () => {
    const dimensions = ref.current.getBoundingClientRect();
    setElementDimension(dimensions);
  };
  const handleResize = () => {
    updateDimensions();
  };

  useEffect(() => {
    setTimeout(() => {
      if (!ref.current) return;
      updateDimensions();
      window.addEventListener("resize", handleResize);
    }, 300);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return elementDimension;
};

export default useElementDimension;
