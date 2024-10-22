import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const GetHelp = () => {
  const [showHotlines, setShowHotlines] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const hotlines = [
    { name: "National Suicide Prevention Lifeline", number: "1-800-273-8255" },
    { name: "Crisis Text Line", number: "Text HOME to 741741" },
    { name: "National Domestic Violence Hotline", number: "1-800-799-7233" },
    { name: "Disaster Distress Helpline", number: "1-800-985-5990" },
    { name: "Veterans Crisis Line", number: "1-800-273-8255 (Press 1)" },
  ];

  const mapCenter = { lat: 33.0456, lng: -84.6415 };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Get Help</h1>
      <p className="mb-4">Find support services, hotlines, and local resources for those affected by gun violence.</p>
      
      <div className="space-y-4 mb-6">
        <Button onClick={() => setShowHotlines(!showHotlines)} className="mr-4 bg-blue-600 hover:bg-blue-700 text-white">
          {showHotlines ? "Hide Support Services" : "Find Support"}
        </Button>
        <Button onClick={() => setShowMap(!showMap)} className="bg-blue-600 hover:bg-blue-700 text-white">
          {showMap ? "Hide Maps" : "Show Local Resources Maps"}
        </Button>
      </div>

      {showHotlines && (
        <div className="space-y-4 mb-6">
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

      {showMap && (
        <div className="mb-6 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Local Police Stations Near Me</h2>
            <iframe
              src={`https://www.google.com/maps/embed/v1/search?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=police+stations&center=${mapCenter.lat},${mapCenter.lng}&zoom=9`}
              width="100%"
              height="400"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a 
              href={`https://www.google.com/maps/search/police+stations/@${mapCenter.lat},${mapCenter.lng},9z`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View Police Stations on Google Maps
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Fire Departments Near Me</h2>
            <iframe
              src={`https://www.google.com/maps/embed/v1/search?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=fire+departments&center=${mapCenter.lat},${mapCenter.lng}&zoom=9`}
              width="100%"
              height="400"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a 
              href={`https://www.google.com/maps/search/fire+departments/@${mapCenter.lat},${mapCenter.lng},9z`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View Fire Departments on Google Maps
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Local Hospitals Near Me</h2>
            <iframe
              src={`https://www.google.com/maps/embed/v1/search?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=hospitals&center=${mapCenter.lat},${mapCenter.lng}&zoom=9`}
              width="100%"
              height="400"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a 
              href={`https://www.google.com/maps/search/hospitals/@${mapCenter.lat},${mapCenter.lng},9z`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View Hospitals on Google Maps
            </a>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-3">Local Resources and Help Stations</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Local Police Department:</strong> Call 911 for emergencies or check your local police department's website for non-emergency numbers.</li>
        <li><strong>Gun Violence Prevention Organizations:</strong> Search for local chapters of national organizations like Everytown for Gun Safety or Brady Campaign.</li>
        <li><strong>Community Mental Health Centers:</strong> Find local mental health resources through SAMHSA's treatment locator: <a href="https://findtreatment.samhsa.gov/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://findtreatment.samhsa.gov/</a></li>
        <li><strong>Firearm Safety Courses:</strong> Check with local law enforcement or certified instructors for firearm safety and training courses.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Additional Online Resources:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://www.thehotline.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">National Domestic Violence Hotline</a></li>
        <li><a href="https://suicidepreventionlifeline.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">National Suicide Prevention Lifeline</a></li>
        <li><a href="https://www.samhsa.gov/find-help/national-helpline" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SAMHSA's National Helpline</a></li>
        <li><a href="https://www.mentalhealth.gov/get-help/immediate-help" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">MentalHealth.gov: Get Immediate Help</a></li>
      </ul>

      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
      </Link>
    </div>
  );
};

export default GetHelp;