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
    url: "/home",
    slug: "home",
    iconSrc: "/images/home.svg",
  },
  {
    title: "Member Management",
    url: "/home/members",
    slug: "members",
    iconSrc: "/images/members.svg",
  },
  {
    title: "Events and Services",
    url: "/home/events",
    slug: "events",
    iconSrc: "/images/events.svg",
  },
  {
    title: "Report and Analytics",
    url: "/home/reports",
    slug: "reports",
    iconSrc: "/images/reports.svg",
  },
  {
    title: "Settings",
    url: "/home/settings",
    slug: "settings",
    iconSrc: "/images/settings.svg",
  },
];

export const branches = [
  { name: "Taifa" },
  { name: "Madina" },
  { name: "Dome" },
  { name: "Kwabenya" },
  { name: "Ashongman" },
];

export const roles = [
  { value: "branch-admin", name: "Branch admin" },
  { value: "member", name: "Member" },
  { value: "diocese-admin", name: "Diocese admin" },
  { value: "super-admin", name: "Super admin" },
];
