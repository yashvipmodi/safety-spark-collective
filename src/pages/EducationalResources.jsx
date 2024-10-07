import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const EducationalResources = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Educational Resources</h1>
      <p className="mb-4">Access materials to educate yourself and others about responsible gun ownership and control:</p>
      
      <h2 className="text-2xl font-semibold mb-3">Online Courses and Webinars:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://www.edx.org/learn/gun-violence" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">EdX: Gun Violence Prevention</a></li>
        <li><a href="https://www.coursera.org/learn/gun-violence" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Coursera: Gun Violence in the United States</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Research and Reports:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://www.rand.org/research/gun-policy.html" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">RAND Corporation: Gun Policy in America</a></li>
        <li><a href="https://www.jhsph.edu/research/centers-and-institutes/johns-hopkins-center-for-gun-violence-solutions/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Johns Hopkins Center for Gun Violence Solutions</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Educational Programs:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://everytownresearch.org/report/gun-violence-in-america/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Everytown for Gun Safety: Research and Reports</a></li>
        <li><a href="https://giffords.org/lawcenter/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Giffords Law Center: Gun Law Resources</a></li>
      </ul>

      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default EducationalResources;