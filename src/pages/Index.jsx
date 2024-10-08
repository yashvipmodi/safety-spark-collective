import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, BookOpen, PhoneCall, Shield, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Gun Control Awareness</h1>
        <p className="text-xl text-gray-600">Promoting Safety and Prevention</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2" />
              Facts & Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn about the impact of gun violence and the importance of gun control measures.</p>
            <Link to="/facts-and-stats">
              <Button className="mt-4">Explore Facts</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2" />
              Safety Measures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover practical steps to enhance personal and community safety.</p>
            <Link to="/safety-measures">
              <Button className="mt-4">View Safety Tips</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2" />
              Educational Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Access materials to educate yourself and others about responsible gun ownership and control.</p>
            <Link to="/educational-resources">
              <Button className="mt-4">Browse Resources</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PhoneCall className="mr-2" />
              Get Help
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Find support services and hotlines for those affected by gun violence.</p>
            <Link to="/get-help">
              <Button className="mt-4">Find Support</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" />
              Local Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover upcoming gun safety and awareness events in your area.</p>
            <Link to="/local-events">
              <Button className="mt-4">View Events</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <footer className="text-center mt-12 text-gray-600">
        <p>© 2023 Gun Control Awareness. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;