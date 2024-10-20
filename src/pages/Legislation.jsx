import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Legislation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Current Gun Control Legislation</h1>
      <p className="mb-4">Stay informed about current gun control bills and legislation:</p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://www.congress.gov/search?q={%22source%22:%22legislation%22,%22search%22:%22gun%20control%22}" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Congress.gov: Search for current gun control bills</a></li>
        <li><a href="https://www.govtrack.us/congress/bills/subjects/firearms_and_explosives/5977" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GovTrack: Track gun control legislation</a></li>
      </ul>

      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
      </Link>
    </div>
  );
};

export default Legislation;