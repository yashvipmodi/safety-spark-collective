import { HomeIcon, AlertCircle, Shield, BookOpen, PhoneCall } from "lucide-react";
import Index from "./pages/Index.jsx";
import FactsAndStats from "./pages/FactsAndStats.jsx";
import SafetyMeasures from "./pages/SafetyMeasures.jsx";
import EducationalResources from "./pages/EducationalResources.jsx";
import GetHelp from "./pages/GetHelp.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Facts & Statistics",
    to: "/facts-and-stats",
    icon: <AlertCircle className="h-4 w-4" />,
    page: <FactsAndStats />,
  },
  {
    title: "Safety Measures",
    to: "/safety-measures",
    icon: <Shield className="h-4 w-4" />,
    page: <SafetyMeasures />,
  },
  {
    title: "Educational Resources",
    to: "/educational-resources",
    icon: <BookOpen className="h-4 w-4" />,
    page: <EducationalResources />,
  },
  {
    title: "Get Help",
    to: "/get-help",
    icon: <PhoneCall className="h-4 w-4" />,
    page: <GetHelp />,
  },
];