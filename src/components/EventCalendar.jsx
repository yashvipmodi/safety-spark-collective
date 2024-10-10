import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const events = [
  { date: new Date(2024, 9, 5), title: "Firearm Safety Workshop", location: "Community Center" },
  { date: new Date(2024, 9, 12), title: "Gun Violence Prevention Seminar", location: "Local Library" },
  { date: new Date(2024, 9, 15), title: "Youth Gun Safety Education Program", location: "High School Auditorium" },
  { date: new Date(2024, 9, 18), title: "Mental Health and Gun Ownership Forum", location: "City Hall" },
  { date: new Date(2024, 9, 22), title: "Women's Self-Defense and Firearm Training", location: "Local Gym" },
  { date: new Date(2024, 9, 26), title: "Gun Laws and Legislation Update", location: "Courthouse" },
  { date: new Date(2024, 9, 30), title: "Halloween Gun Safety for Parents", location: "Community Park" },
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
            <p>No events scheduled for this date. Check other dates for more events related to gun safety and awareness near you.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCalendar;