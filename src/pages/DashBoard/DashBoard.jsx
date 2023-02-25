import "./DashBoard";

import styles from "./DashBoard.module.css";

import { SideNav } from "../../components/SideNav/SideNav";

import { SideNavBarList } from "../../data/SideNavBarList";
import { Header } from "../../components/Header/Header";
import { BillingForm } from "../../components/BillingForm/BillingForm";

export const DashBoard = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.portalHeader}>
        <Header />
      </div>

      <div className={styles.profilePageBody}>
        <div className={styles.portalSideNav}>
          <SideNav navBarList={SideNavBarList} />
        </div>
        <div className={styles.sideScroll}>
          <div className={styles.userSearchContainer}>
            <BillingForm />
          </div>
          <div className={styles.userDetailFormContainer}></div>
        </div>
      </div>
    </div>
  );
};

<div className="DashBoardContainer">
  <div className="portalHeader">
    <Header />
  </div>

  <div className="profilePageBody">
    <div className="portalSideNav">
      <SideNav navBarList={SideNavBarList} />
    </div>
    <div className="sideScroll">
      <div className="userSearchContainer">
        <BillingForm />
      </div>
      <div className="userDetailFormContainer"></div>
    </div>
  </div>
</div>;
