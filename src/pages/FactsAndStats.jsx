import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FactsAndStats = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Facts & Statistics</h1>
      <p className="mb-4">Here you can find important facts and statistics about gun violence and control measures.</p>
      {/* Add more content here */}
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default FactsAndStats;