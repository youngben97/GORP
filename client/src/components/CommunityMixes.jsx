import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import MixCard from './MixCard';

const CommunityMixes = () => {
  const [communityMixes, setCommunityMixes] = useState([]);

  useEffect(() => {
    const fetchCommunityMixes = async () => {
      try {
        const response = await fetch('/api/community-mixes');
        const data = await response.json();
        setCommunityMixes(data);
      } catch (error) {
        console.error('Error fetching community mixes:', error);
      }
    };

    fetchCommunityMixes();
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Community Mixes
      </Typography>
      {communityMixes.map((mix) => (
        <MixCard key={mix._id} mix={mix} />
      ))}
    </>
  );
};

export default CommunityMixes;