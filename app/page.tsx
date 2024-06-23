'use client'
import React, { useState, useEffect } from 'react';
import Skeleton from './components/Skeleton';

type displayDataType = { title: string; description: string; imageUrl: string } | null

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<displayDataType>(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        title: 'Some random Title',
        description: 'Some random long description which has absolutely no meaning.',
        imageUrl: '/img-150.png'
      });
      setIsLoading(false);
    }, 3000);
  }, []);

  const skeletonBlueprint = [
    { type: 'image', width: '150px', height: '150px' },
    { type: 'text', width: '10%', height: '20px' },
    { type: 'text', width: '30%', height: '15px' },
  ];

  return (
    <Skeleton isLoading={isLoading} blueprint={skeletonBlueprint}>
      {data && (
        <div>
          <img src={data.imageUrl} alt="img" />
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      )}
    </Skeleton>
  );
};

export default Home;
