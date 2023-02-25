import { SideNav } from "../../components/SideNav/SideNav";
import { SideNavBarList } from "../../data/SideNavBarList";
import { Header } from "../../components/Header/Header";

export const DashBoard = () => {
  return (
    <div className="DashBoardContainer">
      <Header />
      <SideNav navBarList={SideNavBarList} />
    </div>
  );
};
