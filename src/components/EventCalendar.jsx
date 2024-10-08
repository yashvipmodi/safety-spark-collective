import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const events = [
  { date: new Date(2024, 2, 15), title: "Firearms Safety Course", location: "LaGrange Police Department" },
  { date: new Date(2024, 3, 5), title: "Gun Violence Prevention Town Hall", location: "LaGrange City Hall" },
  { date: new Date(2024, 3, 20), title: "2nd Amendment Rights Seminar", location: "Troup County Civic Center, LaGrange" },
  { date: new Date(2024, 4, 10), title: "Youth Firearm Safety Program", location: "West Point Lake Visitor Center" },
  { date: new Date(2024, 5, 1), title: "Mental Health and Gun Safety Workshop", location: "LaGrange College" },
  { date: new Date(2024, 5, 15), title: "Responsible Gun Ownership Expo", location: "Callaway Conference Center, LaGrange" },
  { date: new Date(2024, 6, 8), title: "Women's Self-Defense and Firearm Training", location: "LaGrange-Troup County Chamber of Commerce" },
  { date: new Date(2024, 7, 22), title: "Gun Laws and Legislation Forum", location: "West Georgia Technical College, LaGrange Campus" },
  { date: new Date(2024, 8, 5), title: "Community Gun Buyback Program", location: "Troup County Sheriff's Office" },
  { date: new Date(2024, 9, 18), title: "Hunters' Safety and Conservation Workshop", location: "West Point Wildlife Management Area" },
  { date: new Date(2024, 10, 7), title: "Veterans' Gun Safety Seminar", location: "LaGrange Veterans Museum" },
  { date: new Date(2024, 11, 1), title: "Holiday Season Firearm Safety Awareness", location: "LaGrange Memorial Library" },
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
            <p>No events scheduled for this date. Check other dates for more events related to gun safety and awareness in Georgia's 3rd Congressional District.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCalendar;