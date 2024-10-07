import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const SafetyMeasures = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Safety Measures</h1>
      <p className="mb-4">Learn about practical steps to enhance personal and community safety.</p>
      {/* Add more content here */}
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default SafetyMeasures;