import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const GetHelp = () => {
  const [showHotlines, setShowHotlines] = useState(false);

  const hotlines = [
    { name: "National Suicide Prevention Lifeline", number: "1-800-273-8255" },
    { name: "Crisis Text Line", number: "Text HOME to 741741" },
    { name: "National Domestic Violence Hotline", number: "1-800-799-7233" },
    { name: "Disaster Distress Helpline", number: "1-800-985-5990" },
    { name: "Veterans Crisis Line", number: "1-800-273-8255 (Press 1)" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Get Help</h1>
      <p className="mb-4">Find support services and hotlines for those affected by gun violence.</p>
      
      <Button onClick={() => setShowHotlines(!showHotlines)} className="mb-4">
        {showHotlines ? "Hide Support Services" : "Find Support"}
      </Button>

      {showHotlines && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Support Services and Hotlines</h2>
          <ul className="list-disc pl-5 space-y-2">
            {hotlines.map((hotline, index) => (
              <li key={index}>
                <strong>{hotline.name}:</strong>{" "}
                <a href={`tel:${hotline.number.replace(/\D/g,'')}`} className="text-blue-600 hover:underline">
                  {hotline.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link to="/">
        <Button className="mt-4">Back to Home</Button>
      </Link>
    </div>
  );
};

export default GetHelp;