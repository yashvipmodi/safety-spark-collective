import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import EventCalendar from '../components/EventCalendar';

const LocalEvents = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Local Gun Safety and Awareness Events</h1>
      <p className="mb-6">Explore upcoming events related to gun safety and awareness in Georgia's 3rd Congressional District.</p>
      
      <EventCalendar />
      
      <div className="mt-8">
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default LocalEvents;