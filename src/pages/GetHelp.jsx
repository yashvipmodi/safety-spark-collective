import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const GetHelp = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    if (!user.isLoggedIn) {
      toast.error("Please login to access help resources");
      navigate('/auth');
    }
  }, [navigate, user.isLoggedIn]);

  if (!user.isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Local Help Resources for {user.zipcode}</h1>
      <p className="mb-4">Find support services, hotlines, and local resources for those affected by gun violence in your area.</p>
      
      <div className="space-y-4 mb-6">
        <h2 className="text-2xl font-semibold">Support Services and Hotlines</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>National Suicide Prevention Lifeline:</strong> <a href="tel:1-800-273-8255" className="text-blue-600 hover:underline">1-800-273-8255</a></li>
          <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
          <li><strong>National Domestic Violence Hotline:</strong> <a href="tel:1-800-799-7233" className="text-blue-600 hover:underline">1-800-799-7233</a></li>
          <li><strong>Veterans Crisis Line:</strong> <a href="tel:1-800-273-8255" className="text-blue-600 hover:underline">1-800-273-8255 (Press 1)</a></li>
        </ul>
      </div>

      <div className="space-y-4 mb-6">
        <h2 className="text-2xl font-semibold">Local Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a 
            href={`https://www.google.com/maps/search/police+stations+near+${user.zipcode}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Police Stations</h3>
            <p className="text-sm text-gray-600">Find nearby police stations</p>
          </a>
          
          <a 
            href={`https://www.google.com/maps/search/hospitals+near+${user.zipcode}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Hospitals</h3>
            <p className="text-sm text-gray-600">Find nearby hospitals</p>
          </a>
          
          <a 
            href={`https://www.google.com/maps/search/mental+health+services+near+${user.zipcode}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold mb-2">Mental Health Services</h3>
            <p className="text-sm text-gray-600">Find nearby mental health resources</p>
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
        </Link>
        <Button 
          onClick={() => {
            localStorage.removeItem('user');
            toast.success("Successfully logged out");
            navigate('/auth');
          }}
          variant="outline"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default GetHelp;