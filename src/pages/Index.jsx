import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, BookOpen, PhoneCall, Shield, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-black mb-4">SafeShot</h1>
        <p className="text-2xl text-black">Promoting Safety and Prevention</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { title: "Facts & Statistics", icon: AlertCircle, description: "Learn about the impact of gun violence and the importance of gun safety measures.", link: "/facts-and-stats" },
          { title: "Safety Measures", icon: Shield, description: "Discover practical steps to enhance personal and community safety.", link: "/safety-measures" },
          { title: "Educational Resources", icon: BookOpen, description: "Access materials to educate yourself and others about responsible gun ownership and safety.", link: "/educational-resources" },
          { title: "Get Help", icon: PhoneCall, description: "Find support services and hotlines for those affected by gun violence.", link: "/get-help" },
          { title: "Local Events", icon: Calendar, description: "Discover upcoming gun safety and awareness events in your area.", link: "/local-events" },
          { title: "Advocacy & Legislation", icon: Users, description: "Connect with others, get involved in gun safety advocacy, and stay informed about current gun control legislation.", link: "/advocacy-and-legislation" },
        ].map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-black">
                <item.icon className="mr-2 h-6 w-6" />
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">{item.description}</CardDescription>
              <Link to={item.link}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;