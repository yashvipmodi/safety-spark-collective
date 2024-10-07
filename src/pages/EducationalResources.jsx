import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const EducationalResources = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Educational Resources</h1>
      <p className="mb-4">Access materials to educate yourself and others about responsible gun ownership and control.</p>
      {/* Add more content here */}
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default EducationalResources;