import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const AdvocacyAndLegislation = () => {
  const [activeSection, setActiveSection] = useState(null);

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

      <section className="mb-8">
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
      </section>

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

      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
      </Link>
    </div>
  );
};

export default AdvocacyAndLegislation;