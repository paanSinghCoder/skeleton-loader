'use client'

import React, { ReactNode } from 'react';
import './Skeleton.css'; 

const Skeleton = ({ isLoading, children, blueprint }: { isLoading: boolean, children: ReactNode , blueprint: any[] }) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  const renderSkeleton = (blueprint: any[]) => {
    return blueprint.map((item: any, index: number) => {
      switch (item.type) {
        case 'text':
          return <div key={index} className="skeleton skeleton-text" style={{ width: item.width, height: item.height }}></div>;
        case 'image':
          return <div key={index} className="skeleton skeleton-image" style={{ width: item.width, height: item.height }}></div>;
        default:
          return null;
      }
    });
  };

  return <div className="skeleton-container">{renderSkeleton(blueprint)}</div>;
};


export default Skeleton;
