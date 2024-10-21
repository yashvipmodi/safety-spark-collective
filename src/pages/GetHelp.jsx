import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GetHelp = () => {
  const [showHotlines, setShowHotlines] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

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

  const mapCenter = { lat: 33.0456, lng: -84.6415 };
  const locations = [
    { name: "Newnan Police Department", position: { lat: 33.3807, lng: -84.7997 } },
    { name: "LaGrange Police Department", position: { lat: 33.0362, lng: -85.0322 } },
    { name: "Griffin Police Department", position: { lat: 33.2468, lng: -84.2640 } },
    { name: "Peachtree City Police Department", position: { lat: 33.3968, lng: -84.5963 } },
    { name: "Carrollton Police Department", position: { lat: 33.5801, lng: -85.0766 } },
    { name: "Fayetteville Police Department", position: { lat: 33.4487, lng: -84.4549 } },
    { name: "Thomaston Police Department", position: { lat: 32.8882, lng: -84.3265 } },
    { name: "Villa Rica Police Department", position: { lat: 33.7315, lng: -84.9166 } },
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Get Help</h1>
      <p className="mb-4">Find support services, hotlines, and local resources for those affected by gun violence.</p>
      
      <div className="space-y-4 mb-6">
        <Button onClick={() => setShowHotlines(!showHotlines)} className="mr-4 bg-blue-600 hover:bg-blue-700 text-white">
          {showHotlines ? "Hide Support Services" : "Find Support"}
        </Button>
        <Button onClick={() => setShowMap(!showMap)} className="bg-blue-600 hover:bg-blue-700 text-white">
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
          <h2 className="text-2xl font-semibold mb-3">Local Police Stations in Georgia District 3</h2>
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
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
                  label={{
                    text: "P",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      )}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Local Resources in Georgia's District 3</h2>
        <p className="mb-4">Click on each category to view specific locations:</p>
        
        <div className="space-y-4">
          <Button
            onClick={() => toggleSection('police')}
            className="w-full text-left justify-between"
          >
            Police Stations
            <span>{activeSection === 'police' ? '▲' : '▼'}</span>
          </Button>
          {activeSection === 'police' && (
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li><a href="https://goo.gl/maps/qZJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Newnan Police Department</a></li>
              <li><a href="https://goo.gl/maps/wXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LaGrange Police Department</a></li>
              <li><a href="https://goo.gl/maps/eXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Griffin Police Department</a></li>
              <li><a href="https://goo.gl/maps/rXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Peachtree City Police Department</a></li>
              <li><a href="https://goo.gl/maps/tXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Carrollton Police Department</a></li>
              <li><a href="https://goo.gl/maps/yXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Fayetteville Police Department</a></li>
              <li><a href="https://goo.gl/maps/uXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Thomaston Police Department</a></li>
              <li><a href="https://goo.gl/maps/iXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Villa Rica Police Department</a></li>
            </ul>
          )}

          <Button
            onClick={() => toggleSection('fire')}
            className="w-full text-left justify-between"
          >
            Fire Departments
            <span>{activeSection === 'fire' ? '▲' : '▼'}</span>
          </Button>
          {activeSection === 'fire' && (
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li><a href="https://goo.gl/maps/aXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Newnan Fire Department</a></li>
              <li><a href="https://goo.gl/maps/sXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LaGrange Fire Department</a></li>
              <li><a href="https://goo.gl/maps/dXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Griffin Fire-Rescue</a></li>
              <li><a href="https://goo.gl/maps/fXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Peachtree City Fire Rescue</a></li>
              <li><a href="https://goo.gl/maps/gXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Carrollton Fire Department</a></li>
              <li><a href="https://goo.gl/maps/hXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Fayetteville Fire Department</a></li>
              <li><a href="https://goo.gl/maps/jXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Thomaston Fire Department</a></li>
              <li><a href="https://goo.gl/maps/kXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Villa Rica Fire Department</a></li>
            </ul>
          )}

          <Button
            onClick={() => toggleSection('hospitals')}
            className="w-full text-left justify-between"
          >
            Hospitals
            <span>{activeSection === 'hospitals' ? '▲' : '▼'}</span>
          </Button>
          {activeSection === 'hospitals' && (
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li><a href="https://goo.gl/maps/lXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Piedmont Newnan Hospital</a></li>
              <li><a href="https://goo.gl/maps/zXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">WellStar West Georgia Medical Center</a></li>
              <li><a href="https://goo.gl/maps/xXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Wellstar Spalding Regional Hospital</a></li>
              <li><a href="https://goo.gl/maps/cXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Piedmont Fayette Hospital</a></li>
              <li><a href="https://goo.gl/maps/vXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Tanner Medical Center Carrollton</a></li>
              <li><a href="https://goo.gl/maps/bXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Piedmont Fayette Hospital</a></li>
              <li><a href="https://goo.gl/maps/nXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Upson Regional Medical Center</a></li>
              <li><a href="https://goo.gl/maps/mXJX8Z9Z9Z9Z9Z9Z9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Tanner Medical Center Villa Rica</a></li>
            </ul>
          )}
        </div>
      </section>

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