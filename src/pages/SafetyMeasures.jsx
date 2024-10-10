import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const SafetyMeasures = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Safety Measures</h1>
      <p className="mb-4 text-blue-600">Learn about practical steps to enhance personal and community safety:</p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2 text-blue-700">
        <li>Secure firearms in a locked safe or with a gun lock when not in use</li>
        <li>Keep ammunition stored separately from firearms</li>
        <li>Educate family members about gun safety</li>
        <li>Be aware of warning signs for potential violence or self-harm</li>
        <li>Support local violence prevention programs</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-blue-800">Additional Resources:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://www.nssf.org/safety/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NSSF: Firearm Safety</a></li>
        <li><a href="https://projectchildsafe.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Project ChildSafe</a></li>
        <li><a href="https://www.safekids.org/tip/gun-safety-tips" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safe Kids Worldwide: Gun Safety Tips</a></li>
      </ul>

      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700">Back to Home</Button>
      </Link>
    </div>
  );
};

export default SafetyMeasures;