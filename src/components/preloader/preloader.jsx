import React, { useEffect } from "react";
import { preLoaderAnim } from "../../animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer.</span>
        <span>Designer.</span>
        <span>Content Creator.</span>
      </div>
    </div>
  );
};

export default PreLoader;