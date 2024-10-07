import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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

  const localResources = [
    { name: "Local Police Department", info: "Call 911 for emergencies or check your local police department's website for non-emergency numbers." },
    { name: "Gun Violence Prevention Organizations", info: "Search for local chapters of national organizations like Everytown for Gun Safety or Brady Campaign." },
    { name: "Community Mental Health Centers", info: "Find local mental health resources through SAMHSA's treatment locator: https://findtreatment.samhsa.gov/" },
    { name: "Firearm Safety Courses", info: "Check with local law enforcement or certified instructors for firearm safety and training courses." },
  ];

  // Georgia District 3 center coordinates (approximate)
  const mapCenter = { lat: 33.0456, lng: -84.6415 };

  // Sample locations in Georgia District 3 (you should replace these with actual locations)
  const locations = [
    { name: "Newnan Police Department", position: { lat: 33.3807, lng: -84.7997 } },
    { name: "LaGrange Police Department", position: { lat: 33.0362, lng: -85.0322 } },
    { name: "Griffin Police Department", position: { lat: 33.2468, lng: -84.2640 } },
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Get Help</h1>
      <p className="mb-4">Find support services, hotlines, and local resources for those affected by gun violence.</p>
      
      <div className="space-y-4 mb-6">
        <Button onClick={() => setShowHotlines(!showHotlines)} className="mr-4">
          {showHotlines ? "Hide Support Services" : "Find Support"}
        </Button>
        <Button onClick={() => setShowMap(!showMap)}>
          {showMap ? "Hide Map" : "Show Local Resources Map"}
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
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Local Resources Map (Georgia District 3)</h2>
          <LoadScript googleMapsApiKey="YOUR_ACTUAL_API_KEY_HERE">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={mapCenter}
              zoom={9}
            >
              {locations.map((location, index) => (
                <Marker
                  key={index}
                  position={location.position}
                  title={location.name}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-3">Local Resources and Help Stations</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        {localResources.map((resource, index) => (
          <li key={index}>
            <strong>{resource.name}:</strong> {resource.info}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Additional Online Resources:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://www.thehotline.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">National Domestic Violence Hotline</a></li>
        <li><a href="https://suicidepreventionlifeline.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">National Suicide Prevention Lifeline</a></li>
        <li><a href="https://www.samhsa.gov/find-help/national-helpline" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SAMHSA's National Helpline</a></li>
        <li><a href="https://www.mentalhealth.gov/get-help/immediate-help" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">MentalHealth.gov: Get Immediate Help</a></li>
      </ul>

      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default GetHelp;