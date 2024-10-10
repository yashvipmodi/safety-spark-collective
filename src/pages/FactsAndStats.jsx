import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FactsAndStats = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Facts & Statistics</h1>
      <p className="mb-4 text-blue-600">Here are some important facts and statistics about gun violence and safety measures:</p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2 text-blue-700">
        <li>In 2021, there were 48,830 gun deaths in the US (Source: CDC)</li>
        <li>Firearms are the leading cause of death for children and teens in the US</li>
        <li>States with stronger gun laws have lower gun death rates</li>
        <li>Over 393 million firearms are in civilian possession in the US</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-blue-800">Additional Resources:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://www.bradyunited.org/key-statistics" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Brady: Key Gun Violence Statistics</a></li>
        <li><a href="https://www.pewresearch.org/topic/gun-policy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Pew Research Center: Gun Policy</a></li>
        <li><a href="https://www.gunviolencearchive.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Gun Violence Archive</a></li>
      </ul>

      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700">Back to Home</Button>
      </Link>
    </div>
  );
};

export default FactsAndStats;