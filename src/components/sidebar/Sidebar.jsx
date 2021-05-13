import {
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  List,
  Person,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

import SidebarOption from "./SidebarOption";

import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarOption active text="Home" Icon={Home} />
      <SidebarOption text="Explore" Icon={Search} />
      <SidebarOption text="Notification" Icon={NotificationsNone} />
      <SidebarOption text="Messages" Icon={MailOutline} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorder} />
      <SidebarOption text="Lists" Icon={List} />
      <SidebarOption text="Profile" Icon={Person} />

      <Button varient="contained" className="sidebar_assert" fullWidth>
        Assert
      </Button>
    </div>
  );
};

export default Sidebar;
