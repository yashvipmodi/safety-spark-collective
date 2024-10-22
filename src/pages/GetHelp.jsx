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

  const mapCenter = { lat: 33.0456, lng: -84.6415 };
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const policeStations = [
    { name: "Newnan Police Department", position: { lat: 33.3807, lng: -84.7997 } },
    { name: "LaGrange Police Department", position: { lat: 33.0362, lng: -85.0322 } },
    { name: "Griffin Police Department", position: { lat: 33.2468, lng: -84.2640 } },
    { name: "Peachtree City Police Department", position: { lat: 33.3968, lng: -84.5963 } },
    { name: "Carrollton Police Department", position: { lat: 33.5801, lng: -85.0766 } },
    { name: "Fayetteville Police Department", position: { lat: 33.4487, lng: -84.4549 } },
    { name: "Thomaston Police Department", position: { lat: 32.8882, lng: -84.3265 } },
    { name: "Villa Rica Police Department", position: { lat: 33.7315, lng: -84.9166 } },
  ];

  const fireDepartments = [
    { name: "Newnan Fire Department", position: { lat: 33.3800, lng: -84.7990 } },
    { name: "LaGrange Fire Department", position: { lat: 33.0370, lng: -85.0315 } },
    { name: "Griffin Fire-Rescue", position: { lat: 33.2470, lng: -84.2645 } },
    { name: "Peachtree City Fire Rescue", position: { lat: 33.3960, lng: -84.5970 } },
    { name: "Carrollton Fire Department", position: { lat: 33.5810, lng: -85.0760 } },
    { name: "Fayetteville Fire Department", position: { lat: 33.4490, lng: -84.4540 } },
    { name: "Thomaston Fire Department", position: { lat: 32.8885, lng: -84.3260 } },
    { name: "Villa Rica Fire Department", position: { lat: 33.7320, lng: -84.9160 } },
  ];

  const hospitals = [
    { name: "Piedmont Newnan Hospital", position: { lat: 33.3814, lng: -84.7657 } },
    { name: "WellStar West Georgia Medical Center", position: { lat: 33.0280, lng: -85.0479 } },
    { name: "Wellstar Spalding Regional Hospital", position: { lat: 33.2417, lng: -84.2836 } },
    { name: "Piedmont Fayette Hospital", position: { lat: 33.4601, lng: -84.5547 } },
    { name: "Tanner Medical Center Carrollton", position: { lat: 33.5889, lng: -85.0958 } },
    { name: "Piedmont Fayette Hospital", position: { lat: 33.4601, lng: -84.5547 } },
    { name: "Upson Regional Medical Center", position: { lat: 32.8885, lng: -84.3265 } },
    { name: "Tanner Medical Center Villa Rica", position: { lat: 33.7315, lng: -84.9166 } },
  ];

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
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={9}
              >
                {policeStations.map((station, index) => (
                  <Marker
                    key={index}
                    position={station.position}
                    title={station.name}
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

          <div>
            <h2 className="text-2xl font-semibold mb-3">Fire Departments Near Me</h2>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={9}
              >
                {fireDepartments.map((department, index) => (
                  <Marker
                    key={index}
                    position={department.position}
                    title={department.name}
                    label={{
                      text: "F",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold"
                    }}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Local Hospitals Near Me</h2>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={9}
              >
                {hospitals.map((hospital, index) => (
                  <Marker
                    key={index}
                    position={hospital.position}
                    title={hospital.name}
                    label={{
                      text: "H",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold"
                    }}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
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
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
      </Link>
    </div>
  );
};

export default GetHelp;