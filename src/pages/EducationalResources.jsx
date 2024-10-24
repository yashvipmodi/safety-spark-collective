import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const EducationalResources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Educational Resources</h1>
      <p className="mb-4">Access materials to educate yourself and others about responsible gun ownership, safety, and prevention:</p>
      
      <h2 className="text-2xl font-semibold mb-3">Online Courses and Webinars:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://www.edx.org/learn/gun-violence" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">EdX: Gun Violence Prevention</a></li>
        <li><a href="https://www.coursera.org/learn/gun-violence" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Coursera: Gun Violence in the United States</a></li>
        <li><a href="https://www.nrahq.org/safety/gun-safety-rules.asp" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NRA Gun Safety Rules</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Research and Reports:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://www.rand.org/research/gun-policy.html" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">RAND Corporation: Gun Policy in America</a></li>
        <li><a href="https://www.jhsph.edu/research/centers-and-institutes/johns-hopkins-center-for-gun-violence-solutions/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Johns Hopkins Center for Gun Violence Solutions</a></li>
        <li><a href="https://nij.ojp.gov/topics/articles/public-mass-shootings-database-amasses-details-half-century-us-mass-shootings" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">National Institute of Justice: Mass Shootings Database</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Law Enforcement and Community Resources:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://www.policefoundation.org/projects/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">National Police Foundation: Research and Resources</a></li>
        <li><a href="https://cops.usdoj.gov/training" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">COPS Office: Law Enforcement Training</a></li>
        <li><a href="https://www.atf.gov/firearms/firearms-guides-importation-verification-firearms-gun-control-act-definitions" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ATF: Firearms Guides and Resources</a></li>
      </ul>

      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
      </Link>
    </div>
  );
};

export default EducationalResources;