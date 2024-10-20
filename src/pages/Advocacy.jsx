import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Advocacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Advocacy and Online Communities</h1>
      <p className="mb-4">Connect with others and get involved in gun safety advocacy:</p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://momsdemandaction.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Moms Demand Action: Join local chapters and online communities</a></li>
        <li><a href="https://marchforourlives.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">March For Our Lives: Youth-led movement for gun violence prevention</a></li>
        <li><a href="https://www.bradyunited.org/take-action" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Brady: Take Action on Gun Violence Prevention</a></li>
        <li><a href="https://giffords.org/action/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Giffords: Join the fight to end gun violence</a></li>
        <li><a href="https://www.reddit.com/r/GunsAreCool/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">r/GunsAreCool: Reddit community for discussion on gun violence articles</a></li>
      </ul>

      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
      </Link>
    </div>
  );
};

export default Advocacy;