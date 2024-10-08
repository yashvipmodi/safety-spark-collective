import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const events = [
  { date: new Date(2024, 2, 15), title: "Gun Safety Workshop", location: "Newnan Community Center" },
  { date: new Date(2024, 3, 5), title: "Firearms Education Seminar", location: "LaGrange Police Department" },
  { date: new Date(2024, 3, 20), title: "Community Gun Awareness Day", location: "Griffin City Park" },
  { date: new Date(2024, 4, 10), title: "Youth Firearm Safety Course", location: "Peachtree City Recreation Center" },
  { date: new Date(2024, 5, 1), title: "Gun Violence Prevention Forum", location: "Carrollton Civic Center" },
  { date: new Date(2024, 5, 15), title: "Responsible Gun Ownership Lecture", location: "Fayetteville Public Library" },
];

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const selectedDateEvents = events.filter(
    event => event.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border shadow"
      />
      <Card className="flex-grow">
        <CardHeader>
          <CardTitle>Events on {selectedDate.toDateString()}</CardTitle>
        </CardHeader>
        <CardContent>
          {selectedDateEvents.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
              {selectedDateEvents.map((event, index) => (
                <li key={index}>
                  <strong>{event.title}</strong> - {event.location}
                </li>
              ))}
            </ul>
          ) : (
            <p>No events scheduled for this date.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCalendar;