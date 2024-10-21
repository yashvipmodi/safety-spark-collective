import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AdvocacyAndLegislation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Advocacy and Legislation</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Advocacy</h2>
        <p className="mb-4">Connect with others and get involved in gun safety advocacy:</p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><a href="https://momsdemandaction.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Moms Demand Action: Join local chapters and online communities</a></li>
          <li><a href="https://marchforourlives.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">March For Our Lives: Youth-led movement for gun violence prevention</a></li>
          <li><a href="https://www.bradyunited.org/take-action" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Brady: Take Action on Gun Violence Prevention</a></li>
          <li><a href="https://giffords.org/action/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Giffords: Join the fight to end gun violence</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Legislation</h2>
        <p className="mb-4">Stay informed about current gun control bills and legislation:</p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><a href="https://www.congress.gov/search?q={%22source%22:%22legislation%22,%22search%22:%22gun%20control%22}" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Congress.gov: Search for current gun control bills</a></li>
          <li><a href="https://www.govtrack.us/congress/bills/subjects/firearms_and_explosives/5977" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GovTrack: Track gun control legislation</a></li>
        </ul>
      </section>

      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
      </Link>
    </div>
  );
};

export default AdvocacyAndLegislation;