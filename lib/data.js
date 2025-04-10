import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

export const attendanceSummary = [
  {
    title: "Sunday Total",
    description: "Total congregation number",
    value: "5242332",
  },
  { title: "Sunday Adult", description: "Adult only", value: "35422" },
  { title: "Children", description: "Children only", value: "17033" },
  { title: "First and Best", description: "", value: "343" },
  { title: "New Converts", description: "Newly baptized", value: "566" },
  { title: "First Timers", description: "First timer", value: "634" },
  { title: "Mid Week", description: "Mid week service number", value: "2117" },
];

export const menuItems = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Member Management",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Events and Services",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Report and Analytics",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
