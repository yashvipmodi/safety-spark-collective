import Index from "./pages/Index";
import Legislation from "./pages/Legislation";
import SafetyMeasures from "./pages/SafetyMeasures";
import LocalEvents from "./pages/LocalEvents";
import FactsAndStats from "./pages/FactsAndStats";
import Advocacy from "./pages/Advocacy";
import GetHelp from "./pages/GetHelp";
import AuthPage from "./components/auth/AuthPage";

export const navItems = [
  {
    to: "/",
    page: <Index />,
  },
  {
    to: "/legislation",
    page: <Legislation />,
  },
  {
    to: "/safety-measures",
    page: <SafetyMeasures />,
  },
  {
    to: "/local-events",
    page: <LocalEvents />,
  },
  {
    to: "/facts-and-stats",
    page: <FactsAndStats />,
  },
  {
    to: "/advocacy",
    page: <Advocacy />,
  },
  {
    to: "/auth",
    page: <AuthPage />,
  },
  {
    to: "/help",
    page: <GetHelp />,
  },
];