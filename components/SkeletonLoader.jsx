import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="container">
      <div className="grid-two-columns">
        {/* Left column: Heading, description, and button skeleton */}
        <div className="homeHeading">
          {/* Skeleton for heading */}
          <div className="skeleton skeleton-heading"></div>

          {/* Skeleton for description */}
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>

          {/* Skeleton for button */}
          <div className="skeleton skeleton-button"></div>
        </div>

        {/* Right column: Image skeleton */}
        <div className="imageContainer">
          <div className="skeleton skeleton-image"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;