import { FaRegUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCalendarStats, TbSettings } from "react-icons/tb";
import { BiBell } from "react-icons/bi";

export const SideNavBarList = [
  {
    id: 1,
    linkName: "Dash Board",
    path: "/Dash Board",
    icon: <RxDashboard />,
  },
  {
    id: 2,
    linkName: "Profile",
    path: "/Profile",
    icon: <FaRegUser />,
  },
  {
    id: 3,
    linkName: "Appointments",
    path: "",
    icon: <TbCalendarStats />,
  },
  {
    id: 4,
    linkName: "Notification",
    path: "",
    icon: <BiBell />,
  },
  {
    id: 5,
    linkName: "Settings",
    path: "",
    icon: <TbSettings />,
  },
];
